function ellipse(properties) {
	this.model = properties;

  this.toZpl = function() {
		var zpl = '';
		var rx = this.model.rx || 0;
		var ry = this.model.ry || 0;
		var cx = this.model.cx || 0;
		var cy = this.model.cy || 0;
		var lineWidth = this.model.lineWidth || '';
		var fillStyle = this.model.fillStyle || '';

		var left = cx - rx || '0';
		var top = cy - ry || '0';
		
		var command;
		if(rx == ry)
			command = 'GC'
		else
			command = 'GE'


		var symbolMap = new Map([
			['GC', 		['^GC' + rx, lineWidth, fillStyle]],
			['GE', 		['^GE' + rx, ry, lineWidth, fillStyle]],
		]);

		var zpl = '';
		var params = symbolMap.get(command);
		zpl += '^FO' + left + ',' + top + '\n';
		zpl += params.join(',')
		zpl += '^FS' + '\n';


		return zpl;
  }
}

exports.Ellipse = ellipse;