const http = require("http");
const fs = require("fs");
const path = require("path")

const server = http.createServer((req,res) =>{
    console.log(req.URL, req.method);

    //setting the header content type
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile("./index.html",(err,data)=>{
        if(err){
            console.log(err);
        } else{
            res.write(data);
            res.write(req.url);
            res.end();
        }
        
    })
    
});

server.listen(3200,"localhost",() =>{
    console.log("listening for requests");
});