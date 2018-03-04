const path = require("path")

const root = path.resolve(__dirname, "..")
const src = path.resolve(root, "src")
const dist = path.resolve(root, "dist")
const config = path.resolve(root, "config")
const tsconfig = path.resolve(root, "tsconfig.json")
const indexts = path.resolve(src, "index.tsx")
const storybook = path.resolve(root, "stories")

const paths = {
	root: root,
	src: src,
	dist: dist,
	config: config,
	tsconfig: tsconfig,
	indexts: indexts,
	storybook: storybook,
	jsoutput: "bundle.js"
}

module.exports = paths