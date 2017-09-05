document.addEventListener('DOMContentLoaded', function () {
	var randomNumber = Math.ceil(Math.random() * 20)
  console.log('The random number is: ' + randomNumber)

	var form = document.getElementById('myForm')
  form.addEventListener('submit', function (event) {
  	event.preventDefault()

    var input = document.getElementById('guess')
    var guess = parseInt(input.value)
		var message = document.getElementById('message')

		message.className = ''
    message.textContent = ''

		if (guess < 0) {
      message.className = 'alert alert-danger'
      message.textContent = 'You may not guess less than 0! You shall not pass.'
    } else if (guess > 20) {
    	// Add the class of `alert-danger` and tell the user they got an error
    } else if (guess == randomNumber) {
    	// Add a class of `alert-success` and congratulate the user
    } else if (guess > randomNumber) {
    	// Give the user a helpful hint with `alert-info`
    } else if (guess < randomNumber) {
    	// Give the user a helpful hint with `alert-info`
    }

    input.focus()
  })
})
