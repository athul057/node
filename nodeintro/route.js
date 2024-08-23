const fs = require('fs');

const route = (req, res) => {

 if (req.url === '/') {
  res.write('<html><head><title>welcome</title></head>');
  res.write('<body><form method="POST" action="/message"><input type="text"name="message"/><button type="submit">Send</button></form></body>');
  res.write('</html>');
  return res.end();
 }

 if (req.url === '/message' && req.method == 'POST') {
  const body = [];
  //Now we are registering an event listener. Here 'on' will responds with certain events.
  //Here the 'data'event will run whenever a new chunk ready to read.
  //when we receieves a chunks of data we have to work with the data.

  //Node js will run this process until it gets all the datas from our reqeust.
  //It will runs this process until it reaches the end our data.
  req.on('data', (chunk) => {
   console.log(chunk);
   body.push(chunk);
  });
  //Once the incoming requess done we will run this code
  // Now through this 'end' key word we can deal with the all the chunks/data we read in the above step.Those chunks store in the body now.
  return req.on('end', () => {
   const parsedBody = Buffer.concat(body).toString();
   console.log(parsedBody);
   const message = parsedBody.split('=')[0];
   fs.writeFileSync('message.txt', message);
   res.statusCode = 302;
   res.setHeader('Location', '/');
   return res.end();
  });

 }

 // res.setHeader('Content-Type', 'text/html');
 res.write('<html><head><title>hello</title></head>');
 res.write('<body><h1>Hello</h1></body>');
 res.write('</html>');
 console.log("hello");
 res.end();
 // console.log(req.url, req.method, req.headers)
}

module.exports = {
 handler: route
}

//Diffrent ways we can do the exports
/////OR
//module.exports=route;
/////OR
//module.exports.handler=route
/////OR
//We can ommit the 'module'part
//exports.handler=route