module.exports = {
    excute(bot, args, text, author){
      const config = require("../../config.json")
      if(!config.mongodb) return;
      const axios = require("axios")
      const schema = require("../../models/schema")
      function reps(arg){
        axios.get(`https://api.mojang.com/users/profiles/minecraft/${arg}`).then(async (response) => {
            let data = await schema.findOne( { uuid: response.data.id } )
            if(!data){
              let hi = await schema.create({
                uuid: response.data.id,
                banned: "no",
                reps: 0,
                warns: 0
              })
              let reps = hi.reps 
              const random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
              }
              let randomMsg = [`${response.data.name} Has ${reps} reps!`, `${response.data.name} Got ${reps} reps!`, `${response.data.name} got reps ${reps} times`, `imagine having ${reps} reps L ${response.data.name}`, `omg ${response.data.name} got ${reps} reps!!!`, `look ${response.data.name} got ${reps} reps kekw`]
              const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
              bot.chat(`/gc ${fragMsg}`)
              return;
            }
            const reps = data.reps
            const random = (min, max) => {
              return Math.floor(Math.random() * (max - min + 1) + min);
            }
            let randomMsg = [`${response.data.name} Has ${reps} reps!`, `${response.data.name} Got ${reps} reps!`, `${response.data.name} got reps ${reps} times`, `imagine having ${reps} reps L ${response.data.name}`, `omg ${response.data.name} got ${reps} reps!!!`, `look ${response.data.name} got ${reps} reps kekw`]
            const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
            bot.chat(`/gc ${fragMsg}`)
          }).catch(e => console.log(e))
      }
      if(args[0]) {
      reps(args[0])
    } else {
        reps(author)
    }
}
}