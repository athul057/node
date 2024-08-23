const path = require('path');
const fs = require('fs');

module.exports = class Product {

 constructor(t) {
  this.title = t;
 }

 save() {
  const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

  fs.readFile(p, (err, fileContent) => {
   let products = [];
   if (!err) {
    //used to parse a JSON string and convert it into a JavaScript object or value. 
    products = JSON.parse(fileContent);
   }
   products.push(this);
   //Converting from JSON object/value to string 
   fs.writeFile(p, JSON.stringify(products), (err) => {
    console.log(err);
   });

  })

 }

 /*Issues that i faced in the below code.....
 Asynchronous Nature of fs.readFile:
 
 Both save and fetchAll methods use fs.readFile, which is asynchronous. This means that fs.readFile returns immediately, and the callback function provided is executed later when the file read operation completes.
 In fetchAll, the return products; statement executes before the asynchronous fs.readFile callback completes, resulting in the method returning an empty array.
 Returning Values from Asynchronous Operations:
 
 The fetchAll method attempts to return a value immediately after calling fs.readFile, but the actual reading of the file and parsing happens asynchronously. Therefore, by the time return products; is executed, the file reading is not complete. */


 static fetchAll(cb) {
  const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
  fs.readFile(p, (err, fileContent) => {
   if (err) {
    cb([]);
   }
   cb(JSON.parse(fileContent));

  })
 }
}
