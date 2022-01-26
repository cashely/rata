#!/usr/bin/env node

const webpack = require('webpack');
const webpackDev = require('webpack-dev-server');
const path = require('path');
const yargs = require('yargs/yargs');

const { hideBin } = require('yargs/helpers');

let defaultConfig = 'webpack.dev.config';

const devServerOptions = {
	port: 3000,
	open: false
}

async function start() {
	const args = yargs(hideBin(process.argv)).argv;
	const projectDir = process.cwd();
	if (args.config) {
		defaultConfig = args.config;
	}

	const webpackConfigJson = require(path.join(projectDir, defaultConfig))

	// 插入入口检测文件

	webpackConfigJson.module.rules.unshift({
		test: new RegExp('\.jsx?$'),
		use: {
			loader: '@rata/loader-routes'
		},
		exclude: /node_modules/
	});

	// console.log(webpackConfigJson.module.rules)
	// process.exit()

	const webpackCompiler = webpack(webpackConfigJson)

	const webpackDevServer = new webpackDev({...devServerOptions, ...webpackConfigJson.devServer}, webpackCompiler)
	await webpackDevServer.start();

}

start();