const mongoose = require('mongoose')
//连接mongdb服务器 27017端口号
//连接nodeDb数据库，库不存在则创建一个数据库
const db = mongoose.createConnection("mongodb://localhost:27017/nodeDb",{useNewUrlParser:true});

//用ES6的Promise取代Mongoose的Promise
mongoose.Promise = global.Promise

db.on("error",()=>{console.log('数据库连接失败')})
db.on('open',()=>{console.log('数据库连接成功')})

//使用Schema 设置每个字段的数据类型
//{versionKey:false} 去掉版本信息
const Schema = mongoose.Schema
//不强制检测 
const TeacherSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"male"
    }
},{versionKey:false})

//创建teachers表，第三个参数可以强制指定表名
const Teacher = db.model("teacher",TeacherSchema)
//表中的数据
const data1 ={
    name: 'Liu Fei',
    age: 32,
}
const data2 ={
    name: 'Sun Hai',
    age: 22,
    gender: 'female',
}
//建立有数据的表对象
const d1 = new Teacher(data2) 
//表插入数据库
// d1.save((err,res)=>{
//     if(err)throw err;
//     console.log(res)
// })
d1.save().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})




