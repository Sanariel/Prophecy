const Command = require('./command')

module.exports = class Dixit extends Command {

    static match(message) {
        return message.content.match("di")
    }
    static action(message) {
        let args = message.content.split('di')
        args.shift()

        message.reply(args.join(""))
    }

}
