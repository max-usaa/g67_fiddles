// The code below is highly coupled with the DOM.

document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('addColorForm')
  form.addEventListener('submit', function (event) {
  	event.preventDefault()

    var input = document.getElementById('color-name')
    if (input.value) {
    	var placeholder = document.getElementById('placeholder')
    	if (placeholder) {
      	placeholder.remove()
      }

    	var ul = document.getElementById('colors')
    	var li = document.createElement('li')

			li.textContent = input.value
      ul.prepend(li)

      input.value = ''

      var span = document.querySelector('h1 span')
      var countText = span.textContent.slice(1, -1)
      var countNum = parseInt(countText)
			countNum++
      span.textContent = '(' + countNum + ')'
    }
  })
})
