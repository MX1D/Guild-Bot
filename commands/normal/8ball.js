module.exports = {
    excute(bot, args, text){
        if(args[0]){
            const random = (min, max) => {
              return Math.floor(Math.random() * (max - min + 1) + min);
            }
            let randomMsg = [`It is certain.`, `It is decidedly so.`, `Without a doubt.`, `Yes definitely.`, `You may rely on it.`, `As I see it, yes.`, `Most likely.`, `Outlook good.`, `Yes.`, `Signs point to yes.`, `Reply hazy, try again.`, `Ask again later.`, `Better not tell you now.`, `Cannot predict now.`, `Concentrate and ask again.`, `Don't count on it.`, `My reply is no.`, `My sources say no.`, `Outlook not so good.`, `Very doubtful.`]
            const random1 = randomMsg[random(0, randomMsg.length - 1)]
            bot.chat(`/gc ${random1}`)
          }
    }
}