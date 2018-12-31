const Koa = require('koa')

const app = new Koa

//中间件，可以注册多个,依次执行
//ctx 当前请求上下文环境 
//next 通过next调用下一个中间件
//当是最后一个中间价时，此时next可以调用，但是无效
//洋葱模型 外到内，再从内到外，传入传出

//中间件1
app.use(async (ctx,next)=>{
  console.log('中间件1接受请求')
  await next()
  console.log('中间件1 响应')
})

//中间件2
app.use(async (ctx,next)=>{
    console.log('中间件2接受请求')
    await next()
    console.log('中间件2响应')
})

app.listen(3000)