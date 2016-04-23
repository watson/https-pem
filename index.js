'use strict'

var fs = require('fs')

exports.key = fs.readFileSync('./key.pem')
exports.cert = fs.readFileSync('./cert.pem')
