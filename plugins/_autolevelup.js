let handler = m => m

let levelling = require('../lib/levelling')
const canvacord = require('canvacord')
handler.before = async function (m) {
        let user = global.db.data.users[m.sender]
        let pp = './src/avatar_contact.png'
        let who = m.sender
        let discriminator = who.substring(9, 13)
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        try {
                pp = await this.getProfilePicture(who)
        } catch (e) {

        } finally {

                if (!user.autolevelup) return !0
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

                if (before !== user.level) {
                        let rank = await new canvacord.Rank()
                                .setRank(usersLevel.indexOf(m.sender) + 1)
                                .setAvatar(pp)
                                .setLevel(user.level)
                                .setCurrentXP(user.exp - min)
                                .setRequiredXP(xp)
                                .setProgressBar("#f2aa4c", "COLOR")
                                .setUsername(this.getName(who))
                                .setDiscriminator(discriminator);
                        rank.build()
                                .then(async data => {
                                        await this.sendButtonImg(m.chat, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), data, '© stikerin', 'CLAIM', ',claim')
                                })
                }
        }
}
module.exports = handler
