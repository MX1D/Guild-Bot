module.exports = {
    excute(bot, args, text){
        const axios = require('axios')
        if(args[0]){
            axios.get(`https://skyblocknetworth.tk/api/player/networth?minecraft_ign=${args[0]}&hypixel_api_key=25d64b61-c3f0-464e-8f7a-3ec8ab148543`).then((nw) => {
              const networth = Math.round(nw.data.data.networth.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const pets = Math.round(nw.data.data.networth.pets.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const coins = Math.round(nw.data.data.networth.coins).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const armours = Math.round(nw.data.data.networth.armours.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const wardrobe = Math.round(nw.data.data.networth.wardrobe.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const accessory = Math.round(nw.data.data.networth.accessory.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const enderchest = Math.round(nw.data.data.networth.enderchest.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const backpack = Math.round(nw.data.data.networth.backpack.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const inventory = Math.round(nw.data.data.networth.inventory.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
              const vault = Math.round(nw.data.data.networth.vault.total).toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
      
              const random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min);
              }
              let randomMsg = [`Total networth: ${networth} - Pets: ${pets} - Armors ${armours} - Inventory: ${inventory} - Coins: ${coins}`, `Total networth: ${networth} - Armors ${armours} - Pets: ${pets} - Coins: ${coins} - Inventory: ${inventory}`, `Total networth: ${networth} - Armors ${armours} - Coins: ${coins} - Inventory: ${inventory} - Pets: ${pets}`, `Total networth: ${networth} - Armors ${armours} - Inventory: ${inventory} - Coins: ${coins} - Pets: ${pets}`]
              const random1 = randomMsg[random(0, randomMsg.length - 1)]  
              let randomMsg2 = [`Wardrobe: ${wardrobe} - Talismans: ${accessory} - Enderchest ${enderchest} - Backpacks: ${backpack} - Vault: ${vault}`, `Wardrobe: ${wardrobe} - Vault: ${vault} - Enderchest ${enderchest} - Backpacks: ${backpack} - Talismans: ${accessory}`, `Enderchest ${enderchest} - Wardrobe: ${wardrobe} - Backpacks: ${backpack} - Vault: ${vault} - Talismans: ${accessory}`, `Vault: ${vault} - Talismans: ${accessory} - Enderchest ${enderchest} - Wardrobe: ${wardrobe} - Backpacks: ${backpack}`]
              const random2 = randomMsg2[random(0, randomMsg2.length - 1)]  
      
      
              bot.chat(`/gc ${random1}`)
              setTimeout(() => {
                bot.chat(`/gc ${random2}`)
              }, 550);
            }).catch(err => {
              console.log(err)
              const error = err + ``
              if(error.includes(undefined)){
            bot.chat(`/gc ERROR! Player's API off or this player doesn't play skyblock or invalid ign :/`)
          } else{
            if(error.includes("Request failed with status code 502")){
              bot.chat(`/gc API ERROR! sorry but maybe mx sucks and his api crashed ;-;`)
            } else {
              bot.chat(`/gc random error appeard tf?`)
            }
          }
            })
          }
    }
}