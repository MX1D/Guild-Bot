module.exports = {
    async excute(bot, args, text){
      const config = require("../../config.json")
      if(!config.mongodb) return;
      const axios = require("axios")
        const profile = require('../../models/schema')
        if(!args[0]) return;
    if(!args[0].includes("-") || !args[0].includes("\n") || !args[0].includes("%")){
  await axios.get(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(args[0])}`).then(async (response) =>{

    const banning = await profile.findOneAndUpdate(
      {
        uuid: response.data.id
      },
      { $set: { banned: "no"}}
    )
    if(!banning){
        let profileData = await profile.create({
          uuid: response.data.id,
          banned: "no",
          reps: 0,
          warns: 0
        })
  }
  
  bot.chat(`/g invite ${args[0]}`)

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let randomMsg = [`how to un use ban hammer again? nvm i did it`, `imagine unbaning nons i just unbanned them ;-;`, `smh unban they must got banned before the unban right?`, `admin go brrrrr`, `random msges r cool btw`, `i ran out of msg ideas`]
  const fragMsg = randomMsg[random(0, randomMsg.length - 1)]

  setTimeout(() =>{
    bot.chat(`/gc ${fragMsg}`)
  }, 2000)
}).catch(e => bot.chat('/gc Error!'))
}
    }
}