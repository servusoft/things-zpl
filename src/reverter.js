var Text = require('./components/text').Text
var Barcode = require('./components/barcode').Barcode
var Rect = require('./components/rect').Rect
var Ellipse = require('./components/ellipse').Ellipse
var Line = require('./components/line').Line

exports.revert = function(components) {

	if (!components) return;

	var zpl = '^XA\n';
	components.forEach((c, i) => {
		switch(c.type) {
			case 'text':
			case 'fitted_text':
				var obj = new Text(c);
				break;
			case 'barcode':
				var obj = new Barcode(c);
				break;
			case 'rect':
				var obj = new Rect(c);
				break;
			case 'ellipse':
				var obj = new Ellipse(c);
				break;
			case 'image':
				break;
			case 'line':
				var obj = new  Line(c);
				break;
		}

		zpl += obj.toZpl();
		zpl += '\n';
	});

	zpl += '^XZ'
  return zpl;
}