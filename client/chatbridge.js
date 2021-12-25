const config = require("../config.json")
module.exports = {
    excute(client, text, bot, message){
        if (!message.author.bot) {
            if (message.channel.id === config.chatchannel) {
              const nick1 = message.member.nickname
              const attachments = (message.attachments).array();
              if(!message.content.includes("\n")){
                if(message.content !== ""){
              if(nick1){
                bot.chat(`/gc ${nick1}: ${message}`);
              } else{
                bot.chat(`/gc ${message.author.username}: ${message}`);
              }
            }
          }

          if(attachments.length > 0){
            if(nick1){
            setTimeout(() => {
              bot.chat(`/gc ${nick1}: ${attachments[0].url}`)
            }, 550);
          } else {
            setTimeout(() => {
              bot.chat(`/gc ${message.author.username}: ${attachments[0].url}`)
            }, 550)
          }
        }
            }
          }
    }
}