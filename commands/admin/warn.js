module.exports = {
    excute(bot, args, text){
      const config = require("../../config.json")
      if(!config.mongodb) return;
        const schema = require("../../models/schema")
        const axios = require("axios")
        if(args[0] && !args[1]){
            axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then(async (response) => {
                let res = await schema.findOneAndUpdate({ uuid: response.data.id }, { $inc: { warns: "1" }})
                console.log(response.data.id)
                if(!res){
                    let hi = await schema.create({
                        uuid: response.data.id,
                        banned: "no",
                        reps: 0,
                        warns: 1
                      })
                }
                const random = (min, max) => {
                  return Math.floor(Math.random() * (max - min + 1) + min);
                }
                let randomMsg = [`${response.data.name} been warned and they now have ${res.warns + 1} warnings!`, `L ${response.data.name} just got warned ahaha, ${res.warns + 1} total warns`, `You just gave a warning to ${response.data.name} and they now have ${res.warns + 1} total warns!`, `how bad could u be ${response.data.name} to get warned and have ${res.warns + 1} total warns ;-;`, `kekw ${response.data.name} got warned and now at ${res.warns + 1} total warns`]
                const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
                bot.chat(`/gc ${fragMsg}`)
            }).catch(e => {console.log(e)})
            return;
        } 
        if(args[0] === "set" && args[2] && args[2] < 4 && args[2] > 0){
          axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[1]}`).then(async (response) => {
            let res = await schema.findOneAndUpdate( { uuid: response.data.id }, { $set: { warns: args[2] } } )
            console.log(response.data.id)
                if(!res){
                    let hi = await schema.create({
                        uuid: response.data.id,
                        banned: "no",
                        reps: 0,
                        warns: args[2]
                      })
                }
                const random = (min, max) => {
                  return Math.floor(Math.random() * (max - min + 1) + min);
                }
                let randomMsg = [`You just set warnings for ${response.data.name} to ${args[2]}`, `Done! setting warns for ${response.data.name} to ${args[2]}`, `imagine manually setting warns for ${response.data.name} to ${args[2]} lol`, `warns for ${response.data.name} been set to ${args[2]}`, `changed warnings for ${response.data.name} to ${args[2]}`]
                const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
                bot.chat(`/gc ${fragMsg}`)
          }).catch(e => {console.log(e)})
          return;
        }
        if(args[0] === "clear" && args[1]){
          axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[1]}`).then(async (response) => {
            let res = await schema.findOneAndUpdate( { uuid: response.data.id }, { $set: { warns: 0 } } )
            console.log(response.data.id)
                if(!res){
                    let hi = await schema.create({
                        uuid: response.data.id,
                        banned: "no",
                        reps: 0,
                        warns: 0
                      })
                }
                const random = (min, max) => {
                  return Math.floor(Math.random() * (max - min + 1) + min);
                }
                let randomMsg = [`Cleared warnings for ${response.data.name}`, `${response.data.name} was nice and their warnings been cleared :)`, `is ${response.data.name} that nice to get their warns cleared? smh`, `wow ${response.data.name} is now nice enough to get their warns cleared`, `yay ${response.data.name} doesn't have any more warns! :DD`]
                const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
                bot.chat(`/gc ${fragMsg}`)
          }).catch(e => {console.log(e)})
        }
    }
}