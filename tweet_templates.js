// KEYWORDS
var prefix = "Challenge: ";

var challenges = [
  "Design",
  "Make",
  "Show me",
  "Create",
  //"Wireframe",
  "Build"
];

var challengeObjectives = [
  "a tutorial",
  "a lifebar",
  "an $iconType icon",
  "$iconType icon set",
  "a reticle",
  "a loading bar",
  "a loading message",
  "a saving message",
  "an achievement",
  "a currency icon",
  "a leaderboard",
  "a custom cursor",
  "a mana bar",
  "an xp bar",
  "a mini-map",
  "a compass",
  "an ok/cancel pop-up",
  "a dialogue wheel",
  "a damage indicator",
  "a victory message",
  "a game over message",
  "a score display",
  "a generic button set",
  "an ammo count",
  "a team party status",
  "an in-game message",
  "a critical message",
  "a team chat log",
  "a current quest objective",
  "a combo meter",
  "an enemy healthbar",
  "an in-game interact",
  "an equipment compare",
  "a character portrait",
  "an NPC info",
  "a timer",
  "an inventory tooltip",
  "an ability tree",
  "a map legend",
  "a loot roll",
  "a race results",
  "a pinned crafting recipe",
  "a letter reader",
  "a level select",
  "an energy gauge",
  "a quick select inventory",
  "an ability select",
  "loot items display",
  "generic menu scheme"
];

var styleModifiers = [
  "using $adjective style",
  "inspired by $adjective",
  "for a $adjective game",
  "influenced by $adjective",
  //"that reinvents $adjective games",
  //"which pushes the boundaries of $adjective games",
  //"that's outside of the box for $adjective games",
  "that has $adjective feels",
  "that is $adjective",
  "with some $adjective feel to it",
  "that's the opposite of $adjective games",
  "that is a silly version of $adjective games",
  "that is ridiculously $adjective",
  "about $adjective games"
];

var styleAdjectives = [
  "paper",
  "horror",
  "minimalist",
  "grunge",
  "glitch",
  "witchy",
  "skeumorphism",
  "shooter",
  "cute",
  "jrpg",
  "space",
  "dress up",
  "western",
  "painted / craftsy",
  "rhythm / musical",
  "psychedelic",
  "diplomacy",
  "chess",
  "wrestling",
  "demonic",
  "isometric",
  "romantic",
  "team-based",
  "fantasy",
  "pet simulator",
  "nature / plants",
  "dreamy",
  "relax-em-up",
  "sci-fi",
  "noir",
  "low poly",
  "line art",
  "pixel art",
  "fighting",
  "kids",
  "sports",
  "otome",
  "old school",
  "90s adventure",
  "social",
  "3D",
  "puzzle",
  "atmospheric",
  "non-violent",
  "strategy",
  "arcade",
  "zombies",
  "point & click",
  "visual novel",
  "MMO",
  "circular",
  "stealth",
  "racing",
  "mystery",
  "romance",
  "magical",
  "surreal",
  "crime",
  "action adventure",
  "roleplaying",
  "steam punk",
  "comic book",
  "dystopian",
  "abstract",
  "text-based",
  "cards",
  "narrative",
  "pinball",
  "word-based",
  "no text",
  "box-free",
  "cooking",
  "dash"
];

var iconTypes = [
  "ammo",
  "skip turn",
  "ranged weapon",
  "poison",
  "healing",
  "herbalism",
  "cooking",
  "gift",
  "food",
  "animal taming",
  "health",
  "mana",
  "crafting",
  "pick pocket",
  "portion",
  "currency",
  "shield bash",
  "map",
  "stealth kill",
  "headshot",
  "flirt",
  "treasure chest",
  "energy",
  "bonus",
  "premium content",
  "diamond",
  "revive",
  "set trap",
  "emotive dialogue reaction"
];


var allTheTweets = [];
const fs = require('fs');
const logFile = 'log.json';

if (fs.existsSync(logFile)) {
  var contents = fs.readFileSync(logFile, 'utf8');
  allTheTweets = JSON.parse(contents).all_the_tweets || [];
}


// PUT SHIT TOGETHER
// PREFIX + CHALLENGE + STYLE MODIFIER + STYLE ADJECTIVE
function getRandValue(endLimit) {
  return Math.floor(Math.random() * endLimit);
}

function getRandItem(theArr) {
  return theArr[getRandValue(theArr.length)];
}

module.exports.getTweetTemplate = function () {
  var currChallenge = getRandItem(challenges);
  var currObjective = getRandItem(challengeObjectives);
  var currStyleModifier = getRandItem(styleModifiers);

  var tweetDraft = `${currChallenge} ${currObjective} ${currStyleModifier}`;

  var theTweet = tweetDraft.replace('$adjective', getRandItem(styleAdjectives));
  theTweet = theTweet.replace('$iconType', getRandItem(iconTypes));

  allTheTweets.push({date_tweeted:new Date().getTime(),theTweet})
  storeTweet(allTheTweets);

  return `${prefix} ${theTweet}`;
}

function storeTweet(jsonToSave) {
  var toJsonStr = JSON.stringify({all_the_tweets:jsonToSave}, null, 2);
  fs.writeFileSync(logFile, toJsonStr);
}

function checkForDuplicate(theTweet) {

}
