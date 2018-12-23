const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('ready', function() {
    bot.user.setGame('Voir l\'Avenir')
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
       return channel.send('Bienvenue, Votre Avenir est mon savoir ' + member.displayName + '!')
    })
})

bot.on('message', function (message) {
    if (message.content === 'di'){
		let args = message.content.split('di')
        args.shift()

        message.reply(args.join(""))
	}
	if (message.startsWith === '!prophecy'){
		        let vision = ['Omae Wa Mo Shin Deiru...', 'Deus EX Machina ', 'ZA WARUDO is your !', 'La Pouissance!!!',
            'Demain, par un SuperSayan, sodomiser tu seras, mais une grande experience tu acquérera.',
            'Non je ne vois rien......ta vie est sûrement trop Nulle.']
        message.author.createDM().then(channel => {
            channel.send(vision[Math.floor(Math.random() * vision.length)])
        })
	}

})

bot.login(process.env.TOKEN)
