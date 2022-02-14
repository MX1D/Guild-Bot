const config = require("../config.json")
module.exports = {
    excute(client, text, bot, message){
        if(message.author.id === config.ownerID){
            if(text.startsWith('say')){
              const msg = text.trim().slice(4)
              bot.chat(msg)
            }
          }
        if(message.author.id === config.subID){
            if(text.startsWith('say')){
                const msg = text.trim().slice(4)
                bot.chat(msg)
            }
          }
    }
}
