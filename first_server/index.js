const http = require('http');
// const server = http.createServer((req, res)=>
// {
//     res.end('Hello , this is your Node.js server!');
// });
   
// const port = 3000;
// server.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile('fileSystem/first.txt','utf8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('File Content:'+data)
        })
    }
});
const port=3000;
server.listen(port,()=>console.log(`Server is running on http://localhost:${port}`));