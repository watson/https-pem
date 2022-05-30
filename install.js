'use strict'

const fs = require('fs')
const path = require('path')
const selfsigned = require('selfsigned')

const pems = selfsigned.generate()

fs.writeFileSync(path.join(__dirname, 'key.pem'), pems.private)
fs.writeFileSync(path.join(__dirname, 'cert.pem'), pems.cert)
