// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

// Manipulando o input amount para receber somente números.
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g

  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit no formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// função para converter a moeda.
function convertCurrency(amount, price, symbol){
 try {
  // Exibindo a cotação da moeda selecionada.
  description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

  // Calcula o total
  let total = amount * price

  // Verifica se o resultado mão é um número.
  if(isNaN(total)) {
    return alert("Por favor, digite o valor corretamente para converter.")
  }

  total = formatCurrencyBRL(total).replace("R$", "")
  
  // Exibir o resultado total.
  result.textContent = `${total} Reais`

  // Aplica a classe que exibe o footer para mostrar o resultado.
  footer.classList.add("show-result")
 } catch (error) {
   // Remove a classe do footer removendo ele da tela.
   footer.classList.remove("show-result")
   
   console.log(error)
   alert("Não foi possível converter. Tente novamente mais tarde.")
 }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
  // Converte para numero para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}