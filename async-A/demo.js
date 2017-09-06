document.addEventListener('DOMContentLoaded', function () {
	var count = 0
  var timerNum, timerEvenOrOdd

  document.getElementById('start').addEventListener('click', function () {
    timerNum = setInterval(function () {
      count++

      var number = document.querySelector('span.number')
      number.textContent = count
    }, 200)

    timerEvenOrOdd = setInterval(function () {
      var evenOrOdd = document.querySelector('span.evenOrOdd')
      evenOrOdd.textContent = (count % 2 === 0) ? 'even' : 'odd'
    }, 200)
  })

  document.getElementById('stop').addEventListener('click', function () {
  	clearInterval(timerNum)
    clearInterval(timerEvenOrOdd)
  })
})
