# this keyword....


when we type simply `this` key word it will points to the window object...
Here it will points to the window object.

```javascript
console.log(this)
```
```javascript
function yourName() {
 console.log(this);
 console.log("your name is ", this.fName)
}

const name = {
 fName: "athul",
 yourName,
}
```

But in the above code `this` keyword will points to `name` object.
we can explicitly give this by using `bind` keyword.
