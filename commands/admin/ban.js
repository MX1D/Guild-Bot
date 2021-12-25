module.exports = {
    async excute(bot, args, text){
      const config = require("../../config.json")
      if(!config.mongodb) return;
        const profile = require('../../models/schema')
        const axios = require("axios")
        if(!args[0].includes("-") || !args[0].includes("\n") || !args[0].includes("%")){
            await axios.get(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(args[0])}`).then(async (response) =>{
          
              const banning = await profile.findOneAndUpdate(
                {
                  uuid: response.data.id
                },
                { $set: { banned: "yes"}}
              )
              if(!banning){
                  let profileData = await profile.create({
                    uuid: response.data.id,
                    banned: "yes",
                    reps: 0,
                    warns: 0
                  })
            }
            
            bot.chat(`/g kick ${args[0]} banned`)
            const random = (min, max) => {
              return Math.floor(Math.random() * (max - min + 1) + min);
            }
            let randomMsg = [`how to use ban hammer again? oh right the button on the left`, `ban hammer baby!`, `i love banning nons ;)`, `okay i ran out of msg ideas ;-;`]
            const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
          
            setTimeout(() =>{
              bot.chat(`/gc ${fragMsg}`)
            }, 2000)
          }).catch(e => bot.chat('/gc Error!'))
          if(!args[0].includes('100/100✎')){
          console.log(args[0])
          }
          }
    }
}