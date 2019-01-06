const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa
const router = new Router

//主机 / =》 index
router.get('/',
    async (ctx, next) => {
      console.log('跟路由请求get1')
      await next()
      console.log('跟路由相应get4')
    },
  async (cxt, next) => {
    console.log('跟路由请求get2')
    await next()
    console.log('跟路由响应get3')
  }
);

app.use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)
