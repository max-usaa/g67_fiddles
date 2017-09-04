/*
	For each comment where you see 'EXPLAIN:' add an explanation as to what is happening on the line below. Be as verbose as possible! For the line with `preventDefault`, try clicking the 'Submit' button without it first. Then, comment that code in and see how it changes.
*/

// EXPLAIN:
var form = document.getElementById('myForm')
// EXPLAIN:
form.addEventListener('submit', function (e) {
	// EXPLAIN:
	// e.preventDefault()

	var name = document.getElementById('name')
  var text = name.value

	// EXPLAIN:
	name.value = ''
  // EXPLAIN:
  name.focus()

  // EXPLAIN:
  var prev = document.querySelector('.alert')
  if (prev) {
	  // EXPLAIN:
  	prev.remove()
  }

  var alert = document.createElement('div')
  alert.className = 'alert alert-info'
  alert.textContent = 'Thank you for your submission, ' + text + '!'

  var row = document.querySelector('form')
  // EXPLAIN:
  row.append(alert)
})
