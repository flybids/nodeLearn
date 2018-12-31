const Koa = require('koa')
const request = require('superagent')
const cheerio = require('cheerio')
const app = new Koa
const obj = {

}
app.use(async (ctx, next) => {
  const data = await new Promise(
    resolve => {
      request.get('https://www.npmjs.com/search?q=request')
        .end((err, res) => {
          if (err) throw err;
          const data = res.text
          // const $ = cheerio.load(data)
          // console.log($('.global__global___3tOAp global__application___g4ZRy'))
          resolve(data)
        })
    }
  )
  ctx.body=data

}).listen(3000)
