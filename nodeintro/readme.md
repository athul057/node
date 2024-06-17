One of the important component in node is `http`

`const http = require('http');`

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
 console.log(req);
 console.log(req.method, req.url);
 //process.exit();

 console.log(res);
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>')
 res.write('<h1> Hello </h1>')
 res.write('<body> HIIII</body>');
 res.write('</head>');
 res.end();

})

server.listen(3000)
```

`process.exit()`

through this we can end the running of server.

here `req` and `res` will give us a  giant list of methods...

through `res.write` method we can write html into the screen...

![node_in_browser](/nodeintro/imgs/node.PNG?raw=true)
