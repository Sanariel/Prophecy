const Command = require('./command.js')

module.exports = class Rebel extends Command {

    static match(message) {
        return message.content.startsWith('!rebel')
    }
    static action(message) {
        message.reply('Les Consommateurs LowCost Top Budget')
    }

}
