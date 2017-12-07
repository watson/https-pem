'use strict'

var fs = require('fs')
var path = require('path')
var selfsigned = require('selfsigned')

var pems = selfsigned.generate()

fs.writeFileSync(path.join(__dirname, 'key.pem'), pems.private)
fs.writeFileSync(path.join(__dirname, 'cert.pem'), pems.cert)
