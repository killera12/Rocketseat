// Seleciona os elementos do formulário
const amount = document.querySelector("#amount")

// Captura o evento de input para formatar o valor
amount.oninput = () => {
  // Obtém o valor do input e remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, "")

  // Transformar o valor em centavos (exemplo: 150/100 = 1.5 que é igual a R$ 1,50).
  value = Number(value) / 100

  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL (Real Brasileiro)
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  // Retorna o valor formatado.
  return value
}