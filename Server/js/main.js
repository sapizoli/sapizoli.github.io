//GET data from the server
function getServerData(url){
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };
    fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    ).then(
        data => console.log(data)
    );
}
getServerData("http://localhost:3000/users").then(
    data => console.log(data)
);
