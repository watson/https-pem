'use strict'

var pems = require('selfsigned').generate()

exports.key = pems.private
exports.cert = pems.cert
