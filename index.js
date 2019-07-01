const gm = require('./gm_dat.json')

const galmoji = str => {
  return str.split('').reduce((acc, item) => {
    let s = (gm[item]) ? `${gm[item]}` : item
    acc += s
    return acc
 }, '')
}
module.exports = galmoji
