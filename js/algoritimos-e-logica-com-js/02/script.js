/*
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

alert("Iremos somar dois números.")

let numberOne = prompt("Digite um número:")
let numberTwo = prompt("Digite outro número:")
let result = Number(numberOne) + Number(numberTwo)

alert(`A soma entre ${numberOne} + ${numberTwo} = ${result}`)