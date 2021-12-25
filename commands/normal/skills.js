module.exports = {
    excute(bot, args, text){
        const axios = require("axios")
        axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then((response)=>{
      axios.get(`https://api.slothpixel.me/api/skyblock/profile/${response.data.name}`).then((id) =>{
        axios.get(`https://sky.shiiyu.moe/api/v2/profile/${response.data.name}`).then((res) =>{
          const profile = id.data.id
          const data = res.data.profiles[profile].data
          const farming = data.levels.farming.level
          const mining = data.levels.mining.level
          const combat = data.levels.combat.level
          const foraging = data.levels.foraging.level
          const fishing = data.levels.fishing.level
          const enchanting = data.levels.enchanting.level
          const alchemy = data.levels.alchemy.level
          const carpentry = data.levels.carpentry.level
          const runecrafting = data.levels.runecrafting.level
          const avg = Math.round(data.average_level)

          const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          let randomMsg = [`Farming: ${farming}, Mining: ${mining}, Combat: ${combat}, Foraging: ${foraging}, Fishing: ${fishing}`, `Fishing: ${fishing}, Combat: ${combat}, Mining: ${mining}, Farming: ${farming}, Foraging: ${foraging}`, `Foraging: ${foraging}, Farming: ${farming}, Mining: ${mining}, Fishing: ${fishing}, Combat: ${combat}`, `Farming: ${farming}, Fishing: ${fishing}, Mining: ${mining}, Combat: ${combat}, Foraging: ${foraging}`]
          const random1 = randomMsg[random(0, randomMsg.length - 1)]  

          let randomMsg2 = [`Enchanting: ${enchanting}, Alchemy: ${alchemy}, Carpentry: ${carpentry}, Runecrafting: ${runecrafting}, Fishing: ${fishing}, Avg: ${avg}`, `Fishing: ${fishing}, Carpentry: ${carpentry}, Alchemy: ${alchemy}, Enchanting: ${enchanting}, Runecrafting: ${runecrafting}, Avg: ${avg}`, `Runecrafting: ${runecrafting}, Enchanting: ${enchanting}, Alchemy: ${alchemy}, Fishing: ${fishing}, Carpentry: ${carpentry}, Avg: ${avg}`, `Enchanting: ${enchanting}, Fishing: ${fishing}, Alchemy: ${alchemy}, Carpentry: ${carpentry}, Runecrafting: ${runecrafting}, Avg: ${avg}`]
          const random2 = randomMsg2[random(0, randomMsg2.length - 1)]  

          bot.chat(`/gc ${random1}`)
          setTimeout(() => {
            bot.chat(`/gc ${random2}`)
          }, 550);

        }).catch(e => console.log(e))
      }).catch(e => console.log(e))
      }).catch(e => console.log(e))
    }
}