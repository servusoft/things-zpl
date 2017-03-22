things-zpl
==========

## a ZPL converter from/to a model (JSON) format

### installing

original version:
  `git clone https://github.com/heartyoh/things-zpl`<br>

fixed (qrcode) version:
  `git clone https://github.com/servusoft/things-zpl`<br>
  `cd things-zpl`<br>
  `npm install`<br>

### build
  `npm run compile` to create `./lib/api`<br>
  `npm run build` to create `things-zpl[-min].js`<br>

### using
  `var zpl = require("./things-zpl");`<br>
or<br>
  `import zpl from "./things-zpl";`<br>

convert zpl -> model<br>
  `var converter = zpl.zpl;`<br>
  `var model = converter.convert(ZPL);`<br>

convert model -> zpl<br>
  `var reverter = zpl.zpl;`<br>
  `var ZPL = reverter.revert(model);`<br>

### develop
to using from source adopt `index.js` as:<br>
`var zpl = require("./src/api");`<br>

to useing as comiled adopt `index.js` as:<br>
`var zpl = require("./lib/api");`<br>

### license
ISC License
