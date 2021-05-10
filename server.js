const http = require('http');

const fs = require('fs');

const apiData = fs.readFileSync("data.json",'utf-8')
let Data = JSON.parse(apiData);

const server = http.createServer((req, res) => {
    const pathname = req.url;
    let data = [];

    if(pathname === "/home"){
        res.writeHead(200);
        res.end("welcome to home");
    }
    if(pathname === "/movie"){
        res.end("welcome to movie");
    }
    if(pathname === "/cricket"){
        res.end("welcome to cricket");
    }
    if(pathname === "/update"){
        req.on("data", (line)=>{
            data.push(String(line))
        })
        req.on("end",()=>{
            data = JSON.parse(data);
            // console.log(data)
            Data.push(data)

            let write = JSON.stringify(Data)

            fs.writeFile("data.json", write, (err)=>{
                console.log(err)
            })
        })
        res.end("data uploaded successfully")
    }
    
    
    else{
        res.writeHead(404)
        res.end("page not found");
    }

});

server.listen(3000)