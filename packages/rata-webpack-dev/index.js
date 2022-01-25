#!/usr/bin/env node

const webpack = require('webpack');
const webpackDev = require('webpack-dev-server');
const path = require('path');
const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');

const getPages = require('./lib/getPages');

const addRoutes = require('@rata/loader-routes/lib/addRoutes');

let defaultConfig = 'webpack.dev.config';

const devServerOptions = {
	port: 3000,
	open: false
}
console.log(addRoutes, 'ss')
async function start() {
	const args = yargs(hideBin(process.argv)).argv;
	const projectDir = process.cwd();
	if (args.config) {
		defaultConfig = args.config;
	}

	global.dirs = await getPages(projectDir + '/src/pages')
	// process.exit();

	const webpackConfigJson = require(path.join(projectDir, defaultConfig))

	webpackConfigJson.module.rules.unshift({
		test: new RegExp('.jsx?$'),
		use: {
			loader: '@rata/loader-routes',
			options: {
				entry: 'root.jsx'
			}
		},
		exclude: /node_modules/
	})

	const webpackCompiler = webpack(webpackConfigJson)

	const webpackDevServer = new webpackDev({...devServerOptions, ...webpackConfigJson.devServer}, webpackCompiler)
	await webpackDevServer.start();

}

start();