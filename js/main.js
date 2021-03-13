let FPS = 1

// const audio = new Audio()
// audio.src = "/assets/ticksound.mp3"
// document.body.append(audio)
// audio.autoplay = "true"

setInterval(() => {
  const date = new Date()
  const hours = date.getHours()
  const mins = date.getMinutes()
  const secs = date.getSeconds()
  const millisecs = date.getMilliseconds()
  const secHandRotation = (secs + millisecs / 1000) * 6

  hour.style.transform = `rotateZ(${hours * 2}deg)`
  min.style.transform = `rotateZ(${mins * 5}deg)`
  sec.style.transform = `rotateZ(${secHandRotation}deg)`
}, 1000 / FPS)
