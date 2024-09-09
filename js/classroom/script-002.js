const creditCard = "1234567812344928"
// console.log(creditCard.length)

// Pega os 4 últimos dígitos.
const lastDigits = creditCard.slice(-4)
//console.log(lastDigits)

// O pedStart  preenche a string do inicio.
const maskedNumber = lastDigits.padStart(creditCard.length, "X")
console.log(maskedNumber)

// O pedEnd  preenche a string do final.
const number = "123"
console.log(number.padEnd(10, "#"))