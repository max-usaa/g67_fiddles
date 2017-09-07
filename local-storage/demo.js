document.addEventListener('DOMContentLoaded', function () {
	renderName()

	document.getElementById('myForm').addEventListener('submit', function (event) {
  	event.preventDefault()

    var input = document.getElementById('name')
    setName(input.value)
    renderName()
  })
})

function setName (name) {
	// Write code to set the name in Local Storage after submission
}

function renderName () {
	/*
    Write code here to render the name if it is stored in Local Storage or show the name 'Anonymous'
  */
}
