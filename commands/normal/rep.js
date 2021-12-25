module.exports = {
    async excute(bot, args, text){
        const config = require("../../config.json")
        if(!config.mongodb) return;
        const schema = require("../../models/schema")
        const axios = require("axios")
        if(args[0]){
              axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then(async (response) => {
  
                  let res = await schema.findOneAndUpdate({ uuid: response.data.id }, { $inc: { reps: "1" }})
                  console.log(response.data.id)
                  if(!res){
                      let hi = await schema.create({
                          uuid: response.data.id,
                          banned: "no",
                          reps: 1,
                          warns: 0
                        })
                  }
                  const random = (min, max) => {
                      return Math.floor(Math.random() * (max - min + 1) + min);
                  }
                  let randomMsg = [`${response.data.name} got the rep and they now have ${res.reps + 1} reps!`, `${response.data.name} just got a rep pog, ${res.reps + 1} total reps`, `You just gave a rep to ${response.data.name} and they now have ${res.reps + 1} total reps!`, `how good could u be ${response.data.name} to get a rep and have ${res.reps + 1} total reps ;-;`, `kekw ${response.data.name} got rep and now at ${res.reps + 1} total reps`]
                  const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
                  bot.chat(`/gc ${fragMsg}`)
                }).catch(e => {console.log(e)})
          }
        }
    }