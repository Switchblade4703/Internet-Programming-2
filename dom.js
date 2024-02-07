const element = document.querySelector("div");
for(let i = 0; i < 5; i++){
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    //console.log(document.querySelector("div"));
    //const element = document.querySelector("div");
    
    element.appendChild(para);
}

function changeBackground() {
    document.body.style.background = "red";
    element.style.backgroundColor = "green";
    
 }

 document.querySelector("button").addEventListener("click", changeBackground);
