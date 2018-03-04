const path = require('path')

const root = path.resolve(__dirname, "..")
const src = path.resolve(root, "src")
const dist = path.resolve(root, "dist")
const config = path.resolve(root, "config")
const tsconfig = path.resolve(root, "tsconfig.json")
const indexts = path.resolve(src, "index.tsx")

module.exports = {
	mode: "production",
	entry: [indexts],
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: [{
				loader: 'ts-loader',
				options: {
					configFile: tsconfig
				}
			}],
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		path: dist,
		filename: 'bundle.js'
	},
}