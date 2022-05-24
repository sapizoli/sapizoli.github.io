/*
Dom ismeretek
document.getElementById("email")
<input id=​"email" class=​"blue form-control" type=​"email" name=​"email">​

document.getElementsByName("password")

document.getElementsByName("password")[0]
<input id=​"password" class=​"form-control red" type=​"password" name=​"password">​

document.getElementsByClassName("form-control")
HTMLCollection(2) [input#email.blue.form-control, input#password.form-control.red, email: input#email.blue.form-control, password: input#password.form-control.red]0: input#email.blue.form-control1: input#password.form-control.redemail: input#email.blue.form-controlpassword: input#password.form-control.redlength: 2[[Prototype]]: HTMLCollection

document.getElementsByTagName("h1")
HTMLCollection [h1]0: h1length: 1[[Prototype]]: HTMLCollection

document.querySelectorAll(".form-control")
NodeList(2) [input#email.blue.form-control, input#password.form-control.red]


Element
let email= document.querySelector("input#email");
undefined

email
<input id=​"email" class=​"blue form-control" type=​"email" name=​"email">​

typeof email
'object'

Element.prototype.setUrgent = function() {
    this.style.border = "solid 2px red";
}
ƒ () {
    this.style.border = "solid 2px red";
}
document.querySelector("input#email").setUrgent() -->piros lesz a keret
undefined


Attribútumok
let email= document.querySelector("input#email");
undefined

email.getAttribute("class")
'blue form-control'

email.getAttribute("id")
'email'

email.getAttribute("name")
'email'

email.getAttribute("type")
'email'

email.attributes--> összes felsorolása

email.setAttribute("type", "top-input"); --> set átálítja a kívánt értékre
undefined


Több elem módosítása ciklussal
let myNodeList = document.querySelectorAll("input");
undefined

for (let i = 0; i < myNodeList.length; i++) {
    myNodeList[i].style.backgroundcolor = "red";
}

for (let element in myNodeList) {
    if(Element.style) {
    element.style.color = "grey";
    }
}


Több elem módosítása függvénnyel
function massModify(selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i][attribute] = value;
    }
}
undefined

massModify("input", "placeholder", "érték")
undefined

massModify("input", "title", "érték")
undefined


Egy elem gyerekei
document.querySelector("input#email").childElementCount
0
document.querySelector("div").childElementCount
3
document.querySelector("div.form-group:nth-child(2)").children
HTMLCollection(2) [label, input#email.blue.form-control, email: input#email.blue.form-control]

document.querySelector("div.form-group:nth-child(3)").children
HTMLCollection(2) [label, input#password.form-control.red, password: input#password.form-control.red]

document.querySelector("div.form-group:nth-child(3)").childNodes -->szöveges tartalmak megjelenítése is
NodeList(5) [text, label, text, input#password.form-control.red, text]0: text1: label2: text3: input#password.form-control.red4: textlength: 5[[Prototype]]: NodeList

document.querySelector("div.form-group:nth-child(3)").firstChild
#text

document.querySelector("div.form-group:nth-child(3)").firstElementChild
<label for=​"password">​Password​</label>​

document.querySelector("div.form-group:nth-child(3)").lastElementChild
<input id=​"password" class=​"form-control red" type=​"password" name=​"password">​

document.querySelector("div.form-group:nth-child(3)").lastChild
#text


*/