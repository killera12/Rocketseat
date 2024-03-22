export default function() {
  const buttonPressAudio = new Audio("../assets/audio/click-audio.mp3")

  const finishTimer = new Audio("../assets/audio/timerEnd.mp3")

  const bgAudio = new Audio("../assets/audio/bg.mp3")

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    finishTimer.play()
  }


  bgAudio.loop = true


  return {
    pressButton,
    timeEnd,
    bgAudio
  }
}