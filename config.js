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
	'https://api.lolhuman.xyz': 'b3120153c92d216fc9b6694b',
	'https://api.dapuhy.ga': 'UDlQHN0qTz',
	'https://zenzapi.xyz': '3ce9652946',
}

// Other
global.owner = ['625345020308']
global.packname = 'Sticker Gabut'
global.author = 'Michael.H.L'
global.sessionName = 'MiTester Botz'
global.connVersion = [2, 2142, 12]
global.prefa = '!'
global.sp = '⭔'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
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
