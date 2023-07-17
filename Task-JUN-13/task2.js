let teaxtChange =document.createElement("div");
let ani_cont = document.createTextNode('Hello world!')
teaxtChange.appendChild(ani_cont);
document.body.appendChild(teaxtChange)
teaxtChange.style.cssText=`
background-color: yellow;
width:400px;height:60px;margin:10px 0 0 20px; text-align: center; padding:10px;font-size:25px;font-weight:600;
`
teaxtChange.addEventListener('mouseover' ,change);
function change(){
    teaxtChange.innerText="Hello world!"
}
teaxtChange.addEventListener("mouseout",change1);
function change1 (){
    teaxtChange.innerText="can i help you ?"

    
}

console.log(teaxtChange)
