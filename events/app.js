const EventEmitter = require('events').EventEmitter
//核心模块不需要下载

const myEmitter = new EventEmitter

const fn =() =>{
    console.log('异步的回调函数')
}

//旧的写法
// setTimeout((fn)=>{
//     //异步代码结束了，调用fn
//     fn()
// },2000,fn)


myEmitter.on('someEvents',fn)

setTimeout(()=>{
    //异步代码结束了，调用fn
    myEmitter.emit('someEvents')
},2000)

//自定义的时间
function Fn(name){
    this.name = name
}
Fn.prototype.__proto__=EventEmitter.prototype
const obj  = new Fn('cool')
obj.on('call',function(){
    console.log('call me ',this.name)
})
setTimeout(()=>{
    obj.emit('call')
},3000)

