document.addEventListener('DOMContentLoaded', function () {
	var count = 0
  var timerNum

  document.getElementById('start').addEventListener('click', function () {
    timerNum = setInterval(function () {
      count++

      var number = document.querySelector('span.number')
      number.textContent = count
      setTimeout(function () {
        var evenOrOdd = document.querySelector('span.evenOrOdd')
        evenOrOdd.textContent = (count % 2 === 0) ? 'even' : 'odd'
      }, 0)
    }, 200)
  })

  document.getElementById('stop').addEventListener('click', function () {
  	clearInterval(timerNum)
  })
})
