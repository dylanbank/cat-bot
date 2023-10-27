# cat-bot / this is for personal and fun use

### description
cat-bot is a discord bot that does discord-bot like things. 

## events
it reacts to discord.js events such as 
- a user being disconnected (guildAuditLogEntryCreate)
- a user changing their nickname (guildAuditLogEntryCreate)
- a user typing a specific word (messageCreate)

## commands
it reacts to discord.js slash commands such as
- incrementing count [for when someone says their word, i.e bruh]

  |  command name  |  options  |  function  |
  |  ------------  |  -------  |  --------  |
  |  /bruh  |  none  |  increments the number of times a user has said 'bruh' |
  |  /bool  |  none  |  increments the number of times a user has said 'bool' |
  |  /pocket-watch  |  [summoner name]  |  retrieves # of games played in last week from the riot games api  |
  |  /list-games  |  none  |  lists games stored  |

it is developed using Node.js, hosted on an AWS EC2 instance, with MongoDB access
