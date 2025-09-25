let a = 123;
let b = 456;
console.log(a, b);

let name = 'Anjali';
let c = "Hellow";
console.log(name, c); 

let login = true;
let d = false;
console.log(login, d);

let user;
console.log(user);

// const hel;           //error dega
// console.log(hel);

let big_num = 123456789654563454655444n;
console.log(big_num);

let null_num = null;
console.log(null_num);

const id1 = Symbol("id");
console.log(id1);

const id2 = Symbol("id");
console.log(id2);

console.log(id1 == id2);

let arr = [10, 20, 3.14, "Abhi", true];
console.log(arr);
console.log(arr[3])

let obj1 = {
    name: "Abhinav",
    roll: "23IOT02",
    age: 20,
    category: 'SC'
}
console.log(obj1);
console.log(obj1.name);

obj1.roll = "23IOT03"
console.log(obj1.roll)

let s = function add(){
    console.log("Hellow");
}
console.log(s);
s();


console.log(a, typeof a);
console.log(null_num, typeof null_num);     //ye bug hai js ka, null ko object samjh leta hai 

let obj2 = obj1;
console.log(obj2);

obj2.name = "Mahiru";
obj2.roll = "23IOT02"
console.log(obj1);