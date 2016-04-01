var Text = require('./components/text').Text
var Barcode = require('./components/barcode').Barcode
var Rect = require('./components/rect').Rect
var Ellipse = require('./components/ellipse').Ellipse
var Line = require('./components/line').Line
var Group = require('./components/group').Group

exports.revert = function(components) {
	if (!components) return;

	var zpl = '^XA\n';
	zpl = makeZpl(components, zpl)
	zpl += '^XZ'

	return zpl
}


var groups = [];
function makeZpl(components, zpl) {
	if (!components) return;

	if (groups.length > 0) {
		var group = groups.pop();
	}

	components.forEach((c, i) => {
		switch(c.type) {
			case 'group':
				groups.push(Group(c));
				zpl += makeZpl(c.components, '')

				break;
			case 'text':
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
				var obj = new Line(c);

				break;
		}

    if(obj) {
      zpl += obj.toZpl(group);
      zpl += '\n';
    }
	});

  return zpl;
}
