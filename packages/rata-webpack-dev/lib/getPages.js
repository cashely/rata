const glob = require('glob');

module.exports = function getPages(dir) {
	return new Promise(resolve => {
		glob('**/**/rata.json', {
		}, (err, files) => {
			resolve(files)
		})
	})
}