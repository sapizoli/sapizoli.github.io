// Global scope
var globalName = "Joe";

function something(){
    var globalName ="Jack";
    console.log(globalName);
}
something();

console.log(globalName);

//let
let name = "Sanyi";
{
    let name = "Pisti";
    console.log(name);
}
console.log(name);

//const
const NAME = "Sanyi";

    function test(){
    const name = "Pisti";
    console.log(NAME);
}
test();
console.log(NAME);