let num1 = document.querySelector(".num-1");
let num2 = document.querySelector(".num-2");

let add = document.querySelector(".add");
add.addEventListener("click", function(){
    alert(Number(num1.value)+Number(num2.value));
});


let sub = document.querySelector(".sub");
sub.addEventListener("click", function(){
    alert(Number(num1.value)-Number(num2.value));
});


let mul = document.querySelector(".mul");
mul.addEventListener("click", function(){
    alert(Number(num1.value)*Number(num2.value));  
});


let div = document.querySelector(".div");
div.addEventListener("click", function(){
    alert(Number(num1.value)/Number(num2.value));
});