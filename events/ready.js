const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} İsimli Botunuz Aktif!`)
client.user.setActivity(`Lewon's Code Share`)  // Botunuzun Durumunu Ayarlayabilirsiniz!

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} | Toplam Komut`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} İsimli Komut Aktif!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
