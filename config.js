const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2330208247677";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_41_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMxLFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExLFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY0LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzbHpOd3ZTa3lpTmswV1YrRVU1V3NQemMvbFhDME1SVHZFNDI2SjQ4QStvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmREhjaVNJMlNsaU4yVDJTb0lqZ1R3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUyNWQ4MDUzLWVlZjctNDc5Ni05MjU5LTAxMGU5ZDI5ODU0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAxODgsXG4gICAgICAxMDksXG4gICAgICAyNDIsXG4gICAgICAxNTMsXG4gICAgICAxNjgsXG4gICAgICAyMTAsXG4gICAgICAxMjQsXG4gICAgICAxMjksXG4gICAgICAxNDMsXG4gICAgICAxNjIsXG4gICAgICAxMCxcbiAgICAgIDE1NyxcbiAgICAgIDIwOSxcbiAgICAgIDgzLFxuICAgICAgMTM4LFxuICAgICAgMjA5LFxuICAgICAgMTI1LFxuICAgICAgMjAsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAxMzYsXG4gICAgICA2MyxcbiAgICAgIDE4MSxcbiAgICAgIDEwNCxcbiAgICAgIDAsXG4gICAgICAxNDMsXG4gICAgICAxMDMsXG4gICAgICAxNTIsXG4gICAgICAyMyxcbiAgICAgIDkzLFxuICAgICAgMTQyLFxuICAgICAgMTE3LFxuICAgICAgNzgsXG4gICAgICAxMDYsXG4gICAgICA3NixcbiAgICAgIDExOSxcbiAgICAgIDY1LFxuICAgICAgMTU1LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBCSzVYV1Q0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyMDgyNDc2Nzc6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk2MDE4NjkxNTcxODg5OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tQRys0a0JFTjdHMGJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYWNyOHpncUdrU2dWeVpPYWRwc29XT0dDZnFaT2FLSmNSdFM2VFZDSWJ4ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtR3UxM1BnTTRkRmZtNm1wUkJUdWc4Yk9VYWNxV0RJTjJTTzhOMGswZlBTSzNoOEdSZksrTnRjbWFqVWY3eG9jUVFxb2QzdlpBZ3ZkdG1sQVdINkZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJic01lZXRUYkxaL3lsbUtvcytMSXNVVm1mL0dwZ05rODREZGJzRFdiQ2lmbm9tRnRLNnNpdS9XVklrN0JnZGorTnRNZ3hISHg2ekwzZGdKOVhHRGJpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDgyNDc2Nzc6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODA2NDk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGJGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMYkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNVlhYMCtGa2RIdmhHODArU1I4eDI1bjBMSk80c1piZkdjUWpHM05iWXdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4OTMzNDA1MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzE2ODA2MzIyMzUxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
