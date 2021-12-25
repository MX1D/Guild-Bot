const config = require("../config.json")
module.exports = {
    excute(client, text, bot, message){
      if(!config.updateschannel) return;
      if(message.channel.id === config.updateschannel){
        const msg1 = message.content.replace(/</, "")
        const msg2 = msg1.replace(/>/, "").replace(/_/,"").replace("**", "")
        const msg = msg2.split('\n')
        if(!message.embeds){
          msg.forEach((element, i) =>{
            setTimeout(() => {
                bot.chat(`/gc [UPDATE] ${element}`)
            }, i * 1000);
          })
        }
        if(message.embeds){
            msg.forEach((element, i) =>{
                setTimeout(() => {
                    if(message.content){
                        bot.chat(`/gc [UPDATE] ${element}`)
                    }
                }, i * 1000);
              })
              setTimeout(() => {
                  const arrembeds = message.embeds
                  arrembeds.forEach(embed => {
                      if(embed.description){
                          const content = embed.description.split("\n")
                          content.forEach((line, i) => {
                              setTimeout(() => {
                                  bot.chat(`/gc [UPDATE] ${line}`)
                            }, i * 1000);
                        })
                    }
                })
            }, 10000);
        }
      }
    }
}