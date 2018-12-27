//setImmediate(callback[, ...args])
// callback <Function> 在 Node.js 事件循环的当前回合结束时要调用的函数。
// ...args <any> 当调用 callback 时要传入的可选参数。
setImmediate(()=>{
    console.log(7)//执行步骤7,最后执行
})
Promise.resolve('1-5') //执行步骤1
    .then(res=>{
        console.log(res)//执行步骤5，then异步
    })
process.nextTick(()=>{
    console.log(4) //同步代码之后执行的异步代码，步骤4
})
setTimeout(()=>{
    console.log(6) //步骤6
},0)
console.log(2)//执行步骤2
console.log(3)//执行步骤3

//所有的代码都是同步的，异步的是指其中的回调

//队列
//macro-task:script（所有的代码）; (setTimeout; setInterval;) setImmediate; I/O操作； 注意：setTimeout; setInterval同优先级
//micro-task: process.nextTick; Promise

//优先级
//script  => 清空micro-task中的所有事件 => macro-task中的一个事件 => 清空micro-task中的所有事件 => 回到 macro-task，循环

