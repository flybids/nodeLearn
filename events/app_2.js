const EventEmitter = require('events').EventEmitter

const myEmitter = new EventEmitter

//自有的newListener,removeListener事件监听
myEmitter.on('newListener',function(){
    console.log('myEmitter绑定了新的事件监听')
})
myEmitter.on('removeListener',function(){
    console.log('myEmitter移除了一个事件监听')
})
myEmitter.on('fy',()=>{
    console.log('绑定了fy事件监听')
})

//(eventName,listener)
//.on 绑定，是addListener的简写
//.off 解绑
//.once 只监听一次

//emitter.getMaxListeners() 获取当前的最大监听器数量限制，同一事件能监听多少个
//默认是EventEmitter.defaulteMaxListeners 10
//可以通过 emitter.setMaxListeners(12) 设置自定义个数

//某一事件有多少个回调
//emitter.listeners('fy')

