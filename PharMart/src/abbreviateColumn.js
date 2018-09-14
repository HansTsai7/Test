/*
 * 長い名称を切り詰める
 * <td id="～～～～"><asp:Label title='<%～～～%>' /></td>の形式のみの対応
 */
//短縮対象のセルに…をつける
//colname：短縮対象の列のID
function abbrCols(colname) {
    var cols = $("td[id='" + colname + "']");
    if (cols.length == 0) { return; }

    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];
        var span = $(col).find("span");
        //var width = $(col).attr("offsetWidth");
        var width = $(col).width();
        trimL(width, span);
    }
}
//短縮対象のセルに…をつける
//maxWidth:tdタグの最大長
//span:切り詰める対象のspanタグ
function trimL(maxWidth, span) {
    var text = $(span).attr("title");
    $(span).attr("innerText", text)
    var curwidth = $(span).attr("offsetWidth");

    if (text.length == 0) {
        $(span).attr("innerText", ' ')
        $(span).removeAttr("title")
        return;
    }
    if (curwidth <= maxWidth) {
        $(span).removeAttr("title")
        return;
    }

    var s = text;
    for (var i = text.length - 1; i >= 1; --i) {
        s = s.slice(0, i) + '...';
        $(span).attr("innerText", s);
        curwidth = $(span).attr("offsetWidth");
        if (curwidth <= maxWidth) {return;}
    }
}

/*
* 長い名称を切り詰める
* <td id="～～～～"><asp:Label title='<%～～～%>' /></td>の形式のみの対応
*/
//短縮対象のセルに…をつける
//colname：短縮対象の列のID
//dispLen:表示できる桁数
function trimCols(colname, dispLen) {
    var cols = $("td[id='" + colname + "']");
    if (cols.length == 0) { return; }

    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];
        var span = $(col).find("span");
        var width = $(col).width();
        trimText(width, span, dispLen);
    }
}

//短縮対象のセルに…をつける
//maxWidth:tdタグの最大長
//span:切り詰める対象のspanタグ
//dispLen:表示できる桁数
function trimText(maxWidth, span, dispLen) {
    var text = $(span).attr("title");
    $(span).attr("innerText", text)
    var curwidth = $(span).attr("offsetWidth");

    if (text.length == 0) {
        $(span).attr("innerText", ' ')
        $(span).removeAttr("title")
        return;
    }
    if (curwidth <= maxWidth) {
        $(span).removeAttr("title")
        return;
    }

    var max = text.length;
    var trimText = text;

    // 指定された桁数-2から始める
    dispLen = dispLen - 2;
    if (dispLen < 0) {
        dispLen = 0;
    }

    var s = text.slice(0, dispLen) + '...';
    $(span).attr("innerText", s);
    curwidth = $(span).attr("offsetWidth");

    // 初回で幅が超えている場合、文字を削る
    if (curwidth > maxWidth) {
        dispLen = dispLen - 1;
        
        for (var i = dispLen; i >= 1; --i) {
            s = text.slice(0, i) + '...';
            $(span).attr("innerText", s);
            curwidth = $(span).attr("offsetWidth");
            if (curwidth <= maxWidth) { return; }
        }
    } else {
        trimText = s;
        dispLen = dispLen + 1;
    
        for (var i = dispLen; i < max; ++i) {
            var s = text.slice(0, i) + '...';
            $(span).attr("innerText", s);
            curwidth = $(span).attr("offsetWidth");

            if (curwidth > maxWidth) {
                $(span).attr("innerText", trimText);
                return;
            }

            trimText = s;
        }
    }
}