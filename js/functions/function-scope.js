// function scope

let subject

function creatThink() {
  subject = 'study'
}

console.log(subject) // undefined
creatThink() 
console.log(subject) // study

