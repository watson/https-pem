'use strict'

var path = require('path')
var fs = require('fs')

exports.key = fs.readFileSync(path.join(__dirname, 'key.pem'))
exports.cert = fs.readFileSync(path.join(__dirname, 'cert.pem'))
