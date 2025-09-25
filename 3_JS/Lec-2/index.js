let a = 123;
let name = "Abhi"
console.log(a, name)

const pi = 3.14
// pi = 4       const keyboard can't change the variable value
console.log(pi)

var b = 10;
b = 20;
console.log(b)

var b = 30;
console.log(b)

if(true){
    var b = 40;
}
console.log(b);

function f(){
    var b = 50;         //this variable can't use in outside the scope
}
console.log(b);