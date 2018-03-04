const path = require('path')

const root = path.resolve(__dirname, "..")
const src = path.resolve(root, "src")
const dist = path.resolve(root, "dist")
const indexJs = path.resolve(src, "index.jsx")

module.exports = {
	entry: [indexJs],
	output: {
		path: dist,
		filename: 'bundle.js'
	}
}