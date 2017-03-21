// use source:
var zpl = require("./src/api");

// use comiled:
// npm run compile
// var zpl = require("./lib/api")

// use in browswe:
// npm run build
// <script src="things-zpl-min.js"></script>

if (typeof window !== 'undefined')
  window.zpl = zpl

if (typeof exports !== 'undefined') {
  exports.zpl = zpl;
}
