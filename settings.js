const fs = require('fs')
const chalk = require('chalk')

global.APIs = { zenz: 'https://zenzapis.xyz' }

global.APIKeys = { 'https://zenzapis.xyz': 'your key' }

global.autoTyping = false
global.autoreadpmngc = false
global.autoReadGc = false
global.autoRecord = false
global.available = true

global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4")

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.vcardowner = ['919567489404']
global.ownername = "5hefin"
global.ytname = "YT: 5hefin"
global.socialm = "GitHub: 5hefin"
global.location = "India, Kerala, Kasaragod" 

global.owner = ['919567489404']
global.ownertag = '919567489404'
global.botname = 'Aqua Bot MD'
global.linkz = "https://github.com/5hefin"
global.websitex = "https://youtu.be/WiIqCdiDjFo"
global.botscript = "https://github.com/5hefin/AquaBot-MD"
global.reactmoji = "😘"
global.themeemoji = "🦄"
global.packname = "Aqua Bot MD"
global.author = "5hefin"

global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")

global.premium = ['919567489404']
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
