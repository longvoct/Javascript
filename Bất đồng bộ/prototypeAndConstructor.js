//Declaration, new, this, method, caution
let student = {
  name: "Evondev",
  age: 28,
};

//Constructor function Person Student
function Student(name, age) {
  //this = {}
  // add pr to this
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `Your name is ${this.name}`;
  };
}

let student2 = new Student("john", 40);
console.log(student2);
console.log(student2.getName());

//Prototype
//String , Number, Boolean
let str = "abc";
str.toUpperCase();

//Create Prototype
