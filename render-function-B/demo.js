// The code below is better because the DOM reflects the state in JavaScript.

var colors = []

document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('addColorForm')
  form.addEventListener('submit', function (event) {
  	event.preventDefault()

    var input = document.getElementById('color-name')
    if (input.value) {
      colors.push(input.value)

      input.value = ''
			var lis = document.querySelectorAll('ul li')
    	lis.forEach(function (li) {
      	li.remove()
      })

      colors.forEach(function (color) {
      	var ul = document.getElementById('colors')
        var li = document.createElement('li')

        li.textContent = color
        ul.prepend(li)
      })

			document.querySelector('h1 span').textContent = '(' + colors.length + ')'
    }
  })
})
