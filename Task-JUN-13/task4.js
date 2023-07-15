var select = document.getElementsByTagName('select');
var input = document.getElementsByTagName('input');
var text = document.getElementById("text");

text.style = "border: 3px black solid; display: inline-block; padding:10px 300px 100px 10px;"

select[0].onchange = () => {
    text.style.fontFamily = `${select[0].value}`;
}

select[1].onchange = () => {
    text.style.fontSize = `${select[1].value}`;
}

input[0].onchange = () => {
    if(input[0].checked){
        if(input[0].id == "italic") {
            text.style.fontStyle = `italic`;
        }
    }
    else{
        text.style.fontStyle = `initial`;
    }
}

input[1].onchange = () => {
    if(input[1].checked){
        if(input[1].id == "bold") {
            text.style.fontWeight = "bold";
        }
    }
    else{
        text.style.fontWeight = `initial`;
    }
}

input[2].onchange = () => {
    if(input[2].checked){
        if(input[2].id == "underline") {
            text.style.textDecoration = "underline";
        }
    }
    else{
        text.style.textDecoration = `initial`;
    }
}