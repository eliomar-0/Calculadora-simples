
// variaveis de inserir valores na calculadora
let first_value = document.querySelector(".first-value span")
let option = document.querySelector(".option span")
let second_value = document.querySelector(".second-value span")

// variaveis dos botoes da calculadora
let one = document.querySelector(".one span")
let two = document.querySelector(".two span")
let three = document.querySelector(".three span")
let four = document.querySelector(".four span")
let five = document.querySelector(".five span")
let six = document.querySelector(".six span")
let seven = document.querySelector(".number-seven span")
let eight = document.querySelector(".eight span")
let nine = document.querySelector(".nine span")
let zero = document.querySelector(".zero span")
let equal = document.querySelector(".equal span")
let more = document.querySelector(".more span")
let sub = document.querySelector(".sub span")
let comma = document.querySelector(".comma span")
let delet = document.querySelector(".delete span")
let divide = document.querySelector(".divide span")
let multiply = document.querySelector(".multiply span")

let count = 0;

function insertValue(){
    
}

one.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = "1"
    }
})