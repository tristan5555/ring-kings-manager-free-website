const startingPromotions = [
  { name: "Titan Ring Promotions", short: "TRP", purse: 85000, length: 24, prestige: 84, bonus: "Title ladder access" },
  { name: "Crownline Boxing", short: "CBX", purse: 62000, length: 18, prestige: 72, bonus: "Fast main-event push" },
  { name: "Iron Gate Fight Co.", short: "IGF", purse: 72000, length: 20, prestige: 78, bonus: "Power ranking boost" },
  { name: "World Punch Alliance", short: "WPA", purse: 94000, length: 30, prestige: 90, bonus: "International shows" },
  { name: "Starlight Boxing League", short: "SBL", purse: 55000, length: 16, prestige: 66, bonus: "Prospect showcase slots" },
  { name: "Empire Combat Sports", short: "ECS", purse: 78000, length: 22, prestige: 80, bonus: "Championship rematch clause" }
];
let promotions = [];

const weightClasses = ["Featherweight", "Lightweight", "Welterweight", "Middleweight", "Light Heavyweight", "Heavyweight"];
const styles = ["Balanced", "Power Puncher", "Out-Boxer", "Pressure Fighter", "Counter Puncher", "Defensive Specialist"];
const firstNames = ["Andre", "Marcus", "Leo", "Dante", "Rafael", "Jalen", "Mateo", "Ivan", "Victor", "Oscar", "Niko", "Caleb", "Tariq", "Luis", "Keon", "Milo"];
const lastNames = ["King", "Stone", "Reed", "Torres", "Hayes", "Ward", "Cross", "Santos", "Bennett", "Foster", "Cole", "Price", "Mason", "Rios", "Hale", "Knight"];
const countryNamePools = {
  "United States": {
    first: ["Andre", "Marcus", "Jalen", "Caleb", "Keon", "Dante", "Tariq", "Victor"],
    last: ["King", "Stone", "Reed", "Hayes", "Ward", "Bennett", "Cole", "Mason"]
  },
  "Mexico": {
    first: ["Rafael", "Luis", "Mateo", "Oscar", "Diego", "Javier", "Miguel", "Carlos"],
    last: ["Torres", "Santos", "Rios", "Garcia", "Vargas", "Morales", "Castillo", "Navarro"]
  },
  "United Kingdom": {
    first: ["Leo", "Caleb", "Marcus", "Milo", "Callum", "Liam", "Rhys", "Oliver"],
    last: ["Price", "Bennett", "Foster", "Cole", "Knight", "Ward", "Hale", "Mason"]
  },
  "Canada": {
    first: ["Niko", "Andre", "Marcus", "Caleb", "Ethan", "Noah", "Logan", "Owen"],
    last: ["Stone", "Reed", "Foster", "Cole", "Bennett", "Hayes", "Price", "Knight"]
  },
  "Australia": {
    first: ["Milo", "Leo", "Oscar", "Caleb", "Lachlan", "Jack", "Cooper", "Xavier"],
    last: ["Hayes", "Ward", "Foster", "Knight", "Bennett", "Mason", "Price", "Cole"]
  },
  "Japan": {
    first: ["Haruto", "Ren", "Daiki", "Kaito", "Sota", "Yuto", "Riku", "Takumi"],
    last: ["Tanaka", "Sato", "Suzuki", "Nakamura", "Kobayashi", "Yamamoto", "Watanabe", "Ito"]
  },
  "Puerto Rico": {
    first: ["Luis", "Rafael", "Mateo", "Oscar", "Javier", "Angel", "Emilio", "Hector"],
    last: ["Rivera", "Santos", "Rios", "Torres", "Colon", "Vega", "Morales", "Cruz"]
  },
  "Cuba": {
    first: ["Luis", "Rafael", "Dante", "Oscar", "Yordan", "Carlos", "Miguel", "Hector"],
    last: ["Santos", "Rios", "Torres", "Castillo", "Perez", "Gomez", "Valdes", "Mendez"]
  },
  "Brazil": {
    first: ["Mateo", "Rafael", "Luis", "Niko", "Joao", "Paulo", "Thiago", "Felipe"],
    last: ["Santos", "Torres", "Rios", "Silva", "Costa", "Almeida", "Pereira", "Rocha"]
  },
  "Philippines": {
    first: ["Leo", "Dante", "Milo", "Oscar", "Jose", "Ramon", "Marco", "Emilio"],
    last: ["Santos", "Reyes", "Cruz", "Garcia", "Ramos", "Torres", "Navarro", "Flores"]
  }
};
const fighterOrigins = [
  { country: "United States", states: ["California", "Texas", "New York", "Florida", "Nevada", "Pennsylvania", "Ohio", "Michigan"] },
  { country: "Mexico", states: ["Jalisco", "Sonora", "Baja California", "Mexico City", "Sinaloa", "Chihuahua"] },
  { country: "United Kingdom", states: ["England", "Scotland", "Wales", "Northern Ireland"] },
  { country: "Canada", states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Nova Scotia"] },
  { country: "Australia", states: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia"] },
  { country: "Japan", states: ["Tokyo", "Osaka", "Kanagawa", "Aichi", "Fukuoka"] },
  { country: "Puerto Rico", states: ["San Juan", "Bayamon", "Ponce", "Carolina", "Mayaguez"] },
  { country: "Cuba", states: ["Havana", "Santiago de Cuba", "Camaguey", "Holguin", "Guantanamo"] },
  { country: "Brazil", states: ["Sao Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais", "Parana"] },
  { country: "Philippines", states: ["Metro Manila", "Cebu", "Davao", "Pampanga", "Laguna"] }
];
const methods = ["UD", "SD", "MD", "TKO", "KO", "RTD"];
const showNames = ["Fight Night", "Championship Boxing", "Prospect Series", "Saturday Showcase", "World Tour", "Main Event"];
const venues = ["Grand Garden Arena", "Harbor Fight Hall", "Metro Sports Dome", "Civic Boxing Center", "Royal Arena", "Downtown Coliseum", "Pacific Events Center", "Ironworks Hall"];
const broadcastLines = ["a gritty contender card", "a high-stakes ranking night", "a prospect-heavy showcase", "a title-chase stepping stone", "a hard matchmaking test", "a fan-friendly action card"];
const fightFlavors = ["started fast behind a sharp jab", "turned rough in the middle rounds", "had the crowd standing late", "featured heavy body work", "swung back and forth on momentum", "became a tactical chess match"];
const cornerQuotes = ["We wanted the cleaner work and got it.", "The plan was pressure from round one.", "This win puts us in the rankings talk.", "We took the risk and made it pay.", "That was a statement for the division."];
const maxPlayerFighters = 10;
const fightCampWeeks = 4;
const fightCampMaxSessions = 4;
const weeklyTrainingLimit = maxPlayerFighters;
const titleFightRounds = 12;
const lowerCardRounds = [4, 6, 8];
const mediumFightRounds = [8, 10];
const featureFightRounds = [10, 12];
const promotionNameBank = ["Blue Corner Boxing", "Summit Fight Group", "Prime Bell Promotions", "Victory Road Boxing", "Frontier Combat Club", "Golden Ropes League", "Apex Prizefighting", "Legacy Ring Sports", "New Era Boxing", "Global Gloves"];
const saveKey = "ring-kings-manager-save-v1";
const profileKey = "ring-kings-manager-profile-v1";
const homeChatKey = "ring-kings-manager-home-chat-v1";
const startingYear = 2026;
const defaultPlayerGymName = "Kings Boxing Gym";
const independentGymName = "Independent / Free Agent";
const aiGymNames = [
  "Southpaw House", "Iron Temple Boxing", "Crown City Gym", "Red Corner Club", "Northside Fight Lab",
  "Atlas Boxing Room", "Harbor Gloves", "Prime Ring Academy", "Victory Street Gym", "Old Bell Boxing",
  "Summit Combat Gym", "Blue Canvas Club", "Steel Hook Academy", "Metro Fight House", "Golden Ropes Gym",
  "Black Trunks Academy", "Capital Boxing Room", "East End Fight Lab", "River City Boxing", "Diamond Jab Gym",
  "Champion's Yard", "Final Bell Academy", "Cornerstone Boxing", "High Guard Gym", "Prize Ring Stable",
  "Main Street Gloves", "Westside Combat Club", "Royal Road Boxing", "The Sparring Room", "Knuckle Line Gym"
];
const onlinePlayerNames = [
  "AceManager", "BellBoss", "CanvasKing", "TitleHunter", "JabMaster", "CornerChief", "PrizefightPro", "SouthpawGM",
  "UppercutAdmin", "RingGeneral", "GymBuilder", "FightScout", "GoldenBell", "MainEventer", "BlueCorner", "RedCorner",
  "ProspectLab", "ContractBoss", "RankingClimber", "KnockoutPlan", "PurseChaser", "Matchmaker99", "CampCaptain", "ScorecardPro",
  "WorldTourGM", "TitleShot", "FightWeek", "RopeBoss", "GloveGuru", "StaminaCoach"
];
const onlineGymNameBank = [
  "Apex Online Gym", "Global Ring Stable", "Prime Player Boxing", "Champion Cloud Gym", "World Ladder Academy",
  "Digital Gloves Club", "Ranked Road Boxing", "Title Track Gym", "Main Event Factory", "Cross-Server Boxing",
  "Open Bell Club", "Legacy Player Gym", "Summit Online Boxing", "Victory Sync Gym", "Golden Canvas Stable",
  "All Star Corners", "Fight Network Gym", "Online Contender Club", "Blue Ribbon Boxing", "Global Prospect Room"
];

let state = {
  startYear: startingYear,
  playerGym: { name: defaultPlayerGymName, capacity: maxPlayerFighters },
  aiGyms: aiGymNames.slice(0, 10),
  gymLeaderboardHistory: [],
  onlineLeaderboard: [],
  week: 1,
  fighters: [],
  playerId: null,
  playerIds: [],
  playerOffers: [],
  selectedOffer: null,
  expiredContractOffers: [],
  fightOffers: [],
  playerBookings: [],
  pendingPromotions: [],
  schedule: [],
  lastShows: [],
  signingNews: [],
  retirementNews: [],
  promotionNews: []
};

const els = {
  homePage: document.querySelector("#homePage"),
  homePlayNow: document.querySelector("#homePlayNow"),
  homeLogin: document.querySelector("#homeLogin"),
  homeStartCareer: document.querySelector("#homeStartCareer"),
  homeContinue: document.querySelector("#homeContinue"),
  homeLoginCard: document.querySelector("#homeLoginCard"),
  homeLoginName: document.querySelector("#homeLoginName"),
  homeLoginGym: document.querySelector("#homeLoginGym"),
  homeSaveLogin: document.querySelector("#homeSaveLogin"),
  homeProfileStatus: document.querySelector("#homeProfileStatus"),
  homeLoginStatus: document.querySelector("#homeLoginStatus"),
  homeChatLog: document.querySelector("#homeChatLog"),
  homeChatForm: document.querySelector("#homeChatForm"),
  homeChatInput: document.querySelector("#homeChatInput"),
  homeChatSend: document.querySelector("#homeChatSend"),
  homeOpenLeaderboard: document.querySelector("#homeOpenLeaderboard"),
  homeLeaderboardSummary: document.querySelector("#homeLeaderboardSummary"),
  homeLeaderboardPreview: document.querySelector("#homeLeaderboardPreview"),
  homeAdminToggle: document.querySelector("#homeAdminToggle"),
  homeAdminPanel: document.querySelector("#homeAdminPanel"),
  adminChatInbox: document.querySelector("#adminChatInbox"),
  adminChatForm: document.querySelector("#adminChatForm"),
  adminChatInput: document.querySelector("#adminChatInput"),
  adminChatSend: document.querySelector("#adminChatSend"),
  clearHomeChat: document.querySelector("#clearHomeChat"),
  loginPage: document.querySelector("#loginPage"),
  closeLogin: document.querySelector("#closeLogin"),
  loginName: document.querySelector("#loginName"),
  loginGym: document.querySelector("#loginGym"),
  saveLogin: document.querySelector("#saveLogin"),
  logoutProfile: document.querySelector("#logoutProfile"),
  loginStatus: document.querySelector("#loginStatus"),
  mainMenu: document.querySelector("#mainMenu"),
  startCareer: document.querySelector("#startCareer"),
  openUniverse: document.querySelector("#openUniverse"),
  menuSave: document.querySelector("#menuSave"),
  menuLoad: document.querySelector("#menuLoad"),
  menuHowToPlay: document.querySelector("#menuHowToPlay"),
  menuPromotions: document.querySelector("#menuPromotions"),
  menuLeaderboard: document.querySelector("#menuLeaderboard"),
  menuLogin: document.querySelector("#menuLogin"),
  menuHome: document.querySelector("#menuHome"),
  menuReset: document.querySelector("#menuReset"),
  howToPlayPanel: document.querySelector("#howToPlayPanel"),
  closeHowToPlay: document.querySelector("#closeHowToPlay"),
  backToMenu: document.querySelector("#backToMenu"),
  saveGame: document.querySelector("#saveGame"),
  loadGame: document.querySelector("#loadGame"),
  saveStatus: document.querySelector("#saveStatus"),
  menuSaveStatus: document.querySelector("#menuSaveStatus"),
  gameNav: document.querySelector(".game-nav"),
  openNews: document.querySelector("#openNews"),
  closeNews: document.querySelector("#closeNews"),
  newsPanel: document.querySelector("#newsPanel"),
  openGym: document.querySelector("#openGym"),
  openLeaderboard: document.querySelector("#openLeaderboard"),
  closeGym: document.querySelector("#closeGym"),
  gymPanel: document.querySelector("#gymPanel"),
  gymName: document.querySelector("#gymName"),
  saveGymName: document.querySelector("#saveGymName"),
  gymSummary: document.querySelector("#gymSummary"),
  gymRoster: document.querySelector("#gymRoster"),
  aiGyms: document.querySelector("#aiGyms"),
  submitOnlineLeaderboard: document.querySelector("#submitOnlineLeaderboard"),
  refreshOnlineLeaderboard: document.querySelector("#refreshOnlineLeaderboard"),
  onlineLeaderboardSummary: document.querySelector("#onlineLeaderboardSummary"),
  onlineLeaderboard: document.querySelector("#onlineLeaderboard"),
  gymLeaderboardTitle: document.querySelector("#gymLeaderboardTitle"),
  gymLeaderboardSummary: document.querySelector("#gymLeaderboardSummary"),
  gymLeaderboardHistory: document.querySelector("#gymLeaderboardHistory"),
  openFreeAgents: document.querySelector("#openFreeAgents"),
  closeFreeAgents: document.querySelector("#closeFreeAgents"),
  freeAgentsPanel: document.querySelector("#freeAgentsPanel"),
  freeAgentSummary: document.querySelector("#freeAgentSummary"),
  scoutFreeAgents: document.querySelector("#scoutFreeAgents"),
  freeAgentMarket: document.querySelector("#freeAgentMarket"),
  openTraining: document.querySelector("#openTraining"),
  closeTraining: document.querySelector("#closeTraining"),
  trainingPanel: document.querySelector("#trainingPanel"),
  openFightOffers: document.querySelector("#openFightOffers"),
  closeFightOffers: document.querySelector("#closeFightOffers"),
  fightOffersPanel: document.querySelector("#fightOffersPanel"),
  openFighterCards: document.querySelector("#openFighterCards"),
  closeFighterCards: document.querySelector("#closeFighterCards"),
  fighterCardsPanel: document.querySelector("#fighterCardsPanel"),
  openContracts: document.querySelector("#openContracts"),
  closeContracts: document.querySelector("#closeContracts"),
  contractsPanel: document.querySelector("#contractsPanel"),
  openActivity: document.querySelector("#openActivity"),
  closeActivity: document.querySelector("#closeActivity"),
  activityPanel: document.querySelector("#activityPanel"),
  openSchedule: document.querySelector("#openSchedule"),
  closeSchedule: document.querySelector("#closeSchedule"),
  schedulePanel: document.querySelector("#schedulePanel"),
  openResults: document.querySelector("#openResults"),
  closeResults: document.querySelector("#closeResults"),
  resultsPanel: document.querySelector("#resultsPanel"),
  openRosters: document.querySelector("#openRosters"),
  closeRosters: document.querySelector("#closeRosters"),
  rosterPanel: document.querySelector("#rosterPanel"),
  yearNumber: document.querySelector("#yearNumber"),
  weekNumber: document.querySelector("#weekNumber"),
  fighterName: document.querySelector("#fighterName"),
  randomFighters: document.querySelector("#randomFighters"),
  weightClass: document.querySelector("#weightClass"),
  style: document.querySelector("#style"),
  contractOffer: document.querySelector("#contractOffer"),
  createFighter: document.querySelector("#createFighter"),
  playerCard: document.querySelector("#playerCard"),
  trainingFighter: document.querySelector("#trainingFighter"),
  trainingFocus: document.querySelector("#trainingFocus"),
  trainingIntensity: document.querySelector("#trainingIntensity"),
  trainFighter: document.querySelector("#trainFighter"),
  trainAllFighters: document.querySelector("#trainAllFighters"),
  trainingReport: document.querySelector("#trainingReport"),
  careerFighter: document.querySelector("#careerFighter"),
  moveWeightUp: document.querySelector("#moveWeightUp"),
  moveWeightDown: document.querySelector("#moveWeightDown"),
  retirePlayerFighter: document.querySelector("#retirePlayerFighter"),
  careerReport: document.querySelector("#careerReport"),
  simulateWeek: document.querySelector("#simulateWeek"),
  simulateMonth: document.querySelector("#simulateMonth"),
  bookPlayerFight: document.querySelector("#bookPlayerFight"),
  resetGame: document.querySelector("#resetGame"),
  contractList: document.querySelector("#contractList"),
  signingNews: document.querySelector("#signingNews"),
  signingSummary: document.querySelector("#signingSummary"),
  retirementNews: document.querySelector("#retirementNews"),
  retirementSummary: document.querySelector("#retirementSummary"),
  promotionNews: document.querySelector("#promotionNews"),
  promotionNewsSummary: document.querySelector("#promotionNewsSummary"),
  scheduleList: document.querySelector("#scheduleList"),
  scheduleSummary: document.querySelector("#scheduleSummary"),
  results: document.querySelector("#results"),
  resultSummary: document.querySelector("#resultSummary"),
  fightOffers: document.querySelector("#fightOffers"),
  fightOfferSummary: document.querySelector("#fightOfferSummary"),
  fighterCards: document.querySelector("#fighterCards"),
  promotionRosters: document.querySelector("#promotionRosters"),
  promotionRosterSummary: document.querySelector("#promotionRosterSummary"),
  rankings: document.querySelector("#rankings"),
  prospectRankings: document.querySelector("#prospectRankings"),
  totalFighters: document.querySelector("#totalFighters"),
  promotionCount: document.querySelector("#promotionCount"),
  weeklyFights: document.querySelector("#weeklyFights")
};

function loadProfile() {
  try {
    const raw = localStorage.getItem(profileKey);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function isAdminProfile(profile = loadProfile()) {
  return profile?.name?.trim().toLowerCase() === "admin";
}

function updateAdminAccess() {
  const isAdmin = isAdminProfile();
  els.homeAdminToggle.classList.toggle("hidden", !isAdmin);
  if (!isAdmin) els.homeAdminPanel.classList.add("hidden");
}

function renderProfileStatus() {
  const profile = loadProfile();
  const isAdmin = isAdminProfile(profile);
  const message = profile?.name
    ? `Logged in as ${profile.name}${profile.gym ? ` | ${profile.gym}` : ""}${isAdmin ? " | Website Admin" : ""}.`
    : "Playing as Guest.";
  if (els.homeProfileStatus) els.homeProfileStatus.textContent = message;
  if (els.homeLoginStatus) els.homeLoginStatus.textContent = message;
  if (els.loginStatus) els.loginStatus.textContent = message;
  if (els.loginName && profile?.name) els.loginName.value = profile.name;
  if (els.loginGym && profile?.gym) els.loginGym.value = profile.gym;
  if (els.homeLoginName && profile?.name) els.homeLoginName.value = profile.name;
  if (els.homeLoginGym && profile?.gym) els.homeLoginGym.value = profile.gym;
  updateAdminAccess();
}

function saveProfile(source = "modal") {
  const nameInput = source === "home" ? els.homeLoginName : els.loginName;
  const gymInput = source === "home" ? els.homeLoginGym : els.loginGym;
  const name = nameInput.value.trim() || "Guest Manager";
  const gym = gymInput.value.trim() || playerGymName();
  try {
    localStorage.setItem(profileKey, JSON.stringify({ name, gym, savedAt: new Date().toISOString() }));
    state.playerGym = { name: gym, capacity: maxPlayerFighters };
    ensureGymData();
    render();
    renderProfileStatus();
    setSaveStatus(`Logged in as ${name}.`);
    if (source !== "home") closeLoginPage();
  } catch (error) {
    if (els.loginStatus) els.loginStatus.textContent = "Login could not be saved in this browser.";
    if (els.homeLoginStatus) els.homeLoginStatus.textContent = "Login could not be saved in this browser.";
  }
}

function logoutProfile() {
  try {
    localStorage.removeItem(profileKey);
  } catch (error) {
    // Ignore blocked storage; the UI still falls back to guest mode.
  }
  renderProfileStatus();
  setSaveStatus("Logged out. Playing as Guest.");
}

function showHome() {
  els.homePage.classList.remove("hidden");
  els.mainMenu.classList.add("hidden");
  closeLoginPage();
  document.body.classList.add("site-open");
  document.body.classList.remove("menu-open");
  renderProfileStatus();
  renderHomeLeaderboardPreview();
}

function showMenu() {
  els.homePage.classList.add("hidden");
  els.mainMenu.classList.remove("hidden");
  closeLoginPage();
  document.body.classList.add("menu-open");
  document.body.classList.remove("site-open");
}

function hideMenu() {
  els.homePage.classList.add("hidden");
  els.mainMenu.classList.add("hidden");
  document.body.classList.remove("menu-open");
  document.body.classList.remove("site-open");
  closeLoginPage();
}

function openLoginPage() {
  const profile = loadProfile();
  els.loginName.value = profile?.name || "";
  els.loginGym.value = profile?.gym || playerGymName();
  els.loginPage.classList.remove("hidden");
  renderProfileStatus();
}

function closeLoginPage() {
  els.loginPage.classList.add("hidden");
}

function chatReplyFor(message) {
  const text = message.toLowerCase();
  if (text.includes("train") || text.includes("camp")) {
    return "Training can sharpen all 10 active gym fighters each week. Booked fighters use a 4-session camp before fight night.";
  }
  if (text.includes("contract") || text.includes("offer") || text.includes("money")) {
    return "Contract money is tied to rating, record, star power, and promotion prestige. New fighters get smaller offers, then earn better deals as they win.";
  }
  if (text.includes("fight") || text.includes("round") || text.includes("title")) {
    return "Fight offers try to match similar ratings. Lower-card fights are shorter, feature fights can go longer, and title fights are 12 rounds.";
  }
  if (text.includes("gym") || text.includes("leaderboard")) {
    return "Your gym can hold 10 fighters. Recruit free agents, train the roster, and climb the gym leaderboard as your record improves.";
  }
  if (text.includes("save") || text.includes("load") || text.includes("login")) {
    return "Login saves your local manager profile. Use Save Game in the menu or top bar to save the full boxing universe.";
  }
  if (text.includes("promotion") || text.includes("show") || text.includes("week")) {
    return "Each week the universe shuffles promotion shows, simulates results, updates rankings, and can open or close promotions over time.";
  }
  if (text.includes("hello") || text.includes("hi")) {
    return "Hey manager. Start by logging in, then build your gym and take the first smart contract offer.";
  }
  return "Good question. Try the game menu for Contracts, Training, Fight Offers, Gym, Rankings, and News. The best first move is sign a prospect, train weekly, then accept a fair fight offer.";
}

function defaultHomeChat() {
  return [{
    sender: "Coach",
    message: "Welcome to Ring Kings Manager. Ask about training, contracts, fight offers, gyms, saves, rankings, or weekly shows.",
    type: "coach",
    time: new Date().toISOString()
  }];
}

function loadHomeChat() {
  try {
    const raw = localStorage.getItem(homeChatKey);
    const messages = raw ? JSON.parse(raw) : defaultHomeChat();
    return Array.isArray(messages) && messages.length ? messages : defaultHomeChat();
  } catch (error) {
    return defaultHomeChat();
  }
}

function saveHomeChat(messages) {
  try {
    localStorage.setItem(homeChatKey, JSON.stringify(messages.slice(-40)));
  } catch (error) {
    // Chat still works for the current page even if browser storage is blocked.
  }
}

function renderHomeChat() {
  const messages = loadHomeChat();
  els.homeChatLog.innerHTML = "";
  els.adminChatInbox.innerHTML = "";
  messages.slice(-8).forEach(({ sender, message, type }) => appendHomeChatBubble(sender, message, type));
  messages.slice(-20).forEach(({ sender, message, time }) => {
    const row = document.createElement("div");
    row.className = "admin-inbox-row";
    const name = document.createElement("b");
    name.textContent = sender;
    const text = document.createElement("span");
    const stamp = time ? new Date(time).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : "Now";
    text.textContent = `${message} (${stamp})`;
    row.append(name, text);
    els.adminChatInbox.appendChild(row);
  });
  els.homeChatLog.scrollTop = els.homeChatLog.scrollHeight;
  els.adminChatInbox.scrollTop = els.adminChatInbox.scrollHeight;
}

function appendHomeChatBubble(sender, message, type = "coach") {
  const item = document.createElement("div");
  item.className = `chat-message ${type}`;
  const name = document.createElement("strong");
  const text = document.createElement("p");
  name.textContent = sender;
  text.textContent = message;
  item.append(name, text);
  els.homeChatLog.appendChild(item);
}

function addHomeChatMessage(sender, message, type = "coach") {
  const messages = loadHomeChat();
  messages.push({ sender, message, type, time: new Date().toISOString() });
  saveHomeChat(messages);
  renderHomeChat();
}

function sendHomeChat(event) {
  event.preventDefault();
  const message = els.homeChatInput.value.trim();
  if (!message) return;
  addHomeChatMessage("You", message, "player");
  els.homeChatInput.value = "";
  window.setTimeout(() => addHomeChatMessage("Coach", chatReplyFor(message), "coach"), 180);
}

function sendAdminChat(event) {
  event.preventDefault();
  const message = els.adminChatInput.value.trim();
  if (!message) return;
  addHomeChatMessage("Admin", message, "admin");
  els.adminChatInput.value = "";
}

function toggleAdminChat() {
  if (!isAdminProfile()) {
    els.homeAdminPanel.classList.add("hidden");
    return;
  }
  els.homeAdminPanel.classList.toggle("hidden");
  renderHomeChat();
}

function clearHomeChat() {
  saveHomeChat(defaultHomeChat());
  renderHomeChat();
}

function setSaveStatus(message) {
  els.saveStatus.textContent = message;
  els.menuSaveStatus.textContent = message;
}

function yearForWeek(week = state.week) {
  return (state.startYear || startingYear) + Math.floor((week - 1) / 52);
}

function weekOfYearFor(week = state.week) {
  return ((week - 1) % 52) + 1;
}

function calendarLabel(week = state.week) {
  return `${yearForWeek(week)} Week ${weekOfYearFor(week)}`;
}

function randomGymName() {
  return randomItem(activeAiGymNames());
}

function activeAiGymNames() {
  return state.aiGyms?.length ? state.aiGyms : aiGymNames.slice(0, 10);
}

function playerGymName() {
  return state.playerGym?.name || defaultPlayerGymName;
}

function ensureGymData() {
  state.playerGym = {
    name: state.playerGym?.name || defaultPlayerGymName,
    capacity: maxPlayerFighters
  };
  const usedGyms = state.fighters
    .filter(fighter => !fighter.isPlayer && fighter.gymName)
    .map(fighter => fighter.gymName);
  state.aiGyms = [...new Set([...(state.aiGyms || aiGymNames.slice(0, 10)), ...usedGyms])];
  state.fighters.forEach(fighter => {
    if (!fighter.gymName) fighter.gymName = fighter.isPlayer ? playerGymName() : randomGymName();
    if (!fighter.country || !fighter.state) {
      const origin = randomFighterOrigin();
      fighter.country = fighter.country || origin.country;
      fighter.state = fighter.state || origin.state;
    }
  });
}

function saveGame() {
  try {
    const saveData = {
      version: 1,
      savedAt: new Date().toISOString(),
      promotions,
      state
    };
    localStorage.setItem(saveKey, JSON.stringify(saveData));
    setSaveStatus(`Saved ${calendarLabel()}.`);
  } catch (error) {
    setSaveStatus("Save failed. Browser storage may be blocked.");
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(saveKey);
    if (!raw) {
      setSaveStatus("No saved game found.");
      return false;
    }
    const saveData = JSON.parse(raw);
    if (!saveData || !Array.isArray(saveData.promotions) || !saveData.state) {
      setSaveStatus("Save file could not be loaded.");
      return false;
    }
    promotions = saveData.promotions;
    state = {
      ...state,
      ...saveData.state,
      startYear: saveData.state.startYear || startingYear,
      playerGym: saveData.state.playerGym || { name: defaultPlayerGymName, capacity: maxPlayerFighters },
      aiGyms: saveData.state.aiGyms || aiGymNames.slice(0, 10),
      gymLeaderboardHistory: saveData.state.gymLeaderboardHistory || [],
      onlineLeaderboard: saveData.state.onlineLeaderboard || [],
      expiredContractOffers: saveData.state.expiredContractOffers || [],
      playerBookings: saveData.state.playerBookings || [],
      pendingPromotions: saveData.state.pendingPromotions || [],
      promotionNews: saveData.state.promotionNews || []
    };
    ensureGymData();
    renderContracts();
    render();
    const savedDate = saveData.savedAt ? new Date(saveData.savedAt).toLocaleString() : "previous save";
    setSaveStatus(`Loaded ${calendarLabel()} from ${savedDate}.`);
    return true;
  } catch (error) {
    setSaveStatus("Load failed. Save data may be damaged.");
    return false;
  }
}

function hasSavedGame() {
  try {
    return Boolean(localStorage.getItem(saveKey));
  } catch (error) {
    return false;
  }
}

function openUniverseOrSave() {
  if (hasSavedGame()) {
    loadGame();
    hideMenu();
    return;
  }
  hideMenu();
}

function jumpTo(selector) {
  hideMenu();
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openPanel(panel) {
  panel.classList.remove("hidden");
}

function closePanel(panel) {
  panel.classList.add("hidden");
}

function openGymLeaderboard() {
  hideMenu();
  openPanel(els.gymPanel);
  requestAnimationFrame(() => {
    els.gymLeaderboardTitle?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function openNewsPanel() {
  openPanel(els.newsPanel);
}

function closeNewsPanel() {
  closePanel(els.newsPanel);
}

function openRosterPanel() {
  openPanel(els.rosterPanel);
}

function closeRosterPanel() {
  closePanel(els.rosterPanel);
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ratingForStyle(style) {
  const base = randomInt(48, 87);
  const styleBoost = {
    "Balanced": 2,
    "Power Puncher": randomInt(0, 5),
    "Out-Boxer": randomInt(1, 4),
    "Pressure Fighter": randomInt(0, 5),
    "Counter Puncher": randomInt(1, 4),
    "Defensive Specialist": randomInt(0, 4)
  };
  return Math.min(99, base + styleBoost[style]);
}

function randomFighterName(country) {
  const pool = countryNamePools[country] || { first: firstNames, last: lastNames };
  return `${randomItem(pool.first)} ${randomItem(pool.last)}`;
}

function randomFighterOrigin() {
  const origin = randomItem(fighterOrigins);
  return {
    country: origin.country,
    state: randomItem(origin.states)
  };
}

function hometownLine(fighter) {
  return `${fighter.state || "Unknown State"}, ${fighter.country || "Unknown Country"}`;
}

function countryCode(country) {
  const codes = {
    "United States": "USA",
    "Mexico": "MEX",
    "United Kingdom": "UK",
    "Canada": "CAN",
    "Australia": "AUS",
    "Japan": "JPN",
    "Puerto Rico": "PUR",
    "Cuba": "CUB",
    "Brazil": "BRA",
    "Philippines": "PHI"
  };
  return codes[country] || "INT";
}

function avatarInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

function countryAvatarClass(country) {
  return `avatar-${(country || "international").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`;
}

function avatarVariant(fighter, type, count) {
  const seed = `${fighter.id || ""}${fighter.name || ""}${fighter.country || ""}${type}`;
  const total = seed.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return (total % count) + 1;
}

function fighterAvatar(fighter, compact = false) {
  return `
    <div class="fighter-avatar ${compact ? "compact-avatar" : ""} ${countryAvatarClass(fighter.country)} skin-${avatarVariant(fighter, "skin", 5)} hair-${avatarVariant(fighter, "hair", 5)}" title="${fighter.name} | ${hometownLine(fighter)}">
      <div class="avatar-face">
        <span class="avatar-hair"></span>
        <span class="avatar-head">
          <i class="avatar-eye left-eye"></i>
          <i class="avatar-eye right-eye"></i>
          <i class="avatar-nose"></i>
          <i class="avatar-mouth"></i>
        </span>
        <span class="avatar-glove left-glove"></span>
        <span class="avatar-glove right-glove"></span>
        <span class="avatar-shoulders"></span>
      </div>
      <span class="avatar-code">${countryCode(fighter.country)}</span>
    </div>
  `;
}

function recordForRating(rating) {
  const roll = Math.random();
  let wins;
  let losses;

  if (rating >= 82) {
    wins = randomInt(16, 34);
    losses = roll < .72 ? randomInt(0, 2) : randomInt(3, 6);
  } else if (rating >= 70) {
    wins = randomInt(10, 28);
    losses = roll < .58 ? randomInt(1, 5) : randomInt(6, 9);
  } else if (rating >= 58) {
    wins = randomInt(4, 20);
    losses = roll < .44 ? randomInt(3, 8) : randomInt(8, 14);
  } else if (roll < .22) {
    wins = randomInt(5, 14);
    losses = randomInt(0, 4);
  } else if (roll < .58) {
    wins = randomInt(2, 12);
    losses = randomInt(5, 12);
  } else {
    wins = randomInt(0, 8);
    losses = randomInt(10, 22);
  }

  return {
    wins,
    losses,
    draws: Math.random() < .1 ? randomInt(1, 2) : 0
  };
}

function makeFighter(id, options = {}) {
  const style = options.style || randomItem(styles);
  const rating = options.rating || ratingForStyle(style);
  const generatedRecord = recordForRating(rating);
  const wins = options.wins ?? generatedRecord.wins;
  const losses = options.losses ?? generatedRecord.losses;
  const draws = options.draws ?? generatedRecord.draws;
  const startingPromotion = options.promotion ?? (Math.random() < .08 ? "FA" : randomItem(promotions).short);
  const startingWeeks = options.contractWeeks ?? (startingPromotion === "FA" ? 0 : randomInt(8, 36));
  const startingPurse = options.purse ?? (startingPromotion === "FA" ? 0 : randomInt(12000, 150000));
  const experience = wins + losses + draws;
  const origin = options.country && options.state
    ? { country: options.country, state: options.state }
    : randomFighterOrigin();

  return {
    id,
    name: options.name || randomFighterName(origin.country),
    country: origin.country,
    state: origin.state,
    weightClass: options.weightClass || randomItem(weightClasses),
    promotion: startingPromotion,
    style,
    rating,
    wins,
    losses,
    draws,
    ko: options.ko ?? Math.floor(wins * (randomInt(25, 75) / 100)),
    age: options.age ?? Math.min(45, randomInt(18, 25) + Math.floor(experience / randomInt(3, 6))),
    ageWeeks: options.ageWeeks ?? 0,
    injuryWear: options.injuryWear ?? Math.min(85, losses * randomInt(2, 5) + randomInt(0, 18)),
    retired: Boolean(options.retired),
    retirementReason: options.retirementReason || "",
    contractWeeks: startingWeeks,
    purse: startingPurse,
    signingBonus: options.signingBonus ?? 0,
    contractValue: options.contractValue ?? startingPurse * startingWeeks,
    fightEarnings: options.fightEarnings ?? 0,
    bonusEarnings: options.bonusEarnings ?? 0,
    careerEarnings: options.careerEarnings ?? ((options.fightEarnings ?? 0) + (options.bonusEarnings ?? 0)),
    lastFightPay: options.lastFightPay ?? 0,
    sharpness: options.sharpness ?? randomInt(45, 72),
    fatigue: options.fatigue ?? randomInt(0, 18),
    morale: options.morale ?? randomInt(48, 76),
    readyInWeeks: options.readyInWeeks ?? 0,
    campSessions: options.campSessions ?? 0,
    lastCampWeek: options.lastCampWeek ?? 0,
    lastCampReport: options.lastCampReport ?? "",
    gymName: options.gymName || (options.isPlayer ? defaultPlayerGymName : randomGymName()),
    isPlayer: Boolean(options.isPlayer)
  };
}

function generateUniverse() {
  promotions = startingPromotions.map(promo => ({ ...promo }));
  const startingAiGyms = shuffled(aiGymNames).slice(0, 10);
  state = {
    startYear: startingYear,
    playerGym: { name: defaultPlayerGymName, capacity: maxPlayerFighters },
    aiGyms: startingAiGyms,
    gymLeaderboardHistory: [],
    onlineLeaderboard: [],
    week: 1,
    fighters: Array.from({ length: 4000 }, (_, index) => makeFighter(index + 1, { gymName: randomItem(startingAiGyms) })),
    playerId: null,
    playerIds: [],
    playerOffers: makePlayerOffers(),
    selectedOffer: null,
    expiredContractOffers: [],
    fightOffers: [],
    playerBookings: [],
    pendingPromotions: [],
    schedule: [],
    lastShows: [],
    signingNews: [],
    retirementNews: [],
    promotionNews: []
  };
  ensureGymData();
  state.selectedOffer = state.playerOffers[0]?.short || null;
  state.schedule = makeWeeklySchedule(state.week);
  recordGymLeaderboard();
}

function populateControls() {
  els.weightClass.innerHTML = weightClasses.map(weight => `<option>${weight}</option>`).join("");
}

function renderContracts() {
  els.contractList.innerHTML = promotions.map(promo => `
    <article class="contract">
      <h3>${promo.name}</h3>
      <p><strong>${promo.short}</strong> contract</p>
      <p>Promotion rating: ${promo.prestige || 60}/100</p>
      <p>Per-fight purse: $${promo.purse.toLocaleString()}</p>
      <p>Length: ${promo.length} weeks</p>
      <p>Bonus: ${promo.bonus}</p>
    </article>
  `).join("");
}

function contractValue(promo, fighter) {
  const prestigeBoost = 1 + ((promo.prestige || 60) - 60) / 180;
  const ratingBonus = Math.max(0, fighter.rating - 45) * 1800;
  const winBonus = fighter.wins * 700;
  return Math.round(((promo.purse + ratingBonus + winBonus) * prestigeBoost) / 1000) * 1000;
}

function fighterMarketProfile(fighter) {
  const bouts = (fighter.wins || 0) + (fighter.losses || 0) + (fighter.draws || 0);
  const winRate = bouts ? (fighter.wins || 0) / bouts : 0;
  const rating = fighter.rating || 42;
  const age = fighter.age || 21;
  const prospectBonus = age <= 23 && rating >= 50 ? .12 : age <= 25 && rating >= 58 ? .08 : 0;
  const unbeatenBonus = bouts >= 4 && (fighter.losses || 0) === 0 ? .08 : 0;
  const marketScore = rating + (fighter.wins || 0) * 1.2 - (fighter.losses || 0) * 2 + winRate * 12 + prospectBonus * 30 + unbeatenBonus * 20;
  let tier = "New prospect";
  if (marketScore >= 92) tier = "Elite draw";
  else if (marketScore >= 80) tier = "Title contender";
  else if (marketScore >= 67) tier = "Rising name";
  else if (marketScore >= 54) tier = "Development deal";

  return { bouts, winRate, rating, age, prospectBonus, unbeatenBonus, marketScore, tier };
}

function contractMultiplier(fighter) {
  const profile = fighterMarketProfile(fighter);
  const ratingPart = Math.max(.18, profile.rating / 105);
  const experiencePart = Math.min(.42, (fighter.wins || 0) * .014 + profile.bouts * .004);
  const winRatePart = profile.bouts ? (profile.winRate - .5) * .28 : -.12;
  const lossPenalty = Math.min(.28, (fighter.losses || 0) * .018);
  return Math.max(.16, ratingPart + experiencePart + winRatePart + profile.prospectBonus + profile.unbeatenBonus - lossPenalty);
}

function offerMoney(promo, fighter) {
  const profile = fighterMarketProfile(fighter);
  const multiplier = contractMultiplier(fighter);
  const prestigeBoost = 1 + ((promo.prestige || 60) - 60) / 230;
  const newFighterDrag = profile.bouts === 0 ? .72 : 1;
  const purse = Math.max(2500, Math.round((promo.purse * multiplier * prestigeBoost * newFighterDrag) / 500) * 500);
  const bonusRate = profile.tier === "Elite draw" ? randomInt(35, 70) : profile.tier === "Title contender" ? randomInt(28, 55) : profile.tier === "Rising name" ? randomInt(18, 42) : randomInt(8, 28);
  const signingBonus = Math.max(profile.bouts ? 1500 : 750, Math.round((purse * bonusRate / 100) / 500) * 500);
  const length = contractLength(promo, fighter);

  return {
    purse,
    signingBonus,
    length,
    totalValue: (purse * length) + signingBonus
  };
}

function currentOfferFighter() {
  return {
    rating: createdFighterRating(),
    wins: 0,
    losses: 0,
    draws: 0,
    age: els.randomFighters.checked ? randomInt(18, 25) : 20
  };
}

function createdFighterRating() {
  return els.randomFighters.checked ? randomInt(38, 68) : 42;
}

function shuffled(list) {
  return [...list].sort(() => Math.random() - .5);
}

function contractLength(promo, fighter) {
  const profile = fighterMarketProfile(fighter);
  let target = promo.length;
  if (profile.tier === "Elite draw") target += randomInt(8, 16);
  else if (profile.tier === "Title contender") target += randomInt(4, 10);
  else if (profile.tier === "Rising name") target += randomInt(0, 6);
  else if (profile.tier === "New prospect") target -= randomInt(4, 10);
  if (profile.age <= 22 && profile.rating >= 52) target += randomInt(2, 8);
  return Math.max(8, Math.min(44, target));
}

function promotionFitScore(promo, fighter) {
  const profile = fighterMarketProfile(fighter);
  const prestige = promo.prestige || 60;
  const prestigeTarget = Math.max(45, Math.min(92, profile.marketScore));
  const prestigeFit = 100 - Math.abs(prestige - prestigeTarget);
  const purseFit = Math.min(34, promo.purse / 3500);
  const prospectFit = profile.tier === "New prospect" || profile.tier === "Development deal"
    ? (80 - prestige) * .18 + (promo.length <= 20 ? 8 : 0)
    : 0;
  const contenderFit = profile.tier === "Title contender" || profile.tier === "Elite draw"
    ? prestige * .22 + promo.purse / 9000
    : 0;
  return prestigeFit + purseFit + prospectFit + contenderFit + randomInt(-6, 6);
}

function contractPitch(promo, fighter) {
  const profile = fighterMarketProfile(fighter);
  if (profile.tier === "Elite draw") return randomItem(["PPV headline push", "Champion money offer", "Marquee main-event deal"]);
  if (profile.tier === "Title contender") return randomItem(["Title eliminator path", "Main event contract", "Ranked contender package"]);
  if (profile.tier === "Rising name") return randomItem(["TV co-feature plan", "Fast ranking climb", "Prospect-to-contender push"]);
  if (profile.tier === "Development deal") return randomItem(["Development showcase", "Step-up fight plan", "Prospect series build"]);
  return randomItem(["Starter contract", "Small-show learning deal", "Low-risk prospect build"]);
}

function makePlayerOffers() {
  const offerFighter = currentOfferFighter();
  return promotions
    .map(promo => ({ promo, fit: promotionFitScore(promo, offerFighter) }))
    .sort((a, b) => b.fit - a.fit)
    .slice(0, 4)
    .sort(() => Math.random() - .5)
    .slice(0, 3)
    .map(promo => {
      const money = offerMoney(promo.promo, offerFighter);
      return {
        ...promo.promo,
        length: money.length,
        purse: money.purse,
        signingBonus: money.signingBonus,
        totalValue: money.totalValue,
        hype: contractPitch(promo.promo, offerFighter),
        marketTier: fighterMarketProfile(offerFighter).tier
      };
    });
}

function makeRenewalOffers(fighter) {
  const currentPromo = promotions.find(promo => promo.short === fighter.promotion);
  const offerPool = promotions
    .map(promo => ({ promo, fit: promotionFitScore(promo, fighter) + (promo.short === currentPromo?.short ? 12 : 0) }))
    .sort((a, b) => b.fit - a.fit)
    .slice(0, 4)
    .map(item => item.promo);
  if (currentPromo && !offerPool.some(promo => promo.short === currentPromo.short)) offerPool[0] = currentPromo;
  return shuffled(offerPool).slice(0, 3).map(promo => {
    const money = offerMoney(promo, fighter);
    return {
      ...promo,
      length: money.length,
      fighterId: fighter.id,
      fighterName: fighter.name,
      purse: money.purse,
      signingBonus: money.signingBonus,
      totalValue: money.totalValue,
      hype: contractPitch(promo, fighter),
      marketTier: fighterMarketProfile(fighter).tier
    };
  });
}

function renderContractOffer() {
  if (!state.playerOffers.length) state.playerOffers = makePlayerOffers();
  if (!state.selectedOffer) state.selectedOffer = state.playerOffers[0].short;

  const renewalHtml = state.expiredContractOffers.map(item => `
    <div class="offer-label">${item.fighterName} contract expired</div>
    ${item.offers.map(offer => `
      <button class="offer-card renewal-offer" data-renew-fighter="${item.fighterId}" data-renew-offer="${offer.short}" type="button">
        <strong>${offer.fighterName} -> ${offer.name}</strong>
        <span>Promotion rating ${offer.prestige || 60}/100</span>
        <span>$${offer.purse.toLocaleString()} per-fight purse</span>
        <span>$${offer.signingBonus.toLocaleString()} signing bonus</span>
        <span>${offer.length} week contract</span>
        <span>$${offer.totalValue.toLocaleString()} total value</span>
        <span>${offer.marketTier || "Market fit"}</span>
        <span>${offer.hype}</span>
      </button>
    `).join("")}
  `).join("");

  const signingHtml = state.playerOffers.map(promo => `
    <button class="offer-card ${state.selectedOffer === promo.short ? "selected" : ""}" data-offer="${promo.short}" type="button">
      <strong>${promo.name}</strong>
      <span>Promotion rating ${promo.prestige || 60}/100</span>
      <span>$${promo.purse.toLocaleString()} per-fight purse</span>
      <span>$${promo.signingBonus.toLocaleString()} signing bonus</span>
      <span>${promo.length} week contract</span>
      <span>$${promo.totalValue.toLocaleString()} total value</span>
      <span>${promo.marketTier || "Market fit"}</span>
      <span>${promo.hype}</span>
    </button>
  `).join("");
  els.contractOffer.innerHTML = renewalHtml + signingHtml;
}

function player() {
  return state.fighters.find(fighter => fighter.id === state.playerId);
}

function playerRoster() {
  return state.playerIds
    .map(id => state.fighters.find(fighter => fighter.id === id))
    .filter(Boolean);
}

function activePlayerRoster() {
  return playerRoster().filter(fighter => !fighter.retired);
}

function readiness(fighter) {
  if (fighter.retired) return { ready: false, label: "Retired" };
  if (upcomingFightFor(fighter)) return { ready: false, label: "Fight booked" };
  if (fighter.promotion === "FA") return { ready: false, label: "Needs contract" };
  if (fighter.contractWeeks <= 0) return { ready: false, label: "Contract expired" };
  if (fighter.readyInWeeks > 0) return { ready: false, label: `Ready in ${fighter.readyInWeeks} week${fighter.readyInWeeks === 1 ? "" : "s"}` };
  if (fighter.fatigue > 45) return { ready: false, label: "Too fatigued" };
  if (fighter.sharpness < 42) return { ready: false, label: "Needs training" };
  if (fighter.morale < 25) return { ready: false, label: "Morale low" };
  return { ready: true, label: "Ready to fight" };
}

function upcomingFightFor(fighter) {
  return state.playerBookings.find(booking => booking.fighterId === fighter.id);
}

function weeklyTrainedCount() {
  return activePlayerRoster().filter(fighter => fighter.lastCampWeek === state.week).length;
}

function campStatus(fighter) {
  const booking = upcomingFightFor(fighter);
  if (fighter.lastCampWeek === state.week) {
    const progress = booking ? `${fighter.campSessions}/${fightCampMaxSessions} sessions complete` : "weekly gym work complete";
    return { canTrain: false, label: `Already trained this week: ${progress}.` };
  }
  if (weeklyTrainedCount() >= weeklyTrainingLimit) {
    return { canTrain: false, label: `Weekly gym limit reached: ${weeklyTrainingLimit} fighters trained this week.` };
  }
  if ((fighter.fatigue || 0) >= 92) return { canTrain: false, label: "Too fatigued to train safely this week." };
  if (!booking) {
    return {
      canTrain: true,
      label: "Open gym available. This fighter can train once this week."
    };
  }
  if (fighter.campSessions >= fightCampMaxSessions) return { canTrain: false, label: `Camp complete: ${fightCampMaxSessions}/${fightCampMaxSessions} sessions before ${booking.opponentName}.` };
  return {
    canTrain: true,
    label: `${booking.weeksToFight} week${booking.weeksToFight === 1 ? "" : "s"} to fight night vs ${booking.opponentName}. Camp ${fighter.campSessions}/${fightCampMaxSessions}.`
  };
}

function readyPlayerFighters() {
  return activePlayerRoster()
    .filter(fighter => readiness(fighter).ready)
    .sort((a, b) => b.sharpness - a.sharpness || a.fatigue - b.fatigue);
}

function divisionRankings(promotion, weightClass) {
  return state.fighters
    .filter(fighter => !fighter.retired && fighter.promotion === promotion && fighter.weightClass === weightClass)
    .sort((a, b) => b.wins - a.wins || b.rating - a.rating || a.losses - b.losses);
}

function titleStatus(fighter) {
  if (fighter.retired) return { eligible: false, label: "Retired" };
  if (fighter.promotion === "FA" || fighter.contractWeeks <= 0) return { eligible: false, label: "Needs a contract" };

  const rankings = divisionRankings(fighter.promotion, fighter.weightClass);
  const rank = rankings.findIndex(item => item.id === fighter.id) + 1;
  const champion = rankings[0];
  if (!rank || !champion) return { eligible: false, label: "Not ranked" };
  if (champion.id === fighter.id) return { eligible: false, champion: true, rank, label: "Current champion" };

  const ready = readiness(fighter);
  const eligible = rank <= 5 && ready.ready;
  return {
    eligible,
    rank,
    champion,
    label: eligible
      ? `Title shot ready: ranked #${rank}`
      : `Title rank #${rank} - ${rank > 5 ? "needs Top 5" : ready.label}`
  };
}

function renderPlayer() {
  const roster = playerRoster();
  if (!roster.length) {
    els.playerCard.className = "fighter-card empty";
    els.playerCard.textContent = "No fighter signed yet.";
    return;
  }

  const activeRoster = activePlayerRoster();
  const rosterEarnings = roster.reduce((sum, fighter) => sum + (fighter.careerEarnings || 0), 0);
  const rosterFightEarnings = roster.reduce((sum, fighter) => sum + (fighter.fightEarnings || 0), 0);
  const rosterBonusEarnings = roster.reduce((sum, fighter) => sum + (fighter.bonusEarnings || 0), 0);
  els.playerCard.className = "fighter-card";
  els.playerCard.innerHTML = `
    <strong>${playerGymName()} (${activeRoster.length}/${maxPlayerFighters} active, ${roster.length} total)</strong>
    <div class="roster-money">
      <span>Total earned: $${rosterEarnings.toLocaleString()}</span>
      <span>Fight purses: $${rosterFightEarnings.toLocaleString()}</span>
      <span>Signing bonuses: $${rosterBonusEarnings.toLocaleString()}</span>
    </div>
    ${roster.slice(-10).reverse().map(fighter => {
      const promo = promotions.find(item => item.short === fighter.promotion);
      const promoName = promo ? promo.name : "Free Agent";
      const ready = readiness(fighter);
      const title = titleStatus(fighter);
      const booking = upcomingFightFor(fighter);
      return `
        <div class="roster-fighter">
          <div class="fighter-title-row">
            ${fighterAvatar(fighter)}
            <div>
              <strong>${fighter.name}</strong>
              <div>${fighter.weightClass} | ${fighter.style} | Age ${fighter.age} | ${hometownLine(fighter)} | ${fighter.gymName || playerGymName()}</div>
            </div>
          </div>
          <div class="record">${fighter.wins}-${fighter.losses}-${fighter.draws}, ${fighter.ko} KO | Rating ${fighter.rating}</div>
          <div class="tag">${promoName}</div>
          <div class="meta">${fighter.contractWeeks} weeks | $${fighter.purse.toLocaleString()} per fight | $${fighter.signingBonus.toLocaleString()} bonus</div>
          <div class="meta">Total earned $${fighter.careerEarnings.toLocaleString()} | Fight purses $${fighter.fightEarnings.toLocaleString()} | Bonuses $${fighter.bonusEarnings.toLocaleString()}</div>
          <div class="meta">Last fight $${fighter.lastFightPay.toLocaleString()}</div>
          <div class="meta">Sharpness ${fighter.sharpness} | Fatigue ${fighter.fatigue} | Morale ${fighter.morale} | Injury wear ${fighter.injuryWear}</div>
          ${booking ? `<div class="camp-line">Fight booked: ${booking.opponentName} in ${booking.weeksToFight} week${booking.weeksToFight === 1 ? "" : "s"} | Camp ${fighter.campSessions}/${fightCampMaxSessions}</div>` : ""}
          ${fighter.retired ? `<div class="meta">Retired: ${fighter.retirementReason}</div>` : ""}
          <div class="tag ${ready.ready ? "ready-tag" : "wait-tag"}">${ready.label}</div>
          <div class="title-row">
            <span class="tag ${title.eligible || title.champion ? "ready-tag" : "wait-tag"}">${title.label}</span>
            ${title.eligible ? `<button data-title-challenge="${fighter.id}" type="button">Challenge Champion</button>` : ""}
          </div>
        </div>
      `;
    }).join("")}
  `;
}

function gymRecords() {
  const groups = new Map();
  const addFighterToGym = (fighter, fallbackName, isPlayerGym = false) => {
    const name = fighter?.gymName || fallbackName;
    if (!groups.has(name)) {
      groups.set(name, { name, fighters: 0, wins: 0, losses: 0, draws: 0, ratingTotal: 0, topRating: 0, topFighter: "", isPlayerGym });
    }
    const gym = groups.get(name);
    gym.isPlayerGym = gym.isPlayerGym || isPlayerGym;
    if (!fighter) return;
    gym.fighters += 1;
    gym.wins += fighter.wins;
    gym.losses += fighter.losses;
    gym.draws += fighter.draws;
    gym.ratingTotal += fighter.rating;
    if (fighter.rating > gym.topRating) {
      gym.topRating = fighter.rating;
      gym.topFighter = fighter.name;
    }
  };

  addFighterToGym(null, playerGymName(), true);
  activePlayerRoster().forEach(fighter => addFighterToGym(fighter, playerGymName(), fighter.gymName === playerGymName()));

  state.fighters
    .filter(fighter => !fighter.retired && !fighter.isPlayer)
    .forEach(fighter => {
      addFighterToGym(fighter, randomGymName());
    });

  return [...groups.values()]
    .map(gym => {
      const averageRating = Math.round(gym.ratingTotal / Math.max(1, gym.fighters));
      return {
        ...gym,
        averageRating,
        rankScore: (gym.wins * 2) + averageRating + gym.topRating - gym.losses
      };
    })
    .sort((a, b) => b.rankScore - a.rankScore || b.topRating - a.topRating || b.averageRating - a.averageRating);
}

function gymCampLine(fighter) {
  const booking = upcomingFightFor(fighter);
  if (!booking) return "Gym training: open gym available once per week.";
  const expectedSessions = Math.max(0, fightCampWeeks - booking.weeksToFight);
  const missed = Math.max(0, expectedSessions - (fighter.campSessions || 0));
  const missedText = missed ? ` | Missed ${missed} camp session${missed === 1 ? "" : "s"}` : "";
  return `Fight camp: ${booking.opponentName} in ${booking.weeksToFight} week${booking.weeksToFight === 1 ? "" : "s"} | ${fighter.campSessions}/${fightCampMaxSessions} sessions${missedText}`;
}

function recordGymLeaderboard() {
  state.gymLeaderboardHistory = state.gymLeaderboardHistory || [];
  const top = gymRecords().slice(0, 10).map((gym, index) => ({
    rank: index + 1,
    name: gym.name,
    score: gym.rankScore,
    fighters: gym.fighters,
    record: `${gym.wins}-${gym.losses}-${gym.draws}`,
    averageRating: gym.averageRating,
    topFighter: gym.topFighter,
    isPlayerGym: Boolean(gym.isPlayerGym)
  }));
  state.gymLeaderboardHistory.push({
    week: state.week,
    label: calendarLabel(),
    top
  });
}

function playerLeaderboardName() {
  const profile = loadProfile();
  return profile?.name?.trim() || "Guest Player";
}

function onlinePlayerId() {
  return `player-${playerLeaderboardName().toLowerCase().replace(/[^a-z0-9]+/g, "-") || "guest"}`;
}

function playerOnlineLeaderboardEntry() {
  const playerGym = gymRecords().find(gym => gym.isPlayerGym) || {
    name: playerGymName(),
    rankScore: 0,
    fighters: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    averageRating: 0,
    topFighter: "None"
  };
  return {
    id: onlinePlayerId(),
    playerName: playerLeaderboardName(),
    gymName: playerGym.name,
    score: playerGym.rankScore,
    fighters: playerGym.fighters,
    record: `${playerGym.wins}-${playerGym.losses}-${playerGym.draws}`,
    averageRating: playerGym.averageRating,
    topFighter: playerGym.topFighter || "None",
    label: calendarLabel(),
    submittedAt: new Date().toLocaleString(),
    isHuman: true
  };
}

function makeOnlineRivalEntry(index) {
  const wins = randomInt(8, 160);
  const losses = randomInt(0, Math.max(4, Math.floor(wins / 3)));
  const draws = randomInt(0, 6);
  const averageRating = randomInt(54, 94);
  const topRating = Math.min(99, averageRating + randomInt(4, 12));
  const fighters = randomInt(3, maxPlayerFighters);
  const score = (wins * 2) + averageRating + topRating - losses + randomInt(-12, 18);
  return {
    id: `online-rival-${index}`,
    playerName: onlinePlayerNames[index % onlinePlayerNames.length],
    gymName: onlineGymNameBank[index % onlineGymNameBank.length],
    score,
    fighters,
    record: `${wins}-${losses}-${draws}`,
    averageRating,
    topFighter: randomFighterName(randomItem(fighterOrigins).country),
    label: `${startingYear + randomInt(0, 2)} season`,
    submittedAt: new Date(Date.now() - randomInt(1, 28) * 86400000).toLocaleDateString(),
    isHuman: false
  };
}

function ensureOnlineLeaderboardField() {
  state.onlineLeaderboard = state.onlineLeaderboard || [];
  const rivals = state.onlineLeaderboard.filter(entry => entry.id?.startsWith("online-rival-"));
  if (rivals.length >= 120) return;
  const existing = new Set(state.onlineLeaderboard.map(entry => entry.id));
  for (let index = 0; index < 120; index += 1) {
    const id = `online-rival-${index}`;
    if (!existing.has(id)) state.onlineLeaderboard.push(makeOnlineRivalEntry(index));
  }
}

function submitOnlineLeaderboard() {
  ensureOnlineLeaderboardField();
  const entry = playerOnlineLeaderboardEntry();
  const existingIndex = state.onlineLeaderboard.findIndex(item => item.id === entry.id);
  if (existingIndex >= 0) {
    state.onlineLeaderboard[existingIndex] = entry;
  } else {
    state.onlineLeaderboard.push(entry);
  }
  render();
  renderHomeLeaderboardPreview();
  setSaveStatus(`${entry.gymName} submitted to all-player gym rankings as ${entry.playerName}.`);
}

function refreshOnlineLeaderboard() {
  ensureOnlineLeaderboardField();
  renderOnlineLeaderboard();
  renderHomeLeaderboardPreview();
  setSaveStatus("All-player gym rankings refreshed.");
}

function renderOnlineLeaderboard() {
  ensureOnlineLeaderboardField();
  const entries = [...state.onlineLeaderboard]
    .sort((a, b) => b.score - a.score || b.averageRating - a.averageRating)
    .slice(0, 100);
  const playerRank = [...state.onlineLeaderboard]
    .sort((a, b) => b.score - a.score || b.averageRating - a.averageRating)
    .findIndex(entry => entry.id === onlinePlayerId()) + 1;
  els.onlineLeaderboardSummary.textContent = entries.length
    ? `Top ${entries.length} all-player gyms loaded. ${playerRank ? `Your gym rank is #${playerRank}.` : "Submit your gym to claim a rank."}`
    : "No player gym entries submitted yet.";
  els.onlineLeaderboard.innerHTML = entries.length ? entries.map((entry, index) => `
    <div class="signing">
      <div>
        <b>#${index + 1} ${entry.gymName}</b> ${entry.playerName}${entry.isHuman ? " (You)" : ""}
        <div class="meta">Score ${entry.score} | ${entry.record} | Avg ${entry.averageRating} | Top fighter: ${entry.topFighter}</div>
        <div class="meta">${entry.label} | ${entry.submittedAt} | ${entry.isHuman ? "Player submitted" : "Online player field"}</div>
      </div>
      <span class="tag">${entry.fighters} fighters</span>
    </div>
  `).join("") : `<div class="empty-state">Submit your gym to join the all-player ranking field.</div>`;
}

function renderHomeLeaderboardPreview() {
  ensureOnlineLeaderboardField();
  const rankedEntries = [...state.onlineLeaderboard]
    .sort((a, b) => b.score - a.score || b.averageRating - a.averageRating);
  const playerRank = rankedEntries.findIndex(entry => entry.id === onlinePlayerId()) + 1;
  const preview = rankedEntries.slice(0, 5);
  els.homeLeaderboardSummary.textContent = playerRank
    ? `Your gym is ranked #${playerRank}. Full board has ${Math.min(100, rankedEntries.length)} gyms.`
    : `Top ${Math.min(100, rankedEntries.length)} all-player gyms loaded. Submit your gym from the full leaderboard to claim a rank.`;
  els.homeLeaderboardPreview.innerHTML = preview.map((entry, index) => `
    <article class="home-rank-card ${entry.isHuman ? "player-rank" : ""}">
      <b>#${index + 1}</b>
      <strong>${entry.gymName}</strong>
      <span>${entry.playerName}${entry.isHuman ? " (You)" : ""}</span>
      <span>Score ${entry.score} | ${entry.record}</span>
      <span>Avg ${entry.averageRating} | ${entry.fighters} fighters</span>
    </article>
  `).join("");
}

function renderGym() {
  ensureGymData();
  els.gymName.value = playerGymName();
  const roster = activePlayerRoster();
  const gymRoster = roster.filter(fighter => fighter.gymName === playerGymName());
  const wins = gymRoster.reduce((sum, fighter) => sum + fighter.wins, 0);
  const losses = gymRoster.reduce((sum, fighter) => sum + fighter.losses, 0);
  const draws = gymRoster.reduce((sum, fighter) => sum + fighter.draws, 0);
  const averageRating = gymRoster.length
    ? Math.round(gymRoster.reduce((sum, fighter) => sum + fighter.rating, 0) / gymRoster.length)
    : 0;
  const playerGymRank = gymRecords().findIndex(gym => gym.isPlayerGym) + 1;
  els.gymSummary.textContent = `${playerGymName()} has ${gymRoster.length}/${maxPlayerFighters} fighters in the gym, ${wins}-${losses}-${draws} combined record, and ${averageRating || "no"} average rating. You manage ${roster.length}/${maxPlayerFighters} fighters total. Your gym is ranked #${playerGymRank}. ${state.aiGyms.length} AI gyms are active in the universe.`;
  els.gymRoster.innerHTML = roster.length ? roster.map(fighter => `
    <article class="stat-card">
      <div class="stat-card-head">
        ${fighterAvatar(fighter)}
        <div>
          <h3>${fighter.name}</h3>
          <div class="meta">${fighter.weightClass} | ${fighter.style} | ${hometownLine(fighter)} | ${fighter.gymName || playerGymName()}</div>
        </div>
        <span class="tag">${fighter.rating}</span>
      </div>
      <div class="stat-grid">
        <span><b>${fighter.wins}-${fighter.losses}-${fighter.draws}</b> Record</span>
        <span><b>${fighter.sharpness}</b> Sharpness</span>
        <span><b>${fighter.fatigue}</b> Fatigue</span>
        <span><b>${fighter.morale}</b> Morale</span>
      </div>
      <div class="card-lines">
        <div>${gymCampLine(fighter)}</div>
        <div>Gym: ${fighter.gymName || playerGymName()}</div>
        <div class="career-actions">
          ${fighter.gymName === playerGymName()
            ? `<button data-gym-free-agent="${fighter.id}" type="button">Make Gym Free Agent</button>`
            : `<button data-gym-join="${fighter.id}" type="button">Join Your Gym</button>`}
        </div>
      </div>
    </article>
  `).join("") : `<div class="empty-state">Sign fighters to build your gym roster.</div>`;

  const records = gymRecords();
  els.aiGyms.innerHTML = records.map((gym, index) => `
    <article class="promotion-card">
      <div class="stat-card-head">
        <div>
          <h3>#${index + 1} ${gym.name}</h3>
          <div class="meta">${gym.fighters.toLocaleString()} active fighters | ${gym.wins}-${gym.losses}-${gym.draws} combined</div>
        </div>
        <span class="tag">${gym.isPlayerGym ? "Your gym" : `Score ${gym.rankScore}`}</span>
      </div>
      <div class="card-lines">
        <div>Score: ${gym.rankScore}</div>
        <div>Average rating: ${gym.averageRating}</div>
        <div>Top fighter: ${gym.topFighter || "None"} (${gym.topRating})</div>
      </div>
    </article>
  `).join("");
  const history = state.gymLeaderboardHistory || [];
  const latestLeader = history[history.length - 1]?.top?.[0];
  els.gymLeaderboardSummary.textContent = history.length
    ? `${history.length.toLocaleString()} weekly leaderboard snapshot${history.length === 1 ? "" : "s"} saved. Latest #1: ${latestLeader ? `${latestLeader.name} (${latestLeader.score})` : "None"}.`
    : "No leaderboard history saved yet.";
  els.gymLeaderboardHistory.innerHTML = history.slice(-24).reverse().map(entry => {
    const leader = entry.top?.[0];
    return `
      <div class="signing">
        <div>
          <b>${entry.label}</b> #1 ${leader ? leader.name : "No leader"}
          <div class="meta">${leader ? `Score ${leader.score} | ${leader.fighters.toLocaleString()} fighters | ${leader.record}` : "No gym record saved"}</div>
        </div>
        <span class="tag">${entry.top?.length || 0} saved</span>
      </div>
    `;
  }).join("");
  renderOnlineLeaderboard();
}

function saveGymName() {
  const name = els.gymName.value.trim() || defaultPlayerGymName;
  state.playerGym = { name, capacity: maxPlayerFighters };
  playerRoster().forEach(fighter => {
    fighter.gymName = name;
  });
  render();
  setSaveStatus(`Gym saved: ${name}.`);
}

function rosterHasRoom() {
  return activePlayerRoster().length < maxPlayerFighters;
}

function setPlayerFighterGym(fighterId, gymName) {
  const fighter = activePlayerRoster().find(item => item.id === Number(fighterId));
  if (!fighter) return;
  fighter.gymName = gymName;
  render();
  setSaveStatus(`${fighter.name} is now with ${gymName}.`);
}

function makeAiGymFreeAgent(fighter, oldGym) {
  fighter.gymName = independentGymName;
  return {
    type: "Gym free agent",
    headline: `${fighter.name} became a gym free agent.`,
    detail: `${fighter.name} left ${oldGym} and is now available in the free agent market.`
  };
}

function runGymTransfers() {
  ensureGymData();
  const moves = [];
  const candidates = state.fighters
    .filter(fighter => !fighter.retired && !fighter.isPlayer && fighter.gymName)
    .sort(() => Math.random() - .5)
    .slice(0, randomInt(4, 10));

  candidates.forEach(fighter => {
    if (Math.random() > .55) return;
    const oldGym = fighter.gymName;
    if (oldGym === independentGymName) {
      const availableGym = randomItem(activeAiGymNames());
      if (!availableGym) return;
      fighter.gymName = availableGym;
      moves.push({
        type: "Gym signing",
        headline: `${fighter.name} found a new gym.`,
        detail: `${fighter.name} left the free agent market and joined ${fighter.gymName}.`
      });
      return;
    }
    if (Math.random() < .25) {
      moves.push(makeAiGymFreeAgent(fighter, oldGym));
      return;
    }
    const available = activeAiGymNames().filter(name => name !== oldGym);
    if (!available.length) return;
    fighter.gymName = randomItem(available);
    moves.push({
      type: "Gym transfer",
      headline: `${fighter.name} changed gyms.`,
      detail: `${fighter.name} left ${oldGym} and joined ${fighter.gymName} after a camp shake-up.`
    });
  });

  return moves;
}

function aiGymFreeAgents() {
  return state.fighters
    .filter(fighter => !fighter.retired && !fighter.isPlayer && fighter.gymName === independentGymName)
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins)
    .slice(0, 30);
}

function scoutFreeAgentMarket() {
  const currentIds = new Set(aiGymFreeAgents().map(fighter => fighter.id));
  const candidates = state.fighters
    .filter(fighter => !fighter.retired && !fighter.isPlayer && fighter.gymName !== independentGymName && (fighter.readyInWeeks || 0) <= 1)
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins);
  const scoutCount = randomInt(6, 10);
  const found = [];

  shuffled(candidates.slice(0, 220)).slice(0, scoutCount).forEach(fighter => {
    const oldGym = fighter.gymName || randomGymName();
    fighter.gymName = independentGymName;
    currentIds.add(fighter.id);
    found.push({ fighter, oldGym });
  });

  while (found.length < scoutCount) {
    const promo = Math.random() < .65 ? randomItem(promotions).short : "FA";
    const rating = randomInt(38, 72);
    const fighter = makeFighter(state.fighters.length + 1, {
      promotion: promo,
      rating,
      age: randomInt(18, 29),
      gymName: independentGymName,
      fatigue: randomInt(0, 20),
      sharpness: randomInt(42, 72),
      morale: randomInt(46, 82)
    });
    state.fighters.push(fighter);
    found.push({ fighter, oldGym: "regional scene" });
  }

  state.promotionNews.unshift({
    type: "Free agent scouting",
    headline: `${found.length} fighters hit the gym market.`,
    detail: `Scouts found ${found.map(item => `${item.fighter.name} (${item.fighter.rating})`).slice(0, 4).join(", ")}${found.length > 4 ? " and more" : ""}.`
  });
  render();
  setSaveStatus(`${found.length} gym free agents scouted for your market.`);
}

function playerGymFreeAgents() {
  return activePlayerRoster()
    .filter(fighter => fighter.gymName === independentGymName)
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins);
}

function renderFreeAgents() {
  const playerFreeAgents = playerGymFreeAgents();
  const aiFreeAgents = aiGymFreeAgents();
  const remainingSlots = Math.max(0, maxPlayerFighters - activePlayerRoster().length);
  els.freeAgentSummary.textContent = `${playerFreeAgents.length} of your fighters are gym free agents. ${aiFreeAgents.length} AI gym free agents are visible. ${remainingSlots} roster slot${remainingSlots === 1 ? "" : "s"} open.`;
  const playerHtml = playerFreeAgents.length ? `
    <h3 class="subhead">Your Gym Free Agents</h3>
    ${playerFreeAgents.map(fighter => `
      <article class="stat-card">
        <div class="stat-card-head">
          ${fighterAvatar(fighter)}
          <div>
            <h3>${fighter.name}</h3>
            <div class="meta">${fighter.weightClass} | ${fighter.style} | ${hometownLine(fighter)} | ${fighter.promotion}</div>
          </div>
          <span class="tag">${fighter.rating}</span>
        </div>
        <div class="card-lines">
          <div>${fighter.wins}-${fighter.losses}-${fighter.draws}, ${fighter.ko} KO | ${fighter.gymName}</div>
          <div class="career-actions"><button data-gym-join="${fighter.id}" type="button">Join Your Gym</button></div>
        </div>
      </article>
    `).join("")}
  ` : "";

  const aiHtml = aiFreeAgents.length ? `
    <h3 class="subhead">AI Gym Free Agents</h3>
    ${aiFreeAgents.map(fighter => `
      <article class="stat-card">
        <div class="stat-card-head">
          ${fighterAvatar(fighter)}
          <div>
            <h3>${fighter.name}</h3>
          <div class="meta">${fighter.weightClass} | ${fighter.style} | ${hometownLine(fighter)} | ${fighter.promotion} | ${fighterMarketProfile(fighter).tier}</div>
          </div>
          <span class="tag">${fighter.rating}</span>
        </div>
        <div class="stat-grid">
          <span><b>${fighter.wins}-${fighter.losses}-${fighter.draws}</b> Record</span>
          <span><b>${fighter.age}</b> Age</span>
          <span><b>${fighter.sharpness}</b> Sharpness</span>
          <span><b>${fighter.fatigue}</b> Fatigue</span>
        </div>
        <div class="card-lines">
          <div>Promotion contract: ${fighter.promotion} | $${fighter.purse.toLocaleString()} per fight</div>
          <div>Market read: ${fighterMarketProfile(fighter).tier} | ${fighter.wins + fighter.losses + fighter.draws} pro fights</div>
          <div class="career-actions">
            <button data-recruit-free-agent="${fighter.id}" type="button" ${remainingSlots <= 0 ? "disabled" : ""}>Recruit To Gym</button>
          </div>
        </div>
      </article>
    `).join("")}
  ` : "";

  els.freeAgentMarket.innerHTML = playerHtml + aiHtml || `<div class="empty-state">No gym free agents available right now. Sim weeks for AI fighters to enter the market.</div>`;
}

function recruitAiFreeAgent(fighterId) {
  const fighter = state.fighters.find(item => item.id === Number(fighterId) && !item.retired && !item.isPlayer && item.gymName === independentGymName);
  if (!fighter) return;
  if (!rosterHasRoom()) {
    setSaveStatus("Your roster is full. You can only manage 10 active fighters.");
    return;
  }
  fighter.isPlayer = true;
  fighter.gymName = playerGymName();
  state.playerId = fighter.id;
  state.playerIds.push(fighter.id);
  state.fightOffers = state.fightOffers.filter(offer => offer.fighterId !== fighter.id);
  render();
  setSaveStatus(`${fighter.name} signed with ${playerGymName()} from the free agent market.`);
}

function renderTrainingOptions() {
  const roster = activePlayerRoster();
  els.trainingFighter.innerHTML = roster.map(fighter => `
    <option value="${fighter.id}">${fighter.name} (${upcomingFightFor(fighter) ? `camp ${fighter.campSessions}/${fightCampMaxSessions}` : "open gym"})</option>
  `).join("");
  els.careerFighter.innerHTML = roster.map(fighter => `
    <option value="${fighter.id}">${fighter.name} (${fighter.weightClass})</option>
  `).join("");
  const selected = roster.find(fighter => fighter.id === Number(els.trainingFighter.value)) || roster[0];
  els.trainFighter.disabled = !selected || !campStatus(selected).canTrain;
  els.trainAllFighters.disabled = !roster.some(fighter => campStatus(fighter).canTrain);
  els.moveWeightUp.disabled = roster.length === 0;
  els.moveWeightDown.disabled = roster.length === 0;
  els.retirePlayerFighter.disabled = roster.length === 0;
  if (!roster.length) {
    els.trainingReport.textContent = "Sign a fighter to open training camp.";
    els.careerReport.textContent = "Sign a fighter to make career moves.";
  } else if (selected) {
    els.trainingReport.textContent = selected.lastCampWeek === state.week && selected.lastCampReport
      ? selected.lastCampReport
      : `${campStatus(selected).label} Weekly gym limit: ${weeklyTrainedCount()}/${weeklyTrainingLimit}.`;
  }
}

function changeWeightClass(fighter, direction) {
  const index = weightClasses.indexOf(fighter.weightClass);
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= weightClasses.length) return false;
  const oldClass = fighter.weightClass;
  fighter.weightClass = weightClasses[nextIndex];
  fighter.sharpness = Math.max(25, fighter.sharpness - randomInt(3, 8));
  fighter.fatigue = Math.min(99, fighter.fatigue + randomInt(2, 8));
  fighter.readyInWeeks = Math.max(fighter.readyInWeeks || 0, 2);
  state.fightOffers = state.fightOffers.filter(offer => offer.fighterId !== fighter.id);
  state.playerBookings = state.playerBookings.filter(booking => booking.fighterId !== fighter.id);
  fighter.campSessions = 0;
  fighter.lastCampWeek = 0;
  fighter.lastCampReport = "";
  els.careerReport.textContent = `${fighter.name} moved from ${oldClass} to ${fighter.weightClass}. They need 2 weeks to settle into the new class.`;
  return true;
}

function selectedCareerFighter() {
  return state.fighters.find(item => item.id === Number(els.careerFighter.value));
}

function moveSelectedWeight(direction) {
  const fighter = selectedCareerFighter();
  if (!fighter) {
    els.careerReport.textContent = "No active fighter selected.";
    return;
  }
  if (!changeWeightClass(fighter, direction)) {
    els.careerReport.textContent = `${fighter.name} cannot move ${direction > 0 ? "up" : "down"} from ${fighter.weightClass}.`;
  }
  render();
}

function retireSelectedFighter() {
  const fighter = selectedCareerFighter();
  if (!fighter) {
    els.careerReport.textContent = "No active fighter selected.";
    return;
  }
  const news = retireFighter(fighter);
  state.retirementNews.unshift(news);
  state.fightOffers = state.fightOffers.filter(offer => offer.fighterId !== fighter.id);
  state.playerBookings = state.playerBookings.filter(booking => booking.fighterId !== fighter.id);
  fighter.campSessions = 0;
  fighter.lastCampWeek = 0;
  fighter.lastCampReport = "";
  els.careerReport.textContent = `${fighter.name} retired from your roster.`;
  render();
}

function trainOneFighter(fighter, focus, intensity) {
  const booking = upcomingFightFor(fighter);
  const intensityMap = {
    "Light": { gain: 1, sharpness: 2, fatigue: -4, morale: 3, cost: 1000, risk: .02 },
    "Standard": { gain: 2, sharpness: 4, fatigue: 3, morale: 1, cost: 2500, risk: .05 },
    "Hard": { gain: 3, sharpness: 6, fatigue: 8, morale: -1, cost: 5500, risk: .1 },
    "Elite": { gain: 4, sharpness: 9, fatigue: 13, morale: -2, cost: 12000, risk: .16 }
  };
  const plan = intensityMap[intensity];
  const baseGain = fighter.rating < 55 ? randomInt(plan.gain, plan.gain + 2) : randomInt(1, plan.gain);
  const ceilingPenalty = fighter.rating > 80 ? 1 : 0;
  const gain = Math.max(1, baseGain - ceilingPenalty);
  const oldRating = fighter.rating;
  const oldSharpness = fighter.sharpness;
  const oldFatigue = fighter.fatigue;
  const oldMorale = fighter.morale;
  const injury = Math.random() < plan.risk;

  fighter.rating = Math.min(99, fighter.rating + gain);
  fighter.sharpness = Math.min(99, fighter.sharpness + plan.sharpness + randomInt(0, 3));
  fighter.fatigue = Math.max(0, Math.min(99, fighter.fatigue + plan.fatigue));
  fighter.morale = Math.max(1, Math.min(99, fighter.morale + plan.morale + randomInt(-1, 2)));
  if (booking) fighter.campSessions = Math.min(fightCampMaxSessions, (fighter.campSessions || 0) + 1);
  fighter.lastCampWeek = state.week;

  if (injury) {
    fighter.rating = Math.max(1, fighter.rating - 1);
    fighter.fatigue = Math.min(99, fighter.fatigue + randomInt(8, 16));
    fighter.morale = Math.max(1, fighter.morale - randomInt(3, 8));
  }

  const focusText = {
    "Balanced Camp": "worked every phase: jab, defense, conditioning, and ring IQ",
    "Power": "spent the week sitting down on punches and building finishing instincts",
    "Defense": "drilled head movement, guard discipline, and safer exits",
    "Footwork": "sharpened angles, pivots, and distance control",
    "Stamina": "pushed roadwork, sparring rounds, and late-fight pace"
  };

  const injuryText = injury ? " A training knock slowed progress and raised fatigue." : "";
  const trainingType = booking
    ? `camp session ${fighter.campSessions}/${fightCampMaxSessions} before ${booking.opponentName}`
    : "weekly open-gym session";
  fighter.lastCampReport = `${fighter.name} ran a ${trainingType}, a ${intensity.toLowerCase()} ${focus.toLowerCase()}, and ${focusText[focus]}. Training cost $${plan.cost.toLocaleString()}. Rating moved ${oldRating} to ${fighter.rating}, sharpness ${oldSharpness} to ${fighter.sharpness}, fatigue ${oldFatigue} to ${fighter.fatigue}, and morale ${oldMorale} to ${fighter.morale}.${injuryText}`;
  return fighter.lastCampReport;
}

function trainFighter() {
  const fighter = state.fighters.find(item => item.id === Number(els.trainingFighter.value));
  if (!fighter) {
    els.trainingReport.textContent = "Sign a fighter before opening training camp.";
    return;
  }
  const camp = campStatus(fighter);
  if (!camp.canTrain) {
    els.trainingReport.textContent = camp.label;
    return;
  }

  const report = trainOneFighter(fighter, els.trainingFocus.value, els.trainingIntensity.value);
  els.trainingReport.textContent = report;
  render();
}

function trainAllAvailableFighters() {
  const roster = activePlayerRoster();
  const focus = els.trainingFocus.value;
  const intensity = els.trainingIntensity.value;
  const openSlots = Math.max(0, weeklyTrainingLimit - weeklyTrainedCount());
  const trained = roster.filter(fighter => campStatus(fighter).canTrain).slice(0, openSlots);
  if (!trained.length) {
    els.trainingReport.textContent = openSlots <= 0
      ? `Weekly gym limit reached: ${weeklyTrainingLimit} fighters trained this week.`
      : "No roster fighters can train this week.";
    return;
  }
  const reports = trained.map(fighter => trainOneFighter(fighter, focus, intensity));
  const skipped = roster.length - trained.length;
  const report = `${trained.length} fighter${trained.length === 1 ? "" : "s"} trained this week. Weekly gym limit ${weeklyTrainedCount()}/${weeklyTrainingLimit}${skipped ? `, ${skipped} not trained` : ""}. ${reports.slice(0, 3).join(" ")}`;
  render();
  els.trainingReport.textContent = report;
}

function scoreChance(a, b) {
  const recordEdge = (a.wins - a.losses) - (b.wins - b.losses);
  const conditionA = ((a.sharpness || 50) * .03) + ((a.morale || 50) * .015) - ((a.fatigue || 0) * .035);
  const conditionB = ((b.sharpness || 50) * .03) + ((b.morale || 50) * .015) - ((b.fatigue || 0) * .035);
  const ratingEdge = (a.rating + conditionA) - (b.rating + conditionB);
  return Math.max(.08, Math.min(.92, .5 + ratingEdge * .018 + recordEdge * .006));
}

function payFightMoney(fighter, multiplier = 1) {
  const pay = Math.round((fighter.purse || 0) * multiplier);
  fighter.lastFightPay = pay;
  fighter.fightEarnings = (fighter.fightEarnings || 0) + pay;
  fighter.careerEarnings = (fighter.careerEarnings || 0) + pay;
  return pay;
}

function fightRoundLimit(a, b, options = {}) {
  if (options.titleFight) return titleFightRounds;
  if (options.rounds) return options.rounds;
  const topRating = Math.max(a.rating || 0, b.rating || 0);
  const combinedFights = (a.wins || 0) + (a.losses || 0) + (a.draws || 0) + (b.wins || 0) + (b.losses || 0) + (b.draws || 0);
  if (topRating >= 78 || combinedFights >= 55) return randomItem(featureFightRounds);
  if (topRating >= 60 || combinedFights >= 20) return randomItem(mediumFightRounds);
  return randomItem(lowerCardRounds);
}

function fightSizeLabel(rounds) {
  if (rounds >= 12) return "title distance";
  if (rounds >= 10) return "feature fight";
  if (rounds >= 8) return "medium card";
  return "lower card";
}

function fight(a, b, options = {}) {
  const roundLimit = fightRoundLimit(a, b, options);
  const preRatingA = a.rating;
  const preRatingB = b.rating;
  const aWins = Math.random() < scoreChance(a, b);
  const winner = aWins ? a : b;
  const loser = aWins ? b : a;
  const method = randomItem(methods);
  const draw = Math.random() < .035;

  if (draw) {
    a.draws += 1;
    b.draws += 1;
    a.readyInWeeks = 2;
    b.readyInWeeks = 2;
    a.fatigue = Math.min(99, (a.fatigue || 0) + randomInt(3, 7));
    b.fatigue = Math.min(99, (b.fatigue || 0) + randomInt(3, 7));
    a.injuryWear = Math.min(100, (a.injuryWear || 0) + randomInt(1, 4));
    b.injuryWear = Math.min(100, (b.injuryWear || 0) + randomInt(1, 4));
    const aPay = payFightMoney(a, 1);
    const bPay = payFightMoney(b, 1);
    return {
      a,
      b,
      winner: null,
      loser: null,
      method: "Draw",
      round: roundLimit,
      knockdowns: randomInt(0, 2),
      action: randomItem(fightFlavors),
      recap: `${a.name} and ${b.name} could not be separated after ${roundLimit} rounds in a ${fightSizeLabel(roundLimit)} bout. The fight ${randomItem(fightFlavors)}, and both corners left believing they had done enough. ${a.name} earned $${aPay.toLocaleString()} and ${b.name} earned $${bPay.toLocaleString()}.`
    };
  }

  winner.wins += 1;
  loser.losses += 1;
  winner.readyInWeeks = 2;
  loser.readyInWeeks = 3;
  if (method === "KO" || method === "TKO" || method === "RTD") winner.ko += 1;
  winner.rating = Math.min(99, winner.rating + randomInt(0, 2));
  loser.rating = Math.max(35, loser.rating - randomInt(0, 1));
  winner.fatigue = Math.min(99, (winner.fatigue || 0) + randomInt(3, 8));
  loser.fatigue = Math.min(99, (loser.fatigue || 0) + randomInt(5, 12));
  winner.morale = Math.min(99, (winner.morale || 50) + randomInt(1, 4));
  loser.morale = Math.max(1, (loser.morale || 50) - randomInt(1, 5));
  winner.injuryWear = Math.min(100, (winner.injuryWear || 0) + randomInt(0, 3));
  loser.injuryWear = Math.min(100, (loser.injuryWear || 0) + randomInt(method === "KO" || method === "TKO" ? 5 : 2, method === "KO" || method === "TKO" ? 12 : 7));
  const winnerPay = payFightMoney(winner, 1.2);
  const loserPay = payFightMoney(loser, .85);

  const round = roundLimit;
  const upset = winner.rating + 4 < loser.rating || (aWins ? preRatingA + 4 < preRatingB : preRatingB + 4 < preRatingA);
  const knockdowns = method === "KO" || method === "TKO" ? randomInt(1, 3) : randomInt(0, 1);
  const recap = buildFightRecap(winner, loser, method, round, knockdowns, upset, winnerPay, loserPay);

  return { a, b, winner, loser, method, round, knockdowns, upset, action: randomItem(fightFlavors), recap };
}

function markTitleFight(result, champion, challenger) {
  result.titleFight = true;
  result.titleChampion = champion.name;
  result.titleChallenger = challenger.name;
  result.titleLine = `${champion.promotion} ${champion.weightClass} title`;
  if (!result.winner) {
    result.recap = `Title fight: ${champion.name} kept the ${champion.weightClass} title after a draw with ${challenger.name}. ${result.recap}`;
  } else if (result.winner.id === challenger.id) {
    result.recap = `New champion: ${challenger.name} captured the ${challenger.weightClass} title from ${champion.name}. ${result.recap}`;
  } else {
    result.recap = `Title retained: ${champion.name} defended the ${champion.weightClass} title against ${challenger.name}. ${result.recap}`;
  }
  return result;
}

function buildFightRecap(winner, loser, method, round, knockdowns, upset, winnerPay, loserPay) {
  const upsetText = upset ? "It was one of the night's upset results. " : "";
  const kdText = knockdowns > 0 ? `${winner.name} scored ${knockdowns} knockdown${knockdowns === 1 ? "" : "s"} along the way. ` : "";
  const moneyText = `${winner.name} earned $${winnerPay.toLocaleString()} and ${loser.name} earned $${loserPay.toLocaleString()}. `;
  const methodText = method.includes("D")
    ? `${winner.name} banked enough rounds to take a ${method} after ${round} rounds.`
    : `${winner.name} closed the ${fightSizeLabel(round)} bout by ${method} after ${round} rounds.`;

  return `${upsetText}${methodText} ${kdText}${moneyText}${randomItem(cornerQuotes)}`;
}

function eligibleFighters(promotion, weightClass, exclude = new Set()) {
  return state.fighters
    .filter(fighter => !fighter.retired && !fighter.isPlayer && fighter.promotion === promotion && fighter.weightClass === weightClass && !exclude.has(fighter.id) && (fighter.readyInWeeks || 0) <= 0 && (fighter.fatigue || 0) <= 70)
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins);
}

function signFighter(fighter, promo) {
  fighter.promotion = promo.short;
  fighter.contractWeeks = promo.length + randomInt(-4, 8);
  fighter.purse = contractValue(promo, fighter);
  fighter.contractValue = fighter.purse * fighter.contractWeeks;

  return {
    fighter: fighter.name,
    promotion: promo.name,
    short: promo.short,
    weightClass: fighter.weightClass,
    weeks: fighter.contractWeeks,
    purse: fighter.purse,
    value: fighter.contractValue,
    rating: fighter.rating
  };
}

function makeExpiredContractOffers() {
  const notices = [];
  activePlayerRoster()
    .filter(fighter => fighter.contractWeeks <= 0 && fighter.promotion !== "RET")
    .filter(fighter => !state.expiredContractOffers.some(item => item.fighterId === fighter.id))
    .forEach(fighter => {
      const oldPromotion = promotions.find(promo => promo.short === fighter.promotion)?.name || "their promotion";
      state.expiredContractOffers.push({
        fighterId: fighter.id,
        fighterName: fighter.name,
        offers: makeRenewalOffers(fighter)
      });
      fighter.promotion = "FA";
      fighter.purse = 0;
      fighter.signingBonus = 0;
      fighter.contractValue = 0;
      state.fightOffers = state.fightOffers.filter(offer => offer.fighterId !== fighter.id);
      state.playerBookings = state.playerBookings.filter(booking => booking.fighterId !== fighter.id);
      notices.push({
        fighter: fighter.name,
        promotion: oldPromotion,
        short: "FA",
        weightClass: fighter.weightClass,
        weeks: 0,
        purse: 0,
        value: 0,
        rating: fighter.rating,
        contractExpired: true
      });
    });
  return notices;
}

function acceptRenewalOffer(fighterId, promoShort) {
  const offerGroup = state.expiredContractOffers.find(item => item.fighterId === Number(fighterId));
  const offer = offerGroup?.offers.find(item => item.short === promoShort);
  const fighter = state.fighters.find(item => item.id === Number(fighterId));
  if (!offer || !fighter || fighter.retired) return;

  fighter.promotion = offer.short;
  fighter.contractWeeks = offer.length + randomInt(-2, 6);
  fighter.purse = offer.purse;
  fighter.signingBonus = offer.signingBonus;
  fighter.contractValue = (fighter.purse * fighter.contractWeeks) + fighter.signingBonus;
  fighter.bonusEarnings = (fighter.bonusEarnings || 0) + fighter.signingBonus;
  fighter.careerEarnings = (fighter.careerEarnings || 0) + fighter.signingBonus;
  state.expiredContractOffers = state.expiredContractOffers.filter(item => item.fighterId !== fighter.id);
  state.signingNews.unshift({
    fighter: fighter.name,
    promotion: offer.name,
    short: offer.short,
    weightClass: fighter.weightClass,
    weeks: fighter.contractWeeks,
    purse: fighter.purse,
    value: fighter.contractValue,
    rating: fighter.rating,
    renewal: true
  });
  render();
}

function makePromotionShort(name) {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function createPromotionFromName(name) {
  const short = makePromotionShort(name);
  return {
    name,
    short: promotions.some(item => item.short === short) ? `${short}${randomInt(2, 9)}` : short,
    purse: randomInt(32000, 98000),
    length: randomInt(12, 28),
    prestige: randomInt(48, 82),
    bonus: randomItem(["Aggressive prospect deals", "Regional title push", "Streaming showcase slots", "International scouting", "Open ranking ladder"])
  };
}

function announcePromotionOpening() {
  const usedNames = new Set([
    ...promotions.map(promo => promo.name),
    ...state.pendingPromotions.map(item => item.name)
  ]);
  const availableName = promotionNameBank.find(name => !usedNames.has(name));
  if (!availableName) return null;

  const opensInWeeks = randomInt(2, 5);
  state.pendingPromotions.push({ name: availableName, opensInWeeks });
  return {
    type: "Opening soon",
    headline: `${availableName} announced plans to open.`,
    detail: `The new promotion is expected to launch in ${opensInWeeks} week${opensInWeeks === 1 ? "" : "s"} and begin scouting free agents.`
  };
}

function launchPromotionFromPending(pending) {
  const promo = createPromotionFromName(pending.name);

  promotions.push(promo);
  return {
    type: "Launch",
    headline: `${promo.name} launched as a new boxing promotion.`,
    detail: `${promo.short} enters the market with a ${promo.prestige}/100 promotion rating, ${promo.length}-week deals, and a $${promo.purse.toLocaleString()} base purse level.`
  };
}

function shutDownPromotion() {
  if (promotions.length <= 3) return null;

  const inactive = promotions
    .map(promo => ({
      promo,
      fighters: state.fighters.filter(fighter => fighter.promotion === promo.short).length,
      shows: state.lastShows.filter(show => show.short === promo.short).length
    }))
    .sort((a, b) => a.fighters - b.fighters || a.shows - b.shows)[0];

  promotions = promotions.filter(promo => promo.short !== inactive.promo.short);
  state.fighters.forEach(fighter => {
    if (!fighter.retired && fighter.promotion === inactive.promo.short) {
      fighter.promotion = "FA";
      fighter.contractWeeks = 0;
      fighter.purse = 0;
      fighter.signingBonus = 0;
      fighter.contractValue = 0;
    }
  });

  return {
    type: "Shutdown",
    headline: `${inactive.promo.name} shut down operations.`,
    detail: `${inactive.fighters.toLocaleString()} fighters were released into free agency after the promotion folded.`
  };
}

function runPromotionWorldChanges() {
  const news = [];
  state.pendingPromotions.forEach(item => {
    item.opensInWeeks -= 1;
  });
  const openingNow = state.pendingPromotions.filter(item => item.opensInWeeks <= 0);
  state.pendingPromotions = state.pendingPromotions.filter(item => item.opensInWeeks > 0);
  openingNow.forEach(item => {
    news.push(launchPromotionFromPending(item));
  });

  if (state.week > 3 && Math.random() < .2 && promotions.length + state.pendingPromotions.length < 12) {
    const announcement = announcePromotionOpening();
    if (announcement) news.push(announcement);
  }
  if (state.week > 6 && Math.random() < .12 && promotions.length > 4) {
    const closure = shutDownPromotion();
    if (closure) news.push(closure);
  }
  const gymOpening = openAiGym();
  if (gymOpening) news.push(gymOpening);
  news.push(...runGymTransfers());
  state.promotionNews = news;
}

function openAiGym() {
  ensureGymData();
  if (state.week <= 2 || state.aiGyms.length >= aiGymNames.length || Math.random() > .22) return null;
  const name = randomItem(aiGymNames.filter(item => !state.aiGyms.includes(item)));
  if (!name) return null;
  state.aiGyms.push(name);
  const prospects = randomInt(6, 14);
  for (let index = 0; index < prospects; index += 1) {
    makeProspect(name);
  }
  return {
    type: "New gym",
    headline: `${name} opened its doors.`,
    detail: `${name} joined the boxing universe and signed ${prospects} new prospects to its stable.`
  };
}

function retirementReason(fighter) {
  if (fighter.injuryWear >= 90) return "medical retirement after too much injury wear";
  if (fighter.age >= 42) return "age caught up with them";
  if (fighter.age >= 38 && fighter.losses >= 10) return "declining form and age";
  if (fighter.losses >= 18) return "too many hard losses";
  return "";
}

function shouldRetire(fighter) {
  if (fighter.retired) return false;
  const reason = retirementReason(fighter);
  if (!reason) return false;
  if (fighter.isPlayer) return fighter.injuryWear >= 95 || fighter.age >= 43 || (fighter.age >= 40 && Math.random() < .18);
  if (fighter.injuryWear >= 90) return Math.random() < .45;
  if (fighter.age >= 42) return Math.random() < .35;
  if (fighter.age >= 38 && fighter.losses >= 10) return Math.random() < .18;
  if (fighter.losses >= 18) return Math.random() < .12;
  return false;
}

function retireFighter(fighter) {
  const reason = retirementReason(fighter) || "left the sport";
  fighter.retired = true;
  fighter.retirementReason = reason;
  fighter.promotion = "RET";
  fighter.contractWeeks = 0;
  fighter.purse = 0;
  fighter.signingBonus = 0;
  fighter.contractValue = 0;
  fighter.readyInWeeks = 0;

  return {
    type: fighter.isPlayer ? "Your fighter retired" : "Retirement",
    fighter: fighter.name,
    detail: `${fighter.name} retired at age ${fighter.age} with a ${fighter.wins}-${fighter.losses}-${fighter.draws} record: ${reason}.`
  };
}

function makeProspect(gymName = randomGymName()) {
  const promo = Math.random() < .7 ? randomItem(promotions).short : "FA";
  const fighter = makeFighter(state.fighters.length + 1, {
    promotion: promo,
    rating: randomInt(36, 61),
    wins: 0,
    losses: 0,
    draws: 0,
    ko: 0,
    age: randomInt(18, 23),
    injuryWear: randomInt(0, 5),
    sharpness: randomInt(42, 65),
    fatigue: randomInt(0, 8),
    morale: randomInt(50, 78),
    gymName
  });
  state.fighters.push(fighter);
  return fighter;
}

function runRetirementsAndProspects() {
  const news = [];
  const activeBefore = state.fighters.filter(fighter => !fighter.retired).length;
  const candidates = state.fighters.filter(shouldRetire);

  candidates.slice(0, 35).forEach(fighter => {
    news.push(retireFighter(fighter));
  });

  const weeklyProspects = randomInt(12, 30);
  const replacementNeed = Math.max(0, activeBefore - state.fighters.filter(fighter => !fighter.retired).length);
  const prospectsToCreate = weeklyProspects + replacementNeed;
  for (let index = 0; index < prospectsToCreate; index += 1) {
    makeProspect();
  }

  if (prospectsToCreate) {
    news.push({
      type: "New prospects",
      fighter: `${prospectsToCreate} new fighters`,
      detail: `${prospectsToCreate} new prospects entered the boxing universe this week.`
    });
  }

  state.retirementNews = news;
}

function runWeightClassMovement() {
  const movers = state.fighters
    .filter(fighter => !fighter.retired && !fighter.isPlayer && Math.random() < .006);

  movers.slice(0, 20).forEach(fighter => {
    const index = weightClasses.indexOf(fighter.weightClass);
    const direction = index === 0 ? 1 : index === weightClasses.length - 1 ? -1 : randomItem([-1, 1]);
    const oldClass = fighter.weightClass;
    fighter.weightClass = weightClasses[index + direction];
    fighter.sharpness = Math.max(25, fighter.sharpness - randomInt(1, 5));
    fighter.fatigue = Math.min(99, fighter.fatigue + randomInt(1, 5));
    if (state.retirementNews.length < 12) {
      state.retirementNews.push({
        type: "Weight move",
        fighter: fighter.name,
        detail: `${fighter.name} moved from ${oldClass} to ${fighter.weightClass} looking for better matchups.`
      });
    }
  });
}

function fighterNewsItems() {
  const items = [];
  const active = state.fighters.filter(fighter => !fighter.retired);
  const streaker = [...active]
    .filter(fighter => fighter.wins >= 5 && fighter.losses <= 3)
    .sort((a, b) => b.wins - a.wins || b.rating - a.rating)[0];
  const injured = [...active]
    .filter(fighter => fighter.injuryWear >= 75)
    .sort((a, b) => b.injuryWear - a.injuryWear)[0];
  const prospect = [...active]
    .filter(fighter => fighter.age <= 23)
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins)[0];
  const star = [...active]
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins)[0];

  if (streaker) {
    items.push({
      type: "Fighter buzz",
      headline: `${streaker.name} is building momentum.`,
      detail: `${streaker.name} is ${streaker.wins}-${streaker.losses}-${streaker.draws} at ${streaker.weightClass} and drawing more attention from matchmakers.`
    });
  }
  if (injured) {
    items.push({
      type: "Medical watch",
      headline: `${injured.name} is carrying heavy injury wear.`,
      detail: `${injured.name}'s injury wear is up to ${injured.injuryWear}, raising retirement and performance concerns.`
    });
  }
  if (prospect) {
    items.push({
      type: "Prospect watch",
      headline: `${prospect.name} leads the young prospect watch.`,
      detail: `At age ${prospect.age}, ${prospect.name} owns a ${prospect.rating} rating and a ${prospect.wins}-${prospect.losses}-${prospect.draws} record.`
    });
  }
  if (star) {
    items.push({
      type: "Star power",
      headline: `${star.name} is one of the sport's top names.`,
      detail: `${star.name} carries a ${star.rating} rating with a ${star.wins}-${star.losses}-${star.draws} record.`
    });
  }

  return items.slice(0, 3);
}

function runPromotionSignings() {
  const signings = [];
  const freeAgents = state.fighters
    .filter(fighter => !fighter.retired && fighter.promotion === "FA" && !fighter.isPlayer)
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins);

  promotions.forEach(promo => {
    const needs = weightClasses
      .map(weightClass => ({
        weightClass,
        count: state.fighters.filter(fighter => fighter.promotion === promo.short && fighter.weightClass === weightClass).length
      }))
      .sort((a, b) => a.count - b.count);

    const weeklyTargets = randomInt(2, 5);
    for (let index = 0; index < weeklyTargets && freeAgents.length; index += 1) {
      const targetWeight = needs[index % needs.length].weightClass;
      const poolIndex = freeAgents.findIndex(fighter => fighter.weightClass === targetWeight);
      const fighterIndex = poolIndex >= 0 ? poolIndex : 0;
      const [fighter] = freeAgents.splice(fighterIndex, 1);
      signings.push(signFighter(fighter, promo));
    }
  });

  state.signingNews = signings;
}

function previewMainEvent(promotion) {
  const candidates = weightClasses
    .map(weightClass => eligibleFighters(promotion.short, weightClass).slice(0, 2))
    .filter(pair => pair.length === 2)
    .flat();

  const topTwo = candidates
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins)
    .slice(0, 2);

  return topTwo.length === 2 ? `${topTwo[0].name} vs ${topTwo[1].name}` : "Main event TBA";
}

function makeWeeklySchedule(week) {
  const bookedPromotions = shuffled(promotions).slice(0, randomInt(2, 5));
  const days = shuffled(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
  const showCalendar = calendarLabel(week);

  return bookedPromotions.map((promotion, index) => {
    const showName = `${promotion.short} ${randomItem(showNames)}`;
    const venue = randomItem(venues);
    const day = days[index];
    const estimatedAttendance = randomInt(1800, 18500);
    const mainEventPreview = previewMainEvent(promotion);

    return {
      week,
      day,
      promotion: promotion.name,
      short: promotion.short,
      showName,
      venue,
      estimatedAttendance,
      fights: weightClasses.length,
      mainEventPreview,
      previewText: `${showCalendar} opens ${day} as ${promotion.name} brings ${showName} to ${venue}. The promotion has booked ${weightClasses.length} bouts, with lower-card fights, medium fights, and any title fights set for ${titleFightRounds} rounds. ${mainEventPreview} is penciled in as the headline fight. Matchmakers are calling it ${randomItem(broadcastLines)} with an expected crowd near ${estimatedAttendance.toLocaleString()}.`
    };
  });
}

function makeShow(scheduleItem) {
  const used = new Set();
  const bouts = [];
  const promotion = promotions.find(item => item.short === scheduleItem.short);

  weightClasses.forEach(weightClass => {
    const pool = eligibleFighters(promotion.short, weightClass, used);
    if (pool.length < 2) return;
    const champion = pool[0];
    const contender = pool.find(fighter => fighter.id !== champion.id);
    if (contender && Math.random() < .35) {
      used.add(champion.id);
      used.add(contender.id);
      bouts.push(markTitleFight(fight(champion, contender, { titleFight: true }), champion, contender));
      return;
    }

    const topWindow = pool.slice(0, 36);
    const a = randomItem(topWindow.slice(0, 18));
    used.add(a.id);
    const opponentPool = topWindow.filter(fighter => fighter.id !== a.id && Math.abs(fighter.rating - a.rating) <= 12);
    const b = randomItem(opponentPool.length ? opponentPool : topWindow.filter(fighter => fighter.id !== a.id));
    used.add(b.id);
    bouts.push(fight(a, b));
  });

  const mainEvent = [...bouts].sort((a, b) => {
    const aRating = Math.max(a.a.rating, a.b.rating);
    const bRating = Math.max(b.a.rating, b.b.rating);
    return bRating - aRating;
  })[0];
  const attendance = randomInt(1800, 18500);
  const ticketAverage = randomInt(38, 155);

  return {
    promotion: promotion.name,
    short: promotion.short,
    showName: scheduleItem.showName,
    venue: scheduleItem.venue,
    attendance,
    gate: attendance * ticketAverage,
    mainEvent,
    reportText: buildShowReport(scheduleItem, mainEvent, bouts, attendance),
    bouts
  };
}

function buildShowReport(scheduleItem, mainEvent, bouts, attendance) {
  if (!mainEvent) {
    return `${scheduleItem.showName} was scheduled at ${scheduleItem.venue}, but the card fell apart before bell time.`;
  }

  const mainResult = mainEvent.winner
    ? `${mainEvent.winner.name} beat ${mainEvent.loser.name} by ${mainEvent.method} after ${mainEvent.round} rounds`
    : `${mainEvent.a.name} and ${mainEvent.b.name} fought to a ${mainEvent.round}-round draw`;
  const stoppages = bouts.filter(bout => bout.method === "KO" || bout.method === "TKO" || bout.method === "RTD").length;
  const decisions = bouts.length - stoppages;
  const upsets = bouts.filter(bout => bout.upset).length;
  const knockdowns = bouts.reduce((sum, bout) => sum + (bout.knockdowns || 0), 0);

  return `${scheduleItem.showName} played out in front of ${attendance.toLocaleString()} fans at ${scheduleItem.venue}. The main event saw ${mainResult}. Across the card, lower-card fights ran shorter, medium fights ran longer, and title fights stayed at ${titleFightRounds} rounds. ${stoppages} fights received stoppage verdicts, ${decisions} went to the scorecards, and fighters hit the canvas ${knockdowns} time${knockdowns === 1 ? "" : "s"}. ${upsets ? `${upsets} underdog result${upsets === 1 ? "" : "s"} changed the matchmaking picture. ` : ""}${scheduleItem.promotion} leaves the week with fresh rankings movement and new matchmaking questions.`;
}

function simulateWeek() {
  const shows = state.schedule.map(makeShow);
  state.fighters.forEach(fighter => {
    if (fighter.retired) return;
    if (fighter.contractWeeks > 0) fighter.contractWeeks -= 1;
    if (fighter.readyInWeeks > 0) fighter.readyInWeeks -= 1;
    fighter.ageWeeks = (fighter.ageWeeks || 0) + 1;
    if (fighter.ageWeeks >= 52) {
      fighter.age += 1;
      fighter.ageWeeks = 0;
    }
    fighter.fatigue = Math.max(0, (fighter.fatigue || 0) - randomInt(1, 4));
    fighter.sharpness = Math.max(25, (fighter.sharpness || 50) - randomInt(0, 2));
    if (fighter.contractWeeks === 0 && fighter.promotion !== "FA" && !fighter.isPlayer && Math.random() < .28) {
      fighter.promotion = "FA";
      fighter.purse = 0;
      fighter.signingBonus = 0;
      fighter.contractValue = 0;
    }
  });
  runRetirementsAndProspects();
  runWeightClassMovement();
  runPromotionSignings();
  const expiredContracts = makeExpiredContractOffers();
  if (expiredContracts.length) state.signingNews = [...expiredContracts, ...state.signingNews];
  const playerShows = runBookedPlayerFights();
  state.lastShows = [...playerShows, ...shows];
  state.fightOffers = [];
  state.week += 1;
  runPromotionWorldChanges();
  if (!state.playerOffers.length || state.playerOffers.some(offer => !promotions.some(promo => promo.short === offer.short))) {
    state.playerOffers = makePlayerOffers();
    state.selectedOffer = state.playerOffers[0]?.short || null;
  }
  state.schedule = makeWeeklySchedule(state.week);
  recordGymLeaderboard();
  render();
}

function simulateWeeks(amount) {
  for (let index = 0; index < amount; index += 1) {
    simulateWeek();
  }
}

function makeFightOffer(fighter, opponent) {
  const purseBoost = opponent.rating > fighter.rating ? 1.25 : 1;
  const ratingGap = opponent.rating - fighter.rating;
  const rounds = fightRoundLimit(fighter, opponent);

  return {
    id: `${fighter.id}-${opponent.id}-${Date.now()}-${randomInt(100, 999)}`,
    fighterId: fighter.id,
    opponentId: opponent.id,
    fighterName: fighter.name,
    opponentName: opponent.name,
    fighterHome: hometownLine(fighter),
    opponentHome: hometownLine(opponent),
    promotion: fighter.promotion,
    weightClass: fighter.weightClass,
    opponentRecord: `${opponent.wins}-${opponent.losses}-${opponent.draws}`,
    opponentRating: opponent.rating,
    ratingGap,
    rounds,
    fightSize: fightSizeLabel(rounds),
    offerPurse: Math.round((fighter.purse || 0) * purseBoost),
    risk: Math.abs(ratingGap) <= 3 ? "Same level" : ratingGap > 3 ? "Step up" : "Slight edge"
  };
}

function makeFightOffersForFighter(fighter, amount = 4) {
  const pool = eligibleFighters(fighter.promotion, fighter.weightClass, new Set([fighter.id]))
    .filter(opponent => Math.abs(opponent.rating - fighter.rating) <= 10)
    .sort((a, b) => Math.abs(a.rating - fighter.rating) - Math.abs(b.rating - fighter.rating) || b.wins - a.wins)
    .slice(0, 36);

  const closeOpponents = pool.filter(opponent => Math.abs(opponent.rating - fighter.rating) <= 6);
  while (closeOpponents.length < amount) {
    const rating = Math.max(35, Math.min(99, fighter.rating + randomInt(-3, 3)));
    const opponent = makeFighter(state.fighters.length + 1, {
      weightClass: fighter.weightClass,
      promotion: fighter.promotion,
      rating,
      contractWeeks: randomInt(8, 20),
      purse: Math.max(3500, Math.round((fighter.purse || 12000) * randomInt(55, 85) / 100)),
      readyInWeeks: 0,
      fatigue: randomInt(0, 18)
    });
    state.fighters.push(opponent);
    closeOpponents.push(opponent);
  }

  const selected = shuffled(closeOpponents)
    .slice(0, amount);
  return selected.map(opponent => makeFightOffer(fighter, opponent));
}

function schedulePlayerFight(fighter, opponent, options = {}) {
  fighter.campSessions = 0;
  fighter.lastCampWeek = 0;
  fighter.readyInWeeks = Math.max(fighter.readyInWeeks || 0, fightCampWeeks);
  const booking = {
    id: `${fighter.id}-${opponent.id}-${state.week}-${randomInt(100, 999)}`,
    fighterId: fighter.id,
    opponentId: opponent.id,
    fighterName: fighter.name,
    opponentName: opponent.name,
    fighterHome: hometownLine(fighter),
    opponentHome: hometownLine(opponent),
    promotion: options.promotion || fighter.promotion,
    weightClass: fighter.weightClass,
    weeksToFight: fightCampWeeks,
    rounds: options.rounds || fightRoundLimit(fighter, opponent, { titleFight: Boolean(options.titleFight) }),
    offerPurse: options.offerPurse || fighter.purse || 0,
    titleFight: Boolean(options.titleFight),
    titleLine: options.titleFight ? `${fighter.promotion} ${fighter.weightClass} title` : ""
  };
  state.playerBookings = state.playerBookings.filter(item => item.fighterId !== fighter.id);
  state.playerBookings.push(booking);
  return booking;
}

function runBookedPlayerFights() {
  const completed = [];
  const stillBooked = [];

  state.playerBookings.forEach(booking => {
    booking.weeksToFight -= 1;
    if (booking.weeksToFight > 0) {
      stillBooked.push(booking);
      return;
    }

    const fighter = state.fighters.find(item => item.id === booking.fighterId);
    const opponent = state.fighters.find(item => item.id === booking.opponentId);
    if (!fighter || !opponent || fighter.retired || opponent.retired) {
      if (fighter) {
        fighter.gymName = fighter.gymName || playerGymName();
        fighter.campSessions = 0;
        fighter.lastCampWeek = 0;
        fighter.lastCampReport = "";
        fighter.readyInWeeks = 1;
      }
      state.retirementNews.unshift({
        type: "Fight canceled",
        fighter: booking.fighterName,
        detail: `${booking.fighterName}'s fight with ${booking.opponentName} was canceled before fight week.`
      });
      return;
    }

    const originalPurse = fighter.purse;
    fighter.gymName = fighter.gymName || playerGymName();
    fighter.purse = booking.offerPurse;
    const result = booking.titleFight
      ? markTitleFight(fight(opponent, fighter, { titleFight: true, rounds: booking.rounds || titleFightRounds }), opponent, fighter)
      : fight(fighter, opponent, { rounds: booking.rounds });
    fighter.purse = originalPurse;
    fighter.campSessions = 0;
    fighter.lastCampWeek = 0;
    fighter.lastCampReport = "";
    fighter.gymName = fighter.gymName || playerGymName();

    completed.push({
      promotion: booking.titleFight ? "Player Title Challenge" : "Player Special Attraction",
      short: "YOU",
      showName: booking.titleFight ? `${booking.weightClass} Title Challenge` : "Player Special Attraction",
      venue: "Career Mode Spotlight",
      attendance: booking.titleFight ? randomInt(6500, 22000) : randomInt(2500, 12000),
      gate: booking.titleFight ? randomInt(350000, 1800000) : randomInt(125000, 900000),
      mainEvent: result,
      bouts: [result],
      reportText: booking.titleFight
        ? `${booking.fighterName} finished a ${fightCampWeeks}-week camp and challenged ${booking.opponentName} for the ${booking.weightClass} title over ${booking.rounds || titleFightRounds} rounds.`
        : `${booking.fighterName} finished a ${fightCampWeeks}-week camp and met ${booking.opponentName} in a ${booking.rounds || result.round}-round spotlight fight.`
    });
  });

  state.playerBookings = stillBooked;
  return completed;
}

function acceptTitleChallenge(fighterId) {
  const challenger = state.fighters.find(item => item.id === Number(fighterId));
  if (!challenger) return;

  const status = titleStatus(challenger);
  if (!status.eligible || !status.champion) {
    render();
    return;
  }

  const champion = status.champion;
  schedulePlayerFight(challenger, champion, {
    titleFight: true,
    rounds: titleFightRounds,
    offerPurse: Math.round((challenger.purse || 0) * 2.25)
  });
  state.fightOffers = state.fightOffers.filter(item => item.fighterId !== challenger.id);
  render();
}

function generateFightOffers() {
  const offers = readyPlayerFighters()
    .flatMap(fighter => makeFightOffersForFighter(fighter, 4))
    .slice(0, 12);
  state.fightOffers = offers;
  render();
}

function acceptFightOffer(offerId) {
  const offer = state.fightOffers.find(item => item.id === offerId);
  if (!offer) return;
  const fighter = state.fighters.find(item => item.id === offer.fighterId);
  const opponent = state.fighters.find(item => item.id === offer.opponentId);
  if (!fighter || !opponent || !readiness(fighter).ready) return;

  schedulePlayerFight(fighter, opponent, { offerPurse: offer.offerPurse, rounds: offer.rounds });
  state.fightOffers = state.fightOffers.filter(item => item.fighterId !== fighter.id);
  render();
}

function createPlayer() {
  const remainingSlots = maxPlayerFighters - activePlayerRoster().length;
  if (remainingSlots <= 0) {
    els.playerCard.className = "fighter-card";
    els.playerCard.innerHTML = `<strong>Your Fighter Roster (${maxPlayerFighters}/${maxPlayerFighters})</strong><div class="meta">Roster is full. You can only sign 10 fighters.</div>`;
    renderContractOffer();
    return;
  }

  const selectedPromo = state.playerOffers.find(promo => promo.short === state.selectedOffer) || state.playerOffers[0];
  const baseName = els.fighterName.value.trim() || "Your Prospect";
  const count = 1;
  const randomize = els.randomFighters.checked;
  const basePromo = promotions.find(promo => promo.short === selectedPromo.short) || selectedPromo;

  for (let index = 0; index < count; index += 1) {
    const origin = randomFighterOrigin();
    const name = randomize ? randomFighterName(origin.country) : (count === 1 ? baseName : `${baseName} ${state.playerIds.length + 1}`);
    const fighterStyle = randomize ? randomItem(styles) : els.style.value;
    const rating = createdFighterRating();
    const money = randomize ? offerMoney(basePromo, { rating, wins: 0, losses: 0 }) : selectedPromo;
    const contractWeeks = randomize ? money.length : selectedPromo.length;
    const contractTotal = (money.purse * contractWeeks) + money.signingBonus;
    const newFighter = makeFighter(state.fighters.length + 1, {
      name,
      country: origin.country,
      state: origin.state,
      weightClass: randomize ? randomItem(weightClasses) : els.weightClass.value,
      style: fighterStyle,
      promotion: selectedPromo.short,
      rating,
      wins: 0,
      losses: 0,
      draws: 0,
      ko: 0,
      contractWeeks,
      purse: money.purse,
      signingBonus: money.signingBonus,
      contractValue: contractTotal,
      bonusEarnings: money.signingBonus,
      careerEarnings: money.signingBonus,
      gymName: playerGymName(),
      isPlayer: true
    });
    state.fighters.push(newFighter);
    state.playerId = newFighter.id;
    state.playerIds.push(newFighter.id);
  }

  state.playerOffers = makePlayerOffers();
  state.selectedOffer = state.playerOffers[0]?.short || null;
  render();
}

function renderSigningNews() {
  const freeAgents = state.fighters.filter(fighter => !fighter.retired && fighter.promotion === "FA").length;
  if (!state.signingNews.length) {
    els.signingSummary.textContent = `${freeAgents.toLocaleString()} unsigned fighters are waiting for promotion offers.`;
    els.signingNews.innerHTML = "";
    return;
  }

  els.signingSummary.textContent = `${state.signingNews.length} new contracts signed. ${freeAgents.toLocaleString()} free agents remain.`;
  els.signingNews.innerHTML = state.signingNews.slice(0, 12).map(signing => `
    <div class="signing">
      <div>
        <b>${signing.fighter}</b> ${signing.contractExpired ? `contract expired after leaving ${signing.promotion}` : `${signing.renewal ? "renewed with" : "signed with"} ${signing.promotion}`}
        <div class="meta">${signing.contractExpired ? "New offers were sent to the contract box." : `${signing.weightClass} | Rating ${signing.rating} | ${signing.weeks} weeks`}</div>
      </div>
      <span class="tag">${signing.contractExpired ? "Offers sent" : `$${signing.purse.toLocaleString()}`}</span>
    </div>
  `).join("");
}

function renderRetirementNews() {
  const active = state.fighters.filter(fighter => !fighter.retired).length;
  const retired = state.fighters.length - active;
  if (!state.retirementNews.length) {
    els.retirementSummary.textContent = `${active.toLocaleString()} active fighters, ${retired.toLocaleString()} retired. New prospects arrive every week.`;
    els.retirementNews.innerHTML = "";
    return;
  }

  els.retirementSummary.textContent = `${state.retirementNews.length} retirement/prospect update${state.retirementNews.length === 1 ? "" : "s"} this week.`;
  els.retirementNews.innerHTML = state.retirementNews.slice(0, 12).map(item => `
    <div class="signing">
      <div>
        <b>${item.type}</b> ${item.fighter}
        <div class="meta">${item.detail}</div>
      </div>
      <span class="tag">${active.toLocaleString()} active</span>
    </div>
  `).join("");
}

function renderFightOffers() {
  const readyCount = readyPlayerFighters().length;
  const booked = state.playerBookings.map(booking => {
    const fighter = state.fighters.find(item => item.id === booking.fighterId);
    return { ...booking, campSessions: fighter?.campSessions || 0 };
  });
  if (!state.fightOffers.length && !booked.length) {
    els.fightOfferSummary.textContent = readyCount
      ? `${readyCount} fighter${readyCount === 1 ? "" : "s"} ready. Click Fight Offers to request offers. Accepted fights start a ${fightCampWeeks}-week camp.`
      : "No fighters are ready for offers yet.";
    els.fightOffers.innerHTML = "";
    return;
  }

  els.fightOfferSummary.textContent = `${state.fightOffers.length} offer${state.fightOffers.length === 1 ? "" : "s"} available. ${booked.length} fight${booked.length === 1 ? "" : "s"} booked for camp.`;
  const bookedHtml = booked.map(booking => `
    <article class="fight-offer booked-fight">
      ${fighterAvatar(state.fighters.find(item => item.id === booking.fighterId) || { name: booking.fighterName, country: "", state: "" }, true)}
      <div>
        <strong>${booking.fighterName} vs ${booking.opponentName}</strong>
        <div class="meta">${booking.titleFight ? "Title fight | " : ""}${booking.weightClass} | ${booking.promotion}${booking.fighterHome ? ` | ${booking.fighterHome}` : ""}</div>
        <div class="meta">Fight in ${booking.weeksToFight} week${booking.weeksToFight === 1 ? "" : "s"} | ${booking.rounds || titleFightRounds} rounds | Camp ${booking.campSessions}/${fightCampMaxSessions} | Purse $${booking.offerPurse.toLocaleString()}</div>
      </div>
      <span class="tag ready-tag">Booked</span>
    </article>
  `).join("");
  const offerHtml = state.fightOffers.map(offer => `
    <article class="fight-offer">
      ${fighterAvatar(state.fighters.find(item => item.id === offer.fighterId) || { name: offer.fighterName, country: "", state: "" }, true)}
      <div>
        <strong>${offer.fighterName} vs ${offer.opponentName}</strong>
        <div class="meta">${offer.weightClass} | ${offer.promotion} | ${offer.fighterHome} vs ${offer.opponentHome} | Opponent ${offer.opponentRecord}, rating ${offer.opponentRating}</div>
        <div class="meta">${offer.risk} | ${offer.fightSize} | ${offer.rounds} rounds | Rating gap ${offer.ratingGap > 0 ? "+" : ""}${offer.ratingGap} | Offered purse: $${offer.offerPurse.toLocaleString()} | ${fightCampWeeks}-week camp</div>
      </div>
      <button data-accept-fight="${offer.id}" type="button">Accept & Start Camp</button>
    </article>
  `).join("");
  els.fightOffers.innerHTML = bookedHtml + offerHtml;
}

function renderFighterCards() {
  const roster = playerRoster();
  if (!roster.length) {
    els.fighterCards.innerHTML = `<div class="empty-state">No signed fighters yet.</div>`;
    return;
  }

  els.fighterCards.innerHTML = roster.map(fighter => {
    const promo = promotions.find(item => item.short === fighter.promotion);
    const promoName = promo ? promo.name : fighter.retired ? "Retired" : "Free Agent";
    const ready = readiness(fighter);
    const title = titleStatus(fighter);
    const booking = upcomingFightFor(fighter);
    const market = fighterMarketProfile(fighter);
    const totalFights = fighter.wins + fighter.losses + fighter.draws;
    const koRate = fighter.wins ? Math.round((fighter.ko / fighter.wins) * 100) : 0;
    const projectedValue = Math.max(fighter.contractValue || 0, (fighter.purse || 0) * Math.max(0, fighter.contractWeeks || 0) + (fighter.signingBonus || 0));
    const nextFight = booking
      ? `${booking.opponentName} in ${booking.weeksToFight} week${booking.weeksToFight === 1 ? "" : "s"}`
      : ready.label;
    const titleRank = title.rank ? `#${title.rank}` : title.champion ? "Champion" : "Unranked";
    const championName = title.champion && title.champion !== true ? title.champion.name : title.champion === true ? fighter.name : "TBA";
    const winRate = fighter.wins + fighter.losses + fighter.draws
      ? Math.round((fighter.wins / (fighter.wins + fighter.losses + fighter.draws)) * 100)
      : 0;
    const careerStage = fighter.age <= 24 && totalFights < 12 ? "Prospect" : fighter.age >= 35 ? "Veteran" : totalFights >= 25 ? "Established pro" : "Developing pro";
    const conditionNote = fighter.injuryWear >= 70 ? "High injury risk" : fighter.fatigue >= 70 ? "Needs rest" : fighter.sharpness >= 75 ? "Sharp camp form" : "Stable";
    const contractNote = fighter.contractWeeks <= 0 ? "Needs new contract" : fighter.contractWeeks <= 4 ? "Contract ending soon" : "Contract secure";
    const scoutingReport = `${careerStage} ${fighter.style.toLowerCase()} with ${conditionNote.toLowerCase()}, ${market.tier.toLowerCase()} market value, and ${contractNote.toLowerCase()}.`;
    return `
      <article class="stat-card">
        <div class="stat-card-head">
          ${fighterAvatar(fighter)}
          <div>
            <h3>${fighter.name}</h3>
            <div class="meta">${fighter.weightClass} | ${fighter.style} | Age ${fighter.age} | ${hometownLine(fighter)} | ${fighter.gymName || playerGymName()}</div>
          </div>
          <span class="tag ${ready.ready ? "ready-tag" : "wait-tag"}">${ready.label}</span>
        </div>
        <div class="stat-grid">
          <span><b>${fighter.rating}</b> Rating</span>
          <span><b>${fighter.wins}-${fighter.losses}-${fighter.draws}</b> Record</span>
          <span><b>${fighter.ko}</b> KOs</span>
          <span><b>${winRate}%</b> Win rate</span>
          <span><b>${fighter.sharpness}</b> Sharpness</span>
          <span><b>${fighter.fatigue}</b> Fatigue</span>
          <span><b>${fighter.morale}</b> Morale</span>
          <span><b>${fighter.injuryWear}</b> Injury wear</span>
          <span><b>${market.tier}</b> Market</span>
          <span><b>${titleRank}</b> Title rank</span>
          <span><b>${koRate}%</b> KO rate</span>
          <span><b>${totalFights}</b> Pro fights</span>
        </div>
        <div class="scouting-note">${scoutingReport}</div>
        <div class="card-lines">
          <div><strong>Hometown:</strong> ${hometownLine(fighter)}</div>
          <div><strong>Promotion:</strong> ${promoName} | ${fighter.promotion}</div>
          <div><strong>Gym:</strong> ${fighter.gymName || playerGymName()}</div>
          <div><strong>Career stage:</strong> ${careerStage} | ${conditionNote} | ${contractNote}</div>
          <div><strong>Contract:</strong> ${fighter.contractWeeks} weeks | $${fighter.purse.toLocaleString()} per fight | $${projectedValue.toLocaleString()} projected value</div>
          <div><strong>Earnings:</strong> $${fighter.careerEarnings.toLocaleString()} total | $${fighter.fightEarnings.toLocaleString()} purses | $${fighter.bonusEarnings.toLocaleString()} bonuses | Last $${fighter.lastFightPay.toLocaleString()}</div>
          <div><strong>Title:</strong> ${title.label} | Champion: ${championName}</div>
          <div><strong>Next:</strong> ${nextFight}</div>
          <div><strong>Camp:</strong> ${booking ? `${fighter.campSessions}/${fightCampMaxSessions} sessions | ${booking.rounds || titleFightRounds} rounds | Offer purse $${booking.offerPurse.toLocaleString()}` : "Open gym training available weekly"}</div>
          <div><strong>Condition:</strong> ${fighter.readyInWeeks > 0 ? `Recovering ${fighter.readyInWeeks} week${fighter.readyInWeeks === 1 ? "" : "s"}` : "No recovery wait"} | Last training week ${fighter.lastCampWeek || "none"}</div>
          <div><strong>Market read:</strong> ${market.tier} | Score ${Math.round(market.marketScore)} | Win rate ${winRate}%</div>
          ${fighter.retired ? `<div>Retired: ${fighter.retirementReason}</div>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function championFor(promo, weightClass) {
  return state.fighters
    .filter(fighter => !fighter.retired && fighter.promotion === promo.short && fighter.weightClass === weightClass)
    .sort((a, b) => b.wins - a.wins || b.rating - a.rating || a.losses - b.losses)[0];
}

function renderPromotionRosters() {
  els.promotionRosterSummary.textContent = `${promotions.length} active promotions with champions across ${weightClasses.length} weight classes. ${state.pendingPromotions.length} announced opening${state.pendingPromotions.length === 1 ? "" : "s"} pending.`;
  const pendingCards = state.pendingPromotions.map(item => `
    <article class="promotion-card">
      <div class="stat-card-head">
        <div>
          <h3>${item.name}</h3>
          <div class="meta">Opening in ${item.opensInWeeks} week${item.opensInWeeks === 1 ? "" : "s"}</div>
        </div>
        <span class="tag">Opening soon</span>
      </div>
      <div class="card-lines">
        <div>Scouting free agents and building a first roster.</div>
        <div>Champions: vacant until launch.</div>
      </div>
    </article>
  `).join("");
  els.promotionRosters.innerHTML = pendingCards + promotions.map(promo => {
    const roster = state.fighters
      .filter(fighter => !fighter.retired && fighter.promotion === promo.short)
      .sort((a, b) => b.rating - a.rating || b.wins - a.wins);
    const topNames = roster.slice(0, 5);
    return `
      <article class="promotion-card">
        <div class="stat-card-head">
          <div>
            <h3>${promo.name}</h3>
            <div class="meta">${promo.short} | ${roster.length.toLocaleString()} active fighters</div>
          </div>
          <span class="tag">$${promo.purse.toLocaleString()}</span>
        </div>
        <div class="champion-list">
          ${weightClasses.map(weightClass => {
            const champ = championFor(promo, weightClass);
            return `
              <div>
                <b>${weightClass}</b>
                <span>${champ ? `${champ.name} (${champ.wins}-${champ.losses}-${champ.draws}, ${champ.rating})` : "Vacant"}</span>
              </div>
            `;
          }).join("")}
        </div>
        <div class="top-roster">
          <strong>Top roster names</strong>
          ${topNames.length ? topNames.map(fighter => `<span>${fighter.name} | ${fighter.weightClass} | ${fighter.wins}-${fighter.losses}-${fighter.draws} | ${fighter.rating}</span>`).join("") : "<span>No active fighters</span>"}
        </div>
      </article>
    `;
  }).join("");
}

function renderPromotionNews() {
  const pendingText = state.pendingPromotions.length
    ? `${state.pendingPromotions.length} promotion${state.pendingPromotions.length === 1 ? "" : "s"} preparing to open.`
    : "No announced openings pending.";
  const newsItems = [
    ...state.promotionNews,
    ...fighterNewsItems()
  ];

  if (!newsItems.length) {
    els.promotionNewsSummary.textContent = `${promotions.length} active promotions. ${pendingText}`;
    els.promotionNews.innerHTML = "";
    return;
  }

  els.promotionNewsSummary.textContent = `${newsItems.length} boxing news update${newsItems.length === 1 ? "" : "s"}. ${pendingText}`;
  els.promotionNews.innerHTML = newsItems.map(item => `
    <div class="signing">
      <div>
        <b>${item.type}</b> ${item.headline}
        <div class="meta">${item.detail}</div>
      </div>
      <span class="tag">${promotions.length} active</span>
    </div>
  `).join("");
}

function renderSchedule() {
  els.scheduleSummary.textContent = `${calendarLabel()}: ${state.schedule.length} of ${promotions.length} promotions booked shows this week.`;
  els.scheduleList.innerHTML = state.schedule.map(item => `
    <article class="schedule-card">
      <div class="schedule-top">
        <div>
          <h3>${item.day}: ${item.showName}</h3>
          <div class="meta">${item.promotion} | ${item.venue}</div>
        </div>
        <span class="tag">${item.fights} fights</span>
      </div>
      <div class="schedule-details">
        <span>Est. attendance: ${item.estimatedAttendance.toLocaleString()}</span>
        <span>Main event: ${item.mainEventPreview}</span>
      </div>
      <p class="text-report">${item.previewText}</p>
    </article>
  `).join("");
}

function resultLine(bout) {
  if (!bout.winner) {
    return `
      <div>
        <span>${bout.a.name}</span> vs <span>${bout.b.name}</span>
        <div class="meta">${bout.titleFight ? `${bout.titleLine} | ` : ""}${bout.a.weightClass} | ${bout.a.promotion}</div>
        <p class="fight-recap">${bout.recap}</p>
      </div>
      <strong class="method">${bout.titleFight ? "Title Draw" : "Draw"}</strong>
    `;
  }

  return `
    <div>
      <div class="fighter-title-row">
        ${fighterAvatar(bout.winner, true)}
        <div>
          <span class="winner">${bout.winner.name}</span> def. ${bout.loser.name}
        </div>
      </div>
      <div class="meta">${bout.titleFight ? `${bout.titleLine} | ` : ""}${bout.winner.weightClass} | ${hometownLine(bout.winner)} | ${bout.winner.wins}-${bout.winner.losses}-${bout.winner.draws}, ${bout.winner.ko} KO</div>
      <p class="fight-recap">${bout.recap}</p>
    </div>
    <strong class="method">${bout.titleFight ? "Title " : ""}${bout.method} R${bout.round}${bout.upset ? " Upset" : ""}</strong>
  `;
}

function renderResults() {
  if (!state.lastShows.length) {
    els.results.innerHTML = "";
    els.resultSummary.textContent = "Press Simulate Next Week to run the booked promotion events.";
    return;
  }

  const count = state.lastShows.reduce((sum, show) => sum + show.bouts.length, 0);
  const attendance = state.lastShows.reduce((sum, show) => sum + (show.attendance || 0), 0);
  const gate = state.lastShows.reduce((sum, show) => sum + (show.gate || 0), 0);
  const playerShows = state.lastShows.filter(show => show.short === "YOU").length;
  const weeklyShows = state.lastShows.length - playerShows;
  els.resultSummary.textContent = `${weeklyShows} weekly shows${playerShows ? ` plus ${playerShows} accepted fight offer${playerShows === 1 ? "" : "s"}` : ""}: ${count} fights, ${attendance.toLocaleString()} fans, $${gate.toLocaleString()} gate.`;
  els.results.innerHTML = state.lastShows.map(show => `
    <article class="show">
      <div class="show-head">
        <div>
          <h3>${show.showName}</h3>
          <div class="meta">${show.promotion} | ${show.venue}</div>
        </div>
        <span class="tag">${show.bouts.length} fights</span>
      </div>
      <div class="show-stats">
        <span>Attendance: ${show.attendance.toLocaleString()}</span>
        <span>Gate: $${show.gate.toLocaleString()}</span>
        <span>Main event: ${show.mainEvent ? `${show.mainEvent.a.name} vs ${show.mainEvent.b.name}` : "TBA"}</span>
      </div>
      <p class="text-report">${show.reportText}</p>
      ${show.bouts.map(bout => `<div class="fight">${resultLine(bout)}</div>`).join("")}
    </article>
  `).join("");
}

function renderRankings() {
  const top = [...state.fighters]
    .filter(fighter => !fighter.retired && fighter.promotion !== "FA")
    .sort((a, b) => b.wins - a.wins || b.rating - a.rating || a.losses - b.losses)
    .slice(0, 100);

  els.rankings.innerHTML = top.map((fighter, index) => `
    <div class="rank-row">
      <b>#${index + 1}</b>
      ${fighterAvatar(fighter, true)}
      <div>
        <strong>${fighter.name}</strong>
        <div class="record">${fighter.weightClass} | ${fighter.promotion} | ${hometownLine(fighter)} | ${fighter.wins}-${fighter.losses}-${fighter.draws}, ${fighter.ko} KO</div>
      </div>
      <span class="tag">${fighter.rating}</span>
    </div>
  `).join("");
}

function renderProspectRankings() {
  const prospects = [...state.fighters]
    .filter(fighter => !fighter.retired && fighter.age <= 23)
    .sort((a, b) => b.rating - a.rating || b.wins - a.wins || a.age - b.age)
    .slice(0, 10);

  els.prospectRankings.innerHTML = prospects.map((fighter, index) => `
    <div class="rank-row">
      <b>#${index + 1}</b>
      ${fighterAvatar(fighter, true)}
      <div>
        <strong>${fighter.name}</strong>
        <div class="record">Age ${fighter.age} | ${fighter.weightClass} | ${fighter.promotion} | ${hometownLine(fighter)} | ${fighter.wins}-${fighter.losses}-${fighter.draws}, ${fighter.ko} KO</div>
      </div>
      <span class="tag">${fighter.rating}</span>
    </div>
  `).join("");
}

function render() {
  ensureGymData();
  els.yearNumber.textContent = yearForWeek();
  els.weekNumber.textContent = weekOfYearFor();
  els.totalFighters.textContent = state.fighters.filter(fighter => !fighter.retired).length.toLocaleString();
  els.promotionCount.textContent = promotions.length;
  els.weeklyFights.textContent = state.schedule.reduce((sum, show) => sum + show.fights, 0);
  const remainingSlots = Math.max(0, maxPlayerFighters - activePlayerRoster().length);
  els.createFighter.disabled = remainingSlots === 0;
  els.createFighter.textContent = remainingSlots === 0 ? "Roster Full" : "Sign Fighter(s)";
  renderContractOffer();
  renderPlayer();
  renderTrainingOptions();
  renderGym();
  renderFreeAgents();
  renderSigningNews();
  renderRetirementNews();
  renderFightOffers();
  renderFighterCards();
  renderPromotionRosters();
  renderPromotionNews();
  renderSchedule();
  renderResults();
  renderRankings();
  renderProspectRankings();
}

els.createFighter.addEventListener("click", createPlayer);
els.randomFighters.addEventListener("change", () => {
  state.playerOffers = makePlayerOffers();
  state.selectedOffer = state.playerOffers[0]?.short || null;
  renderContractOffer();
});
els.playerCard.addEventListener("click", event => {
  const button = event.target.closest("[data-title-challenge]");
  if (!button) return;
  acceptTitleChallenge(button.dataset.titleChallenge);
});
els.trainFighter.addEventListener("click", trainFighter);
els.trainAllFighters.addEventListener("click", trainAllAvailableFighters);
els.moveWeightUp.addEventListener("click", () => moveSelectedWeight(1));
els.moveWeightDown.addEventListener("click", () => moveSelectedWeight(-1));
els.retirePlayerFighter.addEventListener("click", retireSelectedFighter);
els.simulateWeek.addEventListener("click", simulateWeek);
els.simulateMonth.addEventListener("click", () => simulateWeeks(4));
els.bookPlayerFight.addEventListener("click", () => {
  generateFightOffers();
  openPanel(els.fightOffersPanel);
});
els.fightOffers.addEventListener("click", event => {
  const button = event.target.closest("[data-accept-fight]");
  if (!button) return;
  acceptFightOffer(button.dataset.acceptFight);
});
els.contractOffer.addEventListener("click", event => {
  const renewal = event.target.closest("[data-renew-fighter]");
  if (renewal) {
    acceptRenewalOffer(renewal.dataset.renewFighter, renewal.dataset.renewOffer);
    return;
  }
  const offer = event.target.closest("[data-offer]");
  if (!offer) return;
  state.selectedOffer = offer.dataset.offer;
  renderContractOffer();
});
els.gameNav.addEventListener("click", event => {
  const button = event.target.closest("[data-jump]");
  if (!button) return;
  document.querySelector(button.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
});
els.openNews.addEventListener("click", openNewsPanel);
els.closeNews.addEventListener("click", closeNewsPanel);
els.newsPanel.addEventListener("click", event => {
  if (event.target === els.newsPanel) closeNewsPanel();
});
els.openGym.addEventListener("click", () => openPanel(els.gymPanel));
els.openLeaderboard.addEventListener("click", openGymLeaderboard);
els.closeGym.addEventListener("click", () => closePanel(els.gymPanel));
els.saveGymName.addEventListener("click", saveGymName);
els.submitOnlineLeaderboard.addEventListener("click", submitOnlineLeaderboard);
els.refreshOnlineLeaderboard.addEventListener("click", refreshOnlineLeaderboard);
els.gymRoster.addEventListener("click", event => {
  const freeAgent = event.target.closest("[data-gym-free-agent]");
  if (freeAgent) {
    setPlayerFighterGym(freeAgent.dataset.gymFreeAgent, independentGymName);
    return;
  }
  const joinGym = event.target.closest("[data-gym-join]");
  if (joinGym) setPlayerFighterGym(joinGym.dataset.gymJoin, playerGymName());
});
els.gymPanel.addEventListener("click", event => {
  if (event.target === els.gymPanel) closePanel(els.gymPanel);
});
els.openFreeAgents.addEventListener("click", () => openPanel(els.freeAgentsPanel));
els.closeFreeAgents.addEventListener("click", () => closePanel(els.freeAgentsPanel));
els.scoutFreeAgents.addEventListener("click", scoutFreeAgentMarket);
els.freeAgentMarket.addEventListener("click", event => {
  const recruit = event.target.closest("[data-recruit-free-agent]");
  if (recruit) {
    recruitAiFreeAgent(recruit.dataset.recruitFreeAgent);
    return;
  }
  const joinGym = event.target.closest("[data-gym-join]");
  if (joinGym) setPlayerFighterGym(joinGym.dataset.gymJoin, playerGymName());
});
els.freeAgentsPanel.addEventListener("click", event => {
  if (event.target === els.freeAgentsPanel) closePanel(els.freeAgentsPanel);
});
els.openTraining.addEventListener("click", () => openPanel(els.trainingPanel));
els.closeTraining.addEventListener("click", () => closePanel(els.trainingPanel));
els.trainingPanel.addEventListener("click", event => {
  if (event.target === els.trainingPanel) closePanel(els.trainingPanel);
});
els.openFightOffers.addEventListener("click", () => openPanel(els.fightOffersPanel));
els.closeFightOffers.addEventListener("click", () => closePanel(els.fightOffersPanel));
els.fightOffersPanel.addEventListener("click", event => {
  if (event.target === els.fightOffersPanel) closePanel(els.fightOffersPanel);
});
els.openFighterCards.addEventListener("click", () => openPanel(els.fighterCardsPanel));
els.closeFighterCards.addEventListener("click", () => closePanel(els.fighterCardsPanel));
els.fighterCardsPanel.addEventListener("click", event => {
  if (event.target === els.fighterCardsPanel) closePanel(els.fighterCardsPanel);
});
els.openContracts.addEventListener("click", () => openPanel(els.contractsPanel));
els.closeContracts.addEventListener("click", () => closePanel(els.contractsPanel));
els.contractsPanel.addEventListener("click", event => {
  if (event.target === els.contractsPanel) closePanel(els.contractsPanel);
});
els.openActivity.addEventListener("click", () => openPanel(els.activityPanel));
els.closeActivity.addEventListener("click", () => closePanel(els.activityPanel));
els.activityPanel.addEventListener("click", event => {
  if (event.target === els.activityPanel) closePanel(els.activityPanel);
});
els.openSchedule.addEventListener("click", () => openPanel(els.schedulePanel));
els.closeSchedule.addEventListener("click", () => closePanel(els.schedulePanel));
els.schedulePanel.addEventListener("click", event => {
  if (event.target === els.schedulePanel) closePanel(els.schedulePanel);
});
els.openResults.addEventListener("click", () => openPanel(els.resultsPanel));
els.closeResults.addEventListener("click", () => closePanel(els.resultsPanel));
els.resultsPanel.addEventListener("click", event => {
  if (event.target === els.resultsPanel) closePanel(els.resultsPanel);
});
els.openRosters.addEventListener("click", openRosterPanel);
els.closeRosters.addEventListener("click", closeRosterPanel);
els.rosterPanel.addEventListener("click", event => {
  if (event.target === els.rosterPanel) closeRosterPanel();
});
els.saveGame.addEventListener("click", saveGame);
els.loadGame.addEventListener("click", () => {
  if (loadGame()) hideMenu();
});
els.menuSave.addEventListener("click", saveGame);
els.menuLoad.addEventListener("click", () => {
  if (loadGame()) hideMenu();
});
els.menuHowToPlay.addEventListener("click", () => openPanel(els.howToPlayPanel));
els.closeHowToPlay.addEventListener("click", () => closePanel(els.howToPlayPanel));
els.howToPlayPanel.addEventListener("click", event => {
  if (event.target === els.howToPlayPanel) closePanel(els.howToPlayPanel);
});
els.homePlayNow.addEventListener("click", showMenu);
els.homeStartCareer.addEventListener("click", showMenu);
els.homeContinue.addEventListener("click", openUniverseOrSave);
els.homeLogin.addEventListener("click", openLoginPage);
els.homeLoginCard.addEventListener("submit", event => {
  event.preventDefault();
  saveProfile("home");
});
els.homeChatForm.addEventListener("submit", sendHomeChat);
els.homeOpenLeaderboard.addEventListener("click", openGymLeaderboard);
els.homeAdminToggle.addEventListener("click", toggleAdminChat);
els.adminChatForm.addEventListener("submit", sendAdminChat);
els.clearHomeChat.addEventListener("click", clearHomeChat);
els.closeLogin.addEventListener("click", closeLoginPage);
els.loginPage.addEventListener("click", event => {
  if (event.target === els.loginPage) closeLoginPage();
});
els.saveLogin.addEventListener("click", saveProfile);
els.logoutProfile.addEventListener("click", logoutProfile);
els.menuLogin.addEventListener("click", openLoginPage);
els.menuHome.addEventListener("click", showHome);
els.startCareer.addEventListener("click", () => jumpTo(".creator"));
els.openUniverse.addEventListener("click", openUniverseOrSave);
els.menuPromotions.addEventListener("click", () => {
  hideMenu();
  openPanel(els.contractsPanel);
});
els.menuLeaderboard.addEventListener("click", openGymLeaderboard);
els.backToMenu.addEventListener("click", showMenu);
els.menuReset.addEventListener("click", () => {
  generateUniverse();
  render();
  setSaveStatus("New universe started. Save when ready.");
  hideMenu();
});
els.resetGame.addEventListener("click", () => {
  generateUniverse();
  render();
  setSaveStatus("New universe started. Save when ready.");
});

populateControls();
renderContracts();
generateUniverse();
render();
renderProfileStatus();
renderHomeChat();
setSaveStatus(hasSavedGame() ? "Saved game found. Press Load Game or Open Universe to continue." : "No save loaded.");
showHome();
