module.exports = {
    excute(bot, text){
        const config = require("../config.json")

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
                                  if(!text.includes("into the lobby!")){
                                    if(!text.includes("Click HERE to enter the Tournament Hall!")){
                                      if(!text.includes("This Teleport Pad does not have a destination set!")){
                                        console.log(text);
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
        
          if(text.includes("join guild")){
            bot.chat(`/g join ${config.guildname}`)
          }
    }
}
