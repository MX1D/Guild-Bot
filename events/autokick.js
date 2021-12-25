module.exports = {
    excute(bot, text){
      const config = require("../config.json")
      if(!config.mongodb) return;
        const schema = require('../models/schema')
        const axios = require("axios")
if(text.includes("joined the guild!")){
  const author1 = text.split(/ +/)[1]
  const author2 = text.split(/ +/)[0]

  function autokick(author) {
    if(!text.startsWith('Guild >')){
      if(!author.includes("-") && !author.includes("\n") && !author.includes("%") && !author.includes("▬")){
        if(text.includes('joined the guild!')){
    axios.get(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(author)}`).then(async (response)=>{
      let prfileData;
      try{
        prfileData = await schema.findOne({ uuid: response.data.id });
        if(!prfileData){
          let profile = await schema.create({
            uuid: response.data.id,
            banned: "no",
            reps: 0,
            warns: 0
          })
        }
      }catch (e) {console.log(e)}
  
      const data = await schema.findOne({ uuid: response.data.id });
  
      if(text.includes('joined the guild')){
        if(data.banned === "yes"){
          bot.chat(`/g kick ${author} banned`)
        }
      }
    
    console.log(author)
    }).catch(e => console.log("author error"))
    }
  }
  }
    return;
  }

  if(author1 && !author1.includes('joined')){
    autokick(author1)
  } else if(author2 && !author2.includes(undefined)){
    autokick(author2)
}
}
    }
}