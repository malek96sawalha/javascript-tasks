let button = document.getElementById("data1");
let tbody = document.getElementById("tablebody");
let td = tablebody.value;
let x = new XMLHttpRequest();
x.open("GET", "https://reqres.in/api/users?page=2");
x.onload = function () {
  let y = JSON.parse(x.responseText);
  console.log(y);
  button.onclick = function () {
    let tabledata = "";

    for (let i = 0; i < 6; i++) {
      tabledata += `
    <tr>
    <td>${y.data[i].first_name}</td>
    <td>${y.data[i].last_name}</td>
    <td>${y.data[i].email}</td>
    </tr>
    `;
    }
    tbody.innerHTML = tabledata;
  };
};
x.send();
