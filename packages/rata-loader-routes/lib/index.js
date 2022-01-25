'use strict';
const path = require('path');
const addRoutes = require('./addRoutes');
module.exports = rataLoaderRoutes;

function rataLoaderRoutes(source, a, b) {
    // TODO
    const root = this.getOptions().entry;
    // 获取配置入口
    const basename = path.basename(this.resourcePath);
    console.log(basename, root, '====')
    if (basename === root) {
        source = addRoutes(source);
    }
    return source;
}
