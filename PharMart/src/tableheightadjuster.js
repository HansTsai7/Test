/*
 * 一覧テーブルの高さに合わせてスクロール用DIVの高さを調節する。
 * outerDivId  ：一覧外側のスクロール用DivのID
 * innerTableId：一覧内側のTableのID
 */
function AdjustTableHeight(outerDivId, innerTableId) {
    var d = document.getElementById(outerDivId);
    var t = document.getElementById(innerTableId);

    if (d == null) { return; }
    if (t == null) { return; }

    if (d.offsetHeight > t.offsetHeight) {
        d.runtimeStyle.height = t.offsetHeight;
    }
}