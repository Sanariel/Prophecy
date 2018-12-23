const Command = require('./command')

module.exports = class MINATION extends Command {

    static match(message) {
        return message.content.startsWith('MINATION', 'MINATION!')
    }
    static action(message) {
        message.reply(':smirk:')
    }

}
