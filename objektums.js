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
(3) ["name", "age", "city"]
Object.values(user);
(3) ["Kiss Ramóna", "20", "Bp"]
Object.entries(user);
(3) [Array(2), Array(2), Array(2)]
Object.entries(user)[1]
(2) ["age", 20]
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

for in ciklus 
for (let i = 0; i < numericArray.length; i++){
    console.log(user[i]);
}
let i = 0;
i < user.length
false 
i == user.length
false
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

for (let k in user) {
    console.log("key: ", k, 'value: ', user.k);

*/
