const http = require('http')
const server = http.createServer((req,res)=>{
    const obj = {a:1,b:2}
    res.write(JSON.stringify(obj))
    res.end()
})
server.listen(3000)