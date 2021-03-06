console.log("Helo");
/*meg lehet változtatni
let price = 5;
let price2 = 6;
let total = price1+price2;
let name;
let userAge = 33;

/*Nem lehet megváltoztatni
const age = 44;
const valami = "Más valami";

/*típusok
let num = 4;
boolean, number, string, null, undefined
typeof num
let active = true;
typeof active
const valami = "Más valami"

/*változók típusai
let num = 4;
num.toString()
"4"
name = "almafa";
"almafa"
name.replace("a", "b")
"blamafa"
num.toString /*dotoperátor*/
/*"4"*/

/*számok
let userAge = 33;
userAge +5
38
6 % 3 
0 /*maradékot írja ki
/*hatványozás 3**2
9
let num =1;
var num =1;
num + 1
2
num - 1
0
num = num + 5;
6
num / 2
3
num * 2
12

string
let userName = "helo";
userName = 'helo';
typeof userName
"string"
userName.Length
9
userName + "Miri"
"Dr" + userName
*/

/*undefined and null
let carName;
undefined
typeof carName;
'undefined'
carName = "Fiat";
'Fiat'
typeof carName
'string'
carName = null;
null
typeof carName
'object'*/

/*Típuskonverziók
1 Implicit
let door = "11";
undefined
door*2
22
door+5
'115'

2 Explicit
String(33)
'33'
userAge= String(33)
'33'
userAge = Number(userAge)
33
Number("helo")
NaN
Number("2")
2
Number()
0
Number("")
0
String(NaN)
'NaN'
String(-33)
'-33'
*/

/*Típuskonverzió
let userAge = 33;
undefined
String(userAge)
'33'
userAge.toString()
'33'
let amount = 33.534643;
undefined
amount.toFixed(2); -->tizedes,kerekít
'33.53'
amount.toPrecision(3)
'33.5' -->számjegyek összege, kerekít
parseInt("22"); -->egészszám
22
parseInt("22hal");
22
parseInt("hal22"); -->betűvel nem kezdődhet
NaN
parseFloat("22.33") -->tizedestörtet csinál
22.33

Formok kezelése Javascript-el
document.querySelector("input[name='quantity']");
<input id=​"quantity" name=​"quantity" type=​"number" min=​"1" max=​"10">​
let quantity = document.querySelector("input[name='quantity']");
undefined
quantity
<input id=​"quantity" name=​"quantity" type=​"number" min=​"1" max=​"10">​
quantity.value
'2'
let price =1200;
undefined
let amount = 0;
undefined
amount = parseInt(quantity.value) * price;
2400
*/


/*esemény*/
function calcAmount() {
    let price = 1000;
    let quantity = document.querySelector("input[name='quantity']");
    let amountNumber = parseInt(quantity.value);
    /*alert("Fizetendő:" + amount + "Ft"); --> felugró ablakban írja ki az összeget*/

    if (isNaN(amountNumber)) {
        amountNumber = 0;
        //3 operandusos kifejezés
        //amountNumber = isNan(amountNumber) ? 0 : amountNumber; 
        showSumPrice(price, amountNumber);
    }
    showSumPrice(price, amountNumber);


    // Függvények paraméterezése
    function showSumPrice(price, amountNumber) {
        let showAmount = document.querySelector("span.show-amount");
        if (amountNumber > 10) {
            alert("maximum 10 terméket vásárolhat");
        } else if (amountNumber < 1) {
            alert("Minimum egy terméket kell vásárolnia");
        } else {
            let amount = amountNumber * price;
            showAmount.innerHTML = amount; /*-->HTML elemek módosítása*/
        }
    }


    //Új elemek hozzáadása gyerekként a HTML-hez
    let helpText = document.createElement("small");
    helpText.className = "login-div";
    helpText.innerHTML = "Adja meg a feltéteket!";

    let parent = document.querySelector("div.login-div:nth-child(1)");
    parent.appendChild(helpText);
    //parent.removeChild(helpText);


    //Egy elem szülője
    let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
    let alertCloseEventHandlerFunction = function(ev){
        this.parentElement.style.display = "none";
    };
    for (let i = 0;i < alertCloseButtons.length; i++){
        alertCloseButtons[i].addEventListener("click", function(ev){
        }  


    //Eseménykezelők hozzáadása a HTML-hez (addEventListener)
    let sendButton = document.querySelector("form .btn.btn-primary");
    /* sendButton.onclick = function() {
         alert("Hello JS!");
     }
     */
    sendButton.addEventListener("Click", function () {
        alert("Hello JS!");
    });

    window.addEventListener("resize", function () {
        console.log(this.innerHeight, this.innerWidth);
    });


    //Űrlap események
    let email = document.querySelector("email");
    email.addEventListener("submit", function(ev){
         ev.preventDefault();
         //console.log(this);
         let inputs = this.querySelectorAll("input");
         let values = {};
         for (let i = 0; i < inputs.lenght; i++){
             values[inputs[i].name] = inputs[i].value;
         }
         console.log(values);
    });


    /*stringek metódusaii:
    let name = "Péter";
    name.length
    5
    name = "  péter   ";
    name.trim()
    "Péter"
    "Dr." + name
    "Dr.   Péter"
    let title = "Dr. ";
    title.concat(name)
    "Dr.   Péter"
    title.concat(name.trim());
    "Dr.Péter"
    title.concat(name.trim()).toLowerCase()
    "dr.péter"
    title.concat(name.trim()).toupperCase()
    "DR. PÉTER" */

    /* Keresés és módosítás a stringen belül
     let testStr = Hol lehet a baba?";
     testStr.indexOf("baba");
     12
     testStr.replace("baba" , "pénz")
     "Hol lehet a pénz?"
     let test2 = testStr.replace("baba","mama");
     test2
     "Hol lehet a mama?"
     testStr = testStr.replace("baba","mama");
     "Hol lehet a mama?"
     testStr
     "Hol lehet a mama"
    */

    /* Igaz vagy hamis
     let active = true;
     active
     true
     typeof active
     "boolean"
     boolean(0)
     false
     boolean(3)
     true
     boolean("hello")
     true
     boolean("")
     false
     1>2
     false
     2>1
     true
     2>=1
     true
     "hello" == "helloka"
     false
     "hello" <= "helloka"
     true
    0 == false
    true
    0===false
    0!==false
    true
    false
    3 != 3
    false
    4>2 && 3>1
    true
    4>2 && 3<1
    false
    4>2 || 3<1
    true

    Függvények (eljárás--> nem ad vissza értéket)
    function hider(){
        document.body.innerHTML = ""; 
    }
    undefined
    hider();
    function adder(x, y){
    return x +y;
    }
    undefined
    adder(2, 7);
    9
    */

    //Scope
    //Global scope
    /* function someFunction(){
     //Local Scope #1
     }
     function someOtherFunction(){
     //Local Scope #2    
     }*/

}


