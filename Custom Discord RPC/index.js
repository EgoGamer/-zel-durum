var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Ego_Gamer",
state : "Abone Ol  ♥",
assets : {
large_image : "pp",
small_image : "abone",
large_text : "Abone Ol!" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Abone Ol" , url : "https://www.youtube.com/channel/UCNsJJIjtEAtcA3B9aAMKNug?view_as=subscriber"},{label : "Discord Sunucum",url : "https://discord.gg/XJRPkF8Cde"}]
}
})
})
client.login({ clientId : "842019563893555240" }).catch(console.error);