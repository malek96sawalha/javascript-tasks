let ani1 =document.createElement("div");
let ani_cont = document.createTextNode('Hello world!')
ani1.appendChild(ani_cont);
document.body.appendChild(ani1)
ani1.style.cssText=`
background-color: yellow;
width:400px;height:60px;margin:10px 0 0 20px; text-align: center; padding:10px;font-size:25px;font-weight:600;
`
ani1.addEventListener('mouseover' ,change);
function change(){
    ani1.innerText="can i help you ?"
}
ani1.addEventListener("mouseout",change1);
function change1 (){
    ani1.innerText="Hello world!"

    
}
// change1()
// change()
console.log(ani1)
