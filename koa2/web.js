const Koa = require('koa')
const app = new Koa
app.use(async (ctx, next) => {
  ctx.body = '返回的数据'
  ctx.body += '第二次数据'
}).listen(3000)
