

const http = require('http');

const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.write('<html><body><form action="/message" method="POST"><input type=text name="message"><button type=submit>send</button></body></html>')
  return res.end();

 }
if(req.url==='/message'&&method==='POST'){
 
}


 res.write('<html><body><h1>Hello from Node')
 res.end();
})

server.listen(3000)