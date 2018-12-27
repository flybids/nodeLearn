const obj = require("./moduleExport")
//自己写的模块用相对路径
//node自定义的模块,核心模块和第三方模块，用绝对路径如require('fs')，直接写模块名字
//AMD CMD了解
console.log(obj)
obj.fn()