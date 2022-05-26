//Callback függvény
const buttonClickHandler = () => console.log("Katt");
const button = document.querySelector("submitButton");
button.addEventListener("click", buttonClickHandler);
console.log("Utolsó utasítás");


//Promise (fulfill vagy reject ág)
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Piri" });
    }, 3000);
});
myPromise.then(
    data => console.log(data),
    err => console.error(err)
);


//Fetch
let fetchInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"
};
fetch("http://localhost:3000/users", fetchInit).then(
    data => data.json(),
    err => console.error(err)
).then(
    users => console.log(users)
);
