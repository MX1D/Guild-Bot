module.exports = {
    excute(bot, args, text, author){
      const config = require("../../config.json")
      if(!config.mongodb) return;
      const axios = require("axios")
      const schema = require("../../models/schema")
      function warns(arg){
        axios.get(`https://api.mojang.com/users/profiles/minecraft/${arg}`).then(async (response) => {
            let data = await schema.findOne( { uuid: response.data.id } )
            if(!data){
              let hi = await schema.create({
                uuid: response.data.id,
                banned: "no",
                reps: 0,
                warns: 0
              })
              let warns = hi.warns 
              const random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
              }
              let randomMsg = [`${response.data.name} Has ${warns} warnings!`, `${response.data.name} Got ${warns} warnings!`, `${response.data.name} been warned ${warns} times`, `imagine having ${warns} warns L ${response.data.name}`, `omg ${response.data.name} got ${warns} warns!!!`, `look ${response.data.name} got ${warns} warns kekw`]
              const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
              bot.chat(`/gc ${fragMsg}`)
              return;
            }
            const warns = data.warns
            const random = (min, max) => {
              return Math.floor(Math.random() * (max - min + 1) + min);
            }
            let randomMsg = [`${response.data.name} Has ${warns} warnings!`, `${response.data.name} Got ${warns} warnings!`, `${response.data.name} been warned ${warns} times`, `imagine having ${warns} warns L ${response.data.name}`, `omg ${response.data.name} got ${warns} warns!!!`, `look ${response.data.name} got ${warns} warns kekw`]
            const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
            bot.chat(`/gc ${fragMsg}`)
          }).catch(e => console.log(e))
      }
      if(args[0]) {
      warns(args[0])
    } else {
        warns(author)
    }
}
}