module.exports = {
    excute(bot, text, client){
      const Discord = require("discord.js")
      const config = require("../config.json")
      if(!config.webhookid || !config.webhooktoken) return;

      
      bot.once("message", (message) => {
        const webhookClient = new Discord.WebhookClient(config.webhookid, config.webhooktoken);
        const text = `` + message;
        const argsparty = text.trim().slice(8).split(/ +/);
        const args = argsparty[1]
        const nonsArgs = argsparty[0]
        
        function authorFunction(msg) {
          const args = msg.split(/ +/)
          if(!msg.startsWith("Guild >") || msg.endsWith("left.") || msg.endsWith("joined.")) return;
          if(!args[2].includes("[")){
            return args[2]
          }
          if(args[2].includes("[")){
            return args[3]
          }
        }
        
        const author = authorFunction(text)
          
          function sendDCMsg(args, bot, text){
            if(author !== `${bot.username}`){
              if(text.startsWith("Guild >")){
                if(!text.endsWith("joined.")){
                  if(!text.endsWith("left.")){
                        const msg1 = text.substring(text.indexOf(":") + 1);
                        const msg = msg1.replace(/\*/g, "\\*").replace(/@everyone/g, "@/everyone").replace(/@here/g, "@/here")
                        webhookClient.send({
                          username: `${args}`,
                          avatarURL: `https://minotar.net/helm/${args}/512`,
                          content: `${msg}`,
                        }) } } } } }
                          if(text.startsWith("Guild >")){
                            sendDCMsg(author, bot, text)
            }
                 
          });
    }
}