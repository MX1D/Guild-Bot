module.exports = {
    excute(bot, args, text){
            const random = (min, max) => {
              return Math.floor(Math.random() * (max - min + 1) + min);
            }
            let randomMsg = [`Heads`, `Talis`, `It's Heads!`, `It's Tails`, `looks like Heads`, `looks like Tails`, `Heads!! :O`, `Tails!! :O`, `And Heads won!`, `And Tails won!`, `look it's Heads!`, `look it's Tails!`]
            const random1 = randomMsg[random(0, randomMsg.length - 1)]
            bot.chat(`/gc ${random1}`)
    }
}