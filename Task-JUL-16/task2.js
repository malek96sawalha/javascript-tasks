let data = document.getElementById("form1");
let input = document.getElementsByTagName("input");
let checkedd = document.getElementsByClassName("check");
function test() {
  for (let i = 0; i < input.length; i++) {
    localStorage.setItem(`${input[i].id}`, `${input[i].value}`);
  }
  for (let t = 0; t < checkedd.length; t++) {
    if (checkedd[t].checked) {
      localStorage.setItem(`${checkedd[t].id}`, `true`);
    } else {localStorage.setItem(`${checkedd[t].id}`, `false`);
  }
}};
if (localStorage.length > 0) {
  for (let j = 0; j < input.length - 1; j++) {
    let logstr = localStorage.getItem(`${input[j].id}`);
    input[j].value = logstr;
  }
  for (let l = 0; l < checkedd.length; l++) {
   localStorage.getItem(`${checkedd[l].id}`)
    if (localStorage[l] == `true`) {
        checkedd[l].checked = "true";
    } else {
        checkedd[l].removeAttribute('checked');
    }
    
  }
};
