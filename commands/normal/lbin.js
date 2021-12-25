module.exports = {
    excute(bot, args, text){
        const axios = require("axios")
        if(args[0]){
            const content = text.substring(text.indexOf(":") + 1).slice(7)
            axios.get(`https://api.hypixel.net/resources/skyblock/items`).then((res) => {
              let items = []
              res.data.items.forEach(item => {
                if(item.name){
                if(item.name.toLowerCase().startsWith(content)){
                  items.push(item.id)
                  items.push(item.name)
                }
              }
            })
            if(items[0]){
              axios.get(`https://moulberry.codes/lowestbin.json`).then((price) => {
                const data = price.data[items[0]].toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
                const messages = [`${items[1]}'s price: ${data}`, `${items[1]} is worth: ${data} coins`, `Lowest bin for ${items[1]} is ${data}`, `lbin for ${items[1]} is ${data}`]
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                bot.chat(`/gc ${randomMessage}`)
              })
            } else {
              const messages = [`cannot find this item!`, `does this item exist?`, `miss spelling item name?`, `i looked for this item but it's not there`, `item existence = false`, `imagine not typing correct item name loool`, `oh no item doesn't exist D:`]
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
              bot.chat(`/gc ${randomMessage}`)
            }
            })
          }
    }
}