module.exports = {
    excute(bot, text, client, author){
      const config = require("../config.json")
      if(config.fragbot !== true) return;
        if(text.includes("frag")){
              const msg = text.substring(text.indexOf(":") + 1);
            
              if (!text.includes(`${bot.username}`)) {
                if(text.startsWith('Guild >')){
                  if(msg.startsWith(" frag")){
                    const random = (min, max) => {
                      return Math.floor(Math.random() * (max - min + 1) + min);
                    }
                    let randomMsg = [`my ign is ${bot.username} ;)`, `hmmm i think im called ${bot.username} right?`, `if im ${bot.username} then who you are?`, `if you frag run can i join with you? /p ${bot.username}`, `hmm you said frag so i say /p ${bot.username}`, `what is the point of frag bots like ${bot.username}? kinda useless`]
                    const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
                    bot.chat(`/msg ${author} ${fragMsg}`)
                  }
              }
              }
              if(text.startsWith("You cannot say the same message twice!")){
                const random = (min, max) => {
                  return Math.floor(Math.random() * (max - min + 1) + min);
                }
                let randomMsg = [`apparently i can't say same msg twice ;-;`, `hypixel not letting me give you my ign ;-;`, `same msg twice? bruh`, `sry but i can't say same msg twice :/`, `is it me or someone trying to say same msg twice?`, `why hypixel not allowing same msg twice?`, `seems like i can't give you my ign cuz same msg twice ;-;`, `i can't say same msg twice what does that mean?`, `i tried msging you but it said you can't say same msg twice :(`, `i want to give you my ign but i can't cuz same msg twice`, `i hate when it says same msg twice`, `why do i even try it keeps saying same msg twice`, `hypixel when no anti same msg twice`]
                const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
                setTimeout(async () => {
                bot.chat(`/gc ${fragMsg}`)
              }, 2000)
                
              }
              if(text.startsWith("You cannot message this player.")){
                const random = (min, max) => {
                  return Math.floor(Math.random() * (max - min + 1) + min);
                }
                let randomMsg = [`You have messages off please turn it on so i can msg u instead of /gc !`, `enable private messages so i can msg u instead of typing here D:`, `why do ppl have private msges off turn it on now!`, `i can't msg you is it broken? please turn on ur private msges`, `if you didn't enable private msges i will be sad :(`, `when you enabling private msg i wanna msg u`, `private msges r cool but if you have them enabled :D`, `when you enabling private msges ;-;`]
                const fragMsg = randomMsg[random(0, randomMsg.length - 1)]
                setTimeout(async () =>{
                  bot.chat(`/gc ${fragMsg}`)
                }, 2000)
                
              }
            }
            
    }
}