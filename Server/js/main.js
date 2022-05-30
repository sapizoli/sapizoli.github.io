//GET data from the server
function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };
    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}
document.querySelector("#getDataBtn").addEventListener("click", function () {
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
});
//Fill table with server data.
function fillDataTable(data, tableID) {
    let table = document.querySelector('#${tableID}');
    if (!table) {
        console.error('Table "${tableID}" is not found.');
        return;
    }
    let tBody = table.querySelector("tbody");
    for (let row of data) {
        console.log(row);
    }
}
