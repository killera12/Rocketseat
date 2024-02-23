/*
  Dada uma lista de pacientes, descrubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y o IMC desse paciente

  Crie uma função para fazer o cálculo do IMC
*/

const patients = [
  {
    name: "Victor",
    age: 20,
    weight: 76,
    height: 181,
  },
  {
    name: "Alfredo",
    age: 12,
    weight: 41,
    height: 152,
  },
  {
    name: "Alice",
    age: 18,
    weight: 47,
    height: 160,
  }
]

function IMC(weight, height) {
 return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `O paciente ${patient.name} possui o IMC: ${IMC(patient.weight, patient.height)}`
}


for(patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
} 