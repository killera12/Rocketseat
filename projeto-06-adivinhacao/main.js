// Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// Funções
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0){
    alert("Por favor, digite apenas números de 1 a 10.")
  } else
{
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}
  
}

function handleResetClick(){
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}







