/* 
  Capturar 2 números e fazer as operações 
  matemáticas de soma, subtração, 
  multiplicação, divisão e resto da divisão

  E para cada operação, mostrar um alerta
  com o resultado.\ 
*/

let firstNumber = prompt("Digite o primeiro número: ")

if(firstNumber === ""){
  alert("[ERRO] Digite um número para continuar!")
} else if (isNaN(firstNumber)) {
  alert("[ERRO] Digite apenas números!");
} else {
  let secondNumber = prompt("Digite o segundo número: ")

    if(isNaN(secondNumber)){
      alert("[ERRO] Digite apenas números!")
    } else {
      firstNumber = Number(firstNumber)
      secondNumber = Number (secondNumber)

      const sum = firstNumber + secondNumber
      const sub = firstNumber - secondNumber
      const multi = firstNumber * secondNumber
      const div = firstNumber / secondNumber
      const resDiv = firstNumber % secondNumber

      alert("Soma: " + sum)
      alert("Subtração: " + sub)
      alert("Multiplicação: " + multi)
      alert("Divisão: " + div)
      alert("Resto da divisão: " + resDiv)
    }
}
