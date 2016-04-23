# https-pem

Self-signed PEM key and certificate ready for use in your HTTPS server.

A dead simple way to get an HTTPS server running in development with no
need to generate the self signed PEM key and certificate.

**Never use this in production of cause!**

[![Build status](https://travis-ci.org/watson/https-pem.svg?branch=master)](https://travis-ci.org/watson/https-pem)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install https-pem
```

## Example Usage

```js
var https = require('https')
var pem = require('https-pem')

var server = https.createServer(pem, function (req, res) {
  res.end('This is servered over HTTPS')
})

server.listen(443, function () {
  console.log('The server is running on https://localhost')
})
```

## API

The `https-pem` module simply exposes an object with two properties:
`key` and `cert`.

### `pem.key`

The private key (RSA).

### `pem.cert`

The certificate.

## License

MIT
