function createProduct(name){
  const product = {}

  product.name = name
  product.details = function() {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora.
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

// console.log(product1 === product2)

// Exemplos de funções construtoras disponíveis no próprio JavaScript.
let mayName = new String("Teste")
console.log(mayName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2025-01-01")
console.log(date)

//

function Person(name){
  this.name = name
  this.message = function () {
    console.log(`Olá, ${this.name}`)
  }
}

const person1 = new Person("Nickname")
console.log(person1.name)
person1.message()