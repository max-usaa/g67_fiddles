document.addEventListener('DOMContentLoaded', function () {
	var input = document.getElementById('title')
  input.addEventListener('keyup', function (event) {
  	var text = event.target.value
    var textArray = text.split(' ')
    var titlecaseArray = textArray.map(function (word) {
    	return word ? word[0].toUpperCase() + word.slice(1) : ''
    })
    var titlecase = titlecaseArray.join(' ')

    event.target.value = titlecase
  })
})
