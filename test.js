'use strict'

const assert = require('assert')
const https = require('https')
const pem = require('./')

const server = https.createServer(pem, function (req, res) {
  res.end('foo')
})

server.listen(function () {
  const opts = {
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
