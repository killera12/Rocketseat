/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite o número da opção desejada


    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.

  ---
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes
  cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existem itens cadastrado"
  Caso o suário digite 3, a aplicação deverá ser encerrada
  

*/

let user
let option
let list = []

user = prompt("Bem vindo! Digite seu nome para continuar.")

while(user.trim() == "" || user == null) {
  user = prompt("Bem vindo! Digite seu nome para continuar.")

  if(user == null){
    alert("Você pressionou Cancelar. O programa será encerrado.")
  }
}



while(option != 3) {
  option = Number(prompt(`Olá ${user}! Digite o número da opção desejada


  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa.`))

  switch(option) {
    case 1:
      let itemsList = prompt("Digite o nome do item:")
      while(itemsList !== '' && itemsList !== null){
        if(list.includes(itemsList)){
          alert("Item já adicionado!")
        } else {
          list.push(itemsList)
        }
        itemsList = prompt(`Digite o próximo item ou (CANCELAR) para sair`)
      }
      break;
    case 2:
      if(list == ""){
        alert("ERRO! Não existem itens cadastrado.")
      } else {
        alert(`Items na lista: ${list}`)
      }
      break;
    case 3:
      break;
    default:
      alert("Opção Inválida, tente novamente!")
  }
}

