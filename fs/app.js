const fs = require('fs')
//console.log(fs)

//读取文件
//异步readFile 同步data=fs.readFileSync(路径，编码)
fs.readFile('./old.txt','utf8',(err,data)=>{
    if(err)throw err;
    console.log(data)
})

//  *实现同步
//  const fn = async ()=>{
//     const data = await new Promise((resolve,reject)=>{
//         fs.readFile('./old.txt',(err,data)=>{
//             if(err)return reject(err)
//             resolve(data)
//         })
//     })
//  }

//写文件，文件不存在，则新建一个文件后写入,会完全覆盖已存在的数据
fs.writeFile('./write.txt','写入的数据',function(err){
    if(err)throw err;
    console.log('写入成功')
})

//确定路径是否存在,异步的已经废弃，可以使用.existsSync(路径)
fs.exists('./4.txt',exists=>{
    console.log(exists)
})

//创建文件夹,如果已经存在，则会报错
// fs.mkdir('./files',err=>{
//     if(err)throw err
// })

//读文件夹,data是一个数组，表示文件夹内的文件名
fs.readdir('./files',(err,data)=>{
    if(err) throw err;
    console.log(data)
})

//判断是否是文件夹
const stat = fs.statSync('./files')
console.log(stat.isDirectory())

//监听一个文件的变化
// fs.watchFile('./old.txt',(c,p)=>{
//     console.log(c,p)
// })

//文件流
