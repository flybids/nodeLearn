# node常用命令 npm

1. 初始换node项目
> node init
> node init -y

2. 安装模块
> npm install
> npm i --save 包名     :生产环境-S
> npm i --save-dev 包名 :开发环境-D
> npm i -G 包名         ：全局安装
> npm i koa@7.0.1

3. 初始化项目并安装依赖
```javascript
const Koa = require('koa)
const app = new Koa
app.use(async (ctx) =>{
    ctx.body='这是后台的数据'
})
app.listen(3000)
```

4. 上线自己的包
> npm init
> npm adduser
> npm login
> npm publish
> npm unpublish 包名 -f 半小时内可删
