Core Modules in Node js is 

1. http=>Launch a server,send requests
2. https=>Launch a ssl server
3. fs
4. path
5. os




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
`res.setHeader('Content-Type', 'text/html');`


This is the default header browser knows and understand...


`process.exit()`

through this we can end the running of server.

here `req` and `res` will give us a  giant list of methods...

through `res.write` method we can write html into the screen...

![node_in_browser](/nodeintro/imgs/node.PNG?raw=true)


node js is using an event loop mechanism to continusly running the server.
So when ever it receives an request it will execute those requests....

Keeps running as long as there are event listeners registered.

res.end(); will stope sending the request...
