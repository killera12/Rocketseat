export const Modal = {

  Wrapper: document.querySelector('.modal-wrapper'),
  Massage: document.querySelector('.modal h2 span'),
  ButtonClose: document.querySelector('.modal button.close'),


  open() {
    Modal.Wrapper.classList.add('open')
  },
  close() {
    Modal.Wrapper.classList.remove('open')
  }
}

Modal.ButtonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {

  if(event.key === 'Escape') {
    Modal.close()
  }
}