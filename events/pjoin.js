module.exports = {
    excute(bot, text){
      const config = require("../config.json")
      if(config.fragbot !== true) return;
      if(!config.apikey) return;
      const axios = require("axios")
        if(text.includes("has invited you to join their party!")){
            const argsparty = text.trim().split(`has invited you to join their party!
            You have 60 seconds to accept. Click here to join!`);
              const args = argsparty[0].trim().split(" ")[1]
              const nonsArgs = argsparty[0].trim().split(" ")[0].replace(/-/g, "").replace(/ /, "").replace(/\n/, "")

              function pjoin(args) {

                if (text.includes("You are already in a party! Leave it to join another one.")){
                  bot.chat(`/msg ${args} Please party me again in a couple seconds im in a party!`)
                  return;
                }

              if (text.includes("Click here to join!")) {
                if(!args.includes("-") || !args.includes("\n") || !args.includes("%")){
                axios.get(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(args)}`)
                .then(function (response){
                  axios.get(`https://api.hypixel.net/findGuild?key=${config.apikey}&byUuid=${encodeURIComponent(response.data.id)}`,).then( (responses) => {  
                  if(responses.data.guild === config.guildid ){
            
                    bot.chat(`/p accept ${args}`)
                  setTimeout(() => {
                    bot.chat(`/p leave`);
                  }, 7000);
                }
                  }).catch(e => console.log("p join error " + e))
                
                }).catch(e => console.log("p join error " + e))
                }
                }
              }
                
              if(args){
                if(args !== 'has'){
                  pjoin(args)
                }
              } 
              if(nonsArgs){
                if(!nonsArgs.includes('[')){
                  pjoin(nonsArgs)
                }
              }
            }
          
    }
}