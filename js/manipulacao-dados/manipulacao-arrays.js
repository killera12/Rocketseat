// Manipulando Arrays

let techs = ["html", "css", "js"]

// adcionar um item no fim
techs.push("nodejs")
// adcionar no começo
techs.unshift("SQL")
// remover do fim
techs.pop()
// remover do começo
techs.shift()

// pegar somente alguns elementos do array

/*
    console.log(techs.slice(1,3))
*/

// remover 1 ou mais itens em qualquer posição do array
/*
    techs.splice(1,1) // remove só o "css"
*/ 


// encontrar a posição de um elemento no array

let frutas = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Limão']

let index = frutas.indexOf("Banana")
frutas.splice(index, 1)

console.log(frutas)
