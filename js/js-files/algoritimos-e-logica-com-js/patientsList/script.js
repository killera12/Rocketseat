/*

  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso 
    altura

  Escreva uma lista contendo o nome dos pacientes

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

let patientsName = []

for(patient of patients){
  patientsName.push(`
  O paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem ${patient.height} cm`)
}

alert(patientsName)