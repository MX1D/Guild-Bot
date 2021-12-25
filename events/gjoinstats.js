module.exports = {
    excute(bot, text){
      const config = require("../config.json")
      const axios = require("axios")
      if(!text.startsWith('Guild >')){
        const args = text.split(/ +/)
        if(text.includes("joined the guild")){
          if(args[0].includes("[")){
            axios.get(`https://api.slothpixel.me/api/skyblock/profile/${args[1]}?key=5f135901-f1f1-4e85-9fd8-cd1ecaf7eba8`).then(pid => {
              axios.get(`https://sky.shiiyu.moe/api/v2/profile/${args[1]}`).then(async response => {
                const id = pid.data.id
                if(config.mongodb){
                        const schema = require('../models/schema')
                        const data = await schema.findOne({ uuid: response.data.profiles[id].data.uuid });
                        if(data){
                          if(data.banned === "yes") return;
                        }
                      }
                      const skillAvg = response.data.profiles[id].data.average_level_no_progress || 0
                      const cataLvl = response.data.profiles[id].data.dungeons.catacombs.level.level || 0
                      const weight = response.data.profiles[id].data.weight.senither.overall || 0
                      const zombie = response.data.profiles[id].data.slayers.zombie.level.currentLevel || 0
                      const spider = response.data.profiles[id].data.slayers.spider.level.currentLevel || 0
                      const wolf = response.data.profiles[id].data.slayers.wolf.level.currentLevel || 0
                      const enderman = response.data.profiles[id].data.slayers.enderman.level.currentLevel|| 0
                      const totalSlayer = response.data.profiles[id].data.slayer_xp.toLocaleString('en-US') || 0
                      const totalSkill = response.data.profiles[id].data.total_skill_xp.toLocaleString('en-US') || 0
                      const hotmLvl = response.data.profiles[id].data.mining.core.tier.level || 0
                      const purse = response.data.profiles[id].data.purse || 0
            
                      const random = (min, max) => {
                        return Math.floor(Math.random() * (max - min + 1) + min);
                      }
                      let randomMsg = [`Cata level: ${cataLvl}, Skill avg: ${skillAvg}, Weight: ${Math.round(weight)}`, `Weight: ${Math.round(weight)}, Cata level: ${cataLvl}, Skill avg: ${skillAvg}`, `Cata level: ${cataLvl}, Weight: ${Math.round(weight)}, Skill avg: ${skillAvg}`, `Skill avg: ${skillAvg}, Cata level: ${cataLvl}, Weight: ${Math.round(weight)}`]
                      const random1 = randomMsg[random(0, randomMsg.length - 1)]
            
                      let randomMsg2 = [`Slayers: ${zombie} ${spider} ${wolf} ${enderman}, Total exp: ${totalSlayer}`, `Total slayer exp: ${totalSlayer}, Slayers: ${zombie} ${spider} ${wolf} ${enderman}`, `Player's slayers: ${zombie} ${spider} ${wolf} ${enderman}, Player's total exp: ${totalSlayer}`, `Gamer's slayers: ${zombie} ${spider} ${wolf} ${enderman}, Gamer's total slayer exp: ${totalSlayer}`, `This player's slayers: ${zombie} ${spider} ${wolf} ${enderman}, This player's total exp: ${totalSlayer}`]
                      const random2 = randomMsg2[random(0, randomMsg2.length - 1)]
                      
                      let randomMsg3 = [`Total skill exp: ${totalSkill}, HOTM level: ${hotmLvl}, Purse: ${Math.round(purse).toLocaleString('en-US')}`, `Purse: ${Math.round(purse).toLocaleString('en-US')}, Total skill exp: ${totalSkill}, HOTM level: ${hotmLvl}`, `HOTM level: ${hotmLvl}, Total skill exp: ${totalSkill}, Purse: ${Math.round(purse).toLocaleString('en-US')}`, `HOTM level: ${hotmLvl}, Total skill exp: ${totalSkill}, Purse: ${Math.round(purse).toLocaleString('en-US')}`]
                      const random3 = randomMsg3[random(0, randomMsg3.length - 1)]
            
                    bot.chat(`/gc ${random1}`)
                    setTimeout(() => {
                      bot.chat(`/gc ${random2}`)
                    }, 550)
                    setTimeout(() => {
                      bot.chat(`/gc ${random3}`)            
                    }, 1100)
            
                    }).catch((err) => {bot.chat("/gc breh error") 
                    console.log(err)})
                  }).catch((err) => {bot.chat("/gc who else hates errors?")
                console.log(err)})
                 }
            }
          }
    }
}