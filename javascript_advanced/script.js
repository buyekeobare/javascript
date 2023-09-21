const bttn = document.getElementById("main-bttn");
let count = 0;
const colours = ["red", "green", "yellow", "blue"]

//bttn.addEventListener("click", function() {
//   if (count < colours.length) {
//     //console.log("Hello" + colours[count++]);
//     document.body.style.backgroundColor = colours[count++];
//     document.body.style.fontSize = "30px";
//     document.body.style.fontWeight = "900";
//   } else {
//     count = 0;
//   }
  
// })


  setInterval(function () {
      if (count < colours.length) {
    //console.log("Hello" + colours[count++]);
    document.body.style.backgroundColor = colours[count++];
    document.body.style.fontSize = "30px";
    document.body.style.fontWeight = "900";
  } else {
    count = 0;
  }
  
}, 1000);



//const body = document.body;
//const button = document.createElement("button");
//const bttnText = document.createTextNode("Text ME");
//button.setAttribute("id", "main-button");
//button.appendChild(bttnText);

//const div = document.createElement("div");
// const par = document.createElement("p");
// par.innerText = "Coding is amazing";
// div.appendChild(par);

// body.appendChild(button);
// body.appendChild(div);


