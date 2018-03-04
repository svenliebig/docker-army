const paths = require('../paths')

module.exports = {
	module: {
		rules: [{
			test: /\.tsx?$/,
			include: [paths.src, paths.storybook],
			use: [{
				loader: 'ts-loader',
				options: {
					configFile: paths.tsconfig
				}
			}]
		}]
	}
}