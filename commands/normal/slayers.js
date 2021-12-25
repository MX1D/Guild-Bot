module.exports = {
    excute(bot, args, text){
        const axios = require("axios")
        axios.get(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then((response)=>{
      axios.get(`https://api.slothpixel.me/api/skyblock/profile/${response.data.name}`).then((id) =>{
        axios.get(`https://sky.shiiyu.moe/api/v2/profile/${response.data.name}`).then((res) =>{
          const profile = id.data.id
          const data = res.data.profiles[profile].data
          const totalxp = data.slayer_xp

          const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          let randomMsg = [`Slayers: ${data.slayers.zombie.level.currentLevel} ${data.slayers.spider.level.currentLevel} ${data.slayers.wolf.level.currentLevel} ${data.slayers.enderman.level.currentLevel}, Total EXP: ${totalxp.toLocaleString('en-US')}`, `Total Slayers EXP: ${totalxp.toLocaleString('en-US')}, Slayers: ${data.slayers.zombie.level.currentLevel} ${data.slayers.spider.level.currentLevel} ${data.slayers.wolf.level.currentLevel} ${data.slayers.enderman.level.currentLevel}`, `This player slayers: ${data.slayers.zombie.level.currentLevel} ${data.slayers.spider.level.currentLevel} ${data.slayers.wolf.level.currentLevel} ${data.slayers.enderman.level.currentLevel}, This player total EXP: ${totalxp.toLocaleString('en-US')}`, `This gamer slayer levels: ${data.slayers.zombie.level.currentLevel} ${data.slayers.spider.level.currentLevel} ${data.slayers.wolf.level.currentLevel} ${data.slayers.enderman.level.currentLevel}, This gamer total slayer EXP: ${totalxp.toLocaleString('en-US')}`]
          const random1 = randomMsg[random(0, randomMsg.length - 1)]  

          let randomMsg2 = [`EXP: ${data.slayers.zombie.level.xp.toLocaleString('en-US')} - ${data.slayers.spider.level.xp.toLocaleString('en-US')} - ${data.slayers.wolf.level.xp.toLocaleString('en-US')} - ${data.slayers.enderman.level.xp.toLocaleString('en-US')}`, `Slayer experience: ${data.slayers.zombie.level.xp.toLocaleString('en-US')} - ${data.slayers.spider.level.xp.toLocaleString('en-US')} - ${data.slayers.wolf.level.xp.toLocaleString('en-US')} - ${data.slayers.enderman.level.xp.toLocaleString('en-US')}`, `This player EXP: ${data.slayers.zombie.level.xp.toLocaleString('en-US')} - ${data.slayers.spider.level.xp.toLocaleString('en-US')} - ${data.slayers.wolf.level.xp.toLocaleString('en-US')} - ${data.slayers.enderman.level.xp.toLocaleString('en-US')}`, `Gamer's EXP: ${data.slayers.zombie.level.xp.toLocaleString('en-US')} - ${data.slayers.spider.level.xp.toLocaleString('en-US')} - ${data.slayers.wolf.level.xp.toLocaleString('en-US')} - ${data.slayers.enderman.level.xp.toLocaleString('en-US')}`]
          const random2 = randomMsg2[random(0, randomMsg2.length - 1)]  

          let randomMsg3 = [`Coins spent: ${data.slayer_coins_spent.zombie.toLocaleString('en-US')} - ${data.slayer_coins_spent.spider.toLocaleString('en-US')} - ${data.slayer_coins_spent.wolf.toLocaleString('en-US')} - ${data.slayer_coins_spent.enderman.toLocaleString('en-US')} - Total spent: ${data.slayer_coins_spent.total.toLocaleString('en-US')}`, `This player spent: ${data.slayer_coins_spent.zombie.toLocaleString('en-US')} - ${data.slayer_coins_spent.spider.toLocaleString('en-US')} - ${data.slayer_coins_spent.wolf.toLocaleString('en-US')} - ${data.slayer_coins_spent.enderman.toLocaleString('en-US')} - Total player's spent: ${data.slayer_coins_spent.total.toLocaleString('en-US')}`, `Gamer coins spent: ${data.slayer_coins_spent.zombie.toLocaleString('en-US')} - ${data.slayer_coins_spent.spider.toLocaleString('en-US')} - ${data.slayer_coins_spent.wolf.toLocaleString('en-US')} - ${data.slayer_coins_spent.enderman.toLocaleString('en-US')} - Gamer's total coins spent: ${data.slayer_coins_spent.total.toLocaleString('en-US')}`]
          const random3 = randomMsg3[random(0, randomMsg3.length - 1)]  

          bot.chat(`/gc ${random1}`)
          setTimeout(() => {
            bot.chat(`/gc ${random2}`)
          }, 550);
          setTimeout(() => {
            bot.chat(`/gc ${random3}`)
          }, 1200);
        }).catch(e => console.log(e))
      }).catch(e => console.log(e))
      }).catch(e => console.log(e))
    }
}