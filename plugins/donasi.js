let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Pulsa • Emoney 〕
├ Pulsa / 081252848955
├ Gopay.Dana / 081252848955
└────
`.trim(), '© Moon', 'Donasi', '.donasi')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
