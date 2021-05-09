const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    const pathname = req.url

    if(pathname === "/home"){
        res.writeHead(200)
        res.end("welcome to home");
    }
    if(pathname === "/movie"){
        res.end("welcome to movie");
    }
    if(pathname === "/cricket"){
        res.end("welcome to cricket");
    }
    if(pathname === "/update"){
        res.end("welcome to update");
    }
    
    
    else{
        res.end("error");
    }

})

server.listen(3000)