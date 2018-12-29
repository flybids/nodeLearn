const path = require('path')
//console.log(path)

//path.join
//__dirname 当前文件所在的目录
console.log(__dirname)
//__filename 当前文件所在目录，含有文件本身
console.log(__filename)

//相对路径
console.log(path.join('a','b'))
console.log(path.join('a/','../b'))

//绝对路径,命令窗口所使用的绝对路径，进行拼接
console.log(path.resolve(__dirname,"test"))

console.log(path.parse(__filename))
