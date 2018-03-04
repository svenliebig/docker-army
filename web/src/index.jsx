const react = require("react")
const reactdom = require("react-dom")

reactdom.render(<div>asdf</div>, document.getElementById("root"))

const API_URL = "http://localhost:4000"

const request = new XMLHttpRequest()
request.open("GET", `${API_URL}/get/goalsindex`)

request.addEventListener("load", (event) => {
	if (request.status >= 200 && request.status < 300) {
		console.log("request successful")
		console.log(request.responseText)
	} else {
		console.error("request failed")
		console.error(request.statusText, request.responseText)
	}
})

request.send()