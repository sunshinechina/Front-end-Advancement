// 启动webpack  node webpack.js
const Complier = require('./lib/compiler')
const options = require('./webpack.config.js')

new Complier(options).run()