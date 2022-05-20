/*let cars = ["Ford", "Audi", "Volvo"];
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
function cannByRef(arr) {
    arr[1] = 200;
    console.log("From function: ", arr);
}
let fruits = ["Pear", "Avocado", "Apple"];
callByRef(fruits);
console.log(fruits)
From function: (3) ["Pear", 200, "Apple"]
(3) ["Pear", 200, "Apple"]
 