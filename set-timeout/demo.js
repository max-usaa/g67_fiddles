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
      // I expected these changes to happen one second after the previous changes because both setTimeouts are executed in one go, which makes it two seconds and three seconds starting from the same point in time.
      paragraph.style.padding = '50px'
      paragraph.style.margin = '50px'
    }, threeSecondsInMilliseconds)
  })
})
