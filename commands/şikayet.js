const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
 let mesaj = args.slice(0).join(" ")
 let log = db.fetch(`log_${message.guild.id}`)
 if (!log) return message.channel.send(">  **Log Kanalı Ayarlı Olmadığı İçin Şikayet Yapamazsınız!**")
if (!mesaj) return message.channel.send(">  **Şikayetinizi Yazmadan Ne Göndermeyi Planlıyorsunuz!?**")   
  const embed = new EmbedBuilder()
  .setTitle("> Kullanıcılar Birisini Şikayet Etti!")
  .setDescription(`Şikayeti Yapan Kişi : __${message.author}__\n\n<:sikayet:1135187758202232883> Kişinin Şikayeti : **${mesaj}**`)
  .setColor("#5879c7")
  message.reply("> Şikayetiniz Başarıyla Yetkili Ekibimize Gönderildi. Umarım en kısa sürede sorununuz çözülür!")
  client.channels.cache.get(log).send({embeds : [embed]})
};
exports.conf = {
  aliases: ["şikayet-et","iste"]
};

exports.help = {
  name: "şikayet"
};

