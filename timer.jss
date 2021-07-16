let timeRemaining = 5
let timerElement = document.getElementById('count')

function countdown () {
  timeRemaining = timeRemaining - 1
  timerElement.innerText = timeRemaining
  if (timeRemaining <= 0) {
    timerElement.innerText = `It's Future Code Time!`
  } else {
    timerElement.innerText = timeRemaining
 }
}

setInterval(countdown, 1000)

