
var text = selectBox.options[selectBox.selectedIndex].value;

function switchImg(){
    var selectBox = document.getElementById('flags');
    var value = selectBox.value;
    var flag = document.getElementById('image');

    flag.src = value+".png";
}