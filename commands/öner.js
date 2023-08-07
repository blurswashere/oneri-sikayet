const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
 let mesaj = args.slice(0).join(" ")
 let log = db.fetch(`log_${message.guild.id}`)      // Alttaki Mesajı İstediğiniz Gibi Düzenleyebilirsiniz.
 if (!log) return message.channel.send("> **Log Kanalı Ayarlı Olmadığı İçin Öneri Gönderemezsiniz!**") // Kurucu & Yetkili Log Kanalını Ayarlamadığında, Kullanıcılar Öneri Göndermeye Çalışırsa Bot'un Yollayacağı Mesaj.
if (!mesaj) return message.channel.send("> **Önerinizi Yazmadan Ne Göndermeyi Planlıyorsunuz!?**")   
  const embed = new EmbedBuilder()
  .setTitle("> Kullanıcılar Yeni Bir Öneri Gönderdi.")
  .setDescription(`Öneriyi Yapan Kişi : __${message.author}__\n\nKişinin Önerisi : **${mesaj}**`) // Kişi öneri yaptıktan sonra log kanalına düşecek mesaj
  .setColor("#5879c7")
  client.channels.cache.get(log).send({embeds : [embed]})
};
exports.conf = {
  aliases: ["öneri-yap","öneri","iste"] // Alliases, Bir Komutu Yazdığınız Sayıya Göre Çoğaltır. Örnek : Komut aslında ''öner'' fakat alliases kısmına başka komut isimleri yazarsanız mesela''öneri-yap'' gibi, Kullanıcı ''öner'' yazsada aynı mesajı ''öneri-yap'' yazsada bot aynı mesajı vericektir.
};

exports.help = {
  name: "öner"
};

