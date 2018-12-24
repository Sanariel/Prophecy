const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Gouvernement = require('./commands/gouvernement')
const Rebel = require('./commands/rebel')
const Ping = require('./commands/ping')
const Play = require('./commands/play')
const Prophecy = require('./commands/prophecy')
const Dixit = require('./commands/dixit')
const DixitV2 = require('./commands/dixitV2')
const MINATION = require('./commands/mination')


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
