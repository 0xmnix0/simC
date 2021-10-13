function handler(m) {
  this.sendContact(m.chat, '60199782326', 'Moon', m)
}
handler.help = ['owner', 'creator', 'itsukibotowner']
handler.tags = ['info']

handler.command = /^(owner|creator|itsukibotowner)$/i

module.exports = handler
