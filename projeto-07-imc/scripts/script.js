import { Modal } from "./modal.js"
import {alertError} from './alert-error.js'
import { notANumber, calculateIMC } from "./utils.js"

// variables
const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')

inputWeigth.oninput = () => {alertError.close()}
inputHeigth.oninput = () => {alertError.close()}
form.onsubmit = (event) => {
  event.preventDefault()

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  const weigthOrheigthIsNotANumber = notANumber(weigth) || notANumber(heigth)

  if(weigthOrheigthIsNotANumber) {
    alertError.open()
    return;
  }

  alertError.close()

  const result = calculateIMC(weigth, heigth)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.Massage.innerText = message
  Modal.open()
}


