document.addEventListener('DOMContentLoaded', function () {
	var count = 0
	var timer
  var startBtn = document.querySelector('button.btn-success')
  var stopBtn = document.querySelector('button.btn-danger')

	startBtn.addEventListener('click', function () {
		timer = setInterval(function () {
    	count++

			// Replace the `span` with the current count
    }, 1000)
  })

  // Add a new event listener to the stop button so that the timer stops!
})
