require("dotenv").config();  
require('./config')
const Func = ('./lib/function.js');
const fonts = require('./lib/font.js');
const menufont = require('./lib/menufont.js');
const DB = require('./lib/scraper')
const uploadImage = require('./lib/uploadImage.js');
const { gssrentbot, conns } = require('./RentBot')
const languages = require('./lib/language');
const got = require('got');
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const availableStyles = Object.keys(fonts);
const availableFontStyles = Object.keys(menufont);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser,getAggregateVotesInPollMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const fsx = require('fs-extra')
const yts = require('yt-search');
const ytsr = require('ytsr');
const util = require('util')
const truecallerjs = require("truecallerjs");
const ffmpeg = require('fluent-ffmpeg');
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const openai = require('openai');
const path = require('path')
const fg = require('api-dylux');
const cheerio = require('cheerio');
const os = require('os')
const googleTTS = require('google-tts-api');
const search = require('aptoide-scraper').search;
const download = require('aptoide-scraper').download;
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);
const imageSize = require('image-size');
const { PDFDocument, rgb } = require('pdf-lib');
const speed = require('performance-now')
const acrcloud = require ('acrcloud');
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const osu = require("node-os-utils");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const translate = require('translate-google-api');
  const { cpus, totalmem, freemem } = require("os");
  const {  sizeFormatter } = require("human-readable");
 const pingSt = new Date();
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, reSize, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: 'c33c767d683f78bd17d4bd4991955d81',
    access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
});
const apiKey = "AIzaSyAFKLsFovEAwKkjScCZMdJwn4V6Ns2VJzA";
const genAI = new GoogleGenerativeAI(apiKey);
const tempMailAddresses = {};
const defaultLang = 'en'
const { addPremiumUser, getPremiumExpired, getPremiumPosition,  expiredPremiumCheck, checkPremiumUser, getAllPremiumUser,} = require('./lib/premiun');

// read database
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))

// Initialize default values
let autoread = false;
let available = false;
let autoTyping = false;
let autoRecord = false;

const mongoDBUrl = process.env.MONGO_DB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority';

let akinator = global.db.data.game.akinator = []
let currentPollIndex = 0;
let ytsOptionIndex = 1;
const ytsSearchResults = new Map();
let props;
const audioSearchResults = new Map();
let optionIndex = 1;
let index = 1;
const reportedMessages = {};
const videoSearchResults = new Map();
let titleUrlMap = {}; 
const userContextMap = new Map();
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))

const warnUsers = []; 
let warnedUsers = [];
const userWarnings = {};

module.exports = gss = async (gss, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)



//prefix v2
const pric = /^#|\^/.test(body) ? body.match(/^#|\^/gi) : '.';
const isAsu = body.startsWith(global.prefa[0]) || body.startsWith(global.prefa[1]);
const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : '';


        const pushname = m.pushName || "No Name"
        const botNumber = await gss.decodeJid(gss.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
const isViewOnce = ["viewOnceMessageV2","viewOnceMessage"].includes(m.type)
	const botname = "𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫";
	const devlopernumber = "917050906659";
        // Group
        const groupMetadata = m.isGroup ? await gss.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const Badgss = JSON.parse(fs.readFileSync('./database/bad.json'))
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(m.from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(m.from) : false
          const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
 
	
let format = sizeFormatter({ 
     std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC' 
     decimalPlaces: 2, 
     keepTrailingZeroes: false, 
     render: (literal, symbol) => `${literal} ${symbol}B`, 
 })
 
//  Bot Prosess Time
  const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds
//Uptime
  const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
  
  const runMessage = `*☀️ ${day} Day*\n *🕐 ${hours} Hour*\n *⏰ ${minutes} Minimum*\n *⏱️ ${seconds} Seconds*\n`;
  
async function doReact(emoji) {
      let react = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await gss.sendMessage(m.chat, react);
    }


async function sendTypingEffect(gss, m, message, typingSpeed) {
  if (!message) {
    console.error('Error: Message is undefined or empty.');
    return;
  }

  const gptthink = await gss.sendMessage(m.chat, { text: 'Thinking...' });

  const words = message.split(' ');

  let i = 0;
  const typewriterInterval = setInterval(() => {
    if (i < words.length) {
      const typedText = words.slice(0, i + 1).join(' ');
      gss.relayMessage(m.chat, {
        protocolMessage: {
          key: gptthink.key,
          type: 14,
          editedMessage: {
            conversation: typedText,
          },
        },
      }, {});
      i++;
    } else {
      clearInterval(typewriterInterval); // Stop the typewriter effect
    }
  }, typingSpeed);
}





function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

// Helper function to format upload date
function formatUploadDate(uploadDate) {
  const formattedDate = new Date(uploadDate);
  if (isNaN(formattedDate.getTime())) {
    // If the date is invalid, return a message
    return 'Invalid Date';
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return formattedDate.toLocaleDateString(undefined, options);
}

	
	
async function getIPInfo() {
  try {
    const response = await axios.get('https://api.myip.com');
    const data = response.data;
    
    let ip = data.ip || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cr = data.country || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cc = data.cc || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';

    return { ip, cr, cc };
  } catch (error) {
    console.error('Error:', error);
    return { ip: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cr: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cc: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' };
  }
}

async function mainSys() {

  let NotDetect = 'Not Detect';
  let cpux = osu.cpu;
  let cpuCore = cpux.count();
  let drive = osu.drive;
  let mem = osu.mem;
  let netstat = osu.netstat;
  let HostN = osu.os.hostname();
  let OS = osu.os.platform();
  let ipx = osu.os.ip();


     const used = process.memoryUsage() 
     const _cpus = cpus().map(cpu => { 
         cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) 
         return cpu 
     }) 
     const cpu = _cpus.reduce((last, cpu, _, { 
         length 
     }) => { 
         last.total += cpu.total 
         last.speed += cpu.speed / length 
         last.times.user += cpu.times.user 
         last.times.nice += cpu.times.nice 
         last.times.sys += cpu.times.sys 
         last.times.idle += cpu.times.idle 
         last.times.irq += cpu.times.irq 
         return last 
     }, { 
         speed: 0, 
         total: 0, 
         times: { 
             user: 0, 
             nice: 0, 
             sys: 0, 
             idle: 0, 
             irq: 0 
         } 
     })

 

let cpuPer 
     let p1 = cpux.usage().then(cpuPercentage => { 
         cpuPer = cpuPercentage 
     }).catch(() => { 
         cpuPer = NotDetect 
     }) 
     let driveTotal, driveUsed, drivePer 
     let p2 = drive.info().then(info => { 
         driveTotal = (info.totalGb + ' GB'), 
             driveUsed = info.usedGb, 
             drivePer = (info.usedPercentage + '%') 
     }).catch(() => { 
         driveTotal = NotDetect, 
             driveUsed = NotDetect, 
             drivePer = NotDetect 
     }) 
     let ramTotal, ramUsed 
     let p3 = mem.info().then(info => { 
         ramTotal = info.totalMemMb, 
             ramUsed = info.usedMemMb 
     }).catch(() => { 
         ramTotal = NotDetect, 
             ramUsed = NotDetect 
     }) 
     let netsIn, netsOut 
     let p4 = netstat.inOut().then(info => { 
         netsIn = (info.total.inputMb + ' MB'), 
             netsOut = (info.total.outputMb + ' MB') 
     }).catch(() => { 
         netsIn = NotDetect, 
             netsOut = NotDetect 
     }) 
     await Promise.all([p1, p2, p3, p4]) 
     let _ramTotal = (ramTotal + ' MB') 

  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let weeks = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let dates = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let times = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // Call the getIPInfo function to retrieve IP, Country, and Country Code
  const { ip, cr, cc } = await getIPInfo();
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, successReactionMessage); 
 
 m.reply(`
  - *ᴘ ɪ ɴ ɢ* - 
  ${new Date() - pingSt} ms 
  
  - *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* - 
  ${runMessage}
  
  - *s ᴇ ʀ ᴠ ᴇ ʀ* - 
  *🛑 Rᴀᴍ:* ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect}) 
  *🔵 FʀᴇᴇRᴀᴍ:* ${format(freemem())}
 
  *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()} 
  *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()} 
  *💻 ᴏs:* ${OS} 
  *📍 ɪᴘ:* ${ip} 
  *🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr} 
  *💬 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc} 

  *🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore} Core 
  *🎛️ ᴄᴘᴜ:* ${cpuPer}% 
  *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times} 
   
    - *ᴏ ᴛ ʜ ᴇ ʀ* - 
  *📅 Wᴇᴇᴋꜱ:* ${weeks} 
  *📆 Dᴀᴛᴇꜱ:* ${dates} 
  *🔁 NᴇᴛꜱIɴ:* ${netsIn} 
  *🔁 NᴇᴛꜱOᴜᴛ:* ${netsOut} 
  *💿 DʀɪᴠᴇTᴏᴛᴀʟ:* ${driveTotal} 
  *💿 DʀɪᴠᴇUꜱᴇᴅ:* ${driveUsed} 
  *⚙️ DʀɪᴠᴇPᴇʀ:* ${drivePer} 
 
  *乂 ɴᴏᴅᴇJS ᴍᴇᴍᴏʀʏ ᴜsᴀɢᴇ* 
   ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```' }
  `);
}


try {
  const textLower = m.text.toLowerCase();

  if (textLower === 'send' || textLower === 'statusdown' || textLower === 'take') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;

    if (quotedMessage) {
      // Check if it's an image
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        gss.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        m.reply('*Status Download Successful: by 18+_Botwa*');
      }

      // Check if it's a video
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        gss.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        m.reply('*Status Download Successful: by 18+_Botwa*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}




	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    

/*
let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
              if (!('antiviewonce' in chats)) chats.antiviewonce = false
              if (!('antibot' in chats)) chats.antibot = true
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                antiviewonce: true,
                antibot: true,
                mute: false,
                antilink: false,
            }

*/


let chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {}
if (chats) {
    if (!('antiviewonce' in chats)) chats.antiviewonce = false
    if (!('antibot' in chats)) chats.antibot = true
    if (!('mute' in chats)) chats.mute = false
    if (!('antilink' in chats)) chats.antilink = false
    if (!('antidelete' in chats)) chats.antidelete = true // Add 'antidelete' if not present
} else global.db.data.chats[m.chat] = {
    antiviewonce: true,
    antibot: true,
    mute: false,
    antilink: false,
    antidelete: true, // Add 'antidelete' by default
}


	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = false
		if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: false,
		status: 0,
		autobio: false
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!gss.public) {
            if (!m.key.fromMe) return
        }

        
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/kolkata"
        })


/*antiviewonce*/
    if ( db.data.chats[m.chat].antiviewonce && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await gss.sendMessage(m.chat, { forward: val }, { quoted: m })
    }



/*AUTOBIO*/
async function setBio() {
    setInterval(async () => {
        if (db.data.settings[botNumber].autobio) {
            const date = new Date();
            const options = {
                timeZone: 'Asia/Kolkata',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const timeString = moment(date).tz('Asia/Kolkata').format('MM/DD/YYYY ⌚ hh:mm:ss A');
            const status = `📆 ${timeString} 18+ botwa ⚡`;
            await gss.updateProfileStatus(status).catch(_ => _);
        }
    }, 60000);
}

setBio();


if (command) {
            
if (!m.isGroup && !isCreator && global.onlygroup) {
    return m.reply("Hello, because we want to reduce spam, please use the bot in a group!\n\nIf there are joint interests, please type .owner to contact the owner.")
}
// Private Only
if (!isCreator && global.onlypc && m.isGroup) {
    return m.reply("Hello, if you want to use this bot, please chat privately with the bot.")
}



        if (global.autoTyping) {
    if (m.chat) {
        gss.sendPresenceUpdate("composing", m.chat);
    }
}

if (global.autoRecord) {
    if (m.chat) {
        gss.sendPresenceUpdate("recording", m.chat);
    }
}

if (global.available) {
  gss.sendPresenceUpdate('available', m.chat);
} else {
  gss.sendPresenceUpdate('unavailable', m.chat);
}

if (global.autoread) {
  
  gss.readMessages([m.key]);
}

if (global.autoBlock && m.sender.startsWith('212')) {
  
    gss.updateBlockStatus(m.sender, 'block');
}
}



   
	    
moment.tz.setDefault("Asia/Kolkata").locale("id");

const today = moment.tz('Asia/Kolkata').format('dddd, DD MMMM YYYY');
const wibTime = moment.tz('Asia/Kolkata').format('HH:mm:ss');
const currentTime = moment().tz('Asia/Kolkata').format('HH:mm:ss');

let time; 

if (currentTime < "23:59:00") {
    var greetingTime = 'Good Night 🏙️';
}
if (currentTime < "19:00:00") {
    var greetingTime = 'Good Evening 🌆';
}
if (currentTime < "18:00:00") {
    var greetingTime = 'Good Afternoon 🌇';
}
if (currentTime < "15:00:00") {
    var greetingTime = 'Good Day 🌤️';
}
if (currentTime < "10:00:00") {
    var greetingTime = 'Good Morning 🌄';
}
if (currentTime < "05:00:00") {
    var greetingTime = 'Good Dawn 🌆';
}
if (currentTime < "03:00:00") {
    var greetingTime = 'Good Midnight 🌃';
}


	    
if (antiToxic) {
    if (Badgss.includes(messagesD)) {
        if (m.text) {
            const bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using a bad word, but as an admin/owner, you won't be kicked 😇`;
            
            if (isAdmins || m.key.fromMe || isCreator) {
                return m.reply(bvl);
            } else {
                await gss.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
                
                await gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                
                await gss.sendMessage(m.from, {
                    text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: m });
            }
        }
    }
}

	    
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nYou were detected sending a group link, sorry, you will be kicked !`)
        if (!isBotAdmins) return m.reply(`Eh, the bot is not an admin `)
        let gclink = (`https://chat.whatsapp.com/`+await gss.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh, sorry it didn't happen, because you sent the link to this group`)
        if (isAdmins) return m.reply(`Ehh, sorry you are admin`)
        if (isCreator) return m.reply(`Hey, sorry, you're the owner of my bot`)
        gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }



if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
    kuis = true;
    var {
        server,
        frontaddr,
        session,
        signature,
        question,
        step
    } = akinator[m.sender.split('@')[0]];
    if (step == "0" && body == "5") m.reply("Sorry, you have reached the first question");

    // Translate the question to English
    const translatedQuestion = await translate(question, { to: 'en' });
    console.log('Translated Question:', translatedQuestion);

    var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=GataDios&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
    var get_result = await fetchJson(ini_url);
    var get_result = get_result.result;
    if (get_result.hasOwnProperty("name")) {
        var ini_name = get_result.name;
        var description = get_result.description;
        ini_txt = `${ini_name} - ${description}\n\n`;
        ini_txt += "*Thank You*\n*Powered By  18+ botwa*";
        await gss.sendMessage(m.chat, {
            image: {
                url: get_result.image
            },
            caption: ini_txt
        }).then(() => {
            delete akinator[m.sender.split('@')[0]];
            fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
        });
        return;
    }

    ini_txt = `${translatedQuestion}\n\n`;
    ini_txt += "0 - Yes\n";
    ini_txt += "1 - No\n";
    ini_txt += "2 - I Don't Know\n";
    ini_txt += "3 - Maybe\n";
    ini_txt += "4 - Maybe Not\n";
    ini_txt += "5 - Go Back to the Previous Question";

    if (args[0] === '5') {
        var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=GataDios&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
        var get_result = await fetchJson(ini_url);
        var get_result = get_result.result;
        var {
            question,
            _,
            step
        } = get_result;

        // Translate the question to English
        const translatedBackQuestion = await translate(question, { to: 'en' });
        console.log('Translated Back Question:', translatedBackQuestion);

        ini_txt = `${translatedBackQuestion}\n\n`;
        ini_txt += "0 - Yes\n";
        ini_txt += "1 - No\n";
        ini_txt += "2 - I Don't Know\n";
        ini_txt += "3 - Maybe\n";
        ini_txt += "4 - Maybe Not\n";
        ini_txt += "5 - Go Back to the Previous Question";
    }

    gss.sendText(m.chat, ini_txt, m).then(() => {
        const data_ = akinator[m.sender.split('@')[0]];
        data_["question"] = question;
        data_["step"] = step;
        akinator[m.sender.split('@')[0]] = data_;
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
    });
}




        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: gss.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, gss.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        gss.ev.emit('messages.upsert', msg)
        }
  	    

        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	'-3': 'Game is over', 
	'-2': 'Invalid', 
	'-1': 'Invalid Position',
	 0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to give up and admit to Lostan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await gss.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await gss.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            gss.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} stop AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
during ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        const cmdAi = ["Ai", "Voiceai", "Bug", "Report", "Gpt", "Dalle", "Remini"];
const cmdGrup = ["LinkGroup", "Setppgc", "Setname", "Setdesc", "Group", "Gcsetting", "Welcome", "Left", "SetWelcome", "SetLeft", "Editinfo", "Add", "Kick", "HideTag", "Tagall", "Totag", "Tagadmin", "AntiLink", "AntiToxic", "Mute", "Promote", "Demote"];
const cmdDown = ["Xnxx", "Xvideoes", "Pronhub", "xHamster"];
const cmdSearch = ["XnxxSearch","PronhubSearch","xvideosSearch",,"xHamsterSearch"];
const cmdMain = ["Ping", "Alive", "Owner", "Menu", "Buypremium"];
const cmdOwner = ["React", "Chat", "Join", "Leave", "Block", "Unblock", "Setppbot", "Setexif", "Anticall", "Setstatus", "Setnamebot", "Sleep", "AutoRead", "autosview", "ban", "unban", "warn", "unwarn", "banchat"];



function generateMenu(cmdList, title) {
    if (!Array.isArray(cmdList)) {
        console.error('Invalid cmdList. It should be an array.');
        return '';
    }

    const formattedCmdList = cmdList
    .sort((a, b) => a.localeCompare(b))
    .map((v) => `│${v}`).join('\n');

    return `
╭───═❮ ${title} ❯═───❖
│ ╭─────────────···▸
${formattedCmdList.split('\n').map(item => `│${item ? ' ' + item.trim() : ''}`).join('\n')}
│ ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
}

const introTextDownload = generateMenu(cmdDown, '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥');
const introTextSearch = generateMenu(cmdSearch, '𝗦𝗘𝗔𝗥𝗖𝗛');
const introTextAdmin = generateMenu(cmdGrup, '𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨');
const introTextOwner = generateMenu(cmdOwner, '𝗢𝗪𝗡𝗘𝗥');
const introTextAi = generateMenu(cmdAi, '𝗔𝗜 𝗠𝗘𝗡𝗨');
const introTextMain = generateMenu(cmdMain, '𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨');

const menuText = `*🔢 TYPE BELOW NUMBER*
1. ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
2. sᴇᴀʀᴄʜᴍᴇɴᴜ
3. ɢʀᴏᴜᴘᴍᴇɴᴜ
4. ᴀɪᴍᴇɴᴜ
5. ᴍᴀɪɴᴍᴇɴᴜ`;

const menuMessage = `
🔞 18+ - ＭＤ 🔞
╭─────────────·
│📍 ᴠᴇʀꜱɪᴏɴ: ᴠ1
│👨‍💻 ᴏᴡɴᴇʀ : MR-Hansamala     
│👤 ɴᴜᴍʙᴇʀ: 94781708673
╰─────────────

╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖
│╭─────────────···▸
${menuText.split('\n').map(item => `││▸ ${item.trim()}`).join('\n')}
│╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
const subMenus = {
    '1': introTextDownload,
    '2': introTextSearch,
    '3': introTextAdmin,
    '4': introTextAi,
    '5': introTextMain,
};


const lowerText = m.text.toLowerCase();

if (command === 'menu') {
        await gss.sendMessage(m.chat, {
            image: { url: 'https://gelbooru.com/images/60/29/60298a37174e006f7709afa792ea4f0a.gif' },
            caption: menuMessage,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: '18+ MD',
                    sourceUrl: 'https://chat.whatsapp.com/FiJn8bdizYU4Gr9OiGtA1I',
                    body: `Bot Created By ${global.owner}`
                }
            }
        }, { quoted: m });
    } else if (/^\d+$/.test(lowerText) && m.quoted) {
        const quotedText = m.quoted.text.toLowerCase();

        if (quotedText.includes(menuMessage.toLowerCase())) {
            const selectedNumber = lowerText;
            const subMenu = subMenus[selectedNumber];

            if (subMenu !== undefined) {
                await gss.sendMessage(m.chat, {
                    image: { url: 'https://gelbooru.com/images/60/29/60298a37174e006f7709afa792ea4f0a.gif' },
                    caption: subMenu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '18+',
                            sourceUrl: 'https://chat.whatsapp.com/FiJn8bdizYU4Gr9OiGtA1I',
                            body: `Bot Created By ${global.owner}`
                        }
                    }
                }, { quoted: m });
            } else {
                await gss.sendMessage(m.chat, { text: 'Invalid menu number. Please select a number from the menu.' }, { quoted: m });
            }
        }
    }

    switch(command) {
            case 'join': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw 'Enter the Group Link!';
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Invalid Link!';
  m.reply(mess.wait);
  let result = args[0].split('https://chat.whatsapp.com/')[1];
  await gss.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'leave': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  await gss.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setexif': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Example: ${prefix + command} packname|author`;
  global.packname = text.split("|")[0];
  global.author = text.split("|")[1];
  m.reply(`Exif successfully changed to\n\n⭔ Packname: ${global.packname}\n⭔ Author: ${global.author}`);
}
break;
case 'promote': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  try {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'promote')
      .then(() => {
        let promotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Users ${promotedUsernames} promoted successfully in the group ${metadata.subject}.`);
      })
      .catch(() => m.reply('Failed to promote user(s) in the group.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;



case 'kick': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'remove')
      .then(() => {
        let kickedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Users ${kickedUsernames} kicked successfully from the group ${metadata.subject}.`);
      })
      .catch(() => m.reply('Failed to kick user(s) from the group.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;


case 'demote': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'demote')
      .then(() => {
        let demotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Users ${demotedUsernames} demoted successfully in the group ${metadata.subject}.`);
      })
      .catch(() => m.reply('Failed to demote user(s) in the group.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;


 case 'welcome':
            case 'left': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  m.reply(`${command} is disabled`)
               }
            }
            break

case 'block': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'unblock': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setname': case 'setsubject': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setdesc': case 'setdesk': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

          case 'setppbot': {
            if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!/image/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  if (/webp/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  await gss.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media));
  m.reply(mess.success);
}
break;
case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await gss.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await gss.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                } else {
                    var memeg = await gss.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                }
                break



 case 'setimgmenu':
            {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!isCreator) return m.reply(mess.owner)
                let delb = await gss.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './menuimage/allmenu.jpg')
                fs.unlinkSync(delb)
                m.reply(mess.success)
            }
            break
            
case 'tagall':
case 'all': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
  if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs');
  let teks = `乂 *ᴀᴛᴛᴇɴᴛɪᴏɴ ᴇᴠᴇʀʏᴏɴᴇ* 乂 \n\n*Message:* ${args.length > 0 ? args.join(" ") : 'no message'}\n\n`;
  for (let mem of participants) {
    teks += `❒ @${mem.id.split('@')[0]}\n`;
  }
  gss.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m });
} 
break;

case 'hidetag': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  gss.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

case 'totag': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!m.quoted) throw `Reply to a message with the command ${prefix + command}`;
  gss.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) });
}
break;

case 'group':
case 'grup': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Group Setting:", [`${prefix}group close`, `${prefix}group open`]);
  } else {
    const groupSetting = args[0].toLowerCase();
    if (groupSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Group Successfully Closed`)).catch((err) => m.reply(jsonformat(err)));
    } else if (groupSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Group Successfully Opened`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Choose Group Setting:", [`${prefix}group close`, `${prefix}group open`]);
    }
  }
}
break;


case 'editinfo': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Edit Info Setting:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
  } else {
    const editInfoSetting = args[0].toLowerCase();
    if (editInfoSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Group Edit Info Successfully Opened`)).catch((err) => m.reply(jsonformat(err)));
    } else if (editInfoSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Group Edit Info Successfully Closed`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Choose Edit Info Setting:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
    }
  }
}
break;
            
            case 'antilink': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Antilink Setting:", [`${prefix}antilink on`, `${prefix}antilink off`]);
  } else {
    const antilinkSetting = args[0].toLowerCase();
    if (antilinkSetting === "on") {
      if (db.data.chats[m.chat]?.antilink) return m.reply(`Antilink Already Active`);
      db.data.chats[m.chat].antilink = true;
      m.reply(`Antilink Activated!`);
    } else if (antilinkSetting === "off") {
      if (!db.data.chats[m.chat]?.antilink) return m.reply(`Antilink Already Inactive`);
      db.data.chats[m.chat].antilink = false;
      m.reply(`Antilink Deactivated!`);
    } else {
      gss.sendPoll(m.chat, "Choose Antilink Setting:", [`${prefix}antilink on`, `${prefix}antilink off`]);
    }
  }
}
break;



case 'antiviewonce': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!isCreator) throw mess.owner;
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose Antiviewonce Setting:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
    } else {
        const antiviewonceSetting = args[0].toLowerCase();
        if (antiviewonceSetting === "on") {
            if (db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Active`);
            db.data.chats[m.chat].antiviewonce = true
            m.reply(`Antiviewonce Activated!`);
        } else if (antiviewonceSetting === "off") {
            if (!db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Inactive`);
            db.data.chats[m.chat].antiviewonce = false
            m.reply(`Antiviewonce Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose Antiviewonce Setting:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
        }
    }
}
break;


case "forward":
case "fwd":
  if (!args.length) {
    await doReact("❌");
    return m.reply(`Please tag a user or provide a phone number along with the message to forward.\nExample: !forward @username This is the forwarded message.`);
  }

  let forwardTo = ''; // Initialize the variable to store the user ID or phone number

  // Check if the first argument is a tagged user
  if (args[0].startsWith('@')) {
    forwardTo = args[0]; // Store the tagged user ID
    args.shift(); // Remove the tagged user from the arguments list
  } else if (/^\+\d{11,}$/.test(args[0])) {
    forwardTo = args[0]; // Store the phone number
    args.shift(); // Remove the phone number from the arguments list
  } else {
    await doReact("❌");
    return m.reply(`Invalid format. Please tag a user (@username) or provide a phone number (+countrycodephonenumber) along with the message to forward.`);
  }

  const forwardedMessage = args.join(' '); // Combine the remaining arguments as the message to forward

  if (!forwardedMessage) {
    await doReact("❌");
    return m.reply(`Please provide a message to forward after tagging the user or providing the phone number.`);
  }

  try {
    // Check if the forwardTo is a user ID (tagged user) or a phone number
    if (forwardTo.startsWith('@')) {
      // Forward the message to the tagged user
      await gss.sendMessage(forwardTo, forwardedMessage);
    } else {
      // Forward the message to the phone number
      await gss.sendMessage(forwardTo, forwardedMessage, MessageType.text, { quoted: m });
    }

    await doReact("✅");
  } catch (error) {
    console.error(error);
    await doReact("❌");
    return m.reply(`An error occurred while forwarding the message: ${error.message}`);
  }
  break;



case 'ban': {
  if (!isCreator) return m.reply(mess.owner);

  let orgnye;

  if (m.quoted && m.quoted.sender) {
    orgnye = m.quoted.sender;
  } else {
    return m.reply('Mention or reply to the user you want to ban.');
  }

  const isBanned = banUser.includes(orgnye);

  if (isBanned) {
    return m.reply('User is already banned.');
  }

  banUser.push(orgnye);
  return m.reply(`Successfully banned the user.`);
  break;
}



case 'unban': {
   
  if (!isCreator) return m.reply(mess.owner)

  if (m.quoted && m.quoted.sender) {
    const orgnye = m.quoted.sender;
    const isBane = banUser.includes(orgnye);

    if (!isBane) return m.reply('User is not banned.');

    let delbans = banUser.indexOf(orgnye);
    banUser.splice(delbans, 1);
    return m.reply(`Successfully Unbanned the user.`);
  }

  return m.reply("Invalid option. Reply to a message to ban/unban the user.");
}
break;



case 'mute': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Mute Setting:", [`${prefix}mute on`, `${prefix}mute off`]);
  } else {
    const muteSetting = args[0].toLowerCase();
    if (muteSetting === "on") {
      if (db.data.chats[m.chat]?.mute) return m.reply(`${gss.user.name} is already muted in this group`);
      db.data.chats[m.chat].mute = true;
      m.reply(`${gss.user.name} has been muted in this group!`);
    } else if (muteSetting === "off") {
      if (!db.data.chats[m.chat]?.mute) return m.reply(`${gss.user.name} is already unmuted in this group`);
      db.data.chats[m.chat].mute = false;
      m.reply(`${gss.user.name} has been unmuted in this group!`);
    } else {
      gss.sendPoll(m.chat, "Choose Mute Setting:", [`${prefix}mute on`, `${prefix}mute off`]);
    }
  }
}
break;

case 'linkgroup': case 'linkgc': {
 if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  let response = await gss.groupInviteCode(m.chat);
  gss.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`, m, { detectLink: true });
}
break;

case 'anticall': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) throw mess.owner;

    let ciko = db.data.settings[botNumber]?.anticall;

    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose AntiCall Setting:", [`${prefix}anticall off`, `${prefix}anticall on`]);
    } else {
        if (args[0].toLowerCase() === "on") {
            if (ciko) return m.reply(`Already Active Before`);
            db.data.settings[botNumber].anticall = true;
            m.reply(`AntiCall Active!`);
        } else if (args[0].toLowerCase() === "off") {
            if (!ciko) return m.reply(`Already Inactive Before`);
            db.data.settings[botNumber].anticall = false;
            m.reply(`AntiCall Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose AntiCall Setting:", [`${prefix}anticall off`, `${prefix}anticall on`]);
        }
    }
}
break;



            case 'deleteall':
case 'delall':
case 'delete':
case 'del': 
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) return m.reply('Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴍʏ ᴏᴡɴᴇʀ')
    
        if (!m.quoted) return m.reply('Pʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀ ᴍᴇssᴀɢᴇ');
        let { chat, id } = m.quoted;

        const key = {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        };

        await gss.sendMessage(m.chat, { delete: key });
    break;

case 'bcgc': case 'bcgroup': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Where's the text?\n\nExample: ${prefix + command} fatih-san`;
  let getGroups = await gss.groupFetchAllParticipating();
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
  let anu = groups.map(v => v.id);
  m.reply(`Sending Broadcast to ${anu.length} Group Chats, Estimated Time ${anu.length * 1.5} seconds`);
  for (let i of anu) {
    await sleep(1500);
    let txt = `「 Bot Broadcast 」\n\n${text}`;
    gss.sendText(i, txt);
  }
  m.reply(`Successfully Sent Broadcast to ${anu.length} Groups`);
}
break;

case 'infochat': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.quoted) m.reply('Reply to a message');
  let msg = await m.getQuotedObj();
  if (!m.quoted.isBaileys) throw 'The message is not sent by the bot!';
  let teks = '';
  for (let i of msg.userReceipt) {
    let read = i.readTimestamp;
    let unread = i.receiptTimestamp;
    let Time = read ? read : unread;
    teks += `⭔ @${i.userJid.split('@')[0]}\n`;
    teks += ` ┗━⭔ *Time:* ${moment(Time * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status:* ${read ? 'Read' : 'Sent'}\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;
            case 'autoreact':
    case 'react':{
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  autoreact = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoreact = false
                  m.reply(`${command} is disabled`)
               }
            }
            break
          
case 'remini': case 'upscale': case 'enhance': case 'hd': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!quoted) return m.reply(`Where is the picture?`);
    if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`);
    m.reply(mess.wait);
    const { remini } = require('./lib/remini');
    let media = await quoted.download();

    try {
        let proses = await remini(media, "enhance");

        // Send the enhanced image with the new caption
        gss.sendMessage(m.chat, { image: proses, caption: `${mess.success} enhanced by gss botwa` }, { quoted: m });
    } catch (error) {
        console.error('Error in Remini enhancement:', error);
        m.reply(`An error occurred: ${error.message}`);
    }
    break;
}

        case 'gemini':
case 'vision': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!quoted) return m.reply(`Where is the picture?`);
    if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`);
    
    m.reply(mess.wait);

    try {
        const prompt = `${text}`;
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const media = await quoted.download();

        const imagePart = {
            inlineData: {
                data: Buffer.from(media).toString("base64"),
                mimeType: mime
            },
        };

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const textt = response.text(); // Fix the typo here

        // Send the generated text as the reply
        m.reply(`${textt}`);
    } catch (error) {
        console.error('Error in Gemini Pro Vision:', error);
        m.reply(`An error occurred: ${error.message}`);
        await doReact("❌");
    }
    break;
}

case'tagadmins': case 'admins': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!text) return m.reply(`*give me message for admin*`)
let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
for (let mem of groupAdmins) {
teks += ` @${mem.split('@')[0]}\n`
}
gss.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
}
break;



  case 'restart':
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!isCreator) return m.reply(mess.owner)
                m.reply('Proses....')
                exec('pm2 restart all')
            break


case "xnxxdl": {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
	if (!text) return m.reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return m.reply(`Enter an xnxx link`)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
gss.sendMessage(m.chat, { caption: `  *XNXX DL*
        
✍ *Title:* ${xn.title}
⌛ *Duration:* ${xn.duration}
📽 *Visual Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break

              case 'xnxxsearch': {
                if (isBan) return m.reply(mess.banned);
                      if (isBanChat) return m.reply(mess.bangc);
                if (!text) return m.reply(`Enter Query`)
                const fg = require('api-dylux')
                let res = await fg.xnxxSearch(text)
                          let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
                            if (res.status) m.reply(ff)
                            }
                            break
                            
                          
              
case 'buypremium':
            case 'premiumuser': case 'pronhub': case 'xvideos': case 'xhamster':{
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let teks = `Hi ${pushname}👋\n Want to Buy Premium? Just chat with the owner😉`
                await gss.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: 'BUY PREMIUM',
                            body: `15k / MONTH`,
                            thumbnailUrl: 'https://gelbooru.com/images/60/29/60298a37174e006f7709afa792ea4f0a.gif',
                            sourceUrl: 'https://chat.whatsapp.com/FiJn8bdizYU4Gr9OiGtA1I',
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            
            


case 'invite': case 'add': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
if (!text) return m.reply(`*Enter the number you want to invite to the group*\n\nExample :\n*${prefix + command}* 919142294671`)
if (text.includes('+')) return m.reply(`Enter the number together without *+*`)
if (isNaN(text)) return m.reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(group)
      await gss.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        m.reply(` An invite link is sent to the user`) 
}
break


            case 'self': {
        if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;
                gss.public = false
                m.reply('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;
                gss.public = true
                m.reply('*Successful in Changing To Public Usage*')
            }
            break

case 'ping': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("🕘");
  const startTime = new Date();
  const pingMsg = await gss.sendMessage(m.chat, { text: '*cheking...*' });

 await gss.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Pong:* ${new Date() - startTime} ms`
        }
      }
    }, {});
     await doReact("📍");
  } 
break;

            
            case 'owner': case 'creator': {
             
                gss.sendContact(m.chat, global.owner, m)
            }
            break


case 'runtime': case 'alive':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let pinga = ` ${uptimeMessage}`
                gss.sendMessage(m.chat, {
        image: { url: 'https://gelbooru.com/images/60/29/60298a37174e006f7709afa792ea4f0a.gif' },
        caption: pinga,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: '18+ MD',
                sourceUrl: 'https://chat.whatsapp.com/FiJn8bdizYU4Gr9OiGtA1I',
                body: `Bot Created By ${global.owner}`
            }
        }
    }, {
      quoted: m
                })
                break

            

function getRandomSymbol() {
    const symbols = ['◉', '★', '◎', '✯','✯','✰','◬','✵','✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}
function getRandomFontStyle() {
  const availableFontStyles = Object.keys(menufont);
  const randomIndex = Math.floor(Math.random() * availableFontStyles.length);
  return availableFontStyles[randomIndex];
}

const randomSymbol = getRandomSymbol();

            
            default:
		
        }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
