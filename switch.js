//switch
let weekday = new Date().getDay();
undefined
let dayName = '';
undefined

switch(weekday){
    case 0 :dayName = "Vas";
        break;
        case 1 :dayName = "Hét";
        break;
        case 2 :dayName = "Ked";
        break;
        case 3 :dayName = "Szer";
        break;
        case 4 :dayName = "Csü";
        break;
        case 5 :dayName = "Pén";
        break;
        case 6 :dayName = "Szom";
        break;
    default:dayName = "unknown";
}
weekday = 10;
10
'unknown'


//While ciklus
let i = 0;
while(i <10){
    i++;
    console.log(i);
}
1
2
3
4
5
6
7
8
9
10
undefined

let animal = {namw: "Cat", age: 3};
undefined
let keys = Object.keys(animal);
while(i < keys.length){
    i++;
    console.log(animal[keys[i]]);
}
cat
3
1

i = 10;
do {
    console.log(i);
    i++;
}
while(i < 0);
10
