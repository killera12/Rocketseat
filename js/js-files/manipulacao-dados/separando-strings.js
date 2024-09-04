// Manipulando Strings e Números

// Separe o texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"

let phrase = 'Contra todo ditador que no Timão quiser mandar!'

let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore.toLocaleLowerCase())

