# cat-bot / this is for personal and fun use

### description
cat-bot is a discord bot that does discord-bot like things.
developed using Node.js, hosted on an AWS EC2 instance, with MongoDB access


## events
it reacts to discord.js events such as 

  |  file name  |  event  |  function  |
  |  ------------  |  -------  |  --------  |
  |  whoDC.js  |  guildAuditLogEntryCreate  |  logs when a user has been disconnected |
  |  whoDC.js  |  guildAuditLogEntryCreate  |  logs when a user changed their nickname |
  |  hello.js  |  messageCreate  |  logs when a user types a specific word  |

## commands
it reacts to discord.js slash commands such as

  |  command name  |  options  |  function  |
  |  ------------  |  -------  |  --------  |
  |  /bruh  |  none  |  increments the number of times a user has said 'bruh' |
  |  /bool  |  none  |  increments the number of times a user has said 'bool' |
  |  /pocket-watch  |  [summoner name]  |  retrieves # of games played in last week from the riot games api  |
  |  /list-games  |  none  |  lists games stored  |
  |  /add-game  |  [game name]  |  adds game to list of games  |
  |  /delete-game  |  [game name]  | deletes game from list of games  |
  |  /random-game  |  none  | picks a random game to play  |
