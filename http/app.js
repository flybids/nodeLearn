const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    //res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})
    // res.write('123ad黄刚d孙a22')
    // res.write(JSON.stringify(req.headers))
    // res.end(req.url) //最后输出的部分
    if(req.method==='GET'){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        switch(req.url){
            case '/':
            // fs.readFile('./home.html','utf8',(err,data)=>{
            //     if(err) throw err;
            //     res.write(data)
            //     res.end()
            // })
             fs.createReadStream('./home.html').pipe(res)
             break;
            case '/index':
             res.write('<h1>Index</h1>')
             break;
            default:
             res.write(fs.readFileSync('./NotFound.html','utf8'))
             break;
        }
    }
   // res.end()
})
server.listen(3001)
console.log('服务启动了2')
// npm i -g nodemon