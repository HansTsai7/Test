// PharMartオブジェクトの初期化
var PharMart;
(function () {
	if (!PharMart) {
		PharMart = {};
	}
	PharMart.Dialog = {
		openModeless: function (url, arg, option) {
			var w = window;
			if (typeof (arg) != 'undefined' && arg != null) {
				var darg = arg;
				if (arg instanceof Array) {
					for (var item in arg) {
						if (item.open != 'undefined') {
							w = item;
							break;
						}
					}
				}
				else if (arg.open != 'undefined') {
					w = arg;
				}
			}
			w.open(url, '_blank', option);
		}
	};
	PharMart.iefaster = function (props) {
		var code = [];
		for (var i = 0, l = props.length; i < l; i++) {
			var prop = props[i];
			window['_' + prop] = window[prop];
			code.push(prop + '=_' + prop)
		}
		return 'var ' + code.join(',');
	};
})();

// IE高速化コード
/*@cc_on
eval(PharMart.iefaster('self top parent alert setInterval clearInterval setTimeout clearTimeout'.split(' ')));
if (getBrowserVersion() < 9) {
    eval(PharMart.iefaster(['document']));
}

// Firebug console.debug 互換用コード
var console = {};
console.debug = function (output) {
    Debug.writeln(output);
};
@*/

function getBrowserVersion() {
    return parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.
                       exec(navigator.userAgent) || [, 0])[1]);
}

if (!window.JSON) {
    window.JSON = {
        parse: function (sJSON) { return eval("(" + sJSON + ")"); },
        stringify: function (vContent) {
            if (vContent instanceof Object) {
                var sOutput = "";
                if (vContent.constructor === Array) {
                    for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
                    return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
                }
                if (vContent.toString !== Object.prototype.toString) { return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\""; }
                for (var sProp in vContent) { sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp]) + ","; }
                return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
            }
            return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"" : String(vContent);
        }
    };
}

