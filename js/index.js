
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
let clear = document.querySelector(".clear-all span")

let count = 0;

function insertValue(){
    
}

//adiciona os numeros na calculadora
one.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}1`
    }else{
        second_value.innerHTML = `${second_value.textContent}1`
    }
})
two.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}2`
    }else{
        second_value.innerHTML = `${second_value.textContent}2`
    }
})
three.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}3`
    }else{
        second_value.innerHTML = `${second_value.textContent}3`
    }
})
four.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}4`
    }else{
        second_value.innerHTML = `${second_value.textContent}4`
    }
})
five.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}5`
    }else{
        second_value.innerHTML = `${second_value.textContent}5`
    }
})
six.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}6`
    }else{
        second_value.innerHTML = `${second_value.textContent}6`
    }
})
seven.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}7`
    }else{
        second_value.innerHTML = `${second_value.textContent}7`
    }
})
eight.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}8`
    }else{
        second_value.innerHTML = `${second_value.textContent}8`
    }
})
nine.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}9`
    }else{
        second_value.innerHTML = `${second_value.textContent}9`
    }
})
zero.addEventListener("click", () => {
    if(count == 0){
        first_value.innerHTML = `${first_value.textContent}0`
    }else{
        second_value.innerHTML = `${second_value.textContent}0`
    }
})
comma.addEventListener("click", () => {
    if(count == 0){
        if(first_value.textContent != ""){
            first_value.innerHTML = `${first_value.textContent},`
        }
    }else{
        if(second_value.textContent != ""){
            second_value.innerHTML = `${second_value.textContent},`
        }
    }
})

// faz o processo de pegar os valores converter e fazer o calculo
function calcular(type){
    valor1 = parseFloat(first_value.textContent.replace(",", "."))
    valor2 = parseFloat(second_value.textContent.replace(",", "."))
    if(type == "+"){
        let result = valor1 + valor2
        animateValue()
    } else if(type == "/"){
        let result = valor1 / valor2
    } else if(type == "-"){
        let result = valor1 - valor2
    } else {
        let result = valor1 - valor2
    }
}


function animateValue(){
    first_value.style.fontSize = "15px"
    option.style.fontSize = "15px"
    second_value.style.fontSize = "15px"

}

equal.addEventListener("click", () => {
    if(first_value.textContent != "" && second_value.textContent != ""){
        if(option.textContent == "+"){
            calcular("+")
        } else if(option.textContent == "/"){
            calcular("/")
        } else if(option.textContent == "-"){
            calcular("-")
        }
    }
})

// define qual tipo de operação vai ser feita

multiply.addEventListener("click", () => {
    if(first_value.textContent != ""){
        option.innerHTML = "x"
        count = 1
    }
})
sub.addEventListener("click", () => {
    if(first_value.textContent != ""){
        option.innerHTML = "-"
        count = 1
    }
})
more.addEventListener("click", () => {
    if(first_value.textContent != ""){
        option.innerHTML = "+"
        count = 1
    }
})
divide.addEventListener("click", () => {
    if(first_value.textContent != ""){
        option.innerHTML = "/"
        count = 1
    }
})

// Limpa todos os valores da calculadora
clear.addEventListener("click", () => {
    first_value.textContent = ''
    second_value.textContent = ''
    option.textContent = ''
    count = 0
})



// função de deletar
function checkDelete(){
    if(second_value.textContent == "" && option.textContent == ""){
        deletar(0, first_value.textContent)
    } else if(option.textContent != "" && second_value.textContent == ""){
        option.textContent = ""
        count = 0
    } else{
        deletar(2, second_value.textContent)
    }
}

function deletar(i, str){
    if(i == 0){
        let valor = str.slice(0, -1);
        first_value.textContent = valor
    }if(i == 2){
        let valor = str.slice(0, -1);
        second_value.textContent = valor
    }
}
delet.addEventListener("click", () => {
    checkDelete()
})