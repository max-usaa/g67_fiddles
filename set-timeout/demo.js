document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', function () {
  	var paragraph = document.querySelector('p')
		var twoSecondsInMilliseconds = 2 * 1000

		setTimeout(function () {
      paragraph.style.color = 'white'
		  paragraph.style.backgroundColor = 'magenta'
    	paragraph.style.textTransform = 'uppercase'
    }, twoSecondsInMilliseconds)

    var threeSecondsInMilliseconds = 3 * 1000
		setTimeout(function () {
			/*
      	Make at least two more changes to the `paragraph` here. Do you expect these changes to take effect *three* seconds after the last changes or *one* second afterwards?
      */
    }, threeSecondsInMilliseconds)
  })
})
