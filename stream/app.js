const fs = require('fs')
// fs.readFile('./1.txt','utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data)
// })

const read = fs.createReadStream('./1.txt') //暂停状态
// read.setEncoding('utf8')
// read.resume() //开始流动
// read.on('end',()=>{
//     //流动结束
//     console.log('读取结束')
// })
// read.on('data',(data)=>{
//     //获取流出的信息
//     //分多次读取
//     console.log(data)
// })

//复制文件
const write = fs.createWriteStream('./2.txt')
read.pipe(write)