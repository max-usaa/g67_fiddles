var form = document.getElementById('myForm')
form.addEventListener('submit', function (e) {
	e.preventDefault()

	var name = document.getElementById('name')
  var text = name.value

	name.value = ''
  name.focus()

  var prev = document.querySelector('.alert')
  if (prev) {
  	prev.remove()
  }

  if (text) {
    var alert = document.createElement('div')
    alert.className = 'alert alert-danger'
    alert.textContent = 'Please add your name! It is required.'

    var row = document.querySelector('form')
    row.append(alert)
  } else {
    var alert = document.createElement('div')
    alert.className = 'alert alert-info'
    alert.textContent = 'Thank you for your submission, ' + text + '!'

    var row = document.querySelector('form')
    row.append(alert)
  }
})
