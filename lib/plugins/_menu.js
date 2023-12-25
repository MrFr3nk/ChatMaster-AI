module.exports = {
  cmdName: () => ({
    name: ['menu'],
    alias: ['allmenu','commands','dashboard','h','help'],
    category: 'core',
    react: '🥵',
    desc: 'Command list of the bot.'
  }),
  getCommand: async (command, prefix, args, pika, bot, anyaV2, startPing) => {
  const Config = require('../../config');
  const { myfunc, plugin, stylish } = require('../lib');
  const Ping = startPing - performance.now();

  const caption = `
*Mᴀᴋᴀᴅɪɪ, ${pika.pushName}*
_I'ᴍ ${Config.botname} >> 🖤🥀 Bʏ Mʀ Fʀᴀɴᴋ_

© 𝗠𝗮𝗱𝗲 𝗢𝗻 𝗣𝗹𝘂𝘁𝗼 𝗕𝘆 𝗠𝗿 𝗙𝗿𝗮𝗻𝗸 

📅 Tᴏᴅᴀʏs Dᴀᴛᴇ : ${myfunc.dayToday().date}
⌚ Tʜᴇ ᴛɪᴍᴇ : ${myfunc.dayToday().time}

╭━━━━━⌯᚜ ${stylish.fancy32(Config.ownername)} ᚛⌯━━━━━᚜
┃╭───────────┈߷
┃߷ Usᴇʀ    : ${pika.pushName}
┃߷ BᴏᴛNᴀᴍᴇ : ${Config.botname}
┃߷ Pʀᴇғɪx  : ${prefix}
┃߷ Mᴏᴅᴇ    : ${bot.worktype}
┃߷ Vᴇʀsɪᴏɴ : ${require('../../package.json').version}
┃߷ Oᴡɴᴇ    : ${Config.ownername}
┃߷ Pʟᴜɢɪɴs : ${plugin.pluginSize().size}
┃߷ Usᴇʀs   : ${await myfunc.totalAnyaUsers()}
┃߷ Sᴘᴇᴇᴅ   : ${Ping.toFixed(2).replace('-', '')}ms
┃߷ Mᴇᴍᴇ     : ${myfunc.getMemoryInfo().usedMemory}/${myfunc.getMemoryInfo().totalMemory}
╰─────────────┈⟡߷

╭━━━━━━━━━━━━━━━━━━━━━━━━━━߷⌯
┃*🍁 Fᴏʟʟᴏᴡ ᴍᴇ ᴏɴ :* https://instagram.com/mr_frank_ofc
┃*🍁 Sᴏᴜʀᴄᴇ Cᴏᴅᴇ :* https://github.com/MrFr3nk/Chatmaster-AI
┃*🍁 YᴏᴜTᴜʙᴇ :* https://YouTube.com/@the_cyber_punkk
┃*🍁 Pᴜʙʟɪᴄ Gʀᴏᴜᴘ :* https://chat.whatsapp.com/Gr7kalUgSKa5k72hPIgT8c
╰━━━━━━━━━━━━━━━━━━━━━━━߷
 ᪥ 𝗖𝗵𝗮𝘁𝗠𝗮𝘀𝘁𝗲𝗿 𝗔𝗜 𝗜𝘀 𝗔 𝗥𝗲𝘀𝘂𝗹𝘁 𝗢𝗳 𝗠𝗿 𝗙𝗿𝗮𝗻𝗸'𝘀 𝗛𝗮𝗿𝗱𝗪𝗼𝗿𝗸 
 ᪥ 𝗠𝗼𝗱𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗢𝗳 𝗔𝗻𝘆 𝗦𝗰𝗿𝗶𝗽𝘁 𝗢𝗳 𝗠𝗮𝘆 𝗕𝗮𝘀𝗲 𝗜𝘀 𝗣𝘂𝗻𝗶𝘀𝗵𝗮𝗯𝗹𝗲
 ᪥ 𝗙𝗼𝗿 𝗔𝗻𝘆 𝗤𝘂𝗲𝗿𝗶𝗲𝘀 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗠𝗲 𝗢𝗻 +263719647303 𝗼𝗿 +17792326872

 *© 2024 𝗔𝗹𝗹 𝗥𝗶𝗴𝗵𝘁𝘀 𝗥𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗠𝗿 𝗙𝗿𝗮𝗻𝗸 𝗗𝗮𝗿𝗿𝗲𝗹𝗹*
${plugin.makeAllmenu(prefix)}

🎀 _Type ${prefix}listmenu for my command list._

🔖 _Type ${prefix}help <command_name> for plugin information._

${Config.footer}`

  const ownerq = { key: { participant: '0@s.whatsapp.net', ...(pika.chat ? { remoteJid: 'status@broadcast' } : {}), }, message: { contactMessage: { displayName: Config.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${stylish.fancy31(Config.ownername)},;;;\nFN:${stylish.fancy31(Config.ownername)}\nitem1.TEL;waid=${Config.ownernumber}:${Config.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: Config.image_3, thumbnail: Config.image_3, sendEphemeral: true, }, }, };

  if (args[0] && (command === 'help')) {
  plugin.getPluginInfo(args[0])
   .then((res) => {
     if (!res) return pika.reply('This command\'s information doesn\'t exists 😮‍💨, please check the command name again.');
     pika.reply(`_Hey, is this the information about this plugin you're looking for 😙 ?_\n\n💠 Name : ${res.name}${res.alias ? '\n🍜 Alias : ' + res.alias : ''}${res.react ? '\n🌟 React : ' + res.react : ''}${res.need ? '\n📃 Need : ' + res.need : ''}\n💭 Category : ${res.category}\n🎀 Description : ${res.desc}`);
      }).catch((error) => {
      console.log(error)
      pika.reply('Oopsie! an error!');
      });
  } else {
  await anyaV2.sendMessage(pika.chat, {
      image: Config.image_1,
      caption: caption,
      contextInfo: {
        externalAdReply: {
          title: Config.botname,
          body: 'Here\'s the full list of my commands darling',
          thumbnail: Config.image_2,
          showAdAttribution: true
          }
        }
      }, {quoted:ownerq});
    }
  }
}
