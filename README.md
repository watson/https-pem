# https-pem

Self-signed PEM key and certificate ready for use in your HTTPS server.

A dead simple way to get an HTTPS server running in development with no
need to generate the self signed PEM key and certificate.

[![Build status](https://travis-ci.org/watson/https-pem.svg?branch=master)](https://travis-ci.org/watson/https-pem)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install https-pem
```

**Warning:** Upon installation a private key and a self signed
certificate will be generated inside `./node_modules/https-pem`. The
certificate is valid for 365 days and no attempt have been made to make
this secure in any way. I suggest only using this for testing and
development where you just need an easy and quick way to run an HTTPS
server with Node.js.

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

### Connecting

When connecting to an HTTPS server from Node.js that uses a self-signed
certificate, `https.request` will normally emit an `error` and refuse to
complete the reuqest. To get around that simply set the
`rejectUnauthorized` option to `false`:

```js
var opts = { rejectUnauthorized: false }

var req = https.request(opts, function (res) {
  // ...
})

req.end()
```

If using `curl` to connect to a Node.js HTTPS server using a
self-signed certificate, use the `-k` option:

```
curl -k https://localhost:443
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
