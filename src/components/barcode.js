var scaleBuf = {};

function barcode(properties) {
	this.model = properties;

	this.toZpl = function() {
		var model = this.model;

		var height = model.height || '';
		var rotate = model.rot || '';
		var showText = model.showText || '';
		var textAbove = model.textAbove || ''
		var text = model.text || '';
		var symbol = model.symbol;
		var top = model.top || '';
		var left = model.left || '';
		var scale_w = model.scale_w || '';
		var scale_h = model.scale_h || '';

		var scale = '';
		var lines = [];
		if(scaleBuf.w != scale_w || scaleBuf.h != scale_h) {
			scaleBuf.w = scale_w;
			scaleBuf.h = scale_h;
			scale = ['^BY'+scale_w, scale_h]

			lines.push(scale)
		} else {
			scale_w = '';
		}

		if (showText) {
			height /= 1.221;	// barcode 높이는 문자 뺀 다음의 높이임.
		}

		var dpi = 200;
		var symbolMap = new Map([
			['code11', 				['^B1'+rotate, , height, showText, textAbove]],
			['interleaved2of5', 	['^B2'+rotate, height, showText, textAbove, ]],
			['code39', 				['^B3'+rotate, , height, showText, textAbove]],
			['code49', 				['^B4'+rotate, height, showText,]],
			['planet', 				['^B5'+rotate, height, showText, textAbove]],
			['pdf417', 				['^B7'+rotate, height, , , , ]],
			['ean8', 				['^B8'+rotate, height, showText, textAbove]],
			['upce', 				['^B9'+rotate, height, showText, textAbove, ]],
			['code93', 				['^BA'+rotate, height, showText, textAbove, ]],
			['codablock', 			['^BB'+rotate, height, , , , ]],
			['code128', 			['^BC'+rotate, height, showText, textAbove, , ]],
			['maxicode', 			['^BD'+rotate, , height, showText, textAbove]],
			['ean13', 				['^BE'+rotate, height, showText, textAbove]],
			['micropdf417', 		['^BF'+'2', , ]],
			['industrial2of5',		['^BI'+rotate, height, showText, textAbove]],
			['standard2of5', 		['^BJ'+rotate, height, showText, textAbove]],
			['ansicodabar', 		['^BK'+rotate, , height, showText, textAbove, , ]],
			['logmars', 			['^BL'+rotate, height, textAbove]],
			['msi', 				['^BM'+rotate, , height, showText, textAbove, ]],
			['plessey', 			['^BP'+rotate, , height, showText, textAbove]],
			['qrcode', 				['^BQ'+rotate, , 6]],	// TODO
			['upca', 				['^BU'+rotate, height, showText, textAbove, ]],
			['datamatrix', 			['^BX'+'']],	// TODO
			['postal', 				['^BZ'+rotate, height, showText, textAbove]]
		]);

		
		var params = symbolMap.get(symbol);

		
		lines.push('^FO' + left + ',' + top)
		lines.push(params.join(','))
		lines.push('^FD' + text)
		lines.push('^FS')

		var zpl = lines.join('\n') + '\n'

		return zpl;
	}
}

exports.Barcode = barcode;