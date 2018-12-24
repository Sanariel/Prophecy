const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google.js')
const Gouvernement = require('./commands/gouvernement.js')
const Rebel = require('./commands/rebel.js')
const Ping = require('./commands/ping.js')
const Play = require('./commands/play.js')
const Prophecy = require('./commands/prophecy.js')
const Dixit = require('./commands/dixit.js')
const MINATION = require('./commands/mination.js')


bot.on('ready', function() {
    bot.user.setGame('Voir l\'Avenir')
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
       return channel.send('Bienvenue, Votre Avenir est mon savoir ' + member.displayName + '!')
    })
})

bot.on('message', function (message) {
    let commandUsed =
        Google.parse(message) ||
        Ping.parse(message) ||
        Rebel.parse(message) ||
        Gouvernement.parse(message) ||
        Play.parse(message) ||
        Prophecy.parse(message) ||
        Dixit.parse(message) ||
        MINATION.parse(message)

})

bot.login(process.env.TOKEN)
