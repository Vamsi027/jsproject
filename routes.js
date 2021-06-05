const fs=require('fs')

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        return fs.readFile('message.txt', 'utf8' , (err, data) => {
            if (err) {
              return
            }
            const datainFile=data;
          
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>MyPage</title></head>')
        res.write(`<body><p>${datainFile}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end();
        })
    }
    if(url==='/message' && method==='POST')
    {
        const body=[];
        req.on('data',chunk=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[0];
            fs.writeFile('message.txt',message,{flag:'a+'},err=>{
                res.statusCode=302;
                res.setHeader('Location','/')
                return res.end();
            })
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>MyPage</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    res.end();
}

module.exports=requestHandler;

//module.exports={
//    handler:requestHandler,
//    sometext:'ok'
//}

//export.handler=requestHandler