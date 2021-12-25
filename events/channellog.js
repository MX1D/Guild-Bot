module.exports = {
    excute(bot, text, client){
      const config = require("../config.json")
      if(!config.logchannelid) return;
	let channel = client.channels.cache.get(config.logchannelid)
        if(!text.includes("✎ Mana")){
            if(text.length !== 1){
              if(text){
                if (!text.includes("✎ Mana")) {
                  if(!text.includes("For the best experience, click the text below to enable Snow")){
                    if(!text.includes("HAPPY HOLIDAYS FROM HYPIXEL")){
                      if(!text.includes("You were spawned in Limbo.")){
                        if(!text.includes("/limbo for more information.")){
                          if(!text.includes("unclaimed leveling reward!")){
                            if(!text.includes("Click here to view it!")){
                              if(!text.includes("Sending to server")){
                                if(!text.includes("Welcome to Hypixel SkyBlock!")){
                                  if(!text.includes("Finding player...")){
                                    if(!text.includes("Sending a visit request...")){
                                      if(!text.includes("Warped from the Blue Teleport Pad to the Lime Teleport Pad!")){
                                        if(!text.includes("This Teleport Pad does not have a destination set!")){
                                          if(!text.includes("into the lobby!")){
                                            if(!text.includes("Click HERE to enter the Tournament Hall!")){
                                              channel.send(text).catch(err => {})
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    }
}