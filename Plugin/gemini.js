const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../DATABASE/functions')

cmd({
    pattern: "gemini",
    desc: "gemini chat.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.vihangayt.com/ai/gemini?q=${q}`)
return reply(`${data.data}`)
 }catch(e){
  console.log(e)
  reply(`${e}`)
}
})
