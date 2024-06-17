console.log(this)

// function yourName() {
//  console.log(this);
//  console.log("your name is ", this.fName)
// }

const fName = "akarsh";
function yourName(lName) {
 console.log(this);

 console.log("your name is ", this.fName, " your last name is ", lName)
}

const name = {
 fName: "athul",
 yourName,
}


const newName = {
 fName: "alu",
}

const tell = yourName.bind(name);
tell();
yourName.bind(newName)("i");

//by using call


yourName.call(newName, "MP");


yourName();



