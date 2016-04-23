'use strict'

var assert = require('assert')
var https = require('https')
var pem = require('./')

var server = https.createServer(pem, function (req, res) {
  res.end('foo')
})

server.listen(function () {
  var opts = {
    port: server.address().port,
    rejectUnauthorized: false
  }
  https.request(opts, function (res) {
    assert.strictEqual(res.statusCode, 200)
    res.on('data', function (chunk) {
      assert.strictEqual(chunk.toString(), 'foo')
      process.exit(0)
    })
  }).end()
})
