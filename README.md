Hello, so you probably came here to have a bot for you hypixel skyblock guild
Well I got you covered!

let's go in the config file

# DISCLAIMER

This bot uses [mineflayer](https://www.npmjs.com/package/mineflayer) which is NOT a normal minecraft client you can get the account banned for abusing this BUT The code i made is safe i been using it for months and didn't get the account banned but still this is USE AT YOUR OWN RISK

# My discord

for any help you can dm me on discord MX1D#7609 or open an issue in the github page, hope you all enjoy the bot! :D

## Token

Firstly we have **Token** this is your Discord bot token
if you didn't make a bot yet make one at [Discord Developers Site](https://discord.com/developers/applications)
Then copy the token and paste it in the config file

## Email and Password

Second thing we have **Email** and **Password** Those are your minecraft account details and put the auth to either mojang or microsoft depending on your account type

## API Key

Now we have the **Api Key** it's your hypixel api key that's being used in some of the commands this is **REQUIRED** for the bot to function to get your key from hypixel login to the minecraft hypixel server **hypixel.net** and type "/api new" copy the key and paste it in the config file

## Guild ID

So the **Guild ID** might be confusing for some people to get your guild id simply make hypixel api request to https://api.hypixel.net/findGuild?key=YourKey&byUuid=YourUuid and copy the "guild" id from there and paste it in the config file

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

## MongoDB

MongoDB is a database for free i'm not gonna explain every thing here but if you want to know more about it you can google it
this is optional but commands such as "rep", "ban" and "warn" need this database
make an account on MongoDB website [here](https://account.mongodb.com/account/register)
Then make sure the language is Javascript ![codingLang](https://cdn.discordapp.com/attachments/850843468938870824/924314504647569488/unknown.png)

Now make the database free ![databaseType](https://cdn.discordapp.com/attachments/850843468938870824/924314915941003324/unknown.png)

Then you can just keep everything as it is without changing anything and click "Create Cluster" ![cluster](https://cdn.discordapp.com/attachments/850843468938870824/924315170346516510/unknown.png)

now wait until it's done creating the cluster
once it's done click on "connect" it might ask you for ip i recommened putting 0.0.0.0 so you can access it from any place you host your bot at
and it also will ask you for username and password those are the ones you gonna use in the link to put it in the config file
then after it opened the connect menu click on "connect your application" copy the link there
edit <password> with the password you set before and replace myFirstDatabase with your database name you can choose anything
paste that link in config file and you done!

## Cooldown

For the cooldown it's the time between command usage **NOT FOR ONE USER** for all users so it's less spammy in the guild chat if so many people use the bot at the same time if you don't want a cooldown put a 0 there but if you do put any number in seconds i use 3 in my bot

## Updates channel

The updates channel is if you have a channel that you follow cowshed leaks and updates in
or your announcements channel, This will show the messages in game i recommend making a channel and following all cowshed's discord channels in that channel and putting the id of the channel in the config
that way you are gonna be able to see the new leaks and updates in game

## Owner ID

Here you can put your discord id for the bot to be able to use "say",
you can type anything and bot will say it for example "say /gc Hi!"

## Frag bot

Make this true if you want the bot to work as a frag bot along side with the commands and other stuff or false if you don't want it

## Admin Tag

The guild tag for the staff / admin rank ex: [ADMIN]:
