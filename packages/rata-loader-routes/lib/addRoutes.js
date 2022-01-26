const path = require('path');
const { transformSync } = require('@babel/core');
const cwd = process.cwd();
module.exports = function addRoutes (source) {
	// body...
	console.log(source, global.dirs, '---')
	const routes = mapDirToRoutes(global.dirs);
	const imports = mapDirToImports(global.dirs);
	
	source = imports.join('\n')+ '\n' + source.replace(/"REACT_ROUTES"/, routes.join(','));
	console.log(/"REACT_ROUTES"/.test(source))
console.log(source, 'routes', imports);
	return transformSync(source, { presets: ['@babel/preset-env'] }).code;
}

function transformPathToName(p) {
	return path.normalize(path.dirname(p)).replace(/\/|-/g, '_').toUpperCase();
}

function mapDirToImports(dirs) {
	return dirs.map(dir => {
		return `import ${transformPathToName(dir)} from './${path.dirname(dir)}/index.jsx';`
	})
}


function mapDirToRoutes(dirs) {
	return dirs.map(dir => {
		const componentName = transformPathToName(dir);
		return `React.createElement(Route, {path: '${path.dirname(dir).split('/').slice(2).join('/')}',
			element: React.createElement(${transformPathToName(dir)}, {}, null)
		}, null)`
	})
}