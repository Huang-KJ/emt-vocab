const rawTable = `
| 縮寫 | 原名 | 中文名稱 |
|---|---|---|
| a/W | abrasion wound | 擦傷 |
|  | acidosis | 酸中毒 |
| AIDS | acquired immune-deficiency syndrome | 後天免疫不全症候群 |
|  | acute | 急性 |
| ACS | acute coronary syndrome | 急性冠狀動脈症候群 |
| AMI | acute myocardial infarction | 急性心肌梗塞 |
| ALS | Advanced Life Support | 進階救命術 |
|  | agonal respiration | 瀕死呼吸 |
|  | Airway | 呼吸道 |
|  | air hunger | 空氣飢渴（張口呼吸、呼吸衰竭徵象） |
|  | albuterol | 吸入性擴張劑 |
| AED | Automated External Defibrillator | 自動體外心臟電擊去顫器 |
| AD | aortic dissection | 主動脈剝離 |
|  | asthma | 氣喘 |
|  | asystole | 心律停止 |
|  | attack | 發作 |
| A/W | avulsion wound | 剝離傷 |
|  | ambu bagging | 甦醒球擠壓法 |
|  | ambulance | 救護車 |
| BLS | Basic Life Support | 基本救命術 |
| BVM | bag valve mask | 袋瓣罩甦醒球 |
|  | bagging | 強迫給氧 |
|  | Breathing | 呼吸 |
|  | Bleeding | 出血 |
| BP | blood pressure | 血壓 |
| BT | Body temperature | 體溫 |
|  | C-spine | 頸椎 |
| CA | Cancer | 癌症 |
|  | Cardiac Arrest | 心臟停止 |
| CAD | Coronary Artery Disease | 冠狀動脈疾病 |
| CHD | Congenital Heart Disease | 先天性心臟病 |
| CHF | Congestive Heart Failure | 充血性心衰竭 |
| CPR | cardiopulmonary resuscitation | 心肺復甦術 |
| CRT | Capillary refill time | 微血管回充時間 |
| CVA | cerebrovascular accident | 腦中風、腦血管意外 |
| CVC | central venous catheter | 中央靜脈導管 |
| CVP | central venous pressure | 中心靜脈壓力 |
|  | Cellulitis | 蜂窩性組織炎 |
| COPD | chronic obstructive pulmonary disease | 慢性阻塞性肺疾病 |
|  | Chest tightness | 胸悶 |
|  | chest tube | 胸管 |
|  | chest pain | 胸痛 |
|  | choking | 異物梗塞 |
|  | Circulation | 循環 |
|  | cold sweating (diaphoresis) | 冒冷汗 |
|  | collar | 頸圈 |
|  | coma | 昏迷 |
| CT | Computed Tomography | 電腦斷層 |
|  | conscious | 意識 |
|  | conscious change | 意識改變 |
|  | crackles (Rales) | 爆裂音（囉音）（呼吸音） |
|  | cyanosis | 發紺 |
| CPSS | The Cincinnati Pre-hospital Stroke Scale | 辛辛那提到院前腦中風指數 |
| D5W | 5% Dextrose in water | 5%葡萄糖注射液（水） |
| D5S | 5% Dextrose in Saline | 5%葡萄糖注射液（食鹽水） |
| DM | Diabetes Mellitus | 糖尿病 |
| DNR | Do Not Resuscitate | 放棄心肺復甦術 |
| DKA | Diabetic keto-acidosis | 糖尿病酮酸中毒 |
|  | Disability | 失能 |
| EMS | Emergency Medical System (Service) | 緊急醫療救護系統（服務） |
| EMT | Emergency medical technician | 緊急醫療救護技術員 |
| ED、ER | Emergency department / Emergency room | 急診室 |
| EDH | epidural hemorrhage | 硬腦膜上出血 |
|  | Exposure | 暴露 |
|  | Endo | 氣管內管 |
| ECG、EKG | Electrocardiography | 心電圖 |
| Exp | Expired | 死亡 |
|  | fever | 發燒 |
|  | foley | 尿管 |
| fx. | fracture | 骨折 |
| GCS | Glasgow Coma Scale | 昏迷指數 |
|  | Glucose | 葡萄糖 |
| G/W | Glucose water | 葡萄糖水 |
| HR | Heart rate | 心率 |
| HX | history | 病史 |
| H/T | Hypertension | 高血壓 |
| HIV | Human immunodeficiency virus | 人類免疫缺失病毒 |
| Hyper | Hyperventilation Syndrome | 過度換氣症候群 |
| ICH | Intracranial Hemorrhage | 顱內出血 |
| ICU | Intensive Care Unit | 加護病房 |
| IV | Intravenous | 靜脈注射 |
| IVD | Intravenous Drip | 靜脈滴注 |
| IVP | Intravenous Push | 靜脈推入 |
| IV PUMP | Intravenous PUMP | 點滴幫浦 |
| IM | Intramuscular injection | 肌肉注射 |
| IICP | Increased intracranial pressure | 顱內壓升高 |
| I/W | Incised Wound | 切割傷 |
| IHCA | In-Hospital Cardiac Arrest | 院內心肺功能停止 |
| IO | Intraosseous Injection | 骨內血管注射 |
| I.V Bag | Intravenous Bag | 精密輸液套 |
| I.V LOCK | Intravenous lock | 注射帽 |
| I.V Set | Intravenous Set | 一般輸液套 |
| I-gel |  | 喉頭外呼吸道 |
| KED | Kendrick Extrication Device | 軀幹固定器 |
| L/W | Laceration wound | 撕裂傷 |
| LMA | laryngeal mask airway | 拋棄式喉頭面罩 |
| MRI | Magnetic Resonance Imaging | 核磁共振（磁振造影） |
|  | medical | 醫療 |
| MI | Myocardial infarction | 心肌梗塞 |
|  | major trauma | 嚴重創傷 |
| NSR | Normal Sinus Rhythm | 正常竇性節律 |
| N/S | Normal Saline | 生理食鹽水 |
| NSTEMI | Non-ST-Elevation Myocardial Infarction | 非 ST 段上升心肌梗塞 |
| NICU | Neonatal Intensive Care Unit | 新生兒加護病房 |
| NB | Newborn | 新生兒 |
| NG | Nasogastric intubation | 鼻胃管 |
| N/C | nasal cannula | 氧氣鼻導管 |
| NPA | Nasopharyngeal Airway | 鼻咽呼吸道 |
| NRM | non-rebreather mask | 非再吸入性面罩 |
| NTG | Nitroglycerin | 硝酸甘油（耐絞寧舌下錠） |
| OHCA | Out-of-Hospital Cardiac Arrest | 到院前心肺功能停止 |
|  | One touch | 血糖測試 |
| OPA | Oral Airway | 口咽呼吸道 |
| OD | Overdose | 劑量過量 |
|  | Oximeter | 血氧機 |
| O2 | Oxygen | 氧氣 |
|  | pulse | 脈搏 |
|  | Pulmonary Embolism | 肺栓塞 |
|  | Pulmonary edema | 肺水腫 |
|  | Pneumonia | 肺炎 |
|  | Pneumothorax | 氣胸 |
| PSVT | Paroxysmal Supraventricular Tachycardia | 陣發性上心室心搏過速 |
|  | pupil | 瞳孔 |
| PICU | pediatric intensive care unit | 小兒加護病房 |
| Psy | Psychiatric Patient | 行為急症 |
| PTSD | Post-Traumatic Stress Disorder | 創傷後壓力症候群 |
| PEA | pulseless electrical activity | 無收縮心臟電氣活動 |
| RR | Respiratory Rate | 呼吸速率 |
| ROSC | return of spontaneous circulation | 恢復自發性循環 |
| O2 Mask | Simple mask | 簡單型面罩 |
|  | suction | 抽吸 |
|  | suction tube | 抽痰管 |
|  | stridor | 喘鳴音 |
|  | SpO2 | 血氧 |
|  | shock | 休克 |
|  | spine | 脊柱 |
|  | spinal injury | 脊髓損傷 |
| SDH | subdural hematoma | 硬腦膜下出血 |
|  | sugar | 血糖 |
|  | Seizure | 抽搐 |
| SAH | Subarachnoid Hemorrhage | 蜘蛛膜下出血 |
| SOB | Short of Breath | 呼吸短促 |
| TB | Tuberculosis | 結核病（肺結核） |
|  | trauma | 創傷 |
| TBSA | total body surface area | 燒燙傷總表面積 |
|  | triage | 檢傷 |
| Tr. | Tracheostomy | 氣切（氣管切開術） |
| TCP | transcutaneous pacing | 體外心臟節律器 |
| UGI bleeding | Upper gastrointestinal bleeding | 上腸胃道出血 |
| URI | Upper Respiratory Tract Infection | 上呼吸道感染 |
| UTI | Urinary tract infection | 泌尿道感染 |
| VF | Ventricular Fibrillation | 心室纖維顫動 |
| VT | Ventricular Tachycardia | 心室性心搏過速 |
|  | vein | 靜脈 |
| V/S | vital signs | 生命徵象 |
|  | wheezing | 喘鳴音 |
|  | wound | 傷口 |
|  | X-ray | X光攝影 |
| y/o | Years old | 年歲 |
`;

const terms = rawTable
  .trim()
  .split("\n")
  .slice(2)
  .map((line) => line.split("|").slice(1, 4).map((cell) => cell.trim()))
  .map(([abbreviation, english, chinese], index) => ({
    id: index + 1,
    abbreviation,
    english,
    chinese,
    initial: getInitialLetter(english),
  }))
  .filter((term) => term.english || term.abbreviation || term.chinese);

const termTableBody = document.querySelector("#termTableBody");
const rowTemplate = document.querySelector("#termRowTemplate");
const browserVoiceSelect = document.querySelector("#browserVoiceSelect");
const letterFilterGroup = document.querySelector("#letterFilterGroup");
const selectAllLettersButton = document.querySelector("#selectAllLettersButton");
const clearAllLettersButton = document.querySelector("#clearAllLettersButton");
const toggleAbbrModeButton = document.querySelector("#toggleAbbrModeButton");
const toggleStudyModeButton = document.querySelector("#toggleStudyModeButton");
const toggleEnglishModeButton = document.querySelector("#toggleEnglishModeButton");
const toggleOrderButton = document.querySelector("#toggleOrderButton");
const browserVoiceStatus = document.querySelector("#browserVoiceStatus");
const rateRange = document.querySelector("#rateRange");
const rateValue = document.querySelector("#rateValue");
const browserSpeechSupported =
  "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
const storageKey = "emt-vocabulary-settings";
const defaultLetters = [];

let browserVoices = [];
let selectedBrowserVoice = null;
let activeBrowserButton = null;
let selectedLetters = new Set();
let abbrStudyModeEnabled = false;
let studyModeEnabled = false;
let englishStudyModeEnabled = false;
let shuffleModeEnabled = false;
let savedBrowserVoiceValue = "";

function readSavedSettings() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeSavedSettings() {
  const settings = {
    browserVoiceValue: selectedBrowserVoice ? createBrowserVoiceValue(selectedBrowserVoice) : "",
    rate: Number(rateRange.value),
    selectedLetters: [...selectedLetters],
    abbrStudyModeEnabled,
    studyModeEnabled,
    englishStudyModeEnabled,
    shuffleModeEnabled,
  };

  try {
    window.localStorage.setItem(storageKey, JSON.stringify(settings));
  } catch {
    // Ignore storage failures and continue with in-memory state.
  }
}

function restoreSavedState() {
  const settings = readSavedSettings();

  if (typeof settings.rate === "number" && settings.rate >= 0.5 && settings.rate <= 1.5) {
    rateRange.value = String(settings.rate);
  }

  if (Array.isArray(settings.selectedLetters)) {
    selectedLetters = new Set(
      settings.selectedLetters.filter((value) => /^[A-Z]$|^#$/.test(String(value)))
    );
  } else {
    selectedLetters = new Set(defaultLetters);
  }

  abbrStudyModeEnabled = Boolean(settings.abbrStudyModeEnabled);
  studyModeEnabled = Boolean(settings.studyModeEnabled);
  englishStudyModeEnabled = Boolean(settings.englishStudyModeEnabled);
  shuffleModeEnabled = Boolean(settings.shuffleModeEnabled);
  savedBrowserVoiceValue = typeof settings.browserVoiceValue === "string" ? settings.browserVoiceValue : "";
}

function syncLetterFilterInputs() {
  letterFilterGroup.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = selectedLetters.has(checkbox.value);
  });
}

function applySavedModes() {
  document.body.classList.toggle("abbr-study-mode", abbrStudyModeEnabled);
  document.body.classList.toggle("study-mode", studyModeEnabled);
  document.body.classList.toggle("english-study-mode", englishStudyModeEnabled);
}

function getInitialLetter(text) {
  const trimmed = String(text || "").trim();
  const matched = /^[A-Za-z]/.exec(trimmed);
  return matched ? matched[0].toUpperCase() : "#";
}

function populateLetterFilters() {
  const options = [
    ...Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)),
    "#",
  ];

  letterFilterGroup.innerHTML = "";

  options.forEach((letter) => {
    const label = document.createElement("label");
    label.className = "letter-chip";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = letter;
    checkbox.checked = false;
    checkbox.addEventListener("change", handleLetterToggle);

    const text = document.createElement("span");
    text.textContent = letter === "#" ? "其他" : letter;

    label.append(checkbox, text);
    letterFilterGroup.append(label);
  });

  syncLetterFilterInputs();

  selectAllLettersButton.addEventListener("click", selectAllLetterFilters);
  clearAllLettersButton.addEventListener("click", clearAllLetterFilters);
}

function handleLetterToggle(event) {
  const { value, checked } = event.target;

  if (checked) {
    selectedLetters.add(value);
  } else {
    selectedLetters.delete(value);
  }

  writeSavedSettings();
  applyFilters();
}

function selectAllLetterFilters() {
  selectedLetters = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split(""));

  letterFilterGroup.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = true;
  });

  writeSavedSettings();
  applyFilters();
}

function clearAllLetterFilters() {
  selectedLetters = new Set();

  letterFilterGroup.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  writeSavedSettings();
  applyFilters();
}

function initBrowserSpeech() {
  if (!browserSpeechSupported) {
    browserVoiceStatus.textContent = "目前瀏覽器不支援 Web Speech API 朗讀。";
    browserVoiceSelect.disabled = true;
    return;
  }

  loadBrowserVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadBrowserVoices);
  browserVoiceSelect.addEventListener("change", handleBrowserVoiceChange);
}

function loadBrowserVoices() {
  browserVoices = window.speechSynthesis
    .getVoices()
    .filter((voice) => {
      const language = voice.lang.toLowerCase();
      return language === "en-us" || language === "zh-tw";
    })
    .sort((left, right) => {
      if (left.lang !== right.lang) {
        return left.lang.localeCompare(right.lang);
      }

      return left.name.localeCompare(right.name);
    });

  populateBrowserVoiceList();

  if (!selectedBrowserVoice) {
    browserVoiceStatus.textContent = "瀏覽器朗讀目前找不到 `zh-TW` 或 `en-US` 聲線。";
    return;
  }

  browserVoiceStatus.textContent = `瀏覽器朗讀目前使用：${selectedBrowserVoice.name} (${selectedBrowserVoice.lang})`;
}

function populateBrowserVoiceList() {
  browserVoiceSelect.innerHTML = "";

  if (browserVoices.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "沒有可用聲線";
    browserVoiceSelect.append(option);
    browserVoiceSelect.disabled = true;
    selectedBrowserVoice = null;
    return;
  }

  browserVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = createBrowserVoiceValue(voice);
    option.textContent = `${voice.name} (${voice.lang})${voice.default ? " -- DEFAULT" : ""}`;
    browserVoiceSelect.append(option);
  });

  browserVoiceSelect.disabled = false;

  if (selectedBrowserVoice) {
    selectedBrowserVoice =
      browserVoices.find(
        (voice) => createBrowserVoiceValue(voice) === createBrowserVoiceValue(selectedBrowserVoice)
      ) || null;
  }

  if (!selectedBrowserVoice && savedBrowserVoiceValue) {
    selectedBrowserVoice =
      browserVoices.find((voice) => createBrowserVoiceValue(voice) === savedBrowserVoiceValue) || null;
  }

  if (!selectedBrowserVoice) {
    selectedBrowserVoice = pickBrowserVoice(browserVoices);
  }

  browserVoiceSelect.value = selectedBrowserVoice
    ? createBrowserVoiceValue(selectedBrowserVoice)
    : browserVoiceSelect.options[0].value;
  writeSavedSettings();
}

function pickBrowserVoice(voices) {
  if (voices.length === 0) {
    return null;
  }

  const preferredMatchers = [
    (voice) =>
      /hsiaochen/i.test(voice.name) && voice.lang.toLowerCase() === "zh-tw",
    (voice) => voice.lang.toLowerCase() === "zh-tw",
    (voice) => /microsoft/i.test(voice.name) && voice.lang.toLowerCase() === "zh-tw",
    (voice) => /google|chrome/i.test(voice.name) && voice.lang.toLowerCase() === "zh-tw",
    (voice) => voice.name === "Google US English",
    (voice) => voice.name === "Microsoft David - English (United States)",
    (voice) => voice.name === "Microsoft Zira - English (United States)",
    (voice) => voice.name === "Microsoft Hanhan - Chinese (Taiwan)",
    (voice) => voice.name === "Microsoft Yating - Chinese (Traditional, Taiwan)",
  ];

  for (const matcher of preferredMatchers) {
    const matchedVoice = voices.find((voice) => matcher(voice));

    if (matchedVoice) {
      return matchedVoice;
    }
  }

  const microsoftTaiwanVoice = voices.find(
    (voice) => /microsoft/i.test(voice.name) && voice.lang.toLowerCase() === "zh-tw"
  );

  if (microsoftTaiwanVoice) {
    return microsoftTaiwanVoice;
  }

  const googleVoice = voices.find((voice) => /google|chrome/i.test(voice.name));

  if (googleVoice) {
    return googleVoice;
  }

  return voices.find((voice) => voice.default) || voices[0];
}

function createBrowserVoiceValue(voice) {
  return `${voice.name}|||${voice.lang}`;
}

function handleBrowserVoiceChange(event) {
  selectedBrowserVoice =
    browserVoices.find((voice) => createBrowserVoiceValue(voice) === event.target.value) || null;

  if (selectedBrowserVoice) {
    browserVoiceStatus.textContent = `瀏覽器朗讀目前使用：${selectedBrowserVoice.name} (${selectedBrowserVoice.lang})`;
  }

  writeSavedSettings();
}

function updateRateLabel() {
  rateValue.textContent = Number(rateRange.value).toFixed(2);
}

function updateAbbrModeButton() {
  toggleAbbrModeButton.textContent = `隱藏縮寫：${abbrStudyModeEnabled ? "開" : "關"}`;
}

function toggleAbbrMode() {
  abbrStudyModeEnabled = !abbrStudyModeEnabled;
  document.body.classList.toggle("abbr-study-mode", abbrStudyModeEnabled);
  updateAbbrModeButton();
  writeSavedSettings();
}

function updateStudyModeButton() {
  toggleStudyModeButton.textContent = `隱藏中文：${studyModeEnabled ? "開" : "關"}`;
}

function toggleStudyMode() {
  studyModeEnabled = !studyModeEnabled;
  document.body.classList.toggle("study-mode", studyModeEnabled);
  updateStudyModeButton();
  writeSavedSettings();
}

function updateEnglishModeButton() {
  toggleEnglishModeButton.textContent = `隱藏英文：${englishStudyModeEnabled ? "開" : "關"}`;
}

function toggleEnglishMode() {
  englishStudyModeEnabled = !englishStudyModeEnabled;
  document.body.classList.toggle("english-study-mode", englishStudyModeEnabled);
  updateEnglishModeButton();
  writeSavedSettings();
}

function updateOrderButton() {
  toggleOrderButton.textContent = shuffleModeEnabled ? "照順序排" : "打亂順序";
}

function toggleOrderMode() {
  shuffleModeEnabled = !shuffleModeEnabled;
  updateOrderButton();
  writeSavedSettings();
  applyFilters();
}

function shuffleArray(list) {
  const shuffled = [...list];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function speakWithBrowser(text, button) {
  if (!browserSpeechSupported) {
    window.alert("目前瀏覽器不支援 Web Speech API 朗讀。");
    return;
  }

  if (!selectedBrowserVoice) {
    loadBrowserVoices();
  }

  if (!selectedBrowserVoice) {
    window.alert("找不到可用的 `zh-TW` 或 `en-US` 朗讀聲線。");
    return;
  }

  stopBrowserSpeech();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedBrowserVoice;
  utterance.lang = selectedBrowserVoice.lang || "en-US";
  utterance.rate = Number(rateRange.value);
  utterance.pitch = 1;

  activeBrowserButton = button;
  button.disabled = true;
  button.textContent = "朗讀中...";

  utterance.addEventListener("end", resetBrowserSpeechButton, { once: true });
  utterance.addEventListener(
    "error",
    () => {
      resetBrowserSpeechButton();
      window.alert("瀏覽器朗讀失敗。");
    },
    { once: true }
  );

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function stopBrowserSpeech() {
  if (browserSpeechSupported) {
    window.speechSynthesis.cancel();
  }

  resetBrowserSpeechButton();
}

function resetBrowserSpeechButton() {
  if (activeBrowserButton) {
    activeBrowserButton.disabled = false;
    activeBrowserButton.textContent = "朗讀";
  }

  activeBrowserButton = null;
}

function createEmptyState() {
  const empty = document.createElement("tr");
  empty.className = "empty-state";
  empty.innerHTML = '<td colspan="3">目前沒有符合篩選條件的術語。</td>';
  return empty;
}

function renderTerms(list) {
  termTableBody.innerHTML = "";

  if (list.length === 0) {
    termTableBody.append(createEmptyState());
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((term) => {
    const row = rowTemplate.content.firstElementChild.cloneNode(true);
    const abbr = row.querySelector(".abbr");
    const english = row.querySelector(".english");
    const chinese = row.querySelector(".chinese");
    const browserSpeakButton = row.querySelector(".browser-speak");

    abbr.textContent = term.abbreviation || "無";
    english.textContent = term.english || "未提供英文原名";
    chinese.textContent = term.chinese || "未提供中文名稱";
    abbr.classList.add("abbr-reveal");
    english.classList.add("english-reveal");
    chinese.classList.add("chinese-reveal");

    if (term.english) {
      browserSpeakButton.addEventListener("click", () => speakWithBrowser(term.english, browserSpeakButton));
      browserSpeakButton.setAttribute("aria-label", `使用瀏覽器朗讀 ${term.english}`);
    } else {
      browserSpeakButton.disabled = true;
      browserSpeakButton.textContent = "無原名";
    }

    fragment.append(row);
  });

  termTableBody.append(fragment);
}

function applyFilters() {
  stopBrowserSpeech();
  const filteredTerms = terms.filter((term) => selectedLetters.has(term.initial));
  renderTerms(shuffleModeEnabled ? shuffleArray(filteredTerms) : filteredTerms);
}

restoreSavedState();
populateLetterFilters();
initBrowserSpeech();
rateRange.addEventListener("input", () => {
  updateRateLabel();
  writeSavedSettings();
});
toggleAbbrModeButton.addEventListener("click", toggleAbbrMode);
toggleStudyModeButton.addEventListener("click", toggleStudyMode);
toggleEnglishModeButton.addEventListener("click", toggleEnglishMode);
toggleOrderButton.addEventListener("click", toggleOrderMode);
applySavedModes();
updateRateLabel();
updateAbbrModeButton();
updateStudyModeButton();
updateEnglishModeButton();
updateOrderButton();
applyFilters();
