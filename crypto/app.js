const crypto = require('crypto')

const key = 'gaydar' + 520

//console.log(crypto.getHashes())
const obj = crypto.createHash("md5") //sha512
obj.update(key)

//md5理论上不可以解密
const password = obj.digest("hex")
console.log(password)

