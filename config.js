//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://wa.me/+2347036305932";
global.website = process.env.GURL || "wa.me/+2347036305932";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c141e489e49b8a6bc1593.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347036305932";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c141e489e49b8a6bc1593.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ozNGtYN25nRTFOVVFsK2diS3p2OGh3bFlYdWRLU1laaCtQZjNTMDlIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXlFb1Q5VU4wb0pCMDBTTjZVZDAvS0U1Qjdpb2QwUkxoOERkZExzbllXMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSEZEaDkvNGwrMlNrOUpTQzJ0c0duK2ZKTDErN25jcnpBTU42a2cvMlhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWbWR0MkJ6SnFlRWRmMjFLTVh0Q0xzTmdaNHY4Sm9SMUZweXBVRnZMakFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDWXNEKzV4eVE0bEtTNFVpV09naDJiNHlpQXpDVU4xaDl6WkhlS0JJa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh3R0JiYnNNbXowUFZZY3Y2bjl4cjlDV1hNZ3VQaXN1aksrUnVBUWZMeXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dOaTdSNVZtWER1UkVzcDNJKzVWTVVITUJENjlHSGxoM3BqTFdnVDlGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXl3RnpvemVZMzVIYVNDYTBtSWxIVHJFYUp6ODFsbzVxem9SaFJLbGNIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEzSFUxQXUrbXM2RTNtLzBzWnY5T2FtZEV1cEZpV01FVnBjV3ByNnd1MTB1dDU4NWVZTi85dEJRK05JS1ExMVQyWTNDTmF0eFFTRjQzMFYzdzVPeGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJjL1lvSCtJUlBjWTJHWVBuMnNaQ3E1VmloZG1YYjhmKzBueDJGcnN1MkU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUVDBmYlZVd1FmQ3RYcHZnTWVhNlpnIiwicGhvbmVJZCI6IjhhYjQ0NjgzLWRhYjItNDQ1ZC04YmM2LTQ1YmMxZGFhZTNiOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwYzhZakZlcDd5SU5lcjJRVXU1QTR3RDRuTEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVcyeHNMSUtpVnBTT25pWDhsZXBBNytGTXdNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1YQU1ZNkc4IiwibWUiOnsiaWQiOiIyMzQ3MDM2MzA1OTMyOjI5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKVDZwS0VHRUlmUzJMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzYUZNSHlJWEJHMklBSW10RTZLaEVwR2ovczg3cFlQRm5lUURkQzFMcmhZPSIsImFjY291bnRTaWduYXR1cmUiOiJsanJPRXVYbXh4ZUNEdVJ6ZFpnd2FEZGM2Z3FKYzdmMWgrV2tQdy9HSEU3SHdvQ0VYbWZmZ2d0dWE2Uy9HTXZYZUNyUjVsMDVHWlR2SVROc2RmNkdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOTNzRTRnYkdoN3VKcTBieklVa3FOeWl6SzdFNDlhZGVXOTFDUC94QXZFRXdEdmtvT0ZFMEZBMEIwSGhsNFlhc3JQYjJpOENnSDB4Snh6eGhUNjUzaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDM2MzA1OTMyOjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQyaFRCOGlGd1J0aUFDSnJST2lvUktSby83UE82V0R4WjNrQTNRdFM2NFcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMyMTQxMDB9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "✞👾Vîçíøüs_Wrld 🥷🥶✞ BOT2",
  ownername: process.env.OWNER_NAME || "✞👾Vîçíøüs_Wrld 🥷🥶✞",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
