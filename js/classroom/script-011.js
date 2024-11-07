// Função que retorna um Promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona 
    setTimeout(() => {
      // setTimeout cria um delay
      const isSuccess = true

      if(isSuccess) {
        resolve("A operação foi concluída com sucesso.")
      } else {
        reject("Algo deu errado!")
      }
    }, 3000) // Simula uma operação assíncrona que leva 3s. 
  })
}

// Visualizando que o retorno é uma promise.
//console.log(asyncFunction())

console.log("Executando função assíncrona....")

// const response = asyncFunction()
// console.log(response)

asyncFunction()
  .then((response) => {
    console.log("Sucesso:", response)
  }).catch((error) => {
    console.log("Erro:", error)
  }).finally(() => {
    console.log("Fim da execução")
  })