const Command = require('./command.js')

module.exports = class Gouverenement extends Command {

    static match(message) {
        return message.content('gouvernement')
    }
    static action(message) {
        message.reply('Les Bouffeurs de Caviar')
    }

}
