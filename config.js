const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	lol: 'https://api.lolhuman.xyz',
	dappa: 'https://api.dapuhy.ga',
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.lolhuman.xyz': 'apikey Lhu',
	'https://api.dapuhy.ga': 'regis dulu',
	'https://zenzapi.xyz': 'regis dulu',
}

// Other
global.owner = ['6288292024190','62882920241908']
global.packname = 'Hisoka Morrow'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'hisoka'
global.connVersion = [2, 2142, 12]
global.prefa = '!'
global.sp = '⭔'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'https://chat.whatsapp.com/IHSGanUvI4UHeyPten6Hrt',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    wait: 'Loading...',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})
