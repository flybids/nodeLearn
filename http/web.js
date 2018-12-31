const http = require('http')
const server = http.createServer((req,res)=>{
    const obj = {a:1,b:2}
    //cors解决跨域问题
    //res.setHeader('Access-Control-Allow-Origin','*')
    res.writeHead(200,{'Access-Control-Allow-Origin':'*'})
    res.write(JSON.stringify(obj))
    res.end()
})
server.listen(3000)