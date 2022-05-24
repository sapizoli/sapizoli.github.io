let user = {
    name: "Kiss Ramóna",
    age: 20,
    city: "Bp"
};
let admin = new Object();
let customer = {};
user.name
"Kiss Ramóna"
Object.keys(user);
(3)["name", "age", "city"]
Object.values(user);
(3)["Kiss Ramóna", "20", "Bp"]
Object.entries(user);
(3)[Array(2), Array(2), Array(2)]
Object.entries(user)[1]
    (2)["age", 20]
Object.entries(user)[1][0]
"age"
Object.keys(user).length
3
Object.values(user).length
3
Object.entries(user).length
3

/*
const user = {
    name: "John Doe",
    age: 33
};
user.name ="Sanyi";
"Sanyi"
user
{name: "Sanyi", age: 33}
user = {
    {name: "Sanyi", age: 33}
}


for in ciklus --> a kulcsokon megy végig
for (let i = 0; i < numericArray.length; i++){
    console.log(user[i]);
}

for (let k in user) {
    console.log("key: ", k, 'value: ', user[k]);
}
key: name value: Kiss Ramóna
key: age value: 20
key: city value: Bp
user.name
"Kiss Ramóna"
user["name"]
"Kiss Ramóna"
user.k



for of ciklus--> értékeken megy végig 
let user = {name: "Pisti", age: 33, email: "pisti@gmail.com"};
for (let car of cars) {
    console.log(car);
}
Volvo
BMW
Opel

for (let car of cars) {
    console.log(car);
    Volvo
    BMW
    Opel
    
let str = "Hello";
for(let char of str){
    console.log(char);
    H
    e
    2 l
    o
}
for(let k  of Object.keys(user)){
    console.log(k);
}
name
age
email

for(let k  of Object.keys(user)){
    console.log(user[k]);
}
Pisti
33
stb.

for(let k  of Object.keys(user)){
    console.log(k, user[k]);
}

for(let val  of Object.values(user)){
    console.log(val);
}
Pisti
33
stb.

for(let entry of Object.entries(user)){
    console.log(entry[0]. entry[1]);
}
name Pisti
age 33
email pisti@gmail.com


Metódusok
let user = {
    name: "John Doe",
    age: 30
    sayHi: function() {
        Console.log(Hi);
    }
};
Array.isArray(user)
false

Objects.keys(user)
(3) ["name", "age", "sayHi"]

user.sayHi
f () {
    console.log("Hi");
}

user.sayHi()
Hi

user = {
    name: "John Doe",
    age: 30
    sayHi: function() {
        return "Hi";
    }
};
user.sayHi()
"Hi"
console.log(user.sayHi())
Hi


This
user = {
    name: "John Doe",
    age: 30
    sayHi: function() {
        return "Hi. my name is John doe!";
    }
};
user.sayHi()
"Hi. my name is John doe!"

user.name = "Ivan Makarenko";
;
"Ivan Makarenko"
user.sayHi()
"Hi. my name is John doe!"

user = {
    name: "John Doe",
    age: 30
    sayHi: function() {
        return 'Hi. my name is $[this.name]!';
    }
};
user.sayHi()
"Hi. my name is Ivan Makarenko!"

let btn = document.querySelector(form button.btn-primary')
btn
btn.onclick = function(){
    console.log(this.style.display = "none"); --> elem eltüntetése
}


Egy user objektum létrehozása
let user = {
    "_id": "5cda967e7dc7132184fca4c7",
     index: 0,
     isActive: true,
     balance: "$1,241.29",
     picture: "http://placehold.it/32x32"
    }
user.minusBalance = function(amount){
    this.Balance -= amount;
}
user.balance = 124129
user.minusBalance(100000);

user.plusBalance = function(amount){
    this.Balance += amount;
user.plusBalance(7);

user.getBalance = function(){
    return '$ ${this.balance}';
}
user.getBalance()
"$ 124129"


Az arrow function
let adder = function(n1, n2) {
    return n1 +n2;
}
adder(4, 4)
8

let adder = (n1, n2) => {
    return n1 +n2;
}

let adder = (n1, n2) => n1 +n2;

 let greeter = name => 'Hello ${name}!';   
 greeter("Joe")
 "Hello Joe"

*/
