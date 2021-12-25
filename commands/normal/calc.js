module.exports = {
    excute(bot, args, text){
      if(args[0]){
    const calc = require("mathjs")
    const math = args.join(" ").replace(/x/g, "*")
      try{
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          let randomMsg = [`Quetion: ${math}, Answer: ${calc.evaluate(math)}`, `You asked ${math}, Result: ${calc.evaluate(math)}`, `Your answer ${calc.evaluate(math)}`, `Result for your question: ${calc.evaluate(math)}`]
          const random1 = randomMsg[random(0, randomMsg.length - 1)]  
        bot.chat(`/gc ${random1}`)
      }catch(error){
        console.log(error)
      }
    }
  }
}