let button = document.getElementById("data")
let tbody = document.getElementById("tablebody")
let td = tablebody.value
let x = new XMLHttpRequest();
x.open("GET","task.json")
button.onclick = function() {
let tabledata = "";
const y = JSON.parse(x.responseText);
for (let i = 0; i < 5; i++) {
    tabledata += `
    <tr>
    <td>${y.name[i]}</td>
    <td>${y.age[i]}</td>
    <td>${y.major[i]}</td>
    <td>${y.university[i]}</td>
    <td><img src="${y.image[i]}"></td>
    </tr>
    `
}
tbody.innerHTML = tabledata
}

x.send();