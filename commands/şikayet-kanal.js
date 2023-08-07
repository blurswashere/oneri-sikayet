const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const db = require("croxydb")
exports.run = async (client, message, args) => {

     if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`> <:hektorhayir:1135185866487255121> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmanız gerekiyor.**`);
  let log = message.mentions.channels.first()
  if(!log) return message.reply({content: "> <:hektorhayir:1135185866487255121> **Üzgünüm Bir Kanal Belirtmen Gerekiyor.**"})
  
  
  

    message.reply("> <:hektorevet:1135185869574262875> **Şikayet Kanalı Başarıyla Ayarlandı!** __Bundan sonra kullanıcılar şikayetlerini yazdıp gönderdiklerinde kanala bildirim atılacak.__")

  db.set(`log_${message.guild.id}`, log.id)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "şikayet-log"
};
