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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_01_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2tCZmdPa0JnRlR3Sk5KS0VmNDNUOTNuelFtUnhrckNGS05zcEhhN0RNST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR1dSdldvSVVTQ1NrUXM0LVd5ZmEzZ1wiLFxuICBcInBob25lSWRcIjogXCI1MTVjOWNjOC1lNTFiLTRkMjQtODQxYy05ZjRmZTgyMTQ1M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICA2NSxcbiAgICAgIDExNixcbiAgICAgIDM3LFxuICAgICAgOTUsXG4gICAgICAzMyxcbiAgICAgIDgwLFxuICAgICAgMTIwLFxuICAgICAgMTM2LFxuICAgICAgMTczLFxuICAgICAgMjMxLFxuICAgICAgNjIsXG4gICAgICAxODUsXG4gICAgICAxNDAsXG4gICAgICAyOSxcbiAgICAgIDI0MCxcbiAgICAgIDI0MCxcbiAgICAgIDExNixcbiAgICAgIDUzLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMTIwLFxuICAgICAgOTUsXG4gICAgICAyMzEsXG4gICAgICA5MSxcbiAgICAgIDE3MixcbiAgICAgIDE5LFxuICAgICAgMjUyLFxuICAgICAgMTY4LFxuICAgICAgMTU1LFxuICAgICAgMjQ5LFxuICAgICAgMjI1LFxuICAgICAgMTY0LFxuICAgICAgMTAzLFxuICAgICAgMTU5LFxuICAgICAgMTE3LFxuICAgICAgMzMsXG4gICAgICAxNzUsXG4gICAgICA1NSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJONUpNSE1SRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjA4MjQ3Njc3OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NjAxODY5MTU3MTg4OTo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTEcrNGtCRUpXQnpiSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFjcjh6Z3FHa1NnVnlaT2FkcHNvV09HQ2ZxWk9hS0pjUnRTNlRWQ0lieDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1NZdXI2eEEwdHliYVpJM3hMTjdMYk54M1dEZFBrZG9oSWFuaE1TaEdzYkZPMVY2WVJQM1NCeFJucU5mWlZzZGZLS2VKNzF1dFUwUUtTanJOaFl5QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGJVdlVVZ2RzU1U3YnZyYnhUeCt6MUE1bisrUWhiQjR2R3IrZGgzTFpXZmZqdUorMkoyNlV3RWdLeW45aXZJZG9FNElqTzczKzdBL1B4UmVVRHg2QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjA4MjQ3Njc3OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjczMjA1N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
