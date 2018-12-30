//https://baike.baidu.com/item/%E5%AD%99%E6%82%9F%E7%A9%BA/5576?fr=aladdin

const {URL,resolve} = require('url')

const qs = require('querystring')

const myUrl = new URL("https://baike.baidu.com/item/%E5%AD%99%E6%82%9F%E7%A9%BA/5576?fr=aladdin")

console.log(myUrl)

console.log(resolve('/user/local/','node')) // /user/node

console.log(qs.parse(myUrl.search.slice(1)))