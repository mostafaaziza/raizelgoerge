//Coded by Tharindu Liyanage 2022
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons 
// 👈 You Can change this your choice
global.list = ('قائمة الطعام 🧬')
global.allmenu = ('القائمه الاوامر 🎉')
global.script = ('الدعم 🌈')
global.owner = ('المالك البوت 🦋')
global.deploy = ('نشر 🐥')
global.project = ('المشروع 🦋')
global.donate = ('معلومات 🚀')
global.stop = ('خطأ 🛑')
global.skip = ('يتخطى ⏩')
global.thanks = ('*مرحبا بك في بوت انوس 💙*')
// 👈 You Can change this your choice
global.nextimg = ('الصوره التاليه ➡️')
global.audio = ('🎶 صوت')
global.video = ('فيديو 📽')
global.yts = ('بحث اليوتيوب 🌐')
global.play = ('البدايه 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
