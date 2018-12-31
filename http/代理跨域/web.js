const http = require('http')
const request = http.request
const options = {
    host:'localhost',
    port:3000,
    method:'get',
    path:'/'
}

const fn = (response) =>{
    let data= {}
    const reqData = request(options,res=>{
        res.setEncoding('utf8')
        res.on('data',(chunk)=>{
            data = chunk;
            console.log('响应',chunk)
        })
        res.on('end',()=>{
            console.log('响应已无数据')
            response.write(JSON.stringify(data))
            response.end()
        })
    })
    
    reqData.on('error',(err)=>{
        console.log(err)
    })
    reqData.write("")
    reqData.end()
}
http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    fn(res)
    //res.end()
}).listen(3001)