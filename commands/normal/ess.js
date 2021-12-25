module.exports = {
    excute(bot, args, text){
        const axios = require("axios")
        if(args[0]){
          axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then((response)=>{
            axios.get(`https://api.slothpixel.me/api/skyblock/profile/${response.data.name}`).then((res)=>{
              const data = res.data.members[response.data.id]  
            const random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
              }
              let randomMsg = [`Wither: ${data.essence_wither}, Undead: ${data.essence_undead}, Dragon: ${data.essence_dragon}, Ice: ${data.essence_ice}`, `Ice: ${data.essence_ice}, Undead: ${data.essence_undead}, Dragon: ${data.essence_dragon}, Wither: ${data.essence_wither}`, `Dragon: ${data.essence_dragon}, Undead: ${data.essence_undead}, Ice: ${data.essence_ice}, Wither: ${data.essence_wither}`, `Ice: ${data.essence_ice}, Undead: ${data.essence_undead}, Wither: ${data.essence_wither}, Dragon: ${data.essence_dragon}`]
              const random1 = randomMsg[random(0, randomMsg.length - 1)]  

              let randomMsg2 = [`Diamond: ${data.essence_diamond}, Gold: ${data.essence_gold}, Spider: ${data.essence_spider}`, `Gold: ${data.essence_gold}, Spider: ${data.essence_spider}, Diamond: ${data.essence_diamond}`, `Diamond: ${data.essence_diamond}, Spider: ${data.essence_spider}, Gold: ${data.essence_gold}`]
              const random2 = randomMsg2[random(0, randomMsg2.length - 1)]  
            
              bot.chat(`/gc ${random1}`)
              setTimeout(() => {
                bot.chat(`/gc ${random2}`)
              }, 550);
            }).catch(e => console.log(e))
          }).catch(e => console.log(e))
        }
      }
}