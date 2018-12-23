const Command = require('./command')

module.exports = class Prophecy extends Command {

    static match(message) {
        return message.content.startsWith('!prophecy')
    }
    static action(message) {
        let vision = ['Omae Wa Mo Shin Deiru...', 'Deus EX Machina ', 'ZA WARUDO is your !', 'La Pouissance!!!',
            'Demain, par un SuperSayan, sodomiser tu seras, mais une grande experience tu acquérera.',
            'Non je ne vois rien......ta vie est sûrement trop Nulle.']
        message.author.createDM().then(channel => {
            channel.send(vision[Math.floor(Math.random() * vision.length)])
        })
    }
}
