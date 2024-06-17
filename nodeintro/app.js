const http = require('http');

const server = http.createServer((req, res) => {
 // console.log(req);
 // console.log(req.method, req.url);
 // process.exit();

 console.log(res);
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>')
 res.write('<h1> Hello </h1>')
 res.write('<body> HIIII</body>');
 res.write('</head>');
 res.end();

})

server.listen(3000)
