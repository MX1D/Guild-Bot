## Quote Bridge Bot

This is a fork from [MX1D's Guild Bot](https://github.com/MX1D/Guild-Bot). Frag Bot features and Database connections have been stripped, amongst other things.

# DISCLAIMER

This bot uses [mineflayer](https://www.npmjs.com/package/mineflayer), use at your own risk.

## Token

Firstly we have **Token** this is your Discord bot token
if you didn't make a bot yet make one at [Discord Developers Site](https://discord.com/developers/applications)
Then copy the token and paste it in the config file

## Email and Password

Second thing we have **Email** and **Password** Those are your minecraft account details and put the auth to either mojang or microsoft depending on your account type

## Guild Name

the **Guild Name** is your hypixel guild name simply type your guild name in the config file

## Webhook

Now you need to create a **Webhook** in the channel you want the chat bridge to be
Simply go to the channel settings > Intgrations and create a webhook with any name you want
Then copy the webhook URL and go to that link, You will find webhook id and token there
copy each one of them and put them in the config file

## Log Channel

This one is a channel to log your bot chat i recommend not giving anyone except trusted people access to this channel,
this is useful if something happenes in your guild and you are offline but you want to see what happened and someone deleted messages in the chat bridge channel,
to enable this copy the channel id and paste it in the config file
if you don't want a log channel simply keep it empty

## Cooldown

For the cooldown it's the time between command usage **NOT FOR ONE USER** for all users so it's less spammy in the guild chat if so many people use the bot at the same time if you don't want a cooldown put a 0 there but if you do put any number in seconds i use 3 in my bot

## Updates channel

The updates channel is if you have a channel that you follow cowshed leaks and updates in
or your announcements channel, This will show the messages in game i recommend making a channel and following all cowshed's discord channels in that channel and putting the id of the channel in the config
that way you are gonna be able to see the new leaks and updates in game

## Owner ID

Here you can put your discord id for the bot to be able to use "say",
you can type anything and bot will say it for example "say /gc Hi!"
