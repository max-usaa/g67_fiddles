document.addEventListener('DOMContentLoaded', function () {
	var count = 0
	var timer
  var startBtn = document.querySelector('button.btn-success')
  var stopBtn = document.querySelector('button.btn-danger')
  var span = document.querySelector('span')

	startBtn.addEventListener('click', function () {
		timer = setInterval(function () {
    	count++

			// Replace the `span` with the current count
      span.innerText = count
    }, 1000)
  })

  // Add a new event listener to the stop button so that the timer stops!
	stopBtn.addEventListener('click', function () {
  	clearInterval(timer)
  })
})
