./*let cars = ["Ford", "Audi", "Volvo"];
cars
(3) ["Ford", "Audi", "Volvo"]
let user = [1, "Joe", true, null];
user[2]
true
let users = [
    [1, "Joe", true],
    [2, "Jim", false],
];
Array.isArray(users)
true
let test2 = "helo";
Array.isArray(test2)
false


tömbök metódusai (arr.push();, arr.pop());arr. unshit(); arr.shit();
let cars = ["Ford", "Audi", "Volvo"];
cars.push("trabant"); -->Hozzáadja a végéhez
4
cars
(4) ["Ford", "Audi", "Volvo", "Trabant"]
cars.pop() -->Kiveszi a tömb végéből
"Trabant"
(3) ["Ford", "Audi", "Volvo"]
cars.unshift("Lada"); --> a tömb elejére adja hozzá
4
cars
(4) ["Lada", Ford", "Audi", "Volvo"]
cars.shift(); --> a tömb elejét veszi el
"Lada"
cars
(3) ["Ford", "Audi", "Volvo"]


tömbök vágása és összeillesztése (slice,splice--> az eredeti metódust módosítja, join)
let cars = ["Ford", "Audi", "Volvo"];
cars.slice(0, 1);
[Ford]
cars
 (3) ["Ford", "Audi", "Volvo"]
 cars.slice(0, 2);
 (2) ["Ford", "Audi"]
 cars.splice(1, 1);
 ["Audi"]
 cars
 (2) ["Ford", "Volvo"]
 cars.splice(1, 0, "Audi");
 []
 cars
 (3) ["Ford", "Audi", "Volvo"]
cars.splice(1, 0, "Trabant", "Barkas", "Wartburg");
[]
cars
(6) [ "Ford", "Trabant", "Barkas", "Wartburg", "Audi", "Volvo"]
cars.join(" ,");
"Ford" ,"Trabant" ,"Barkas" ,"Wartburg" ,"Audi" ,"Volvo"
cars.join(", ");
"Ford", "Trabant", "Barkas", "Wartburg", "Audi", "Volvo"
cars.join("###")
"Ford"###"Trabant"###"Barkas"###"Wartburg"###"Audi"###"Volvo"


Paraméterek átadása másolással
let varOne = 10, varTwo = 20;
function changeValues(one, two) {
one = 100;
two = 200;
console.log("From function: ", one, two);
}
changeValues(varOne, varTwo);
console.log(varOne, varTwo);
From function: 100 200
10 20


Objektumok átadása referencia szerint
function callByRef(arr) {
    arr[1] = 200;
    console.log("From function: ", arr);
}
let fruits = ["Pear", "Avocado", "Apple"];
callByRef(fruits);
console.log(fruits)
From function: (3) ["Pear", 200, "Apple"]
(3) ["Pear", 200, "Apple"]
 

for ciklus
for (let i =0; i<5; i++) {
    console.log(i);
}
0
1
2
3
4
undefined

for (let i =0; i>5; i++) {
    console.log(i);
}
undefined

let fruits = ["Pear", "Avocado", "Apple"];
undefined
for (let i = 0; i < fruit.lenght i++){
    console.log(fruits[i]);
}
Pear
Avocado
Apple
undefined

for (let i = 0; i < fruit.lenght+1 i++){
    console.log(fruits[i]);
}
Pear
Avocado
Apple
undefined
undefined

for (let i = 0; i < fruit.lenght i++){
    if (i>1){
        continue;
    }
    console.log(fruits[i]);
}
Pear
Avocado
undefined

for (let i = 0; i < fruit.lenght i++){
    if (i>1){
        break;
    }
    console.log(fruits[i]);
}
Pear
Avocado
undefined 


Operátorok
let age = 33;
age = age + 4;
37
age
37
age += 10;
age
47
age /= 3
15.666666
age *= 3
age 47
age % 2
1


a ternary operátor
let age = 33;
let canVote;

if (age <18) {
    canVote = false;
} else {
    canVote = true;
}
true
canVote
true

canVote = age <18 ? false : true;
canVote = age >=18;
true
canVote
true

let city = "NY";
canVote = (age >= 18 && city == "NY") ? true : false;
true

let level = 1;
let salary = level > 2 ? "1.2M" : "0.8M";
salary
"0.8M"
level += 2
3
salary = level > 2 ? "1.2M" : "0.8M";
salary
"1.2M"

*/