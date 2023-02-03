const http = require("http");



const server = http.createServer((req, res ) =>{
  console.log("server work");
  res.end("Hello Lev!!!");
}).listen(3000);
