module.exports = {
    excute(bot, args, text){
        const axios = require("axios")
        axios.get(`https://api.slothpixel.me/api/skyblock/profile/${args[0]}`).then((id) => {
        axios.get(`https://sky.shiiyu.moe/api/v2/profile/${args[0]}`).then((res) => {
          const data = res.data.profiles[id.data.id].data
          const sells = data.misc.auctions_sell
          const earned = sells.gold_earned.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
          const fees = sells.fees.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
          const items_sold = sells.items_sold
          const buys = data.misc.auctions_buy
          const spent = buys.gold_spent.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })
          const bids = buys.bids
          const highest_bid = buys.highest_bid.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })

          const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          let randomMsg = [`Earned: ${earned}, Fees: ${fees}, Items sold: ${items_sold}, Spent: ${spent}, Bids: ${bids}, Highest bid: ${highest_bid}`, `Spent: ${spent}, Bids: ${bids}, Highest bid: ${highest_bid}, Earned: ${earned}, Fees: ${fees}, Items sold: ${items_sold}`, `Fees: ${fees}, Earned: ${earned}, Items sold: ${items_sold}, Bids: ${bids}, Spent: ${spent}, Highest bid: ${highest_bid}`, `Items sold: ${items_sold}, Earned: ${earned}, Fees: ${fees} , Highest bid: ${highest_bid}, Spent: ${spent}, Bids: ${bids}`]
          const random1 = randomMsg[random(0, randomMsg.length - 1)]  
          bot.chat(`/gc ${random1}`)
        }).catch(err => console.log(err))
      }).catch(err => console.log(err))
    }
}