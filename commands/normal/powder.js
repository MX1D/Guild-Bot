module.exports = {
    excute(bot, args, text){
        const axios = require("axios")
        axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then((response)=>{
      axios.get(`https://api.slothpixel.me/api/skyblock/profile/${response.data.name}`).then((id) =>{
        axios.get(`https://sky.shiiyu.moe/api/v2/profile/${response.data.name}`).then((res) =>{
          const profile = id.data.id
          const data = res.data.profiles[profile].data
          const mithril = data.mining.core.powder.mithril.total.toLocaleString('en-US')
          const gemstone = data.mining.core.powder.gemstone.total.toLocaleString('en-US')

          const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          let randomMsg = [`Mithril powder: ${mithril} - Gemstone powder: ${gemstone}`, `This player's mithril powder: ${mithril} - This player's gemstone powder: ${gemstone}`, `Gamer's mithril powder: ${mithril} - Gamer's gemstone powder: ${gemstone}`, `Gemstone powder: ${gemstone} - Mithril powder: ${mithril}`, `This player's gemstone powder: ${gemstone} - This player's mithril powder: ${mithril}`, `Gamer's gemstone powder: ${gemstone} - Gamer's mithril powder: ${mithril}`]
          const random1 = randomMsg[random(0, randomMsg.length - 1)]  

          bot.chat(`/gc ${random1}`)

        }).catch(e => console.log(e))
      }).catch(e => console.log(e))
      }).catch(e => console.log(e))
    }
}