const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.jsx',
	output: {
		filename: '[name].[chunkhash:8].js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.jsx?$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
		}]
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
	devServer: {
		port: 3000
	}
}