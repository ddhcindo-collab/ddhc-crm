/* ═══════════════════════════════════════════════════════════════════
   DDHC SLESpro CRM V2.5 — 靜態資料檔（crm-data.js）
   ───────────────────────────────────────────────────────────────────
   本檔只放「資料」：I18N 字典、選項／對照表、問卷題目、知識庫、CSV 欄位定義。
   程式邏輯全部留在 ddhc salespro crm v2.5.html。

   為咗慳 token（AI 每次讀檔都要計費），把大塊「只讀不改」的資料抽咗出嚟：
   改邏輯時淨係需要睇 .html；改字典／表格／知識庫先至需要睇本檔。

   ⚠ 本檔必須與 ddhc salespro crm v2.5.html 放在同一個資料夾（相對路徑載入）。
   ⚠ 用 Chrome 直接開 file:// 檔案，或部署上網，兩種都正常。
   ═══════════════════════════════════════════════════════════════════ */

/* ── I18N 字典（繁中＋英） ── */
const I18N = {

zhHant:{

  brandSub:"", nav:{home:"主頁",data:"數據表管理",match:"智能配對引擎",follow:"每日跟進・記事板",import:"備份・CSV 匯入/匯出",settings:"系統設定・會員",survey:"智能問卷・資料轉換"},

  btn:{export:"匯出 JSON",restore:"上載還原",refresh:"Refresh",add:"新增",edit:"編輯",del:"刪除",save:"儲存",cancel:"取消",confirm:"確認",close:"關閉",search:"搜尋…",print:"列印履歷",view:"查看履歷",gen:"生成履歷",send:"發送",wa:"WhatsApp"},

  tab:{ph:"菲傭庫",id:"印傭庫",emp:"僱主庫",bl:"黑名單"},

  home:{title:"主頁",lead:"常用問卷快速入口",employer:"僱主招聘需求問卷",employerSub:"收集僱主的家庭狀況、聘請要求、預算與期望",candidate:"候選人問卷",candidateSub:"外傭／候選人填寫個人資料、經驗、技能與意向",open:"開啟問卷",newTab:"兩個問卷都會另開新分頁；填寫問卷不會改動 CRM 資料。"},

  st:{statusCol:"狀態",lastExport:"上次匯出",never:"從未",dirty:"有未匯出的變更",clean:"資料已同步至備份檔",rows:"資料筆數",fh:"外傭",em:"僱主"},

  fdh:{code:"外傭編號",refNo:"Reference No.",photo:"相片",photoPick:"上載相片",photoCam:"拍攝相片",photoClear:"移除相片",photoHint:"自動壓縮成 330×440 JPEG（約 20KB），載入快、慳空間。",engName:"全名（英文）",localName:"當地姓名",nickname:"暱稱",nationality:"國籍",birth:"生日日期",age:"年齡",zodiac:"星座",czodiac:"生肖",marital:"婚姻狀況",children:"子女數目",education:"教育程度",lang:"語言能力",skills:"技能標籤",expYears:"經驗年數",prevRegion:"前僱主地區",contract:"狀態",warning:"紅色警告",arrival:"到港日期",handover:"Handover 日期",hkid:"HKID 號碼",passport:"護照號碼",contractExpiry:"續約到期日",airport:"機場接機日期",hkidAppt:"預約辦身份證日期",notes:"備註",langEn:"英文",langCt:"廣東話",langPtn:"普通話",phoneHK:"香港號碼",phoneIndo:"印尼號碼",phonePH:"菲律賓號碼",contractDone:"完成合約次數",extCode:"工人編號"},

  emp:{code:"僱主編號",salutation:"稱呼",nickname:"暱稱",phone:"電話",whatsapp:"WhatsApp 號碼",family:"家庭狀況",region:"地區",housing:"居住類型",needs:"需求標籤",budget:"預算 (HKD)",acceptedNat:"可接受國籍",expectDate:"跟進日期",currentFDH:"現任外傭",source:"來源",level:"客戶等級",feeTotal:"中介費總額",paidAmount:"已付金額",outstanding:"爭緊錢",paymentStatus:"付款狀態",    followUp:"跟進事項",notes:"備註"},

  cand:{title:"匯入候選人",imported:"已從問卷匯入候選人",reviewSave:"請核對後按「儲存」",pasteCode:"貼上問卷匯入碼 / Paste candidate import code:",badCode:"匯入碼格式不正確或無法解碼"},
  empImport:{title:"匯入僱主",imported:"已從問卷匯入僱主",reviewSave:"請核對後按「儲存」",pasteCode:"貼上僱主問卷匯入碼 / Paste employer import code:",badCode:"匯入碼格式不正確或無法解碼"},
  rec:{title:"已推薦外傭",waTitle:"本次推薦",waSend:"一鍵帶入 WA",dupTitle:"重複推薦",dupMsg:"此僱主已推薦過 {code}，確定再推薦一次？"},

  dic:{

    JO:"JO（新合約）",CJO:"CJO（完成在港合約）",WORKING:"工作中",COMPLETED:"已完成",TRANSFER:"轉約中",DEPARTED:"已離港",

    FIND_JOB:"搵工中",HAVE_JOB:"有工做",NOT_FINDING:"唔搵工",FOLLOW_UP:"需跟進",

    NEW:"新客",REGULAR:"常客",DIFFICULT:"麻煩客",VIP:"VIP",REFERRAL:"轉介",OUTSTANDING:"爭緊錢",

    FINDING:"搵工人中",PROCESSING:"處理中",HIRING:"聘請中",TERMINATED:"已終止",

    MINOR:"輕微",SERIOUS:"嚴重",

    SINGLE:"未婚",MARRIED:"已婚",DIVORCED:"離婚",WIDOWED:"喪偶",SINGLE_PARENT:"單親",PARTNER:"未婚伴侶",SEPARATED:"分居",

    HIGH_SCHOOL:"中學",COLLEGE:"大專",UNIVERSITY:"大學",VOCATIONAL:"職業訓練",OTHER:"其他",

    GOOD:"良好",FAIR:"一般",NONE:"不懂",

    S_NOHOLIDAY:"不放假",S_NEWBORN:"湊BB",S_TODDLER:"湊小朋友",S_ELDERLY:"照顧老人",S_ILLNESS:"嚴重病患",S_SPECIAL:"特殊小孩",S_DOG:"照顧狗",S_CAT:"照顧貓",S_WASHCAR:"洗車",S_DRIVING:"揸車",S_MALEHELPER:"男家傭",S_MALEEMP:"男僱主",S_NOROOM:"可同房",S_OWNROOM:"要有房",S_SHAREJOB:"共享工作",S_GOODCOOK:"煮餸好",

    PH:"菲律賓",ID:"印尼",OTHER:"其他",

    HK:"香港",NT:"新界",KL:"九龍",TW:"港島",OVERSEAS:"海外",

    FLAT:"私人樓",VILLAGE:"村屋",PUBLIC:"公屋",HOME_OWN:"居屋",SERVANT_Q:"有工人房",

    WALKIN:"門市",REFERRAL:"轉介",FB:"Facebook",ONLINE:"網上",GOV:"政府計劃",

    PAID:"已付",UNPAID:"未付",

    OVERSEAS:"海外",LOCAL:"本地",TRANSFER:"轉介",

    CHRISTIAN:"基督教",CATHOLIC:"天主教",MUSLIM:"回教",BUDDHIST:"佛教",HINDU:"印度教",

    LEARNING:"學習中",

    SON:"兒子",DAUGHTER:"女兒",

    BABY:"照顧嬰兒",CHILDCARE:"照顧小童",ELDERCARE:"老人護理",SICKCARE:"照顧病患",

    HOUSEWORK:"家務",PETCARE:"照顧寵物",

    D_HOUSEWORK:"一般家務",D_HANDWASH:"手洗衣服",D_SHAREROOM:"與他人共用房間",D_MARKET:"街巿買餸",D_CARWASH:"洗車",D_COOKCN:"中餐",D_COOKWEST:"西餐",D_COOKOTHER:"其他"

  },

  match:{title:"智能配對引擎（加權評分）",conds:"加權評分條件（多選）",skills:"技能標籤（全部 16 個）",langs:"語言能力",hardFilters:"硬性篩選條件",emp:"配對僱主",applyEmp:"套用僱主條件",applied:"已套用僱主條件",nat:"國籍",ageMin:"年齡最小",ageMax:"年齡最大",expMin:"最少經驗年數",budget:"預算上限 (HKD)",edu:"教育程度（最低）",zodiac:"西方星座",czodiac:"中國生肖",marital:"婚姻狀況",children:"子女",childYes:"有子女",childNo:"無子女",langEn:"英文（最低）",langCt:"廣東話（最低）",langPtn:"普通話（最低）",visaDays:"Visa 最少剩餘日數",contractDone:"完成合約次數（最少）",includeExpiring:"包含「有工做」且 Visa 將到期嘅工人",expiringDays:"日內",expiringHint:"預設：狀態＝有工做、而 Visa 到期日距今 140 日（或已過期 140 日內）嘅工人會一併出現，方便預早跟進續約／轉工。",expiringFlag:"Visa {d} 日後到期",visaLeft:"Visa 剩餘 {d} 日",visaExpired:"Visa 已過期 {d} 日",noVisa:"無 Visa 到期日",run:"開始配對",score:"匹配度",fit:"符合",of:"/",items:"項",noPerfect:"無完全符合人選，以下為最接近名單（前 20 名）",noResult:"冇符合條件嘅工人（請放寬篩選條件）",result:"配對結果",addCand:"加入候選",cand:"候選名單",cands:"候選名單",copyList:"複製名單",copied:"已複製到剪貼簿",clearCands:"清空候選",removeCand:"移除",alreadyCand:"已喺候選名單",empty:"請先選擇篩選條件再開始配對",readWarn:"我已閱讀警告",warnBox:"警告：此工人曾有不良紀錄或逃跑紀錄（等級：{lv}），請謹慎配對！",markedAt:"標記日期",reason:"原因",workExclude:"狀態「唔搵工」者、以及黑名單工人不會出現於配對結果",education:"教育",languages:"語言",expCountry:"各地經驗"},

  follow:{today:"今天要處理",overdue:"逾期",days:"日",complete:"已完成",undo:"撤回",viewDone:"查看已完成",hideDone:"收起已完成",notes:"每日記事板",addNote:"新增便利貼",pin:"置頂",unpin:"取消置頂",noDue:"無到期日",due:"到期",all:"全部",name:"人名",item:"跟進事項",openFile:"檔案",bday:"生日",visa:"Visa 到期"},

  msg:{title:"大量訊息（WhatsApp 清單模式）",filter:"發送對象篩選器",tpl:"訊息範本",newTpl:"新增範本",preview:"訊息預覽",genList:"產生待發送清單",target:"發送對象",status:"狀態",unsent:"未發",sent:"已發",fail:"失敗",markAll:"全部標記為已發送",reset:"重設清單",log:"發送紀錄",selected:"已選",people:"人",missing:"請先補齊以下欄位",varTitle:"可用合併欄位",sentAt:"發送時間",noTarget:"篩選結果為 0 人，請調整條件"},

  imp:{csvTitle:"Excel / CSV 匯入 / 匯出",csvExport:"匯出 CSV",jsonTitle:"JSON 匯出 / 還原",choose:"選擇 Excel / CSV 檔案",noXlsx:"支援 .xlsx（內建解析器）與 .csv（UTF-8 / Big5 / GBK 自動偵測）。",xlsxSupport:"支援 .xlsx（內建解析器，離線可用）及 .csv（UTF-8 / Big5 / GBK 自動偵測）",autoMapped:"已自動套用欄位對映與值轉換",rows:"共",mapping:"欄位對映",doImport:"開始匯入",dupStrategy:"重複編號策略",skip:"跳過並記入錯誤報告",overwrite:"覆蓋",preview:"預覽（前 10 行）",report:"驗證報告",errReport:"匯出錯誤報告",done:"匯入完成：成功 {ok}、跳過 {skip}、失敗 {fail}",updCount:"其中 {upd} 筆為更新既有記錄",exportNow:"立即匯出 JSON",restoreBtn:"選擇 JSON 備份檔還原",restoreWarn:"還原為完全取代模式！",compare:"比對摘要",cur:"現有",incoming:"匯入",confirmRestore:"確認完全取代所有資料？此操作不可逆（已自動建立 Undo 快照）。",syncTitle:"自動同步資料夾",syncUnsupported:"⚠ 此瀏覽器不支援自動同步資料夾（請用桌面版 Chrome / Edge）。原有嘅手動上載／下載功能照常可用。",syncHint:"揀一個共用資料夾（例如公司雲端硬碟／Dropbox），之後每次開檔會自動讀入最新備份，改動亦會自動寫出，唔使再手動上載。",syncConnected:"已連接同步資料夾：",syncPick:"揀同步資料夾",syncLoad:"立即讀回最新",syncSave:"立即寫出備份",syncDisconnect:"取消同步",syncDisconnectConfirm:"確定取消同步？之後唔會再自動讀寫資料夾。",syncAutoWrite:"每次改動後自動寫出備份到資料夾",syncLastWrite:"最後寫出"},

  warn:{title:"永久紅色警告標記",mark:"標記警告",level:"等級",reason:"原因（必填）",perm:"⚠ 一經標記不可刪除、不可撤銷，只能追加補充說明。",addNote:"追加補充說明",history:"標記歷史",exist:"已有永久警告標記"},

  form:{required:"必填",saved:"已儲存",delConfirm:"確定刪除？此操作不可逆。",batchDel:"批次刪除所選",noId:"請填寫 HKID 或護照號碼（6–7 位純數字）",badId:"必須為 6–7 位純數字（不含字母）",dupId:"編號重複",showAll:"顯示全部（含 DEPARTED）",hideDeparted:"隱藏 DEPARTED",autoCode:"自動取用 HKID／護照號，唯讀",paidHint:"已付金額 ≥ 中介費，可切換為「已付」"},

  staff:{title:"會員管理（Admin 專用）",name:"登入名稱",pwd:"登入密碼",role:"權限",admin:"Admin 管理員",normal:"普通會員",add:"新增會員",company:"中介公司名稱",adminOnly:"只有 Admin 可以管理會員帳戶（請用 Admin 帳戶登入）"},
  mem:{title:"會員管理（Admin 專用）",email:"電郵",name:"姓名",phone:"手機",dept:"部門／職位",emergency:"緊急聯絡人",emergencyPhone:"緊急聯絡電話",role:"權限",admin:"Admin 管理員",member:"普通會員",active:"啟用中",disabled:"已停用",add:"新增會員",saved:"已儲存",resetPwd:"重設密碼",lastLogin:"上次登入",pwdPlaceholder:"密碼（可留空）",pwdHint:"密碼留空＝會員首次登入時自行設定",adminOnly:"只有 Admin 可以管理會員帳戶（請用 Admin 帳戶登入）"},

  print:{title:"外傭履歷",sensitive:"顯示敏感欄位",company:"公司",printed:"列印日期",contact:"聯絡方式",profile:"外傭履歷 Profile Summary"},

  survey:{

    title:"智能問卷・資料轉換",

    step1:"步驟一 · 揀工人／輸入工人資料", step2:"步驟二 · 產生固定格式問卷並經 WhatsApp 發送",

    step3:"步驟三 · 貼上工人回覆文字", step4:"步驟四 · 核對解析結果並寫入資料庫",

    pickHelper:"揀返已存在工人（已知資料會自動帶入問卷）", searchHelper:"搜尋工人（姓名／編號／電話）…",

    manual:"或手動輸入：", manualName:"工人姓名", manualPhone:"聯絡電話（用於 WhatsApp 發送）",

    genQ:"產生問卷", qText:"問卷內容（固定格式，可改後再發送）",

    sendWA:"經 WhatsApp 發送問卷", copyQ:"複製問卷文字", resetQ:"重新產生", qCount:"共 {n} 題",

    pasteHint:"將工人 WhatsApp 回覆嘅完整內容貼到下面（可以逐題答，亦可以係語句式），按「智能解析」自動填入下方表格。",

    parse:"智能解析", parseDone:"解析完成：{ok} 個欄位已填、{miss} 個未填",

    review:"解析結果（可修改後才寫入）", field:"欄位", value:"值", status:"狀態", src:"來源", filled:"已填", missing:"未填",

    target:"寫入目標", targetNew:"新增新工人", targetUpdate:"更新既有工人（覆蓋同名欄位）",

    saveToDB:"確認寫入資料庫", saved:"已寫入資料庫 ✓", nothingToSave:"未有可寫入嘅資料",

    noParse:"請先貼上回覆文字再解析", noResult:"未能解析到任何欄位 — 請檢查格式（建議每行一題，格式：題號. 答案 或 欄位: 答案）",

    hist:"問卷發送紀錄", histEmpty:"暫無發送紀錄", copied:"已複製到剪貼簿",

    editBtn:"修改", clearBtn:"清空"

  },

  prof:{

    title:"個人紀錄 Personal Information", maidNo:"傭工編號", maidType:"傭工類型",

    personal:"個人紀錄", family:"家庭背景", exp:"工作經驗", rec:"工作記錄", general:"一般諮詢",

    name:"傭工姓名", finishDate:"完約日期", nat:"國籍", edu:"教育程度", dob:"出生日期", religion:"宗教",

    age:"年齡", weight:"體重", marital:"婚姻狀況", height:"高度",



    noExp:"沒有經驗", hasExp:"有經驗", langAbility:"語文能力", remark:"備註",

    countryExp:"地區工作經驗", duties:"工作意向",

    lastEmp:"上任僱主", prevEmp:"前任僱主", location:"工作地點", period:"工作日期",

    houseSize:"單位面積", persons:"僱主家庭人數", holiday:"放假安排", noMaid:"傭工數目",

    salary:"工資", reason:"離職原因",

    taskBaby:"照顧嬰兒", taskChild:"照顧小孩", taskElder:"照顧老人", taskSick:"照顧病患",

    taskHouse:"一般家務", taskHand:"手洗衣服", taskShare:"與他人共用房間", taskPet:"照顧寵物",

    taskMarket:"街巿買餸", taskCar:"洗車", taskCook:"烹飪", taskOther:"其他",

    disclaimer:"Helpers above information is for reference purposes. 嘉勝人力資源中心・本資料僅供參考。",

    printBtn:"列印個人紀錄", editWH:"編輯工作記錄", whTitle:"工作記錄 Domestic Helper Employment Record",

    whLoc:"工作地點", whPeriod:"工作日期", whSize:"單位面積", whPersons:"僱主家庭人數", whHoliday:"放假安排",

    whMaid:"傭工數目", whSalary:"工資", whReason:"離職原因", whDuty:"工作內容", addWH:"＋ 新增一段工作記錄", delWH:"刪除",

    whEmpty:"未有工作記錄 — 可按「編輯工作記錄」新增"

  }

},

en:{

  brandSub:"", nav:{home:"Home",data:"Data Tables",match:"Smart Matching",follow:"Daily Follow-up & Notes",import:"Backup & CSV",settings:"Settings & Members",survey:"Smart Questionnaire & Data Import"},

  btn:{export:"Export JSON",restore:"Upload & Restore",refresh:"Refresh",add:"Add",edit:"Edit",del:"Delete",save:"Save",cancel:"Cancel",confirm:"Confirm",close:"Close",search:"Search…",print:"Print Profile",view:"View Profile",gen:"Generate Profile",send:"Send",wa:"WhatsApp"},

  tab:{ph:"Filipino FDH",id:"Indonesian FDH",emp:"Employers",bl:"Blacklist"},

  home:{title:"Home",lead:"Quick links to the two questionnaires",employer:"Employer Requirements Questionnaire",employerSub:"Household situation, hiring requirements, budget and expectations of the employer",candidate:"Candidate Questionnaire",candidateSub:"Personal details, experience, skills and preferences filled in by the helper / candidate",open:"Open questionnaire",newTab:"Both questionnaires open in a new tab. Filling them in does not change any CRM data."},

  st:{statusCol:"Status",lastExport:"Last export",never:"Never",dirty:"Unexported changes",clean:"Data synced to backup",rows:"Records",fh:"FDH",em:"Employers"},

  fdh:{code:"FDH ID",refNo:"Reference No.",photo:"Photo",photoPick:"Upload photo",photoCam:"Take photo",photoClear:"Remove photo",photoHint:"Auto-compressed to 330×440 JPEG (~20KB) for fast loading.",engName:"Full Name",localName:"Local Name",nickname:"Nickname",nationality:"Nationality",birth:"Date of Birth",age:"Age",zodiac:"Zodiac",czodiac:"Chinese Zodiac",marital:"Marital Status",children:"Children",education:"Education",lang:"Languages",skills:"Skills Tag",expYears:"Years of Experience",prevRegion:"Previous Employer Region",contract:"Status",warning:"Red Warning",arrival:"Arrival HK Date",handover:"Handover Start Date",hkid:"HKID No.",passport:"Passport No.",contractExpiry:"Contract Expiry",airport:"Airport Pickup Date",hkidAppt:"HKID Appointment Date",notes:"Remarks",langEn:"English",langCt:"Cantonese",langPtn:"Mandarin",phoneHK:"HK Number",phoneIndo:"Indonesia Number",phonePH:"Filipino Number",contractDone:"Contracts Completed",extCode:"Worker No."},

  emp:{code:"Employer ID",salutation:"Salutation",nickname:"Nickname",phone:"Phone",whatsapp:"WhatsApp No.",family:"Family Status",region:"Region",housing:"Housing Type",needs:"Needs Tags",budget:"Budget (HKD)",acceptedNat:"Accepted Nationality",expectDate:"Next Follow-up Date",currentFDH:"Current FDH",source:"Source",level:"Client Level",feeTotal:"Total Agency Fee",paidAmount:"Paid Amount",outstanding:"Outstanding",paymentStatus:"Payment Status",    followUp:"Follow-up Notes",notes:"Remarks"},

  cand:{title:"Import Candidate",imported:"Imported candidate from questionnaire",reviewSave:"Please review then click Save",pasteCode:"Paste candidate import code:",badCode:"Invalid or undecodable import code"},
  empImport:{ title:"Import Employer",imported:"Employer imported from questionnaire",reviewSave:"Please review then Save",pasteCode:"Paste employer import code:",badCode:"Invalid import code"},
  rec:{ title:"Recommended Helpers",waTitle:"Recommendation",waSend:"Send via WhatsApp",dupTitle:"Duplicate recommendation",dupMsg:"This employer already has {code} recommended. Recommend again?",},

  dic:{

    JO:"JO (New Contract)",CJO:"CJO (Finished Contract)",WORKING:"Working",COMPLETED:"Completed",TRANSFER:"Transfer",DEPARTED:"Departed",

    FIND_JOB:"Find Job",HAVE_JOB:"Have Job",NOT_FINDING:"Not Finding",FOLLOW_UP:"Need Follow Up",

    NEW:"New",REGULAR:"Regular",DIFFICULT:"Difficult",VIP:"VIP",REFERRAL:"Referral",OUTSTANDING:"Outstanding",

    FINDING:"Finding Helper",PROCESSING:"Processing",HIRING:"Hiring",TERMINATED:"Terminated",

    MINOR:"Minor",SERIOUS:"Serious",

    SINGLE:"Single",MARRIED:"Married",DIVORCED:"Divorced",WIDOWED:"Widowed",SINGLE_PARENT:"Single Parent",PARTNER:"Unmarried Partner",SEPARATED:"Separated",

    HIGH_SCHOOL:"High School",COLLEGE:"College",UNIVERSITY:"University",VOCATIONAL:"Vocational",OTHER:"Other",

    GOOD:"Good",FAIR:"Fair",NONE:"None",

    S_NOHOLIDAY:"No Holiday",S_NEWBORN:"New Born",S_TODDLER:"Toddler",S_ELDERLY:"Elderly",S_ILLNESS:"Serious Illness",S_SPECIAL:"Special Child",S_DOG:"Dog Care",S_CAT:"Cat Care",S_WASHCAR:"Wash Car",S_DRIVING:"Driving",S_MALEHELPER:"Male Helper",S_MALEEMP:"Male Employer",S_NOROOM:"No Room",S_OWNROOM:"Own Room",S_SHAREJOB:"Share Job",S_GOODCOOK:"Good Cook",

    PH:"Filipino",ID:"Indonesian",OTHER:"Other",

    HK:"Hong Kong",NT:"New Territories",KL:"Kowloon",TW:"Hong Kong Island",OVERSEAS:"Overseas",

    FLAT:"Private Flat",VILLAGE:"Village House",PUBLIC:"Public Housing",HOME_OWN:"HOS Flat",SERVANT_Q:"With Servant Room",

    WALKIN:"Walk-in",REFERRAL:"Referral",FB:"Facebook",ONLINE:"Online",GOV:"Gov Scheme",

    PAID:"Paid",UNPAID:"Unpaid",

    OVERSEAS:"Overseas",LOCAL:"Local",TRANSFER:"Transfer",

    CHRISTIAN:"Christian",CATHOLIC:"Catholic",MUSLIM:"Muslim",BUDDHIST:"Buddhist",HINDU:"Hindu",

    LEARNING:"Learning",

    SON:"Son",DAUGHTER:"Daughter",

    BABY:"Taking care of babies",CHILDCARE:"Taking care of children",ELDERCARE:"Taking care of elderly",SICKCARE:"Taking care of sick",

    HOUSEWORK:"House Work",PETCARE:"Pet Care",

    D_HOUSEWORK:"House work",D_HANDWASH:"Hand-Washing Clothes",D_SHAREROOM:"Share Room",D_MARKET:"Go to market",D_CARWASH:"Car wash",D_COOKCN:"Chinese",D_COOKWEST:"Western",D_COOKOTHER:"Other"

  },

  match:{title:"Smart Matching Engine (Weighted Score)",conds:"Weighted Score Conditions (multi-select)",skills:"Skills Tags (all 16)",langs:"Languages",hardFilters:"Hard Filters",emp:"Employer to Match",applyEmp:"Apply Employer Criteria",applied:"Employer criteria applied",nat:"Nationality",ageMin:"Min Age",ageMax:"Max Age",expMin:"Min Years of Experience",budget:"Budget Cap (HKD)",edu:"Min Education",zodiac:"Zodiac",czodiac:"Chinese Zodiac",marital:"Marital Status",children:"Children",childYes:"Has Children",childNo:"No Children",langEn:"Min English",langCt:"Min Cantonese",langPtn:"Min Mandarin",visaDays:"Min Visa Days Left",contractDone:"Min Contracts Completed",includeExpiring:"Include 「Have Job」 helpers whose visa is expiring",expiringDays:"within days",expiringHint:"Default: helpers with status = Have Job whose Visa Expiry is within 140 days (or expired within 140 days) also appear, so renewals / job moves can be followed up early.",expiringFlag:"Visa expires in {d} days",visaLeft:"{d} days left on visa",visaExpired:"Visa expired {d} days ago",noVisa:"No visa expiry date",run:"Start Matching",score:"Match",fit:"Matched",of:"/",items:"items",noPerfect:"No perfect match — closest 20 candidates below",noResult:"No helpers match these filters (try relaxing them)",result:"Results",addCand:"Add to Candidates",cand:"Candidate List",cands:"Candidate List",copyList:"Copy List",copied:"Copied to clipboard",clearCands:"Clear Candidates",removeCand:"Remove",alreadyCand:"Already in candidate list",empty:"Select conditions and start matching",readWarn:"I have read the warning",warnBox:"WARNING: This helper has a bad record / runaway history (Level: {lv}). Proceed with caution!",markedAt:"Marked on",reason:"Reason",workExclude:"Helpers with status NOT_FINDING and blacklisted helpers never appear in results",education:"Education",languages:"Languages",expCountry:"Experience by Region"},

  follow:{today:"To Handle Today",overdue:"Overdue",days:"days",complete:"Done",undo:"Undo",viewDone:"View completed",hideDone:"Hide completed",notes:"Daily Sticky Notes",addNote:"Add Sticky Note",pin:"Pin",unpin:"Unpin",noDue:"No due date",due:"Due",all:"All",name:"Name",item:"Follow-up Item",openFile:"File",bday:"Birthday",visa:"Visa Expiry"},

  msg:{title:"Bulk Messaging (WhatsApp List Mode)",filter:"Recipient Filter",tpl:"Message Template",newTpl:"New Template",preview:"Message Preview",genList:"Generate Send List",target:"Recipients",status:"Status",unsent:"Unsent",sent:"Sent",fail:"Failed",markAll:"Mark All Sent",reset:"Reset List",log:"Send Log",selected:"Selected",people:"",missing:"Fill in missing fields first",varTitle:"Available Merge Fields",sentAt:"Sent at",noTarget:"0 recipients — adjust filters"},

  imp:{csvTitle:"Excel / CSV Import / Export",csvExport:"Export CSV",jsonTitle:"JSON Export / Restore",choose:"Choose Excel / CSV file",noXlsx:"Supports .xlsx (built-in parser) and .csv (UTF-8 / Big5 / GBK auto-detected).",xlsxSupport:"Supports .xlsx (built-in parser, works offline) and .csv (UTF-8 / Big5 / GBK auto-detected)",autoMapped:"Column mapping and value conversion applied automatically",rows:"Total",mapping:"Column Mapping",doImport:"Start Import",dupStrategy:"Duplicate ID Strategy",skip:"Skip & log error",overwrite:"Overwrite",preview:"Preview (first 10 rows)",report:"Validation Report",errReport:"Export Error Report",done:"Import done: {ok} ok, {skip} skipped, {fail} failed",updCount:"{upd} of them updated existing records",exportNow:"Export JSON Now",restoreBtn:"Choose JSON backup to restore",restoreWarn:"Restore fully replaces all data!",compare:"Comparison",cur:"Current",incoming:"Incoming",confirmRestore:"Fully replace ALL data? Irreversible (an undo snapshot is created).",syncTitle:"Auto-Sync Folder",syncUnsupported:"⚠ This browser does not support folder auto-sync (use desktop Chrome / Edge). The existing manual upload / download still works.",syncHint:"Pick a shared folder (e.g. company cloud drive / Dropbox). The CRM then auto-loads the newest backup on every launch and auto-writes after each change — no more manual uploads.",syncConnected:"Sync folder connected:",syncPick:"Choose Sync Folder",syncLoad:"Load Latest Now",syncSave:"Write Backup Now",syncDisconnect:"Disconnect",syncDisconnectConfirm:"Disconnect auto-sync? The CRM will stop reading and writing the folder.",syncAutoWrite:"Auto-write a backup to the folder after every change",syncLastWrite:"Last written"},

  warn:{title:"Permanent Red Warning",mark:"Mark Warning",level:"Level",reason:"Reason (required)",perm:"⚠ Once marked, cannot be deleted or revoked — only supplementary notes can be appended.",addNote:"Append Note",history:"Warning History",exist:"Already has a permanent warning"},

  form:{required:"required",saved:"Saved",delConfirm:"Delete? Irreversible.",batchDel:"Delete Selected",noId:"HKID or Passport (6–7 digits) required",badId:"Must be 6–7 digits only (no letters)",dupId:"Duplicate ID",showAll:"Show all (incl. DEPARTED)",hideDeparted:"Hide DEPARTED",autoCode:"Auto from HKID/Passport, read-only",paidHint:"Paid ≥ total fee — can mark as Paid"},

  staff:{title:"Member Management (Admin only)",name:"Login Name",pwd:"Login Password",role:"Role",admin:"Admin",normal:"Member",add:"Add Member",company:"Company Name",adminOnly:"Only Admin can manage member accounts (login as Admin)"},
  mem:{title:"Member Management (Admin only)",email:"Email",name:"Name",phone:"Phone",dept:"Department",emergency:"Emergency contact",emergencyPhone:"Emergency phone",role:"Role",admin:"Admin",member:"Member",active:"Active",disabled:"Disabled",add:"Add Member",saved:"Saved",resetPwd:"Reset password",lastLogin:"Last login",pwdPlaceholder:"Password (optional)",pwdHint:"Leave password blank — the member sets it on first sign-in",adminOnly:"Only Admin can manage member accounts (login as Admin)"},

  print:{title:"FDH Profile Summary",sensitive:"Show sensitive fields",company:"Company",printed:"Printed on",contact:"Contact",profile:"FDH Profile Summary"},

  survey:{

    title:"Smart Questionnaire & Data Import",

    step1:"Step 1 · Pick a helper / enter helper details", step2:"Step 2 · Generate the fixed-format questionnaire & send via WhatsApp",

    step3:"Step 3 · Paste the helper's reply", step4:"Step 4 · Review the parsed result & write to the database",

    pickHelper:"Pick an existing helper (known details are pre-filled into the questionnaire)", searchHelper:"Search helper (name / code / phone)…",

    manual:"Or enter manually:", manualName:"Helper name", manualPhone:"Contact phone (used to send via WhatsApp)",

    genQ:"Generate questionnaire", qText:"Questionnaire content (fixed format — you may edit before sending)",

    sendWA:"Send questionnaire via WhatsApp", copyQ:"Copy questionnaire text", resetQ:"Regenerate", qCount:"{n} questions in total",

    pasteHint:"Paste the helper's full WhatsApp reply below (numbered answers or free-form sentences both work), then press \"Smart Parse\" to auto-fill the table.",

    parse:"Smart Parse", parseDone:"Parsed: {ok} fields filled, {miss} still empty",

    review:"Parse result (editable — review before writing)", field:"Field", value:"Value", status:"Status", src:"Source", filled:"Filled", missing:"Empty",

    target:"Write target", targetNew:"Create new helper", targetUpdate:"Update existing helper (overwrite same fields)",

    saveToDB:"Confirm & write to database", saved:"Written to database ✓", nothingToSave:"Nothing to write",

    noParse:"Paste the reply text first, then parse", noResult:"No field could be parsed — check the format (one question per line, e.g. \"12. 1995-03-20\" or \"Height: 160\")",

    hist:"Questionnaire history", histEmpty:"No questionnaire sent yet", copied:"Copied to clipboard",

    editBtn:"Edit", clearBtn:"Clear"

  },

  prof:{

    title:"Personal Information 個人紀錄", maidNo:"Maid number", maidType:"Type of maid",

    personal:"Personal Information", family:"Family Background", exp:"Working Experience", rec:"Domestic Helper Employment Record", general:"General Information",

    name:"Name", finishDate:"Finish contract date", nat:"Nationality", edu:"Education", dob:"Date of Birth", religion:"Religion",

    age:"Age", weight:"Weight", marital:"Marital Status", height:"Height",



    noExp:"No experience", hasExp:"Experience", langAbility:"Language Ability", remark:"Remark",

    countryExp:"Country Experience", duties:"Duties Priority",

    lastEmp:"Last Employer", prevEmp:"Previous Employer", location:"Location", period:"Working period",

    houseSize:"Size of house", persons:"No of person served", holiday:"Holiday arrangement", noMaid:"No. of Maid in the family",

    salary:"Last salary", reason:"Reason of leaving",

    taskBaby:"Take care of babies", taskChild:"Take care of children", taskElder:"Take care of elderly", taskSick:"Take care of sick",

    taskHouse:"House work", taskHand:"Hand-Washing Clothes", taskShare:"Share Room", taskPet:"Pet Care",

    taskMarket:"Go to market", taskCar:"Car wash", taskCook:"Cooking", taskOther:"Other",

    disclaimer:"Helpers above information is for reference purposes. 嘉勝人力資源中心・For reference only.",

    printBtn:"Print Personal Information", editWH:"Edit Employment Record", whTitle:"Domestic Helper Employment Record",

    whLoc:"Location", whPeriod:"Working period", whSize:"Size of house", whPersons:"No of person served", whHoliday:"Holiday arrangement",

    whMaid:"No. of Maid in the family", whSalary:"Last salary", whReason:"Reason of leaving", whDuty:"Duties", addWH:"＋ Add employment record", delWH:"Delete",

    whEmpty:"No employment record yet — press \"Edit Employment Record\" to add one"

  }

},

};


/* ── LANG_NAMES ── */
const LANG_NAMES = { zhHant:'中文', en:'English' };


/* ── ZOD_START / ZOD_CUT ── */
const ZOD_START = ['Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn'];

const ZOD_CUT   = [20,19,21,20,21,22,23,23,23,23,22,22]; // 各月交界日


/* ── SKILLS ＋ 全部常數表 ── */
const SKILLS = [

  'S_NOHOLIDAY',   // No Holiday 不放假

  'S_NEWBORN',     // New Born 湊BB

  'S_TODDLER',     // Toddler 湊小朋友

  'S_ELDERLY',     // Elderly

  'S_ILLNESS',     // Serious Illness

  'S_SPECIAL',     // Special Child

  'S_DOG',         // Dog Care

  'S_CAT',         // Cat Care

  'S_WASHCAR',     // Wash Car

  'S_DRIVING',     // Driving

  'S_MALEHELPER',  // Male Helper

  'S_MALEEMP',    // Male Employer 男僱主

  'S_NOROOM',      // No Room 可同房

  'S_OWNROOM',     // Own Room

  'S_SHAREJOB',    // Share Job

  'S_GOODCOOK',    // Good Cook 煮餸好

  'S_PORK'         // Eat Pork 食豬肉（候選人問卷新增）

];

/* 舊技能碼 → 新技能碼遷移（migrateDB 用；舊草稿自動升級，唔會因改清單而遺失資料） */

const SKILL_MIGRATE = { S_PET:['S_DOG','S_CAT'], S_HOUSEWORK:['S_GOODCOOK','S_WASHCAR'] };

/* 候選人問卷第 22 項 My Best Interest（6 選 1） */

const BEST_INTERESTS = ['BABY','CHILDREN','ELDERLY','HOUSEWORK','COOKING','MULTITASK'];

const CONTRACTS = ['FIND_JOB','HAVE_JOB','NOT_FINDING','FOLLOW_UP'];

/* 婚姻狀況（含單親／未婚伴侶／分居 —— 對應 helper db 的 7 種寫法） */

const MARITALS = ['SINGLE','MARRIED','DIVORCED','WIDOWED','SINGLE_PARENT','PARTNER','SEPARATED'];

/* 舊狀態 → 新狀態遷移對照 */

const CONTRACT_MIGRATE = { JO:'FIND_JOB', CJO:'FIND_JOB', WORKING:'HAVE_JOB', COMPLETED:'HAVE_JOB', TRANSFER:'FOLLOW_UP', DEPARTED:'NOT_FINDING' };

const LEVELS = ['NEW','REGULAR','DIFFICULT','VIP','REFERRAL','OUTSTANDING'];

/* 工人類別（取代外傭紅色警告；BLACKLIST = 紅色警告）— 需在 CSV_FIELDS_FDH 之前定義 */

const WCLASS = ['GOOD','BEST','NO_GOOD','BLACKLIST'];

/* 僱主目前階段（5 個簡化階段，三語顯示用 dic.*） */

const ESTAGES = ['FINDING','PROCESSING','HIRING','TERMINATED','FOLLOW_UP'];

/* 僱主問卷（2026-10-28 用戶定案） */

const TITLES        = ['MR','MS','MRS'];

const DISTRICTS     = ['HK','KLN','NT'];

const SOURCE_OPTS   = ['WALKIN','REFERRAL','FB','ONLINE','GOV'];

const HOUSE_ROOMS   = ['OWN_ROOM','SHARE_CHILD_ROOM','SEPARATE_SPACE','OTHER'];

const OFF_DAYS      = ['SUNDAY','SATURDAY','WEEKDAY','OTHER'];

const HOME_MEMBERS  = ['FEMALE_EMPLOYER','MALE_EMPLOYER','GRANDMA','GRANDPA'];

const JOB_DUTIES    = ['D_HOUSEWORK','D_NEWBORN','D_CHILDREN','D_ELDERLY','D_DISABLED','D_MACHINEWASH','D_HANDWASH','D_IRONING','D_MARKET','D_COOKING','D_GARDENING','D_CARWASH','D_DOGCARE','D_CATCARE'];

const MARITAL_PREFS = ['SINGLE','MARRIED','NO_PREF'];

const APP_TYPES     = ['OVERSEAS','FINISHED_CONTRACT','TERMINATED','RENEWAL','EXTENSION'];

const FM_KEYS       = [['Adult','ADULT'],['Infant','INFANT'],['Children','CHILDREN'],['Elderly','ELDERLY'],['Disabled','DISABLED']];

/* 舊 ST1–ST20 階段 → 新階段遷移對照 */

const ESTAGE_MIGRATE = (()=>{ const m={}; for(let i=1;i<=9;i++) m['ST'+i]='FINDING';

  for(let i=10;i<=15;i++) m['ST'+i]='PROCESSING'; m['ST16']='HIRING'; m['ST17']='HIRING';

  m['ST18']='FOLLOW_UP'; m['ST19']='FOLLOW_UP'; m['ST20']='TERMINATED'; return m; })();

/* 新階段 → 知識庫階段引導對應的 ST 階段 */

/* ── PROFILE_PRIORITY / WORK_DUTIES ── */
const PROFILE_PRIORITY = ['baby','elder','pet','child','sick','cook'];

/* 網站 Domestic Helper Employment Record 每段僱主記錄嘅 12 個工作內容勾選框 */

const WORK_DUTIES = [

  {k:'baby',   zh:'照顧嬰兒',       en:'Take care of babies'},

  {k:'child',  zh:'照顧小孩',       en:'Take care of children'},

  {k:'elder',  zh:'照顧老人',       en:'Take care of elderly'},

  {k:'sick',   zh:'照顧病患',       en:'Take care of sick'},

  {k:'house',  zh:'一般家務',       en:'House work'},

  {k:'hand',   zh:'手洗衣服',       en:'Hand-Washing Clothes'},

  {k:'share',  zh:'與他人共用房間', en:'Share Room'},

  {k:'pet',    zh:'照顧寵物',       en:'Pet Care'},

  {k:'market', zh:'街巿買餸',       en:'Go to market'},

  {k:'car',    zh:'洗車',           en:'Car wash'},

  {k:'cook',   zh:'烹飪',           en:'Cooking'},

  {k:'cn',     zh:'中餐',           en:'Chinese'},

  {k:'west',   zh:'西餐',           en:'Western'},

  {k:'other',  zh:'其他',           en:'Other'}

];


/* ── PROFILE_COUNTRIES ── */
const PROFILE_COUNTRIES = [

  {zh:'菲律賓',   en:'Philippines',  key:''},

  {zh:'印尼',     en:'Indonesia',    key:'expID'},

  {zh:'馬來西亞', en:'Malaysia',     key:'expMY'},

];


/* ── GENERAL_QA / SKILL_KEYWORDS ── */
const GENERAL_QA = [];

/* 技能關鍵字 → CRM 技能碼（解析問卷第 18 題用；順序敏感：先長後短、先具體後籠統） */

const SKILL_KEYWORDS = [

  ['S_NEWBORN',   ['newborn','new born','baby','babies','嬰兒','湊bb','新生兒','bb']],

  ['S_TODDLER',   ['toddler','child','children','小朋友','湊小朋友','幼兒']],

  ['S_ELDERLY',   ['elderly','elder','old people','老人','長者','照顧老人']],

  ['S_ILLNESS',   ['sick','illness','病患','病人','病患者']],

  ['S_SPECIAL',   ['special child','special','特殊小孩','特殊','自閉']],

  ['S_DOG',       ['dog','狗','狗隻']],

  ['S_CAT',       ['cat','貓','貓隻']],

  ['S_WASHCAR',   ['wash car','car wash','washing car','洗車','洗車仔']],

  ['S_DRIVING',   ['driving','drive','driving license','揸車','駕駛','揸車仔']],

  ['S_MALEHELPER',['male helper','男家傭','男家佣']],

  ['S_MALEEMP',  ['male employer','男僱主','男雇主']],

  ['S_OWNROOM',  ['own room','ownroom','要有房','獨立房','自己房']],

  ['S_NOROOM',   ['no room','share room','shared room','可同房','共用房','與人共用房']],

  ['S_SHAREJOB', ['share job','shared job','共享工作','共用工作']],

  ['S_GOODCOOK', ['good cook','cook','cooking','烹飪','煮飯','煮餸','好廚藝','煮得食']],

  ['S_NOHOLIDAY',['no holiday','不放假','冇假期']]

];


/* ── LANG_LEVELS / SURVEY_QUESTIONS ── */
const LANG_LEVELS = ['NATIVE','GOOD','FAIR','NONE','LEARNING'];



/* ══════════ 固定格式問卷（45 題）—— 欄位與網站「個人紀錄」一一對應 ══════════

   type：text / num / date / bool / skills / children / period / enum

   alias：解析時用嚟做「欄位: 值」式回覆嘅標籤比對（中英皆可） */

const SURVEY_QUESTIONS = [

  {n:1,  key:'engName',        zh:'姓名',             en:'Name',                         type:'text',   alias:['姓名','name','full name','工人姓名','傭工姓名']},

  {n:2,  key:'code',            zh:'傭工編號',         en:'Maid No.',                     type:'text',   alias:['傭工編號','maid no','maid number','工人編號','編號','worker no']},

  {n:3,  key:'nationality',     zh:'國籍',             en:'Nationality',                  type:'nat',    alias:['國籍','nationality']},

  {n:4,  key:'birth',           zh:'出生日期',         en:'Date of Birth',                type:'date',   alias:['出生日期','生日','date of birth','dob','birth']},

  {n:5,  key:'marital',         zh:'婚姻狀況',         en:'Marital Status',               type:'marital',alias:['婚姻狀況','婚姻','marital status','marital']},

  {n:6,  key:'children',        zh:'子女數目',         en:'No. of children',              type:'num',    alias:['子女數目','子女','children','no. of children','number of children']},

  {n:11, key:'education',       zh:'教育程度',         en:'Education',                    type:'edu',    alias:['教育程度','教育','education']},

  {n:12, key:'religion',        zh:'宗教',             en:'Religion',                     type:'relig',  alias:['宗教','religion']},

  {n:13, key:'height',          zh:'身高',             en:'Height',                       type:'num',    alias:['身高','height']},

  {n:14, key:'weight',          zh:'體重',             en:'Weight',                       type:'num',    alias:['體重','weight']},

  {n:15, key:'langCt',          zh:'廣東話',           en:'Cantonese',                    type:'lang',   alias:['廣東話','cantonese']},

  {n:16, key:'langEn',          zh:'英語',             en:'English',                      type:'lang',   alias:['英語','英文','english']},

  {n:17, key:'langPtn',         zh:'普通話',           en:'Mandarin',                     type:'lang',   alias:['普通話','國語','普通話','mandarin']},

  {n:18, key:'skills',          zh:'技能／工作意向',   en:'Skills',                       type:'skills', alias:['技能','工作意向','skill','skills','duty']},

  {n:20, key:'expID',           zh:'印尼經驗年數',     en:'Indonesia exp (yrs)',          type:'num',    alias:['印尼經驗','印尼經驗年數','indonesia exp']},

  {n:25, key:'contractDone',    zh:'完成合約次數',     en:'Contracts completed',          type:'num',    alias:['完成合約次數','完成合約','合約次數','contracts completed','contract done']},

  {n:26, key:'whLocation',      zh:'上任僱主工作地點', en:'Last employer location',       type:'text',   alias:['上任僱主工作地點','工作地點','location','last employer location']},

  {n:27, key:'whPeriod',        zh:'上任僱主工作日期', en:'Working period',               type:'text',   alias:['上任僱主工作日期','工作日期','working period','工作期間']},

  {n:28, key:'whHouseSize',     zh:'上任僱主單位面積', en:'Size of house',                type:'text',   alias:['上任僱主單位面積','單位面積','size of house','house size']},

  {n:29, key:'whPersons',       zh:'僱主家庭人數',     en:'No of person served',          type:'num',    alias:['僱主家庭人數','家庭人數','no of person served','persons served']},

  {n:30, key:'whHoliday',       zh:'放假安排',         en:'Holiday arrangement',          type:'text',   alias:['放假安排','holiday arrangement','holiday']},

  {n:31, key:'whNoMaid',        zh:'傭工數目',         en:'No. of Maid in the family',    type:'num',    alias:['傭工數目','傭工數','no. of maid','no of maid']},

  {n:32, key:'whSalary',        zh:'工資',             en:'Last salary',                  type:'text',   alias:['工資','last salary','salary']},

  {n:33, key:'whReason',        zh:'離職原因',         en:'Reason of leaving',            type:'text',   alias:['離職原因','reason of leaving','reason']},

  {n:35, key:'qa_pork',         zh:'食豬肉',           en:'Eat pork',                     type:'bool',   alias:['食豬肉','吃豬肉','豬肉','eat pork','pork']},

  {n:42, key:'email',           zh:'電郵',             en:'Email',                        type:'text',   alias:['電郵','email','e-mail','email address']},

  {n:43, key:'facebook',        zh:'Facebook 帳號',    en:'Facebook',                     type:'text',   alias:['facebook','fb','facebook 帳號','面書']},

  {n:44, key:'bestInterest',    zh:'最擅長工作意向',   en:'Best Interest',                type:'bi',     alias:['最擅長工作意向','工作意向','專長','best interest','best skill']},

  {n:45, key:'expSummary',      zh:'工作經驗（自由文字）', en:'Working Experience',        type:'text',   alias:['工作經驗摘要','工作經驗','working experience','experience summary']}

];


/* ── CAND_* 問卷值對照 ── */
const CAND_NAT     = {'Filipino':'PH','Indonesian':'ID','Other':'OTHER'};

const CAND_MARITAL = {'Single':'SINGLE','Married':'MARRIED','Divorced':'DIVORCED','Widowed':'WIDOWED'};

const CAND_EDU     = {'Elementary':'ELEMENTARY','High School':'HIGH_SCHOOL','College':'COLLEGE','Others':'OTHER'};

const CAND_LANG    = {'Native':'NATIVE','Very Good':'GOOD','Fair':'FAIR','None':'NONE'};

const CAND_BI      = {'Take care Baby':'BABY','Take care children':'CHILDREN','Take care elderly':'ELDERLY','Cleaning house and washing clothes':'HOUSEWORK','Cooking':'COOKING','Multi-tasking':'MULTITASK'};

const CAND_SKILL   = {'No Holiday':'S_NOHOLIDAY','New Born':'S_NEWBORN','Toddler':'S_TODDLER','Elderly':'S_ELDERLY','Serious Illness':'S_ILLNESS','Special Child':'S_SPECIAL','Dog Care':'S_DOG','Cat Care':'S_CAT','Wash Car':'S_WASHCAR','Driving':'S_DRIVING','Male Helper':'S_MALEHELPER','Male Employer':'S_MALEEMP','No Room':'S_NOROOM','Own Room':'S_OWNROOM','Share Job':'S_SHAREJOB','Good Cook':'S_GOODCOOK','Eat pork':'S_PORK'};


/* ── EDU_RANK / LANG_RANK / MATCH_CONDS ── */
const EDU_RANK  = { ELEMENTARY:1, HIGH_SCHOOL:2, VOCATIONAL:3, COLLEGE:4, UNIVERSITY:5, OTHER:1 };  // 教育程度

const LANG_RANK = { NONE:0, FAIR:1, GOOD:2, NATIVE:3 };                    // 語言能力

/* 「有工做」工人納入配對嘅 Visa 到期門檻（用戶指定 140 日，可調整） */

const EXPIRING_DEFAULT_DAYS = 140;



/* ───────── 配對評分條件（多選 chip）─────────

   2026-10-25：技能標籤由 5 個擴充為全部 16 個 SKILLS；語言條件改用等級比較 */

const MATCH_CONDS = [

  ...SKILLS.map(s=>({k:'SK:'+s, labelKey:'dic.'+s, test:h=>(h.skills||[]).includes(s)})),

  {k:'LANG_CT', labelKey:'fdh.langCt',  test:h=>(LANG_RANK[h.langCt]||0)  >= LANG_RANK.FAIR},

  {k:'LANG_PTN',labelKey:'fdh.langPtn', test:h=>(LANG_RANK[h.langPtn]||0) >= LANG_RANK.GOOD},

  {k:'LANG_EN', labelKey:'fdh.langEn',  test:h=>(LANG_RANK[h.langEn]||0)  >= LANG_RANK.GOOD},

  ...BEST_INTERESTS.map(b=>({k:'BI:'+b, labelKey:'dic.'+b, test:h=>h.bestInterest===b}))

];


/* ── RESUME_SENSITIVE / PROF_* ── */
let RESUME_SENSITIVE = false;

/* 網站標題用字（固定中英，不隨介面語言改變 —— 與網站輸出一致） */

const PROF_BI = {

  PH:['Filipino','菲律賓'], ID:['Indonesian','印尼'], OTHER:['Other','其他'],

  SINGLE:['Single','未婚'], MARRIED:['Married','已婚'], DIVORCED:['Divorced','離婚'],

  WIDOWED:['Widowed','喪偶'], SINGLE_PARENT:['Single Parent','單親'], PARTNER:['Unmarried Partner','未婚伴侶'], SEPARATED:['Separated','分居'],

  ELEMENTARY:['Elementary School','小學'], HIGH_SCHOOL:['Senior High School','高中'], COLLEGE:['College','大專'], UNIVERSITY:['University','大學'], VOCATIONAL:['Vocational','職業訓練'],

  GOOD:['Good','好'], FAIR:['Average','中等'], NONE:['None','不懂'], LEARNING:['Learning','學習中'], NATIVE:['Native','母語'],

  OVERSEAS:['Overseas','海外'], LOCAL:['Local','本地'], TRANSFER:['Transfer','轉介'],

  CHRISTIAN:['Christian','基督教'], CATHOLIC:['Catholic','天主教'], MUSLIM:['Muslim','回教'],

  BUDDHIST:['Buddhist','佛教'], HINDU:['Hindu','印度教']

};

/* 星座／生肖中文字（網站顯示方式） */

const PROF_ZODIAC_CN = ['水瓶座','雙魚座','白羊座','金牛座','雙子座','巨蟹座','獅子座','處女座','天秤座','天蠍座','射手座','摩羯座'];

const PROF_CZODIAC_CN = ['猴','雞','狗','豬','鼠','牛','虎','兔','龍','蛇','馬','羊'];

/* 職稱：英文 + 中文（固定） */

const PROF_T = {

  maidNo:'Maid number 傭工編號', maidType:'Type of maid 傭工類型', name:'Name 傭工姓名',

  finishDate:'Finish contract date 完約日期', nat:'Nationality 國籍', edu:'Education 教育程度',

  dob:'Date of Birth 出生日期', religion:'Religion 宗教', age:'Age 年齡', weight:'Weight 體重',

  marital:'Marital Status 婚姻狀況', height:'Height 高度',

  spouse:"Spouse's Name 配偶", sibling:'Sibling 兄弟姐妹數目', occ:'Occupation 配偶職業', childAge:'Age of children 子女年齡',

  noExp:'No experience 沒有經驗', hasExp:'Experience 有經驗', langAbility:'Language Ability 語文能力',

  remark:'Remark 備註', countryExp:'Country Experience 地區工作經驗', duties:'Duties Priority 工作意向',

  location:'Location 工作地點', period:'Working period 工作日期', houseSize:'Size of house 單位面積',

  persons:'No of person served 僱主家庭人數', holiday:'Holiday arrangement 放假安排',

  noMaid:'No. of Maid in the family 傭工數目', salary:'Last salary 工資', reason:'Reason of leaving 離職原因',

  lastEmp:'Last Employer 上任僱主', prevEmp:'Previous Employer 前任僱主'

};


/* ── PROF_EXP / PROF_DUTY_LABELS / PROF_PRIORITY_LABELS ── */
const PROF_EXP = {

  baby:['Taking care of babies 照顧嬰兒'], child:['Taking care of children 照顧小童'],

  elder:['Taking care of elderly 老人護理'], sick:['Taking care of sick 照顧病患'],

  cook:['Cooking 烹飪'], house:['House Work 家務'], pet:['Pet Care 照顧寵物']

};

const PROF_DUTY_LABELS = {

  baby:'Take care of babies 照顧嬰兒', child:'Take care of children 照顧小孩',

  elder:'Take care of elderly 照顧老人', sick:'Take care of sick 照顧病患',

  house:'House work 一般家務', hand:'Hand-Washing Clothes 手洗衣服', share:'Share Room 與他人共用房間',

  pet:'Pet Care 照顧寵物', market:'Go to market 街巿買餸', car:'Car wash 洗車',

  cook:'Cooking 烹飪', cn:'Chinese 中餐', west:'Western 西餐', other:'Other 其他'

};

/* 網站 Duties Priority（工作意向）原文字＋次序：嬰兒 / 老人 / 寵物 / 小童 / 病患 / 烹飪 */

const PROF_PRIORITY_LABELS = {

  baby:'Taking care of babies 照顧嬰兒', elder:'Taking care of elderly 照顧老人',

  pet:'Pet Care 照顧寵物', child:'Taking care of children 照顧小童',

  sick:'Taking care of sick 照顧病患', cook:'Cooking 烹飪'

};


/* ── IMPORT_PROFILES ── */
const IMPORT_PROFILES = {

  helperdb:{

    id:'helperdb', kind:'fdh', label:'helper db（工人庫）',

    /* detect 用「該檔案獨有」的欄位，避免兩份 xlsx 互相誤判 */

    detect:['工人編號','工人姓名','國籍','婚姻狀況','教育程度'],

    cols:{ extCode:'工人編號', engName:'工人姓名', nationality:'國籍', birth:'出生日期',

      marital:'婚姻狀況', education:'教育程度', langCt:'廣東話', langEn:'英語', langPtn:'普通話',

      contract:'狀態', handover:'開始上班日期',

      contractExpiry:'合約完約日期 (工人資料)' },

    /* 多欄合計：星馬＝新加坡＋馬來西亞；中東＝中東＋沙特；其他＝印尼＋菲律賓 */

    /* 總年資欄只有 13 筆有值；缺失時以各地經驗加總推算 */

    derive:{ expYears:{ src:'總年資', fallbackSum:['香港','新加坡','馬來西亞','台灣','中東','沙特亞拉伯','印尼','菲律賓'] } },

    /* 電話欄需按國碼分流到三個電話欄位 */

    phoneCol:'聯絡電話',

    extra:['總年資','檔案編號','僱主名稱','申請類別','負責同事','聘用日期','合約完約日期 (僱主資料)','宗教','身高','體重',

      '兄弟姐妹數目','介紹人','Facebook','原居地地址','分店','輸入日期','上載日期','海外代理商'],

    labels:{'僱主名稱':'僱主','檔案編號':'僱主檔案編號','合約完約日期 (僱主資料)':'合約完約(僱主)','兄弟姐妹數目':'兄弟姊妹數目','原居地地址':'原居地','Facebook':'Facebook','總年資':'總年資(原值)'}

  },

  employerdb:{

    id:'employerdb', kind:'emp', label:'employer db（僱主庫）',

    detect:['僱主名稱','合約地址','客戶來源','到港日期'],

    cols:{ salutation:'僱主名稱', refCode:'檔案編號', sales:'負責同事', phone:'聯絡電話', source:'客戶來源' },

    extra:['申請日期','分店','合約地址','出生日期','介紹人','出生日期#2','聯絡電話#2','原居地地址','工人編號','工人姓名',

      '到港日期','工作簽証生效日期','工作簽証到期日','合約完約日期','合約終止日期','取消申請日期'],

    flags:{'取消申請日期':{field:'stage', value:'TERMINATED'}},

    labels:{'出生日期':'僱主出生日期','出生日期#2':'工人出生日期','聯絡電話#2':'工人電話','原居地地址':'工人原居地',

      '到港日期':'到港日期','工作簽証生效日期':'簽証生效日','工作簽証到期日':'簽証到期日','合約完約日期':'合約完約日',

      '合約終止日期':'合約終止日','取消申請日期':'取消申請日','申請日期':'申請日期','合約地址':'合約地址','分店':'分店','介紹人':'介紹人'}

  },

  /* ── INDO HELPER.xlsx（Best Helper / Good / No good / Blacklist 四表） ──

     欄位為英文，值格式：HK exp = "6MONTHS"/"12YEARS"；Total Exp = "3 T.W"/"2 S.G.P/3T.W"

     Language = MANDARIN/CANTONESE/ENGLISH/BAHASA；Skills = KID/OLD/NB/PETS */

  indohelper:{

    id:'indohelper', kind:'fdh', label:'INDO HELPER（工人庫）',

    detect:['Name','BIRTHDAY','HK exp','Total Exp in years','Skills'],

    cols:{ engName:'Name', birth:'BIRTHDAY', expYears:'Total Exp in years', phone:'Number' },

    /* 經驗欄位需把文字（'6MONTHS' / '12YEARS'）解析成數字 */

    /* 「Language」欄混載多種語言，獨立處理（不直接對映到 langCt） */

    langCol:'Language',

    /* 「Skills」欄需按縮寫拆成多個標籤，獨立處理 */

    skillCol:'Skills',

    /* 「Year of Birth」為備用出生年（BIRTHDAY 為空時用） */

    derive:{ birth:{ src:'BIRTHDAY', fallbackYear:'Year of Birth' } },

    /* 總年資缺失時以香港經驗推算 */

    deriveExpYears:{ src:'Total Exp in years', fallback:'HK exp' },

    extra:['Follow up on','Biodata','Year of Birth','Language','Skills','FB','Why good'],

    labels:{'Follow up on':'跟進','Biodata':'個人資料','Year of Birth':'出生年份','Language':'語言','Skills':'技能','FB':'Facebook','Why good':'優點'},

    /* 技能標籤對照（來源縮寫 → CRM SKILLS 碼） */

    skillMap:{ KID:'S_TODDLER', OLD:'S_ELDERLY', NB:'S_NEWBORN', PET:'S_DOG', PETS:'S_CAT', SICK:'S_ILLNESS', SPECIAL:'S_SPECIAL', HOUSE:'S_GOODCOOK', COOK:'S_GOODCOOK', CAR:'S_WASHCAR', DRIVE:'S_DRIVING', DOG:'S_DOG', CAT:'S_CAT' },

    /* 語言值 → 三個語言欄位 */

    langMap:{ CANTONESE:'langCt', CANTONSE:'langCt', CANTON:'langCt',

      MANDARIN:'langPtn', ENGLISH:'langEn', ENGLISHG:'langEn', ENG:'langEn', BAHASA:'langEn' },

    /* 「Total Exp」內的地區縮寫 → 各地經驗欄位 */

  },

  /* ── new salary 2027.xlsx（Sheet1 僱主清單） ──

     Sign Date 為 Excel 日期序號（讀取器已自動轉 ISO）；Employer (ER) Tel 含空格 */

  newsalary:{

    id:'newsalary', kind:'emp', label:'new salary 2027（僱主庫）',

    detect:['Reference Code','Old Reference Code','Sign Date','Employer (ER) Name'],

    cols:{ refCode:'Reference Code', refCodeOld:'Old Reference Code', sales:'Sales',

      salutation:'Employer (ER) Name', erNameZh:'Employer (ER) Chinese Name', phone:'Employer (ER) Tel' },

    extra:['Sign Date','New salary'],

    labels:{'Sign Date':'簽約日期','New salary':'新薪金'},

    /* 「NIL」代表無舊編號，應當空白 */

    nilValues:['NIL','N/A','NA','-','--',''],

    /* 電話含空格（'9042 3574'）→ 去除分隔符 */

    phoneClean:true,

    /* 來源 Sales 名稱 → 系統帳戶名（大小寫不敏感，容忍 'Mrs WONG' 這類變體） */

    salesAliases:{ 'MR WONG':'MR WONG', 'MRS WONG':'Mrs WONG', P:'P', CC:'CC', KITTY:'KITTY',

      AMIE:'AMIE', TERRENCE:'Terrence', WILSON:'Wilson', YUMI:'Yumi', MAGGIE:'Maggie', PHYONE:'Phyone' },

    /* 「Employer (ER) Chinese Name」實際存的是國籍括號 → 併入備註 */

    nationalityParens:true

  }

};


/* ── VAL_* 匯入值對照 ── */
const VAL_MARITAL={'married':'MARRIED','single':'SINGLE','single parent':'SINGLE_PARENT','divorced':'DIVORCED',

  'unmarried partner':'PARTNER','widowed':'WIDOWED','separated':'SEPARATED'};

const VAL_EDU={'junior high school':'HIGH_SCHOOL','senior high school':'HIGH_SCHOOL','college':'COLLEGE',

  'elementary school':'ELEMENTARY','elementary':'ELEMENTARY','primary school':'ELEMENTARY','小學':'ELEMENTARY',

  'university':'UNIVERSITY','vocational school':'VOCATIONAL'};

const VAL_LANG={'好':'GOOD','中等':'FAIR','學習中':'NONE','沒有評價':'NONE','good':'GOOD','fair':'FAIR','none':'NONE','native':'NATIVE','母語':'NATIVE','very good':'GOOD','verygood':'GOOD'};

const VAL_NAT={'filipino':'PH','indonesian':'ID','hong kong':'OTHER','china':'OTHER','ph':'PH','id':'ID','other':'OTHER'};

const VAL_CONTRACT={'待聘':'FIND_JOB','已聘':'HAVE_JOB','取消':'NOT_FINDING','保留':'FOLLOW_UP'};


/* ── CSV_FIELDS_FDH / CSV_FIELDS_EMP ── */
const CSV_FIELDS_FDH = [

  {k:'engName', req:true, names:{zhHant:'英文名',en:'English Name'}},

  {k:'extCode', names:{zhHant:'工人編號',en:'Worker No.'}},

  {k:'refNo', names:{zhHant:'Reference No.',en:'Reference No.'}},

  {k:'nickname', names:{zhHant:'暱稱',en:'Nickname'}},

  {k:'nationality', names:{zhHant:'國籍',en:'Nationality'}, vals:['PH','ID','OTHER']},

  {k:'birth', type:'date', names:{zhHant:'生日日期',en:'Date of Birth'}},

  {k:'marital', names:{zhHant:'婚姻狀況',en:'Marital Status'}},

  {k:'children', type:'num', names:{zhHant:'子女數目',en:'Children'}},

  {k:'education', names:{zhHant:'教育程度',en:'Education'}},

  {k:'expYears', type:'num', names:{zhHant:'經驗年數',en:'Years of Experience'}},

  {k:'contract', names:{zhHant:'合約狀態',en:'Contract Status'}, vals:CONTRACTS},

  {k:'workerClass', names:{zhHant:'工人類別',en:'Worker Class'}, vals:WCLASS},

  {k:'classReason', names:{zhHant:'類別原因',en:'Class Reason'}},

  {k:'phoneHK', names:{zhHant:'香港號碼',en:'HK Number'}},

  {k:'phoneIndo', names:{zhHant:'印尼號碼',en:'Indonesia Number'}},

  {k:'phonePH', names:{zhHant:'菲律賓號碼',en:'Filipino Number'}},

  {k:'contractDone', type:'num', names:{zhHant:'完成合約次數',en:'Contracts Completed'}},

  {k:'skills', names:{zhHant:'技能標籤',en:'Skills'}},

  {k:'email', names:{zhHant:'電郵',en:'Email'}},

  {k:'facebook', names:{zhHant:'Facebook 帳號',en:'Facebook Account'}},

  {k:'bestInterest', names:{zhHant:'最擅長工作意向',en:'Best Interest'}, vals:BEST_INTERESTS},

  {k:'expSummary', names:{zhHant:'工作經驗（自由文字）',en:'Working Experience Summary'}},

  {k:'langEn', names:{zhHant:'英文能力',en:'English'}, vals:['NATIVE','GOOD','FAIR','NONE']},

  {k:'langCt', names:{zhHant:'廣東話能力',en:'Cantonese'}, vals:['NATIVE','GOOD','FAIR','NONE']},

  {k:'langPtn', names:{zhHant:'普通話能力',en:'Mandarin'}, vals:['NATIVE','GOOD','FAIR','NONE']},

  {k:'hkid', names:{zhHant:'HKID號碼',en:'HKID No.'}, id:true},

  {k:'passport', names:{zhHant:'護照號碼',en:'Passport No.'}, id:true},

  {k:'contractExpiry', type:'date', names:{zhHant:'續約到期日',en:'Contract Expiry'}},

  {k:'rawNotes', names:{zhHant:'原始備註',en:'Raw Notes'}},

  {k:'notes', names:{zhHant:'備註',en:'Remarks'}}

];

const CSV_FIELDS_EMP = [

  {k:'refCode', names:{zhHant:'Ref Code',en:'Ref Code'}},

  {k:'refCodeOld', names:{zhHant:'舊Ref',en:'Old Ref'}},

  {k:'salutation', req:true, names:{zhHant:'ER Name',en:'ER Name'}},

  {k:'erNameZh', names:{zhHant:'ER中文名',en:'ER Name (Chinese)'}},

  {k:'nickname', names:{zhHant:'暱稱',en:'Nickname'}},

  {k:'sales', names:{zhHant:'Sales',en:'Sales'}},

  {k:'phone', names:{zhHant:'電話',en:'Phone'}},

  {k:'whatsapp', names:{zhHant:'WhatsApp',en:'WhatsApp'}},

  {k:'family', names:{zhHant:'家庭狀況',en:'Family Status'}},

  {k:'expectDate', type:'date', names:{zhHant:'跟進日期',en:'Next Follow-up Date'}},

  {k:'level', names:{zhHant:'客戶等級',en:'Client Level'}},

  {k:'source', names:{zhHant:'來源',en:'Source'}},

  {k:'followUp', names:{zhHant:'跟進事項',en:'Follow-up Notes'}},

  {k:'title', names:{zhHant:'稱謂',en:'Salutation'}, vals:TITLES},

  {k:'district', names:{zhHant:'居住地區',en:'District'}, vals:DISTRICTS},

  {k:'email', names:{zhHant:'電郵',en:'Email'}},

  {k:'expectedStartDate', type:'date', names:{zhHant:'預計到職日期',en:'Expected Start Date'}},

  {k:'maidRoom', names:{zhHant:'工人房安排',en:'Helper Room'}, vals:HOUSE_ROOMS},

  {k:'offDay', names:{zhHant:'每週休息日',en:'Rest Day'}, vals:OFF_DAYS},

  {k:'flatSize', type:'num', names:{zhHant:'居住面積（平方呎）',en:'Flat Size (sqft)'}},

  {k:'bedrooms', type:'num', names:{zhHant:'睡房數目',en:'Bedrooms'}},

  {k:'fmAdultCount', type:'num', names:{zhHant:'成人數目',en:'Adults'}},

  {k:'fmAdultNote', names:{zhHant:'成人備註',en:'Adults Note'}},

  {k:'fmInfantCount', type:'num', names:{zhHant:'初生嬰兒數目',en:'Infants'}},

  {k:'fmInfantNote', names:{zhHant:'初生嬰兒備註',en:'Infants Note'}},

  {k:'fmChildrenCount', type:'num', names:{zhHant:'小童數目',en:'Children'}},

  {k:'fmChildrenNote', names:{zhHant:'小童備註',en:'Children Note'}},

  {k:'fmElderlyCount', type:'num', names:{zhHant:'長者數目',en:'Elderly'}},

  {k:'fmElderlyNote', names:{zhHant:'長者備註',en:'Elderly Note'}},

  {k:'fmDisabledCount', type:'num', names:{zhHant:'傷殘數目',en:'Disabled'}},

  {k:'fmDisabledNote', names:{zhHant:'傷殘備註',en:'Disabled Note'}},

  {k:'homeMembers', names:{zhHant:'留在家中人員',en:'Home Members'}},

  {k:'jobDuties', names:{zhHant:'主要工作範圍',en:'Duties'}},

  {k:'maritalPref', names:{zhHant:'婚姻狀況偏好',en:'Marital Preference'}},

  {k:'appTypes', names:{zhHant:'申請類別',en:'Application Type'}},

  {k:'needs', names:{zhHant:'需求標籤',en:'Needs'}},

  {k:'acceptedNat', names:{zhHant:'可接受國籍',en:'Accepted Nationality'}},

  {k:'stage', names:{zhHant:'階段',en:'Stage'}},

  {k:'rawNotes', names:{zhHant:'原始備註',en:'Raw Notes'}},

  {k:'notes', names:{zhHant:'備註',en:'Remarks'}}

];


/* ── STAGES ── */
const STAGES = [

  {id:'ST1',  zh:'① 新客接觸・自我介紹', en:'1. First Contact / Introduction'},

  {id:'ST2',  zh:'② 需求確認（篩選條件）', en:'2. Confirm Requirements'},

  {id:'ST3',  zh:'③ 推介候選人', en:'3. Recommend Candidates'},

  {id:'ST4',  zh:'④ 面試安排與提醒', en:'4. Interview Arrangement & Reminder'},

  {id:'ST5',  zh:'⑤ 暫緩・留待跟進', en:'5. On Hold / Follow Later'},

  {id:'ST6',  zh:'⑥ 報價與收費', en:'6. Quotation & Fees'},

  {id:'ST7',  zh:'⑦ 申請文件解說', en:'7. Required Documents'},

  {id:'ST8',  zh:'⑧ 流程時間表解說', en:'8. Process Timeline'},

  {id:'ST9',  zh:'⑨ 簽約安排', en:'9. Contract Signing'},

  {id:'ST10', zh:'⑩ 收款確認', en:'10. Payment Confirmation'},

  {id:'ST11', zh:'⑪ 入境處審批進度', en:'11. Immigration Progress'},

  {id:'ST12', zh:'⑫ 簽證獲批・領事館', en:'12. Visa Approved / Consulate'},

  {id:'ST13', zh:'⑬ 出境證・合約寄出', en:'13. Exit Permit / Contract Sent'},

  {id:'ST14', zh:'⑭ 當地培訓與考試', en:'14. Local Training & Exam'},

  {id:'ST15', zh:'⑮ 訂機票・抵港日期', en:'15. Flight Ticket & Arrival Date'},

  {id:'ST16', zh:'⑯ 接機與抵港當日', en:'16. Pickup & Arrival Day'},

  {id:'ST17', zh:'⑰ 身份證・證件保管', en:'17. HKID & Document Safekeeping'},

  {id:'ST18', zh:'⑱ 在職跟進', en:'18. Employment Follow-up'},

  {id:'ST19', zh:'⑲ 續約', en:'19. Renewal'},

  {id:'ST20', zh:'⑳ 完約・離職手續', en:'20. Completion / Termination'},

];


/* ── I18N_EXTRA ── */
const I18N_EXTRA = {

  zhHant:{

    dic:{ GOOD:'良好', BEST:'優質 BEST', NO_GOOD:'不佳 NO GOOD', BLACKLIST:'黑名單 ⚠',

      ELEMENTARY:'小學', NATIVE:'母語', S_PORK:'食豬肉',

      BABY:'湊嬰兒', CHILDREN:'湊小朋友', ELDERLY:'照顧長者', HOUSEWORK:'家務及洗衣', COOKING:'烹飪', MULTITASK:'多工處理',

      KLN:'九龍', MR:'先生 (Mr.)', MS:'小姐 (Ms.)', MRS:'太太 (Mrs.)',

      OWN_ROOM:'獨立工人房', SHARE_CHILD_ROOM:'與小孩同住', SEPARATE_SPACE:'分隔空間',

      SUNDAY:'星期日', SATURDAY:'星期六', WEEKDAY:'平日',

      FEMALE_EMPLOYER:'女僱主', MALE_EMPLOYER:'男僱主', GRANDMA:'老太太', GRANDPA:'老公公',

      D_NEWBORN:'照顧初生嬰兒', D_CHILDREN:'照顧小童', D_ELDERLY:'照顧老人', D_DISABLED:'照顧傷殘',

      D_MACHINEWASH:'機洗衣服', D_IRONING:'燙衫', D_COOKING:'煮飯', D_GARDENING:'園藝',

      D_DOGCARE:'照顧狗隻', D_CATCARE:'照顧貓隻',

      NO_PREF:'無所謂', FINISHED_CONTRACT:'在港完約', RENEWAL:'續約', EXTENSION:'延長簽證' },

    fdh:{ engName:'全名', birth:'出生日期', expYears:'總經驗年數', contractDone:'完成合約次數',

      email:'電郵', facebook:'Facebook 帳號', bestInterest:'最擅長工作意向', expSummary:'工作經驗（自由文字）' },

    wclass:{ title:'工人類別', reqReason:'必須填寫原因' },

    kb:{ title:'WhatsApp',titleEn:'WhatsApp', search:'搜尋問題／關鍵字…', stage:'階段', all:'全部', copy:'複製', send:'WhatsApp 發送', toEmp:'選擇僱主發送', guide:'階段引導', guideDesc:'選擇僱主 → 顯示目前階段 → 帶出下一步標準話術', curStage:'目前階段', lastContact:'最後對話', markContact:'標記已跟進', nextStage:'進入下一階段', entries:'條回覆', found:'找到', flow:'跟進流程', faq:'公司・服務', law:'勞工法例', noRes:'沒有符合的回覆', viewLang:'其他語言', advance:'已進入下一階段', pick:'請選擇對象' },

    emp:{ refCode:'Ref Code', refCodeOld:'舊 Ref', erNameZh:'僱主中文名', sales:'Sales（跟進同事）',

      salutation:'姓名', title:'稱謂', district:'居住地區', email:'電郵', expectedStartDate:'預計到職日期',

      familyMembers:'家庭服務人數', fmAdult:'成人', fmInfant:'初生嬰兒', fmChildren:'小童', fmElderly:'長者', fmDisabled:'傷殘／需照顧', fmNote:'備註',

      flatSize:'居住面積（平方呎）', bedrooms:'睡房數目', maidRoom:'工人房安排', offDay:'每週休息日',

      homeMembers:'留在家中人員', jobDuties:'主要工作範圍', maritalPref:'婚姻狀況偏好', appTypes:'申請類別' },

    follow:{ lastContact:'最後對話', markContact:'標記已跟進', nextStage:'下一階段', followUp:'跟進提醒', noFollow:'無未跟進僱主', daysNoContact:'日未跟進', stage:'跟進階段' },

    st:{ user:'當值' },

    lg:{ title:'會員登入', pin:'密碼', remember:'記住我（此裝置）', login:'登入', hint:'以電郵 + 密碼登入' },

    set:{ pin:'登入 PIN 碼', followDays:'跟進提醒天數（超過 N 日未對話即提醒）' }

  },

  en:{

    dic:{ GOOD:'Good', BEST:'Best', NO_GOOD:'No Good', BLACKLIST:'Blacklist ⚠',

      ELEMENTARY:'Elementary School', NATIVE:'Native', S_PORK:'Eat Pork',

      BABY:'Take care of babies', CHILDREN:'Take care of children', ELDERLY:'Take care of elderly',

      HOUSEWORK:'Cleaning & laundry', COOKING:'Cooking', MULTITASK:'Multi-tasking',

      KLN:'Kowloon', MR:'Mr.', MS:'Ms.', MRS:'Mrs.',

      OWN_ROOM:'Own Room', SHARE_CHILD_ROOM:'Share Child Room', SEPARATE_SPACE:'Separate Space',

      SUNDAY:'Sunday', SATURDAY:'Saturday', WEEKDAY:'Weekday',

      FEMALE_EMPLOYER:'Female Employer', MALE_EMPLOYER:'Male Employer', GRANDMA:'Grandma', GRANDPA:'Grandpa',

      D_NEWBORN:'Newborn Care', D_CHILDREN:'Children Care', D_ELDERLY:'Elderly Care', D_DISABLED:'Disabled Care',

      D_MACHINEWASH:'Machine Wash', D_IRONING:'Ironing', D_COOKING:'Cooking', D_GARDENING:'Gardening',

      D_DOGCARE:'Dog Care', D_CATCARE:'Cat Care',

      NO_PREF:'No Preference', FINISHED_CONTRACT:'Finished Contract', RENEWAL:'Renewal', EXTENSION:'Extension' },

    fdh:{ expYears:'Total Years of Experience', contractDone:'No. of Contracts Completed',

      email:'Email', facebook:'Facebook Account', bestInterest:'Best Interest', expSummary:'My Working Experience' },

    wclass:{ title:'Worker Class', reqReason:'requires a reason' },

    kb:{ title:'WA Customer Standard Replies',titleEn:'WA Standard Replies (EN)', search:'Search question / keyword…', stage:'Stage', all:'All', copy:'Copy', send:'Send via WhatsApp', toEmp:'Choose employer to send', guide:'Stage Guide', guideDesc:'Pick employer → show current stage → next-step standard scripts', curStage:'Current stage', lastContact:'Last contact', markContact:'Mark contacted', nextStage:'Advance to next stage', entries:'replies', found:'Found', flow:'Follow-up Flow', faq:'Company & Service', law:'Labour Law', noRes:'No matching replies', viewLang:'Other languages', advance:'Advanced to next stage', pick:'Please choose an employer' },

    emp:{ refCode:'Ref Code', refCodeOld:'Old Ref', erNameZh:'Employer Name (Chinese)', sales:'Sales (assigned colleague)',

      salutation:'Name', title:'Salutation', district:'District', email:'Email', expectedStartDate:'Expected Start Date',

      familyMembers:'Family Members Served', fmAdult:'Adult', fmInfant:'Infant', fmChildren:'Children', fmElderly:'Elderly', fmDisabled:'Disabled / Needs Care', fmNote:'Note',

      flatSize:'Flat Size (sqft)', bedrooms:'Bedrooms', maidRoom:'Helper Room', offDay:'Rest Day',

      homeMembers:'Home Members', jobDuties:'Main Duties', maritalPref:'Marital Preference', appTypes:'Application Type' },

    follow:{ lastContact:'Last contact', markContact:'Mark contacted', nextStage:'Next stage', followUp:'Follow-up reminder', noFollow:'No pending follow-ups', daysNoContact:'days without contact', stage:'Follow-up Stage' },

    st:{ user:'On duty' },

    lg:{ title:'Member Login', pin:'Password', remember:'Remember me (this device)', login:'Login', hint:'Sign in with your email and password' },

    set:{ pin:'Login PIN', followDays:'Follow-up reminder days (alert after N days without contact)' }

  },

};


/* ── 僱主問卷 → CRM 欄位對照表（PRD 流程1）───────────────────────── */
const EMP_VAL_AREA   = {'HK':'HK','KLN':'KLN','NT':'NT'};
const EMP_VAL_MROOM  = {'Own Room':'OWN_ROOM','Share Child Room':'SHARE_CHILD_ROOM','Separate Space':'SEPARATE_SPACE','Other':'OTHER'};
const EMP_VAL_OFFDAY = {'Sunday':'SUNDAY','Saturday':'SATURDAY','Weekday':'WEEKDAY','Other':'OTHER'};
const EMP_VAL_HOME   = {'Female Employer':'FEMALE_EMPLOYER','Male Employer':'MALE_EMPLOYER','Grandma':'GRANDMA','Grandpa':'GRANDPA'};
const EMP_VAL_DUTY   = {'Housework':'D_HOUSEWORK','Newborn':'D_NEWBORN','Children':'D_CHILDREN','Elderly':'D_ELDERLY','Disabled':'D_DISABLED','Machine Wash':'D_MACHINEWASH','Hand Wash':'D_HANDWASH','Ironing':'D_IRONING','Marketing':'D_MARKET','Cooking':'D_COOKING','Gardening':'D_GARDENING','Wash Car':'D_CARWASH','Dog Care':'D_DOGCARE','Cat Care':'D_CATCARE'};
const EMP_VAL_NEED   = {'No Holiday':'S_NOHOLIDAY','New Born':'S_NEWBORN','Toddler':'S_TODDLER','Elderly':'S_ELDERLY','Serious Illness':'S_ILLNESS','Special Child':'S_SPECIAL','Dog Care':'S_DOG','Cat Care':'S_CAT','Wash Car':'S_WASHCAR','Driving':'S_DRIVING','Male Helper':'S_MALEHELPER','Male Employer':'S_MALEEMP','No Room':'S_NOROOM','Own Room':'S_OWNROOM','Share Job':'S_SHAREJOB','Good Cook':'S_GOODCOOK'};
const EMP_VAL_APP    = {'Overseas':'OVERSEAS','Finished Contract':'FINISHED_CONTRACT','Terminated':'TERMINATED','Renewal':'RENEWAL','Extension':'EXTENSION'};
const EMP_VAL_NAT    = {'Filipino':'PH','Indonesian':'ID','Other':'OTHER'};
const EMP_VAL_MPREF  = {'Single':'SINGLE','Married':'MARRIED','No Preference':'NO_PREF'};
const EMP_VAL_SOURCE = {'Walk-in':'WALKIN','Friend Referral':'REFERRAL','Facebook / Social Media':'FB','Website / Search Engine':'ONLINE'};

/* ── 標準回覆知識庫 ── */
const KB = [

/* ───── 跟進流程（培訓手冊 Sequence 1–19） ───── */

{id:'K01', cat:'flow', stage:'ST1', q:{zh:'初次接觸僱主：自我介紹', en:'First contact: self-introduction'},

 a:{zh:'{僱主稱呼}，你好！我係{中介公司名}嘅同事，之後由我負責為你聘請家傭嘅事宜，附上卡片。如果有任何疑問，請唔好客氣隨時發問。',

    en:'Hello {僱主稱呼}! I am a colleague from {中介公司名} and I will be responsible for your helper hiring. My card is attached. If you have any questions, please feel free to ask at any time.'}},

{id:'K02', cat:'flow', stage:'ST2', q:{zh:'覆核僱主對工人的篩選條件', en:'Confirm the employer\'s helper requirements'},

 a:{zh:'以下係你需要工人嘅條件，我整理咗，如果有任何遺漏請告訴我：\n• 國籍：印尼工人\n• 香港經驗優先\n• 無房，瞓客廳\n• 30歲左右\n• 已婚育有子女\n• 照顧老人家（健康）\n• 大圍居屋',

    en:'Here is the summary of your helper requirements — please let me know if anything is missing:\n• Nationality: Indonesian helper\n• HK experience preferred\n• No own room, sleeping in living room\n• Around 30 years old\n• Married with children\n• Caring for elderly (healthy)\n• Living in Tai Wai HOS flat'}},

{id:'K03', cat:'flow', stage:'ST3', q:{zh:'推介候選工人並安排面試', en:'Recommend candidates and arrange interview'},

 a:{zh:'{僱主稱呼}，以上幾位工人都係我哋為你挑選過、符合你要求嘅工人，請你睇吓係咪合適。如果可以，我哋可以為你安排面試，請問可否畀我一至兩個你可以面試嘅時段？到時我會約好工人同你面試。',

    en:'{僱主稱呼}, the helpers above were shortlisted by us to match your requirements. Please review whether they suit you. If OK, we can arrange interviews — could you give me one or two time slots that work for you? I will then fix the interview with the helpers.'}},

{id:'K04', cat:'flow', stage:'ST4', q:{zh:'面試前夕提醒及名單', en:'Interview eve reminder and list'},

 a:{zh:'提提你，明天（日期+時間）預約咗以下工人面試：\n1. 工人A\n2. 工人B\n3. 工人C\n以下係我對幾位工人嘅觀感，如果你對佢哋有咩想法，歡迎同我哋交換意見。',

    en:'Just a reminder: tomorrow (date, time) we have scheduled interviews with the following helpers:\n1. Helper A\n2. Helper B\n3. Helper C\nBelow are my impressions of them — feel free to share your thoughts with us.'}},

{id:'K05', cat:'flow', stage:'ST5', q:{zh:'暫時未能配對／暫時關閉群組', en:'Unable to match for now / closing the group'},

 a:{zh:'{僱主稱呼}，我會再畀你其他嘅工人資料，到時再安排面試吖。\n（若暫時終止）{僱主稱呼}，我暫時刪除呢個群組，如果你日後仍有需要，或對任何工人有疑問，不妨向我查詢。我識答嘅都會盡力解答，唔識嘅亦會嘗試幫你搵答案。日後有需要，請再隨時搵我，謝謝。',

    en:'{僱主稱呼}, I will send you more helper profiles and we can arrange interviews later.\n(If pausing) {僱主稱呼}, I will remove this group for now. If you need anything in future or have questions about any helper, feel free to ask me. I will do my best to answer, and will try to find answers for what I don\'t know. You are always welcome to reach out again. Thank you.'}},

{id:'K06', cat:'flow', stage:'ST6', q:{zh:'收費查詢（優惠價・簡短版）', en:'Fees enquiry (promo price, brief)'},

 a:{zh:'原價 $17,000／$15,000，優惠價 $16,000／$14,000，包驗身兩次、機票、簽證、領事館手續、接機、所有文件費用。簡單講工人抵港前全包，除保險。保險約 $1,280 兩年，你第一次光顧，我優惠保險 $1,100 兩年。',

    en:'Regular price $17,000/$15,000, promotional price $16,000/$14,000 — including two medical checks, air ticket, visa, consulate procedures, airport pickup and all document fees. In short, everything before arrival is covered except insurance. Insurance is about $1,280 for 2 years; for your first time with us, insurance at $1,100 for 2 years.'}},

{id:'K07', cat:'flow', stage:'ST7', q:{zh:'申請外傭需要什麼文件？（詳細清單）', en:'Documents required to hire a helper (full list)'},

 a:{zh:'您好！申請外傭主要需準備：\n1. 財力證明（三選一）：最近稅單／三個月糧單／三個月銀行定期存款單。\n2. 住址證明副本（最近3個月內）：差餉單、水／電／煤氣／固網電話費單（⚠ 入境處不接受銀行月結單及手提電話費單）。\n3. 家庭收入：總家庭成員入息證明。\n4. 身份證明：僱主身份證副本，及所有同住家庭成員姓名、身份證號碼及出生日期。\n5. 現有傭工資料（如適用）：現任傭工姓名、身份證號碼及終止合約日期或簽證到期日。\n其他輔助文件：結婚證書、出世紙、經濟擔保信或公屋暫住證等。',

    en:'Hello! Main documents for hiring a helper:\n1. Financial proof (choose one): latest tax demand note / 3 months\' pay slips / 3-month fixed deposit statement.\n2. Address proof copy (within 3 months): rates, water/electricity/gas/landline bills (⚠ bank statements and mobile bills NOT accepted by Immigration Dept).\n3. Household income: income proof of all household members.\n4. Identity: copy of employer\'s HKID, plus names, HKID numbers and dates of birth of all household members.\n5. Current helper (if any): name, HKID no., and contract termination date or visa expiry.\nSupporting docs: marriage certificate, birth certificates, financial guarantee letter or public housing temporary residence permit, etc.'}},

{id:'K08', cat:'flow', stage:'ST8', q:{zh:'整個申請流程時間表（三個月）', en:'Full application timeline (about 3 months)'},

 a:{zh:'您好！整個聘請流程大約需時三個月：\n1. 物色與確認：挑選並面試工人，確認人選。\n2. 遞交申請：簽約付款後，我們收齊雙方必需文件，正式啟動。\n3. 入境處審批：約6–8星期（我們會盡力催促，希望4–6星期完成）。\n4. 領事館認證：約1–2星期，收到有效合約即香港手續完成。\n5. 當地培訓與出境：合約寄往當地，安排驗身及上堂，由菲律賓／印尼政府批出出境證（約3–4星期，我們會盡力催促）。\n6. 安排抵港：夾好抵港日期、購買機票及安排細節。\n7. 接機與交收：抵港當日安排接機、驗身、午膳及文件手續，約當天下午4–5點後可親臨本公司接工人回家！',

    en:'Hello! The whole process takes about 3 months:\n1. Selection: interview and confirm the helper.\n2. Submission: after signing & payment, we collect all documents and start the application.\n3. Immigration Dept approval: about 6–8 weeks (we push for 4–6 weeks).\n4. Consulate authentication: 1–2 weeks; upon receiving the verified contract, the HK part is done.\n5. Local training & exit: contract sent to PH/ID, medical & training arranged, exit permit issued by local government (3–4 weeks, we chase hard).\n6. Arrival: fix arrival date, buy ticket, arrange details.\n7. Pickup & handover: on arrival day — pickup, medical, lunch and documents; you can take her home at our office after ~4–5 pm!'}},

{id:'K09', cat:'flow', stage:'ST9', q:{zh:'簽約時間、地點及替代方案', en:'Signing time, place and alternatives'},

 a:{zh:'{僱主稱呼}，請問咩時間方便到我司簽約？我司營業時間係每日早上11時至晚上7時。如果需要提早或延遲，請告訴我哋，我哋會盡力配合。如果你真係唔方便到司簽約，我哋亦可郵寄合約到你指定地址，屆時你填好後寄返我司就可以。',

    en:'{僱主稱呼}, when would be convenient for you to sign at our office? Our opening hours are 11 am – 7 pm daily. If you need earlier or later, let us know and we will try to accommodate. If you really cannot come, we can mail the contract to your address — just fill it in and mail it back to us.'}},

{id:'K10', cat:'flow', stage:'ST10', q:{zh:'確認收妥文件及款項（定心丸）', en:'Confirm documents & payment received'},

 a:{zh:'多謝你！我哋已收妥你嘅文件同款項，會馬上處理你嘅申請。我哋現正同步收集工人所有相關文件、護照及證書等，工人亦會於近期進行驗身。及後嘅申請程序同手續，我哋都會定時向你匯報。\n（若未收齊款項）多謝你！我哋已收妥你嘅文件，待你交齊款項，我哋會馬上處理你嘅申請。工人嘅文件收集同驗身安排照常進行，及後程序我哋會定時匯報。',

    en:'Thank you! We have received your documents and payment, and will process your application right away. We are collecting all the helper\'s documents, passport and certificates; her medical check will be arranged soon. We will keep you updated on every step.\n(If payment incomplete) Thank you! We have received your documents. Once your payment is complete, we will process the application immediately. Document collection and the helper\'s medical check proceed as normal; we will report progress regularly.'}},

{id:'K11', cat:'flow', stage:'ST11', q:{zh:'入境處進度匯報', en:'Immigration progress update'},

 a:{zh:'通知你，工人嘅申請程序順利，約一星期前我哋已收到入境處嘅申請編號（例：EHEF 145 3544-23(0)）。申請一切順利，我哋會定時再向你跟進，請放心。有任何疑問請隨時搵我。\n（若已遞交一個月）你工人嘅工作簽證申請，我司已於一個月前遞交至入境處，正常會於兩週間批出，我哋會再向你匯報最新情況，暫時一切正常順利，請放心。',

    en:'Good news — the helper\'s application is going smoothly. About a week ago we received the Immigration Dept\'s application reference (e.g. EHEF 145 3544-23(0)). Everything is on track; we will follow up with you regularly. Please rest assured, and reach out anytime.\n(One month after submission) Your helper\'s work visa application was submitted to the Immigration Dept one month ago. Approval normally comes within about two weeks; we will keep you posted. All is normal so far.'}},

{id:'K12', cat:'flow', stage:'ST12', q:{zh:'簽證獲批通知及下一步', en:'Visa approved — next steps'},

 a:{zh:'{僱主稱呼}，通知你，你工人嘅工作簽證已獲入境事務處批出！我哋會於明天前取回正本，隨後馬上進行領事館手續，為期約1–2星期。領事館手續完成，香港嘅部份亦全部完成，即你工人嘅申請程序已完成超過一半。預計合約寄抵當地後，出境證會於3–4星期內批出，我哋會著力叫同事加緊幫你跟進，希望可以合約寄抵後3星期內安排工人到港。',

    en:'{僱主稱呼}, good news — your helper\'s work visa has been approved by the Immigration Department! We will collect the original by tomorrow, then immediately start the consulate procedures (about 1–2 weeks). Once done, the HK part is fully complete — more than half of the whole process. After the contract reaches her home country, the exit permit usually takes 3–4 weeks; we will push hard and aim to arrange her arrival within 3 weeks of the contract arriving.'}},

{id:'K13', cat:'flow', stage:'ST13', q:{zh:'領事館手續完成・接機預告', en:'Consulate done — pickup preview'},

 a:{zh:'{僱主稱呼}，你工人嘅領事館手續都完成咗！我哋隨後會馬上把已批核嘅合約寄往當地辦理出境證。工人抵港當日可以於我司接工人，大約三、四點左右工人就會喺我司準備好。但一切請等我再通知，出境證批出後，我會同你夾好邊一日接工人／安排抵港較好。',

    en:'{僱主稱呼}, your helper\'s consulate procedures are all done! We will send the approved contract to her home country right away for the exit permit. On arrival day you can pick her up at our office — she will be ready around 3–4 pm. But please wait for my confirmation: after the exit permit is issued, I will fix the best arrival/pickup date with you.'}},

{id:'K14', cat:'flow', stage:'ST13', q:{zh:'合約寄出後說明（菲線／印線）', en:'After contract sent (PH line / ID line)'},

 a:{zh:'【菲律賓線】{僱主稱呼}，你工人嘅合約將於今個星期寄出，之後等菲律賓完成出境證手續，工人就可以訂機票到港。我希望一月底前完成，因為菲律賓放聖誕節比較長，我會好好幫你跟進，請放心。\n【印尼線】{僱主稱呼}，你工人嘅合約將於今個星期寄出，之後等印尼完成出境證手續，工人就可以訂機票到港。我希望一月底前完成，因為印尼最近嘅電腦申請程序有所更新，偶有滯後情況，我會好好幫你跟進，如有特殊情況會預先告訴你，方便你預算，請放心。',

    en:'[PH line] {僱主稱呼}, your helper\'s contract will be sent out this week. After the Philippines completes the exit permit, we can book her flight to HK. I hope to finish by end of January — the Philippine Christmas break is long, but I will follow up closely. Please rest assured.\n[ID line] {僱主稱呼}, your helper\'s contract will be sent out this week. After Indonesia completes the exit permit, we can book her flight. I hope to finish by end of January — Indonesia\'s online system was recently updated and can be slow at times. I will follow up closely and warn you in advance of any special circumstances so you can plan. Rest assured.'}},

{id:'K15', cat:'flow', stage:'ST14', q:{zh:'當地培訓、廣東話考核及考試結果', en:'Local training, Cantonese test and results'},

 a:{zh:'工人嘅 training 已安排於今個星期五開始，下星期中完成考試。一切順利嘅話，12月8日前就可以批出出境證，隨後安排到港。提醒返：而家 training 嘅考試加咗廣東話考核（大約100頁紙），多咗工人喺呢part唔合格。我希望你工人可以一take過，如果不幸fail，按慣例每星期六都可以補考。我會同你匯報最新情況，預計工人十二月中到港無變，謝謝。',

    en:'The helper\'s training starts this Friday, with the exam mid-next-week. If all goes well, the exit permit can be issued before 8 Dec and her arrival arranged after. Reminder: the training exam now includes a Cantonese test (about 100 pages), and more helpers are failing this part. I hope yours passes in one go; if she fails, make-up exams are held every Saturday as usual. I will keep you updated — her mid-December arrival is unchanged. Thank you.'}},

{id:'K16', cat:'flow', stage:'ST15', q:{zh:'考核合格後敲定抵港日期', en:'Exam passed — fix the arrival date'},

 a:{zh:'工人嘅考核結果已經合格，出境證程序亦已進行中，我司可以馬上購買工人最快抵港嘅機票。請問咩日子方便你呢？（或主動畀日期）請問如果安排工人1月7日或1月8日到港，你方便接工人嗎？',

    en:'The helper has passed her exam and the exit permit process is underway — we can buy her earliest flight to HK right away. Which date suits you best? (Or proactively:) Would 7 or 8 January work for you to pick her up?'}},

{id:'K17', cat:'flow', stage:'ST15', q:{zh:'落實航班及抵港時間', en:'Flight and arrival time confirmed'},

 a:{zh:'{僱主稱呼}，以上係你工人落實咗嘅抵港日期及航班資料。工人抵港時間落實咗12月30日上午9點45分，隨後我哋會安排工人驗身、午膳及文件手續，你哋大約下午四點可以於我司接工人，謝謝。',

    en:'{僱主稱呼}, above are the confirmed arrival date and flight details. Arrival is confirmed for 30 Dec, 9:45 am. Afterwards we will arrange her medical check, lunch and document procedures — you can pick her up at our office at around 4 pm. Thank you.'}},

{id:'K18', cat:'flow', stage:'ST16', q:{zh:'工人抵港當日＋驗身報告跟進', en:'Arrival day + medical report follow-up'},

 a:{zh:'【抵港當天】{僱主稱呼}，你工人已經抵港，到我司完成手續後我會再通知你。請唔使急於到我司接工人，工人可以喺我司休息等候。以下係我司地址，如不明白請直接致電我。\n【驗身報告】{僱主稱呼}，呢份係工人嘅驗身報告，一切正常。下次等工人放假時先到我司攞報告都無問題，唔使急，一個月後都得。',

    en:'[Arrival day] {僱主稱呼}, your helper has arrived. I will notify you once she is at our office and the procedures are done. No rush to come — she can rest and wait at our office. Our address is below; call me directly if unclear.\n[Medical report] {僱主稱呼}, here is your helper\'s medical report — all normal. You may collect it at our office when the helper is on her day off; no rush, even a month later is fine.'}},

{id:'K19', cat:'flow', stage:'ST17', q:{zh:'身份證預約＋護照保管提示', en:'HKID appointment + passport safekeeping note'},

 a:{zh:'我哋已幫你工人預約咗X月X日 xx:xx 申領身份證，請提醒工人帶同合約正本、護照及預約通知書到XXX入境處辦理手續。\n過往亦有僱主為怕工人拎護照去借錢，會把護照交由我司代為保管。請留意，如果工人特別抗拒，我司唔會強行留起工人護照，但可以請你哋同工人保持良好溝通，有任何情況都可以同我哋交換意見，我哋定必盡量解答。以上各項我都會獨立同工人解釋一次，確保佢知道領取身份證嘅須知，請唔使擔心。',

    en:'We have booked your helper\'s HKID appointment on (date, time). Please remind her to bring the original contract, passport and appointment notice to (Immigration Branch).\nSome employers, worried helpers may use their passport for loans, leave it with us for safekeeping. Please note: if the helper strongly objects, we will not keep her passport by force — but we encourage good communication with her, and you can always discuss any concerns with us. I will also explain all of this to the helper separately to make sure she understands the HKID requirements. No worries.'}},

{id:'K20', cat:'flow', stage:'ST18', q:{zh:'在職跟進：了解相處情況（正／負面回應）', en:'Employment check-in (positive / negative responses)'},

 a:{zh:'【例行慰問】{僱主稱呼}，請問工人同你哋相處如何？有冇反映或需要我哋協助嘅地方？單純一問，我司一貫做法，冇特別。\n【反應正面】聽到你咁講真係太好啦！我哋都希望工人同你哋相處融洽，日後有咩需要幫忙，請唔好客氣同我哋商量。\n【反應負面】好嘅，明白。有關你對工人工作表現嘅意見，我哋會認真看待，之後會向工人問及工作情況及有咩困難，請容許我哋溝通後再向你跟進。',

    en:'[Routine check-in] {僱主稱呼}, how are things going with your helper? Any feedback or anything we can help with? Just a routine check we do for all employers.\n[Positive] So glad to hear that! We hope the placement keeps going well — reach out anytime if you need anything.\n[Negative] Understood. We take your feedback on her performance seriously. We will talk to the helper about her work and any difficulties, and follow up with you after we have spoken to her.'}},

{id:'K21', cat:'flow', stage:'ST18', q:{zh:'良好回饋回覆＋群組階段性結束', en:'Positive feedback reply + group closing'},

 a:{zh:'{僱主稱呼}，你好，我有時間想同你反映返：工人上星期有到我司，我睇得出佢好中意你哋屋企！佢話你哋有幫佢慶祝生日，佢好開心。嚟緊你哋第一次一齊過聖誕，我希望你哋一家開開心心，同工人相處一直融洽。如果對工人表現或任何情況想同我傾，我隨時歡迎，謝謝你。\n（群組結束）呢個群組嘅功能暫時告一段落，如果你仍有工人上嘅疑問，不妨向我查詢。我識嘅都會盡力解答，唔識嘅亦會嘗試幫你搵答案。日後有需要，請再隨時搵我，謝謝。',

    en:'{僱主稱呼}, I wanted to share some feedback: your helper visited our office last week and I could see she really likes your family! She mentioned you celebrated her birthday and she was very happy. With your first Christmas together coming up, I wish your family all the best and a continued good relationship with her. If you ever want to discuss her performance or anything else, I am always here. Thank you.\n(Group closing) This group has served its purpose for now. If you still have questions about your helper, feel free to ask me — I will do my best, and will find answers for what I don\'t know. Reach out anytime. Thank you.'}},

/* ───── 公司・服務（應對手冊） ───── */

{id:'K22', cat:'faq', stage:'', q:{zh:'公司地址及交通', en:'Office address and transport'},

 a:{zh:'您好！我哋公司地址係：香港上環德輔道中210號顏氏大廈14樓（14/F Ngan House, 210 Des Voeux Road Central, Sheung Wan）。交通好方便，喺上環地鐵站E1出口，上環永安百貨對面。歡迎你隨時親臨本公司諮詢或辦理手續！',

    en:'Hello! Our office is at 14/F Ngan House, 210 Des Voeux Road Central, Sheung Wan, Hong Kong. Very convenient — Exit E1 of Sheung Wan MTR, opposite Wing On Department Store. You are welcome to visit us anytime!'}},

{id:'K23', cat:'faq', stage:'', q:{zh:'銀行帳戶資料及轉帳後做法', en:'Bank account details and what to do after transfer'},

 a:{zh:'您好！你可以將款項轉帳至以下官方指定銀行帳戶：\n1. 中國銀行(香港) BOCHK — 戶口名稱：Ka Shing Manpower Agency；帳號：012-875-2-172142-3；轉數快FPS：123847493\n2. 香港上海匯豐銀行 HSBC — 戶口名稱：Ka Shing Manpower Agency；帳號：598-232-544-001；轉數快FPS：133349779\n⚠ 重要提醒：轉帳完成後，請保留入數收據或轉帳成功截圖，透過電郵或WhatsApp發返俾我哋，以便核對及跟進手續，謝謝！',

    en:'Hello! Please transfer to either of our official accounts:\n1. BOCHK — Account name: Ka Shing Manpower Agency; A/C: 012-875-2-172142-3; FPS: 123847493\n2. HSBC — Account name: Ka Shing Manpower Agency; A/C: 598-232-544-001; FPS: 133349779\n⚠ Important: after transferring, please keep the receipt/screenshot and send it back to us by email or WhatsApp so we can verify and follow up. Thank you!'}},

{id:'K24', cat:'faq', stage:'ST6', q:{zh:'聘請菲傭／印傭費用明細（全包・無隱藏收費）', en:'PH/ID helper fee breakdown (all-inclusive, no hidden charges)'},

 a:{zh:'您好！我哋採取透明收費、全包服務，絕無隱藏收費。經朋友或舊客戶介紹更有優惠。\n• 海外菲律賓傭工 HK$14,500／海外印尼傭工 HK$15,500，已全面包：篩選及配對費、領事館合約認證費、入境處工作簽證費、文件速遞、代辦領事館報到、海外驗身、當地簽證及出境費、來港單程機票、抵港接機、香港驗身、安排香港身份證、在職跟進輔導、合約期內翻譯及勞工法例諮詢、工作手冊及備用表格。\n簡單來說：工人正式上工前所有手續費全包，唯一唔包係僱主須依法購買嘅保險（兩年期勞工及醫療保險約HK$1,280）。',

    en:'Hello! Our pricing is transparent and all-inclusive with no hidden charges. Extra discounts for referrals.\n• Overseas Filipino helper HK$14,500 / Indonesian helper HK$15,500, fully covering: screening & matching, consulate contract authentication, HK work visa, document courier, consulate reporting, overseas medical, local visa & exit fees, one-way ticket to HK, airport pickup, HK medical check, HKID arrangement, in-service counselling, translation & labour-law consultation during the contract, work handbook and forms.\nIn short: everything before she starts work is covered, except the insurance required by law (2-year employees\' compensation & medical insurance, about HK$1,280).'}},

{id:'K25', cat:'faq', stage:'', q:{zh:'菲律賓工人與印尼工人有咩分別？', en:'Difference between Filipino and Indonesian helpers?'},

 a:{zh:'您好！兩國工人特點各有不同，可以根據家庭實際需求選擇：\n• 菲律賓傭工：一般英語能力及適應能力較好，適合需要協助小朋友學習、日常英語對話或較多對外溝通嘅家庭。\n• 印尼傭工：以勤勞、耐心及強烈責任心見稱，做事細心，適合需要料理繁瑣家務、照顧長者或嬰幼兒等需要細心照料嘅家庭。',

    en:'Hello! Each nationality has its strengths — choose by your family\'s needs:\n• Filipino helpers: generally better English and adaptability; great for families who need help with children\'s studies, daily English conversation or more outside communication.\n• Indonesian helpers: known for diligence, patience and strong sense of responsibility; attentive to detail — great for housework, elderly care or infant/toddler care.'}},

{id:'K26', cat:'law', stage:'', q:{zh:'合約期內僱主須承擔嘅法定費用同福利', en:'Statutory costs and benefits during the contract'},

 a:{zh:'您好！除每月合約工資外，僱主還需依法提供：\n• 法定福利：合適及有合理私隱嘅住宿地方、免費醫療、免費膳食或膳食津貼（現時法定標準每月不少於HK$1,236）。\n• 保險責任：必須投購僱員補償保險（勞保）。\n• 其他：續約或特定情況下嘅體檢費、領事館核實費等。',

    en:'Hello! Besides the monthly wage, employers must by law provide:\n• Statutory benefits: suitable accommodation with reasonable privacy, free medical care, and free food or food allowance (currently not less than HK$1,236/month).\n• Insurance: employees\' compensation insurance (labour insurance) is mandatory.\n• Others: medical exam fees, consulate verification fees, etc. upon renewal or specific cases.'}},

{id:'K27', cat:'faq', stage:'ST7', q:{zh:'住址證明唔係本人名／住公屋有咩要求？', en:'Address proof not in own name / public housing requirements'},

 a:{zh:'您好！若證明文件唔係申請人本人，必須提供其他關係證明（如租約、結婚證書或出世紙副本）。如果你住政府公共屋苑，必須先到有關屋苑嘅房屋署辦事處申請外傭暫住證，一般需時5至7日，請提早辦理。',

    en:'Hello! If the address proof is not in your own name, you must provide relationship proof (tenancy agreement, marriage certificate or birth certificate copies). If you live in a public rental housing estate, you must first apply for a Helper\'s Temporary Residence Permit at the HD office of your estate — usually takes 5–7 days, so apply early.'}},

{id:'K28', cat:'faq', stage:'ST7', q:{zh:'外傭房間同住宿安排，入境處有咩規定？', en:'Immigration Dept rules on helper\'s room and accommodation'},

 a:{zh:'您好！入境處規定：如果外傭冇自己獨立房間（可與同性家人或小孩同房），僱主必須提供睡眠區及住家嘅平面圖和照片（必須連門牌），並撰寫信件詳細解釋家中所有成員嘅睡眠安排。此外，若外傭住宿地址為合約地址以外嘅地方，入境處一般唔會批准，請務必合約地址與實際居住地址一致。',

    en:'Hello! Immigration Dept rules: if the helper has no separate room (sharing with same-gender adults or children is allowed), the employer must provide floor plan and photos of the sleeping area and home (with door number), plus a letter explaining the sleeping arrangement of all household members. Also, accommodation at an address different from the contract address is normally not approved — the two addresses must match.'}},

{id:'K29', cat:'faq', stage:'ST16', q:{zh:'工人抵港當日安排及幾點可以接？', en:'Arrival day arrangements — what time to pick her up?'},

 a:{zh:'您好！工人抵港後，我哋會負責辦理入境及領取行李，隨後安排工人到診所驗身。驗身後工人返到我司，我哋會安排午膳及整理後續文件（存檔工作簽證、預約辦香港身份證等）。你可以喺工人抵港當天下午4:00至5:00左右親臨本公司接工人。如抵港當日需要處理電話SIM卡，我哋亦可以代購（費用由僱主或工人實報實銷，本公司只負責代購）。',

    en:'Hello! On arrival we handle immigration and luggage, then take the helper to a clinic for her medical check. Afterwards she returns to our office for lunch and document procedures (filing the work visa, booking the HKID appointment, etc.). You can pick her up at our office between about 4:00–5:00 pm on arrival day. If a SIM card is needed that day, we can help buy one (cost reimbursed by employer/helper; we only assist with the purchase).'}},

{id:'K30', cat:'faq', stage:'ST16', q:{zh:'工人抵港後有咩文件交畀僱主存檔？', en:'What documents does the employer receive after arrival?'},

 a:{zh:'您好！為方便日後管理，我哋會提供以下PDF電子檔及實體文件作後備存檔：\n1. 香港工作簽證\n2. 官方僱傭合約\n3. 驗身報告\n4. 勞工假期表\n5. 工人嘅兩年出糧簽收紀錄表\n6. 員工工作守則（英印對照）\n如有任何問題，歡迎隨時喺群組或訊息中發問，我哋會一直提供支援！',

    en:'Hello! For your records, we provide the following PDFs and hard copies:\n1. HK work visa\n2. Official employment contract\n3. Medical report\n4. Statutory holiday table\n5. Helper\'s 2-year wage payment signature record\n6. Employee handbook (English–Indonesian)\nIf any questions, feel free to ask in the group or by message — we are always here to support!'}},

/* ───── 續約（應對手冊第五部分） ───── */

{id:'K31', cat:'faq', stage:'ST19', q:{zh:'續約流程及幾時開始辦？', en:'Renewal process — when to start?'},

 a:{zh:'您好！如果希望同現任外傭喺2年合約期滿後續約，建議喺現行合約期滿前1至2個月向入境處遞交申請。另外請注意：如果續約但外傭唔能即時返回原居地度假，經雙方同意下可以將假期押後，並向入境處申請延期逗留，但有關延長逗留期限通常不可超過1年。',

    en:'Hello! To renew with your current helper after the 2-year contract ends, we suggest submitting the application to the Immigration Dept 1–2 months before expiry. Note: if the helper cannot return home for leave immediately upon renewal, the leave may be deferred by mutual agreement with an extension-of-stay application — but the extended stay normally cannot exceed 1 year.'}},

{id:'K32', cat:'faq', stage:'ST19', q:{zh:'菲傭／印傭續約費用及包含項目', en:'PH/ID renewal fees and coverage'},

 a:{zh:'您好！我哋提供一條龍續約代辦服務：\n• 菲律賓傭工續約 HK$2,000，包：領事館合約認證費、入境處工作簽證費、代辦領事館報到、菲傭兩年OWWA會員費、在職跟進輔導、翻譯及勞工法例諮詢、工作手冊及僱主備用表格。\n• 印尼傭工續約 HK$2,500，包：以上各項＋香港本地驗身（驗孕、乙型肝炎、胸肺X光、梅毒及愛滋病病毒檢驗）。\n• 保險加購優惠：兩年期勞工及醫療保險優惠價HK$1,280一併申請。',

    en:'Hello! Our one-stop renewal service:\n• Filipino helper renewal HK$2,000, covering: consulate contract authentication, HK work visa fee, consulate reporting, 2-year OWWA membership, in-service counselling, translation & labour-law consultation, work handbook and employer forms.\n• Indonesian helper renewal HK$2,500, covering: all of the above + local HK medical check (pregnancy, hepatitis B, chest X-ray, syphilis and HIV tests).\n• Insurance add-on: 2-year employees\' compensation & medical insurance at HK$1,280.'}},

{id:'K33', cat:'faq', stage:'ST19', q:{zh:'辦續約需要咩文件？如何交收？', en:'Renewal documents and handover'},

 a:{zh:'您好！辦續約雙方需要嘅文件好簡單：\n• 僱主方面(ER)：住址證明、香港身份證。\n• 外傭方面(EE)：香港身份證、護照、現有工作簽證、現有僱傭合約。\n文件齊備並由我哋辦妥後，會交畀姐姐帶返畀你哋簽名。全部手續辦妥後，你哋可以隨時過嚟公司取回文件，我哋亦會同步將合約、簽證、勞工假期表、出糧簽收紀錄及驗身報告等PDF檔發畀你哋作後備存檔！',

    en:'Hello! Renewal documents are simple:\n• Employer: address proof, HKID.\n• Helper: HKID, passport, current work visa, current employment contract.\nOnce completed, we pass the documents to the helper for your signatures. After everything is done, you may collect the documents at our office anytime; we will also send you the contract, visa, holiday table, wage records and medical report as PDFs for your records!'}},

/* ───── 勞工法例 Q&A（QA 題庫，17 條・重複已去重） ───── */

{id:'K34', cat:'law', stage:'', q:{zh:'完約不續約，僱主首要法定步驟？', en:'Contract ends without renewal — first legal step?'},

 a:{zh:'根據香港勞工法例，僱主必須喺外傭嘅僱傭合約終止或屆滿後7日內，以書面形式（填寫ID407E表格）通知香港入境事務處。',

    en:'Under HK labour law, the employer must notify the Immigration Department in writing (form ID407E) within 7 days of the helper\'s contract terminating or expiring.'}},

{id:'K35', cat:'law', stage:'', q:{zh:'法定最低膳食津貼金額？', en:'Statutory minimum food allowance?'},

 a:{zh:'截至2026年，法定最低膳食津貼為每月HK$1,236。',

    en:'As of 2026, the statutory minimum food allowance is HK$1,236 per month.'}},

{id:'K36', cat:'law', stage:'', q:{zh:'可否用現金代替回程機票？', en:'Can the return air ticket be replaced by cash?'},

 a:{zh:'不可以。僱主有法律責任提供一張返回原居地嘅免費單程機票，呢項責任不能以現金代替，除非獲得入境事務處處長同意。',

    en:'No. The employer is legally required to provide a free one-way ticket back to the helper\'s home place. This cannot be replaced by cash unless the Director of Immigration agrees.'}},

{id:'K37', cat:'law', stage:'', q:{zh:'離職機票需要包行李托運嗎？', en:'Does the departure ticket need baggage allowance?'},

 a:{zh:'雖然標準僱傭合約冇明言，但持牌中介與當地領事館簽署嘅undertaking通常規定需提供包30KG行李嘅機票，否則可能影響日後聘請或需經勞工處調解。',

    en:'Although the Standard Employment Contract does not state it explicitly, the undertaking signed by licensed agencies with the local consulate usually requires a ticket with 30kg baggage — otherwise future hiring may be affected or the Labour Department may mediate.'}},

{id:'K38', cat:'law', stage:'', q:{zh:'咩情況下外傭可獲遣散費？', en:'When is a helper entitled to severance pay?'},

 a:{zh:'如果外傭已連續為同一僱主工作不少於24個月，且僱主因「裁員」理由（如家庭經濟困難、家庭成員結構改變、移民或離港）解僱佢，便須支付遣散費。',

    en:'If the helper has worked continuously for the same employer for at least 24 months and is dismissed by reason of redundancy (e.g. financial difficulty, change in household composition, emigration or leaving HK), severance pay is payable.'}},

{id:'K39', cat:'law', stage:'', q:{zh:'遣散費與長期服務金可以同時獲得嗎？', en:'Can severance pay and long service payment be claimed together?'},

 a:{zh:'不可以。外傭只可以獲取其中一項，若同時符合兩項條件，僱主只需支付遣散費。',

    en:'No. The helper can only receive one of the two. If she qualifies for both, the employer only pays severance pay.'}},

{id:'K40', cat:'law', stage:'', q:{zh:'遣散費／長期服務金計算公式？', en:'Severance / long service payment formula?'},

 a:{zh:'計算公式：（最後一個月工資 × 2/3）× 服務年資（不足一年按比例計算），款項上限為HK$390,000嘅2/3，即HK$260,000。',

    en:'Formula: (last month\'s wages × 2/3) × years of service (pro-rata for periods under a year), capped at 2/3 of HK$390,000, i.e. HK$260,000.'}},

{id:'K41', cat:'law', stage:'', q:{zh:'做滿4年10個月完約不續約，要付長期服務金嗎？', en:'Leaves after 4 years 10 months — long service payment due?'},

 a:{zh:'唔需要。長期服務金嘅先決條件係「連續為同一僱主工作不少於5年」，未滿5年則無需支付。',

    en:'No. The prerequisite for long service payment is at least 5 years\' continuous service with the same employer — under 5 years, not payable.'}},

{id:'K42', cat:'law', stage:'', q:{zh:'提前終止合約嘅通知期？', en:'Notice period for early termination?'},

 a:{zh:'任何一方若想提前終止合約，必須給予對方不少於一個月嘅書面通知，或支付一個月工資作為代通知金。',

    en:'Either party wishing to terminate early must give the other not less than one month\'s written notice, or pay one month\'s wages in lieu.'}},

{id:'K43', cat:'law', stage:'', q:{zh:'「提早42日解約」等於完成合約嗎？', en:'Does "terminating 42 days early" complete the contract?'},

 a:{zh:'唔係。呢個係常見誤解：42日（或14日）係指外傭喺合約終止後獲准喺港逗留搵新僱主嘅期限，只要合約未滿兩年而終止，法律上即屬「提前解約」。',

    en:'No. This is a common misconception: 42 days (or 14 days) is the period a helper may remain in HK to find a new employer after termination. If the contract ends before its full two years, it is legally an early termination.'}},

{id:'K44', cat:'law', stage:'', q:{zh:'僱主每月應畀外傭幾多日休息日？', en:'How many rest days per month?'},

 a:{zh:'僱主每月應給予外傭4個休息日，至少每星期一個休息日。',

    en:'The employer must give the helper 4 rest days per month, at least one per week.'}},

{id:'K45', cat:'law', stage:'', q:{zh:'有薪年假幾多年開始？點遞增？', en:'Paid annual leave — from when and how does it grow?'},

 a:{zh:'工作滿12個月後可享7天有薪年假，年假由7天遞增至最多14天（1–2年7日、3年8日、4年9日、5年10日、6年11日、7年12日、8年13日、9年或以上14日）。',

    en:'After 12 months of service, the helper is entitled to 7 days\' paid annual leave, rising to a maximum of 14 days (years 1–2: 7; year 3: 8; year 4: 9; year 5: 10; year 6: 11; year 7: 12; year 8: 13; year 9+: 14).'}},

{id:'K46', cat:'law', stage:'', q:{zh:'工人整爛嘢，可扣幾多工資賠償？', en:'How much wages can be deducted for damaged property?'},

 a:{zh:'因疏忽引致財物受損或遺失，每次扣除上限為HK$300，且一個月內扣除總額不得超過該工資期可得工資嘅四分之一。',

    en:'For damage or loss of property caused by negligence, each deduction is capped at HK$300, and total deductions within one wage period must not exceed a quarter of the wages due.'}},

{id:'K47', cat:'law', stage:'', q:{zh:'可否強制要求外傭交出護照代為保管？', en:'Can the employer keep the helper\'s passport?'},

 a:{zh:'不可以。根據香港法例，除非外傭同意或委託，僱主並無權強制外傭交出護照並代其保存。',

    en:'No. Under HK law, unless the helper consents or entrusts it, the employer has no right to force the helper to hand over her passport for safekeeping.'}},

{id:'K48', cat:'law', stage:'', q:{zh:'休息日遇八號風球外出，僱主有責任嗎？', en:'Helper goes out on a rest day during T8 — is the employer liable?'},

 a:{zh:'休息日屬外傭私人時間，即使天氣惡劣外傭仍可自行決定，但僱主有責任提醒惡劣天氣外出保險未必賠償；若外傭自願留家則不需補假，但絕不可強迫其工作。',

    en:'A rest day is the helper\'s private time; even in bad weather she decides for herself. But the employer should remind her that insurance may not cover going out in severe weather. If she stays home voluntarily no compensation leave is due — but never force her to work.'}},

{id:'K49', cat:'law', stage:'', q:{zh:'可否喺屋企裝攝錄機監察工人？', en:'Can cameras be installed to monitor the helper?'},

 a:{zh:'任意安裝會侵犯私隱，法律唔賦予絕對監察權。如有需要必須以「合理性」及公開方式進行，記錄一般不應保留超過7日，隱蔽式監察僅限特殊例外情況。',

    en:'Installing cameras at will invades privacy; the law grants no absolute right of surveillance. If needed, it must be reasonable and open, recordings generally kept no longer than 7 days; covert monitoring only in exceptional circumstances.'}},

{id:'K50', cat:'law', stage:'', q:{zh:'可否單方面強迫外傭放無薪假？', en:'Can the employer force unpaid leave unilaterally?'},

 a:{zh:'不可以。僱主不得單方面強迫外傭放取無薪假期，必須取得僱傭雙方同意。',

    en:'No. The employer must not unilaterally force the helper to take unpaid leave — agreement from both parties is required.'}},

];


/* ── SURVEY_MONTHS ── */
const SURVEY_MONTHS={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};

