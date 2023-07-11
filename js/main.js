 
let plusBtn = document.getElementById('btn1');
let minusBtn = document.getElementById('btn2');
let kopBtn =document.getElementById('btn3');
let boluBtn = document.getElementById('btn4');
let natija = document.getElementById('answer');

plusBtn.addEventListener("click", (e)=>{
    e.preventDefault();
   let inputone = document.getElementById('text1').value;
    let inputtwo = document.getElementById("text2").value;
    natija.textContent =+ inputone +  +inputtwo;
} )

minusBtn.addEventListener("click", (e)=>{
 e.preventDefault();

 let inputone = document.getElementById('text1').value;
 let inputtwo = document.getElementById("text2").value;

 natija.textContent = inputone - inputtwo;
})

kopBtn.addEventListener("click", (e)=>{
e.preventDefault();

let inputone = document.getElementById("text1").value;
let inputtwo= document.getElementById("text2").value;

natija.textContent =inputone * inputtwo ;

});


boluBtn.addEventListener("click", (e)=>{
e.preventDefault();

let inputone =document.getElementById('text1').value;
let inputtwo = document.getElementById('text2').value;

natija.textContent = inputone / inputtwo;
})
