let FPS = 60

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

if (window.innerHeight > window.innerWidth) {
  document.body.classList.add("mobile")
}
