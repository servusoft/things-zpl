things-zpl
==========

## a ZPL converter from/to a model (JSON) format

### installing

original version:
  `git clone https://github.com/heartyoh/things-zpl`

fixed (qrcode) version:
  `git clone https://github.com/servusoft/things-zpl`
  `cd things-zpl`
  `npm install`

### build
  `npm run compile` to create `./lib/api`
  `npm run build` to create `things-zpl[-min].js`

### using
  `var zpl = require("./src/api");`
or
  `import zpl from './things-zpl';`

convert zpl -> model
  `var converter = zpl.zpl`
  `var model = converter.convert(zpl)`

convert model -> zpl
  `var reverter = zpl.zpl`
  `var zpl = reverter.revert(model)`


### develop
using from source:   adopt `index.js` as
`var zpl = require("./src/api");`

use comiled: adopt `index.js` as
`var zpl = require("./lib/api")`


### license 
ISC License
