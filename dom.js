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
*/