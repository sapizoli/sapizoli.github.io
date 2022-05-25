/*<tr class="table-danger">
    < th scope="row" > 2</th >
    <td>Zoli</td>
    <td>Hajni</td>
    <td>Judit</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn-info btn">
                <i class="fas fa-sync"></i>
            </button>
            <button class="btn-btn-danger">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </td>
</tr >
*/
let user = [
    { surname: "Berger", firstname: "whitney", age: 22, }
{ surname: "nagy", firstname: "árpi", age: 67, }
{ surname: "kiss", firstname: "bence", age: 30, }
];
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}
for(let k in users){
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    tableBody.appendChild(tr);
}