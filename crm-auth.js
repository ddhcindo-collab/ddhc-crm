/* ═══════════════════════════════════════════════════════════════════════════
   DDHC SLESpro CRM — 會員登入系統（Member Login System）
   ---------------------------------------------------------------------------
   本檔負責：
     1. 會員資料模型（DB.members）——取代舊 DB.staff（員工）
        角色只有兩種：ADMIN（管理員）／ MEMBER（普通會員）
        帳戶以「email」做唯一識別碼（登入用 email + 密碼）
     2. 登入 / 登出 / 記住我
     3. 會員自行註冊（email + 密碼 + 完整會員檔案）→ 自動批准、即刻可用
     4. Admin 開帳（密碼可留空＝會員首次登入自行設定）
     5. 會員管理（新增／停用／啟用／改角色／重設密碼／改聯絡資料）
     6. 擁有權：MEMBER 只可新增及修改「自己經手」的記錄（helpers / employers）

   依賴：crm-data.js 的 I18N；主 HTML 的 DB / SESSION / markChange / pushUndo 等。
   本檔必須與主 HTML 放在同一個資料夾。
   ═══════════════════════════════════════════════════════════════════════════ */

/* ───────── 會員角色 ───────── */
const ROLE_ADMIN = 'ADMIN';
const ROLE_MEMBER = 'MEMBER';

/* ───────── 工具 ───────── */
function memId(){
  let max = 0;
  (DB.members||[]).forEach(m=>{ const x=/^M(\d{4,})$/.exec(m.id||''); if(x) max=Math.max(max, parseInt(x[1],10)); });
  return 'M' + String(max+1).padStart(4,'0');
}
function memByEmail(email){
  const e = String(email||'').trim().toLowerCase();
  return (DB.members||[]).find(m=>String(m.email||'').toLowerCase()===e) || null;
}
function memById(id){ return (DB.members||[]).find(m=>m.id===id) || null; }
function memDisplay(m){
  if(!m) return '—';
  return m.name || m.email || '—';
}
/* 有效會員（未停用） */
function activeMembers(){ return (DB.members||[]).filter(m=>m.status!=='disabled'); }
/* 是否有任何 Admin */
function hasAdmin(){ return (DB.members||[]).some(m=>m.role===ROLE_ADMIN && m.status!=='disabled'); }

/* ───────── 擁有權（MEMBER 只可改自己經手的記錄） ───────── */
/* 記錄建立時寫入 ownerEmail；Admin 全部得，MEMBER 只可改 ownerEmail === 自己 */
function canEditRecord(rec){
  if(isAdmin()) return true;
  const me = (SESSION.email||'').toLowerCase();
  const own = String(rec && rec.ownerEmail || '').toLowerCase();
  return !!own && own === me;
}
function canDeleteRecord(rec){ return canEditRecord(rec); }
/* 新建記錄時的擁有者 */
function newOwnerEmail(){ return isAdmin() ? '' : (SESSION.email||''); }

/* ───────── 登入系統 ───────── */
const AUTH_KEY = 'wb_crm_member_email';   /* localStorage：記住我 */
const AUTH_SESS = 'wb_crm_member_sess';   /* sessionStorage：本次工作階段 */

/* 兼容舊登入殘留 */
function clearLegacyAuth(){
  try{ localStorage.removeItem('wb_crm_user'); sessionStorage.removeItem('wb_crm_user'); }catch(e){}
}

function checkMemberLogin(){
  clearLegacyAuth();
  const remembered = localStorage.getItem(AUTH_KEY);
  const sess = sessionStorage.getItem(AUTH_SESS);
  const email = sess || remembered;
  if(!email) return false;
  const rec = memByEmail(email);
  if(!rec || rec.status==='disabled'){
    /* 已停用／已刪除 → 清掉記錄 */
    try{ localStorage.removeItem(AUTH_KEY); sessionStorage.removeItem(AUTH_SESS); }catch(e){}
    return false;
  }
  SESSION.user = rec.name || rec.email;
  SESSION.email = rec.email;
  SESSION.role = rec.role || ROLE_MEMBER;
  SESSION.memberId = rec.id;
  return true;
}

function rememberMember(email, remember){
  try{
    if(remember) localStorage.setItem(AUTH_KEY, email);
    else localStorage.removeItem(AUTH_KEY);
    sessionStorage.setItem(AUTH_SESS, email);
  }catch(e){}
}

function logoutMember(){
  try{ localStorage.removeItem(AUTH_KEY); sessionStorage.removeItem(AUTH_SESS); }catch(e){}
  SESSION.user=''; SESSION.email=''; SESSION.role=''; SESSION.memberId='';
  location.reload();
}

/* ───────── 登入畫面 ───────── */
function showMemberLogin(msg){
  const g = document.getElementById('loginGate');
  if(!g) return;
  document.getElementById('appWrap').style.display = 'none';
  g.classList.remove('hidden');
  document.getElementById('lgCompany').textContent = (DB.meta && DB.meta.companyName) || 'Ka Shing Manpower Agency';
  const err = document.getElementById('lgErr');
  if(err) err.textContent = msg || '';
  const tabs = document.getElementById('lgTabs');
  if(tabs) tabs.classList.remove('hidden');
  const loginBox = document.getElementById('lgLoginBox');
  const regBox = document.getElementById('lgRegBox');
  if(loginBox) loginBox.classList.remove('hidden');
  if(regBox) regBox.classList.add('hidden');
  bindMemberLoginHandlers();
  refreshIcons();
  setTimeout(()=>{ const e=document.getElementById('lgEmail'); if(e) e.focus(); }, 80);
}

/* 切換 登入 / 註冊 兩個分頁 */
function switchAuthTab(tab){
  const loginBox = document.getElementById('lgLoginBox');
  const regBox = document.getElementById('lgRegBox');
  const err = document.getElementById('lgErr');
  if(err) err.textContent = '';
  const btnL = document.getElementById('lgTabLogin');
  const btnR = document.getElementById('lgTabReg');
  if(tab==='reg'){
    if(loginBox) loginBox.classList.add('hidden');
    if(regBox) regBox.classList.remove('hidden');
    if(btnL) btnL.className='flex-1 btn btn-sec !min-h-[38px] !py-1.5 text-xs';
    if(btnR) btnR.className='flex-1 btn btn-pri !min-h-[38px] !py-1.5 text-xs';
  }else{
    if(loginBox) loginBox.classList.remove('hidden');
    if(regBox) regBox.classList.add('hidden');
    if(btnL) btnL.className='flex-1 btn btn-pri !min-h-[38px] !py-1.5 text-xs';
    if(btnR) btnR.className='flex-1 btn btn-sec !min-h-[38px] !py-1.5 text-xs';
  }
  refreshIcons();
}

function bindMemberLoginHandlers(){
  const btn = document.getElementById('lgBtn');
  if(btn) btn.onclick = doMemberLogin;
  const email = document.getElementById('lgEmail');
  if(email) email.onkeydown = e=>{ if(e.key==='Enter') doMemberLogin(); };
  const pin = document.getElementById('lgPin');
  if(pin) pin.onkeydown = e=>{ if(e.key==='Enter') doMemberLogin(); };
  const tabL = document.getElementById('lgTabLogin');
  if(tabL) tabL.onclick = ()=>switchAuthTab('login');
  const tabR = document.getElementById('lgTabReg');
  if(tabR) tabR.onclick = ()=>switchAuthTab('reg');
  const regBtn = document.getElementById('lgRegBtn');
  if(regBtn) regBtn.onclick = doMemberRegister;
  const setBtn = document.getElementById('lgSetPwdBtn');
  if(setBtn) setBtn.onclick = doSetFirstPassword;
}

/* 登入 */
function doMemberLogin(){
  const email = (document.getElementById('lgEmail')||{}).value || '';
  const pwd = (document.getElementById('lgPin')||{}).value || '';
  const errEl = document.getElementById('lgErr');
  const setErr = m=>{ if(errEl) errEl.textContent = m; };
  const e = String(email).trim();
  if(!e){ setErr('⚠ ' + (CUR_LANG==='zhHant'?'請輸入電郵':'Please enter your email')); return; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'電郵格式不正確':'Invalid email format')); return;
  }
  const rec = memByEmail(e);
  if(!rec){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'未有此帳戶，請先註冊':'No such account — please register first')); return;
  }
  if(rec.status==='disabled'){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'此帳戶已被停用，請聯絡管理員':'This account is disabled. Contact the administrator.')); return;
  }
  /* Admin 開帳時密碼留空 → 首次登入要求自行設定密碼 */
  if(!rec.pwd && !rec.pwdHash){
    openSetPasswordModal(rec);
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'請先設定密碼':'Please set your password first'));
    return;
  }
  if(!pwdVerify(rec, pwd)){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'密碼不正確':'Incorrect password')); return;
  }
  finishLogin(rec, document.getElementById('lgRemember').checked);
}

function finishLogin(rec, remember){
  SESSION.user = rec.name || rec.email;
  SESSION.email = rec.email;
  SESSION.role = rec.role || ROLE_MEMBER;
  SESSION.memberId = rec.id;
  rememberMember(rec.email, !!remember);
  rec.lastLogin = nowStamp();
  markChange();
  showApp();
  const bn = document.getElementById('brandName');
  if(bn) bn.textContent = (DB.meta && DB.meta.companyName) || 'Ka Shing Manpower';
  const bs = document.getElementById('btnMyEmp');
  if(bs) bs.title = SESSION.email || '';
  switchMod(CUR_MOD);
  checkImportHash();
}

/* ───────── 會員自行註冊（自動批准、即刻登入） ───────── */
function doMemberRegister(){
  const get = id => { const e=document.getElementById(id); return e ? String(e.value||'').trim() : ''; };
  const errEl = document.getElementById('lgRegErr') || document.getElementById('lgErr');
  const setErr = m=>{ if(errEl) errEl.textContent = m; };
  const email = get('rgEmail');
  const pwd = get('rgPwd');
  const pwd2 = get('rgPwd2');
  const name = get('rgName');
  const phone = get('rgPhone');
  const dept = get('rgDept');
  const emer = get('rgEmergency');
  const emerPhone = get('rgEmergencyPhone');

  if(!email){ setErr('⚠ ' + (CUR_LANG==='zhHant'?'請輸入電郵':'Please enter your email')); return; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'電郵格式不正確':'Invalid email format')); return; }
  if(memByEmail(email)){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'此電郵已註冊，請直接登入':'This email is already registered — please sign in')); return; }
  if(!name){ setErr('⚠ ' + (CUR_LANG==='zhHant'?'請輸入姓名':'Please enter your name')); return; }
  if(!pwd || pwd.length<4){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'密碼最少 4 個字元':'Password must be at least 4 characters')); return; }
  if(pwd!==pwd2){
    setErr('⚠ ' + (CUR_LANG==='zhHant'?'兩次密碼不一致':'Passwords do not match')); return; }

  const rec = {
    id: memId(),
    email: email.toLowerCase(),
    name: name,
    phone: phone,
    dept: dept,
    emergency: emer,
    emergencyPhone: emerPhone,
    role: ROLE_MEMBER,
    status: 'active',
    createdAt: nowStamp(),
    lastLogin: ''
  };
  pwdSet(rec, pwd);
  pushUndo();
  DB.members = DB.members || [];
  DB.members.push(rec);
  markChange();
  setErr('');
  /* 自動批准 → 即刻登入 */
  finishLogin(rec, true);
  toast((CUR_LANG==='zhHant'?'註冊成功，已登入':'Registration successful — signed in'), 'ok');
}

/* ───────── 首次設定密碼（Admin 開帳時密碼留空） ───────── */
function openSetPasswordModal(rec){
  const body = `
    <div class="space-y-3">
      <p class="text-sm">${CUR_LANG==='zhHant'?'請為你的帳戶設定密碼':'Set a password for your account'}</p>
      <div><label class="text-xs muted">${CUR_LANG==='zhHant'?'新密碼':'New password'}</label>
        <input id="spPwd" type="password" class="inp" autocomplete="new-password"></div>
      <div><label class="text-xs muted">${CUR_LANG==='zhHant'?'確認密碼':'Confirm password'}</label>
        <input id="spPwd2" type="password" class="inp" autocomplete="new-password"></div>
      <p id="spErr" class="text-red-600 text-xs font-bold"></p>
    </div>`;
  /* 同一個處理邏輯：modal 內的 spGo 掣 + modal 本身的確認掣都會用 */
  const doSet = ()=>{
    const p = (document.getElementById('spPwd')||{}).value||'';
    const p2 = (document.getElementById('spPwd2')||{}).value||'';
    const e = document.getElementById('spErr');
    if(!p || p.length<4){ if(e) e.textContent = CUR_LANG==='zhHant'?'密碼最少 4 個字元':'Password must be at least 4 characters'; return false; }
    if(p!==p2){ if(e) e.textContent = CUR_LANG==='zhHant'?'兩次密碼不一致':'Passwords do not match'; return false; }
    pwdSet(rec, p);
    rec.status = rec.status || 'active';
    markChange();
    const em = document.getElementById('lgErr');
    if(em) em.textContent='';
    finishLogin(rec, false);
    return true;
  };
  const m = openModal(CUR_LANG==='zhHant'?'設定密碼':'Set Password', body, doSet);
  /* body 內的 spGo 掣（modal 本身已有確認掣，兩者並存） */
  const go = document.getElementById('spGo');
  if(go) go.onclick = ()=>{ if(doSet()!==false && m && m.close) m.close(); };
  setTimeout(()=>{ const e=document.getElementById('spPwd'); if(e) e.focus(); }, 60);
}

/* 獨立按鈕（會員管理頁重設密碼時用） */
function doSetFirstPassword(){
  const rec = memByEmail((document.getElementById('lgEmail')||{}).value||'');
  if(!rec){ showMemberLogin(CUR_LANG==='zhHant'?'請先輸入電郵':'Please enter your email first'); return; }
  openSetPasswordModal(rec);
}

/* ───────── 會員管理（Admin 專用） ───────── */
/* 列表（含停用、角色、聯絡資料、上次登入） */
function renderMemberListAdmin(){
  const host = document.getElementById('memList');
  if(!host) return;
  const members = DB.members || [];
  if(!members.length){
    host.innerHTML = '<div class="text-sm muted">—</div>';
    return;
  }
  host.innerHTML = members.map(m=>{
    const off = m.status==='disabled';
    return `<div class="flex flex-wrap items-center gap-1.5 rounded-lg border ${off?'border-red-300 dark:border-red-700 opacity-70':'bd'} px-2 py-1.5">
      <input class="inp !py-1.5 !text-sm !w-40 mEmail" data-id="${esc(m.id)}" value="${esc(m.email)}" title="${t('mem.email')}">
      <input class="inp !py-1.5 !text-sm !w-28 mName" data-id="${esc(m.id)}" value="${esc(m.name||'')}" title="${t('mem.name')}">
      <input class="inp !py-1.5 !text-sm !w-28 mPhone" data-id="${esc(m.id)}" value="${esc(m.phone||'')}" title="${t('mem.phone')}">
      <input class="inp !py-1.5 !text-sm !w-24 mDept" data-id="${esc(m.id)}" value="${esc(m.dept||'')}" title="${t('mem.dept')}">
      <input class="inp !py-1.5 !text-sm !w-24 mEmer" data-id="${esc(m.id)}" value="${esc(m.emergency||'')}" title="${t('mem.emergency')}">
      <input class="inp !py-1.5 !text-sm !w-28 mEmerPhone" data-id="${esc(m.id)}" value="${esc(m.emergencyPhone||'')}" title="${t('mem.emergencyPhone')}">
      <select class="inp !py-1.5 !text-sm !w-28 mRole" data-id="${esc(m.id)}">
        <option value="MEMBER" ${m.role!=='ADMIN'?'selected':''}>${t('mem.member')}</option>
        <option value="ADMIN" ${m.role==='ADMIN'?'selected':''}>${t('mem.admin')}</option>
      </select>
      <select class="inp !py-1.5 !text-sm !w-28 mStatus" data-id="${esc(m.id)}">
        <option value="active" ${!off?'selected':''}>${t('mem.active')}</option>
        <option value="disabled" ${off?'selected':''}>${t('mem.disabled')}</option>
      </select>
      <button class="btn btn-sec !min-h-[34px] !py-1 !px-2.5" data-mpwd="${esc(m.id)}" title="${t('mem.resetPwd')}"><i data-lucide="key-round" class="w-4 h-4"></i></button>
      <button class="btn btn-red !min-h-[34px] !py-1 !px-2.5" data-mdel="${esc(m.id)}" title="${t('btn.del')}"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      <div class="w-full text-[11px] muted">${esc(m.id)} · ${off?'<b class="text-red-500">'+t('mem.disabled')+'</b>':t('mem.active')} · ${t('mem.lastLogin')}: ${esc(m.lastLogin||'—')}</div>
    </div>`;
  }).join('');

  const bind = (sel, key, label, validate)=>{
    host.querySelectorAll(sel).forEach(inp=>inp.onchange=()=>{
      const rec = memById(inp.dataset.id);
      if(!rec) return;
      const v = inp.value.trim();
      if(validate && !validate(v, rec)){ inp.value = rec[key]||''; return; }
      if(rec[key]===v) return;
      pushUndo();
      rec[key] = v;
      markChange();
      toast(label+' ✓','ok');
    });
  };
  bind('.mEmail','email',t('mem.saved'), (v,rec)=>{
    if(!v || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){ alert(CUR_LANG==='zhHant'?'電郵格式不正確':'Invalid email format'); return false; }
    if(memByEmail(v) && memByEmail(v).id!==rec.id){ alert(CUR_LANG==='zhHant'?'此電郵已被使用':'This email is already in use'); return false; }
    /* 改咗 email → SESSION 都要同步 */
    if(String(rec.email).toLowerCase()===String(SESSION.email).toLowerCase()){
      SESSION.email = v.toLowerCase();
      rememberMember(v.toLowerCase(), !!localStorage.getItem(AUTH_KEY));
    }
    return true;
  });
  bind('.mName','name',t('mem.saved'));
  bind('.mPhone','phone',t('mem.saved'));
  bind('.mDept','dept',t('mem.saved'));
  bind('.mEmer','emergency',t('mem.saved'));
  bind('.mEmerPhone','emergencyPhone',t('mem.saved'));

  host.querySelectorAll('.mRole').forEach(sel=>sel.onchange=()=>{
    const rec = memById(sel.dataset.id);
    if(!rec) return;
    const v = sel.value;
    if(v===ROLE_ADMIN && !hasAdmin()){
      /* 轉做 Admin 前先確認是否會失去最後一個 Admin */
    }
    if(rec.role===ROLE_ADMIN && v!==ROLE_ADMIN){
      const admins = DB.members.filter(m=>m.role===ROLE_ADMIN && m.status!=='disabled');
      if(admins.length<=1){
        alert(CUR_LANG==='zhHant'?'至少要保留一個 Admin':'At least one Admin is required'); sel.value=rec.role; return;
      }
    }
    pushUndo(); rec.role=v; markChange();
    toast(t('mem.saved')+' ✓','ok');
    if(rec.id===SESSION.memberId) SESSION.role=v;
  });

  host.querySelectorAll('.mStatus').forEach(sel=>sel.onchange=()=>{
    const rec = memById(sel.dataset.id);
    if(!rec) return;
    const v = sel.value;
    if(v==='disabled' && rec.role===ROLE_ADMIN){
      const admins = DB.members.filter(m=>m.role===ROLE_ADMIN && m.status!=='disabled');
      if(admins.length<=1){ alert(CUR_LANG==='zhHant'?'至少要保留一個啟用中的 Admin':'At least one active Admin is required'); sel.value=rec.status||'active'; return; }
    }
    pushUndo(); rec.status=v; markChange();
    toast(t('mem.saved')+' ✓','ok');
    if(rec.id===SESSION.memberId && v==='disabled'){ alert(CUR_LANG==='zhHant'?'不能停用自己正在使用的帳戶':'You cannot disable your own account'); sel.value=rec.status; return; }
  });

  host.querySelectorAll('[data-mpwd]').forEach(b=>b.onclick=()=>{
    const rec = memById(b.dataset.mpwd);
    if(!rec) return;
    const v = prompt(CUR_LANG==='zhHant'?'請輸入新密碼（最少 4 個字元）':'Enter new password (min 4 chars)');
    if(v===null) return;
    if(!v || v.length<4){ alert(CUR_LANG==='zhHant'?'密碼最少 4 個字元':'Password must be at least 4 characters'); return; }
    pushUndo(); pwdSet(rec, v); markChange(); toast(t('mem.resetPwd')+' ✓','ok');
  });

  host.querySelectorAll('[data-mdel]').forEach(b=>b.onclick=()=>{
    const rec = memById(b.dataset.mdel);
    if(!rec) return;
    if(rec.id===SESSION.memberId){ alert(CUR_LANG==='zhHant'?'不可以刪除自己正在使用的帳戶':'You cannot delete your own account'); return; }
    if(rec.role===ROLE_ADMIN && DB.members.filter(m=>m.role===ROLE_ADMIN && m.status!=='disabled').length<=1){
      alert(CUR_LANG==='zhHant'?'至少要保留一個 Admin':'At least one Admin is required'); return;
    }
    openConfirm(t('btn.del'), '<p class="text-sm">'+t('form.delConfirm')+' — <b>'+esc(rec.email)+'</b></p>', ()=>{
      pushUndo();
      DB.members = DB.members.filter(x=>x.id!==rec.id);
      markChange(); renderMemberListAdmin();
    });
  });

  refreshIcons();
}

/* 新增會員（Admin）——密碼可留空＝會員首次登入自行設定 */
function addMemberByAdmin(){
  const get = id => { const e=document.getElementById(id); return e ? String(e.value||'').trim() : ''; };
  const email = get('nmEmail');
  const name = get('nmName');
  const pwd = get('nmPwd');
  const role = get('nmRole') || ROLE_MEMBER;
  const phone = get('nmPhone'), dept = get('nmDept'), emer = get('nmEmer'), emerPhone = get('nmEmerPhone');
  if(!email){ alert(CUR_LANG==='zhHant'?'請輸入電郵':'Please enter email'); return; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ alert(CUR_LANG==='zhHant'?'電郵格式不正確':'Invalid email format'); return; }
  if(memByEmail(email)){ alert(CUR_LANG==='zhHant'?'此電郵已存在':'This email already exists'); return; }
  if(!name){ alert(CUR_LANG==='zhHant'?'請輸入姓名':'Please enter name'); return; }
  if(pwd && pwd.length<4){ alert(CUR_LANG==='zhHant'?'密碼最少 4 個字元':'Password must be at least 4 characters'); return; }
  pushUndo();
  DB.members = DB.members || [];
  const rec = {
    id: memId(), email: email.toLowerCase(), name: name, phone: phone, dept: dept,
    emergency: emer, emergencyPhone: emerPhone,
    role: role, status: 'active', createdAt: nowStamp(), lastLogin: ''
  };
  if(pwd) pwdSet(rec, pwd);   /* 密碼留空 → 會員首次登入自行設定 */
  DB.members.push(rec);
  markChange();
  toast(t('mem.add')+' ✓','ok');
  renderSettings();
}

/* ───────── 供主 HTML 呼叫的相容層 ───────── */
/* 舊代碼用 DB.staff 產生下拉（empSales / emp.sales）→ 改用會員 */
function memberSalesOptions(current){
  return activeMembers().map(m=>`<option value="${esc(m.email)}" ${current===m.email?'selected':''}>${esc(memDisplay(m))}</option>`).join('');
}
/* 舊 stdSales 用名比對 → 改用 email 比對 */
function stdSales(v){
  v = String(v||'').trim();
  if(!v) return '';
  const rec = memByEmail(v);
  if(rec) return rec.email;
  const byName = (DB.members||[]).find(m=>String(m.name||'').toLowerCase()===v.toLowerCase());
  return byName ? byName.email : v;
}

/* ═══════════════════════════════════════════════════════════════════════════
   密碼雜湊（純前端、離線可用）
   ---------------------------------------------------------------------------
   本機方案冇後端做 password hashing，所以喺前端用 SHA-256 + per-member salt。
   實作係純 JS 同步版本（crypto.subtle 只喺 https / localhost 可用，file:// 唔保證），
   所以做成同步 API，避免改動所有登入流程的非同步性。

   儲存格式：pwdHash = sha256 多輪(salt + ':' + password)，pwdSalt = 隨機 salt
   明文密碼永遠唔會寫入 DB（因此匯出 JSON / 備份檔唔會洩漏密碼）。
   ═══════════════════════════════════════════════════════════════════════════ */
const PWD_ROUNDS = 800;

/* SHA-256（同步、純 JS） */
function sha256Hex(msg){
  const K = [
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const rr = (x,n)=>(x>>>n)|(x<<(32-n));
  const utf8 = unescape(encodeURIComponent(msg));
  const len = utf8.length;
  const withPad = new Uint8Array((((len+8)>>6)+1)*64);
  for(let i=0;i<len;i++) withPad[i]=utf8.charCodeAt(i);
  withPad[len]=0x80;
  const dv = new DataView(withPad.buffer);
  dv.setUint32(withPad.length-4, (len*8)>>>0, false);
  dv.setUint32(withPad.length-8, Math.floor(len/536870912), false);
  const H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const w = new Int32Array(64);
  for(let off=0; off<withPad.length; off+=64){
    for(let i=0;i<16;i++) w[i]=dv.getInt32(off+i*4,false);
    for(let i=16;i<64;i++){
      const s0=rr(w[i-15],7)^rr(w[i-15],18)^(w[i-15]>>>3);
      const s1=rr(w[i-2],17)^rr(w[i-2],19)^(w[i-2]>>>10);
      w[i]=(w[i-16]+s0+w[i-7]+s1)|0;
    }
    let [a,b,c,d,e,f,g,h]=H;
    for(let i=0;i<64;i++){
      const S1=rr(e,6)^rr(e,11)^rr(e,25);
      const ch=(e&f)^((~e)&g);
      const t1=(h+S1+ch+K[i]+w[i])|0;
      const S0=rr(a,2)^rr(a,13)^rr(a,22);
      const mj=(a&b)^(a&c)^(b&c);
      const t2=(S0+mj)|0;
      h=g; g=f; f=e; e=(d+t1)|0; d=c; c=b; b=a; a=(t1+t2)|0;
    }
    H[0]=(H[0]+a)|0; H[1]=(H[1]+b)|0; H[2]=(H[2]+c)|0; H[3]=(H[3]+d)|0;
    H[4]=(H[4]+e)|0; H[5]=(H[5]+f)|0; H[6]=(H[6]+g)|0; H[7]=(H[7]+h)|0;
  }
  return H.map(x=>(x>>>0).toString(16).padStart(8,'0')).join('');
}

/* 隨機 salt */
function pwdSalt(){
  const a=new Uint8Array(16);
  (window.crypto||{}).getRandomValues ? window.crypto.getRandomValues(a) : a.forEach((_,i)=>a[i]=Math.floor(Math.random()*256));
  return Array.from(a).map(x=>x.toString(16).padStart(2,'0')).join('');
}

/* 產生雜湊（多輪 slowing） */
function hashPassword(pwd, salt){
  let h = sha256Hex(String(salt)+':'+String(pwd));
  for(let i=1;i<PWD_ROUNDS;i++) h = sha256Hex(h+':'+String(pwd));
  return h;
}

/* 產生新 salt + hash */
function pwdMake(pwd){
  const salt = pwdSalt();
  return { pwdSalt: salt, pwdHash: hashPassword(pwd, salt) };
}

/* 驗證 */
function pwdVerify(rec, pwd){
  if(!rec) return false;
  if(rec.pwdHash && rec.pwdSalt){
    return hashPassword(pwd, rec.pwdSalt) === rec.pwdHash;
  }
  /* 相容舊明文 */
  return pwd !== '' && String(pwd) === String(rec.pwd||'');
}

/* 設定新密碼（會清走明文欄位） */
function pwdSet(rec, pwd){
  const h = pwdMake(pwd);
  rec.pwdHash = h.pwdHash;
  rec.pwdSalt = h.pwdSalt;
  try{ delete rec.pwd; }catch(e){ rec.pwd=''; }
}
