// PharMartオブジェクトの初期化
var PharMart = {};

PharMart.readyfunction = {
    suggest: function () {
        $("select[suggest]").change(function () {

            var target = "#" + this.getAttribute("target"); 		// 反映するMRドロップダウンのID
            var isBlank = this.getAttribute("blank"); 				// ブラックありか？

            switch (this.getAttribute("suggest")) {
                // 下位組織に紐付くMRの一覧を取得する。
                case "KaiSskMr":
                    var data = { KAI_SSK_CD: $(this).val() };

                    $.ajax({
                        url: "../HttpHandler/KaiSskMr.ashx",
                        type: 'POST',
                        data: data,
                        cache: true,
                        dataType: 'json',
                        success: function (o) {
                            var drp = "";
                            if (isBlank == "True") {
                                drp += "<option value=''></option>";
                            }

                            $.each(o, function (index, value) {
                                //alert("<option value=" + value.ShaCd + ">" + value.ShaMei + "</option>");
                                drp += "<option value=" + value.ShaCd + ">" + value.ShaMei + "</option>";
                            });

                            $(target).html(drp);
                        },
                        error: function (o) {
                            alert("システムエラーが発生しました。");
                        }
                    });
                    break;

                // 上位組織に属する下位組織の一覧を取得する。
                case "JoiSskKai":
                    var data = { JOI_SSK_CD: $(this).val() };

                    $.ajax({
                        url: "../HttpHandler/JoiSskKai.ashx",
                        type: 'POST',
                        data: data,
                        cache: true,
                        dataType: 'json',
                        success: function (o) {
                            var drp = "";
                            if (isBlank == "True") {
                                drp += "<option value=''></option>";
                            }

                            $.each(o, function (index, value) {
                                //alert("<option value=" + value.KaiSskCd + ">" + value.KaiSskMei + "</option>");
                                drp += "<option value=" + value.KaiSskCd + ">" + value.KaiSskMei + "</option>";
                            });

                            $(target).html(drp);
                        },
                        error: function (o) {
                            alert("システムエラーが発生しました。");
                        }
                    });
                    break;

                // 都道府県から市区町村の一覧を取得する。
                case "TdfKn":
                    var data = { PREF_CD: $(this).val() };

                    $.ajax({
                        url: "../HttpHandler/TodofukenShikuchoson.ashx",
                        type: 'POST',
                        data: data,
                        cache: true,
                        dataType: 'json',
                        success: function (o) {
                            var drp = "";
                            if (isBlank == "True") {
                                drp += "<option value=''></option>";
                            }

                            $.each(o, function (index, value) {
                                //alert("<option value=" + value.ShaCd + ">" + value.ShaMei + "</option>");
                                drp += "<option value=" + value.cityCode + ">" + value.cityMei + "</option>";
                            });

                            $(target).html(drp);
                        },
                        error: function (o) {
                            alert("システムエラーが発生しました。");
                        }
                    });
                    break;

            }
        });
    },

    datepicker: function () {
        // テキストボックスにclass="Calendar"を設定する。

        var datepicker = $(".Calendar");
        /*
        datepicker.click(function () {
        this.value = '';
        });
        */
        datepicker.each(function () {
            $(this).datepicker();
        });

    },
    ShowMsg: function (summary) {
        if (summary != null && summary != undefined) {
            var message = "";

            if (PharMart.SummaryDispFlg.val() == "0") {
                // ValidationSummaryからメッセージを取得する
                summary.children("font").each(function () {
                    if (message != "") {
                        message += "\n";
                    }

                    message += this.innerHTML;
                });

                if (message != "") {
                    // ValidationSummary非表示
                    summary.css('display', 'none');
                    setTimeout(function () { alert(message); }, 1);
                }
            } else {
                // ValidationSummary常に非表示
                summary.css('display', 'none');
            }
        }
    },
    ShowMsgForPopup: function (summary, flg) {
        if (summary != null && summary != undefined) {
            var message = "";

            if (flg == "0") {
                // ValidationSummaryからメッセージを取得する
                summary.children("font").each(function () {
                    if (message != "") {
                        message += "\n";
                    }

                    message += this.innerHTML;
                });

                if (message != "") {
                    // ValidationSummary非表示
                    summary.css('display', 'none');
                    setTimeout(function () { alert(message); }, 1);
                }
            } else {
                // ValidationSummary常に非表示
                summary.css('display', 'none');
            }
        }
    },
    ShowVariableMsg: function (summary) {
        if (summary != null && summary != undefined) {
            var message = "";

            if (PharMart.SummaryDispFlg.val() == "0") {
                // ValidationSummaryからメッセージを取得する
                summary.children("font").each(function () {
                    if (message != "") {
                        message += "\n";
                    }

                    message += this.innerHTML;
                });

                if (message != "") {
                    // ValidationSummary非表示
                    summary.css('display', 'none');
                    setTimeout(function () { alert(message); }, 1);
                }
            } else {
                // ValidationSummaryを表示
                summary.css('display', '');
            }
        }
    },
    EnterKeyEvent: function () {
        $("#ctl00_MainContent_EnterKey").keyup(function (event) {
            alert('EnterKey Keyup');
            if (event.keyCode == 13) {
                __doPostBack('<%= EnterKeyEventButton.UniqueID %>', "");
            }
        });
    },
    ControlKeyDown: function () {
        if (event.keyCode == 8 &&
            event.srcElement.type != "text" &&
            event.srcElement.type != "textarea" &&
            event.srcElement.type != "password") {
            event.keyCode = 0;
            return false;
        }
        else if (event.keyCode == 13 &&
                event.srcElement.type != "textarea") {
            // ターゲットボタンの設定があればそちらを優先する。
            var targetButton = event.srcElement.getAttribute("TargetButton");
            if (targetButton) {
                document.getElementById(targetButton).click();
                return false;
            }
            else {
                // IE9と11だとkeyCodeが書き換えられないのでその場合はEnterを無効にする
                if (!CheckBrowse()) {
                    event.keyCode = 9;
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return true;
    }
}


$(function () {
    // ■サジェスト機能の設定■
    PharMart.readyfunction.suggest();

    // ■Datepickerの設定■
    $.datepicker.regional['ja'] = {
        closeText: '閉じる',
        prevText: '前月',
        nextText: '次月',
        currentText: '今日',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月'],
        dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
        weekHeader: '週',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        changeYear: true,
        changeMonth: true,
        showButtonPanel: true,
        yearSuffix: '&nbsp;年&nbsp;&nbsp;'
    };
    $.datepicker.setDefaults($.datepicker.regional['ja']);

    PharMart.readyfunction.datepicker();

    // 二重送信防止
    $("form").submit(ShowBlockLayer);

    /* テキストボックス、およびテキストエリアフォーカスアウト時にトリム */
    $("input[type='text'], textarea").blur(function() {
        $(this).val(jQuery.trim($(this).val()));

        // 旧ブラウザ用
        if(!String.prototype.trim) {
            $(this).val($(this).val().replace(/^[\s　]+|[\s　]+$/g, ''));
        }
    });

    /* information dialog */
    $("#infoDialog").dialog({
        autoOpen: false,
        buttons: [{
            text: "OK",
            click: function () {
                $(this).dialog("close");
            }
        }],
        modal: true,
        show: "highlight",
        title: "Information",
        dialogClass: "info_dialog"
    });

	if (GetIEVersion() <= 9){
	    $("a[disabled='disabled'].link_Label").each(function () {
	        $(this).prop("disabled", false);
	        $(this).addClass("link_label_classic");
	        $(this).attr("onclick", "javascript:return false;");
	    });
	}
});

/* IE6～8用 テーブルの偶数行背景色設定 */
function SetEvenRowsBackgroundColor() {
    $(".table_base tr:nth-child(even)").addClass("even");
    $(".table_main tr:nth-child(even)").addClass("even");

//	$(".table_gray_header tr:nth-child(even)").addClass("even");
//	$(".table_blue_header tr:nth-child(even)").addClass("even");
    $(".table_deep_blue tr:nth-child(even)").addClass("even");
    $(".table_green tr:nth-child(even)").addClass("even");

//	$(".upperSection table.deposit tr:nth-child(even)").addClass("even");
//	$(".upperSection table.detail tr:nth-child(even)").addClass("even");

    $("table.form_table tr:nth-child(odd)").addClass("odd");


    $("table.list_table tr:nth-child(even)").addClass("even");
    $("table.input_table tr:nth-child(even)").addClass("even");
    $("table.condition tr:nth-child(even)").addClass("even");
    $("#data_container_5 table tr:nth-child(even)").addClass("even");
    
    $("table.board_list tr:nth-child(even)").addClass("even");
}

/* 二重送信防止用スクリーン展開 */
function ShowBlockLayer() {
    
    // 週別(登録)画面は対象外
    var url = location.href;
    if (url.indexOf("Weekly.aspx") <= 0) {
        // スクロールロック
        ScrollLock();
        
        // スクリーン展開
        $("#blockLayer").css("display", "block");
    
        // IEの場合、loaderのファイルパスを設定し直す
        var ua = navigator.userAgent;
        if( ua.match(/MSIE/) || ua.match(/Trident/) ) {
            $("#blockLayer img").attr("src", "../img/common/loader.gif");
        }
        
        $(this).submit(function () {
//			return false;
        });
    }
}

/* スクロールロック */
function ScrollLock() {

    if($(document).height() > $(window).height()){
        // スクロールバーの幅を取得
        var barWidth = GetBarWidth();
        $("body").css("padding-right", parseInt(barWidth));
        $("body").css("overflow", "hidden");
    }
}

/* スクロールバーの幅を取得 */
function GetBarWidth() {
    var body = document.body;
    var outer = document.createElement("div");
    var style = outer.style;
    style.width = "100px";
    style.height = "100px";
    style.overflow = "scroll";
    style.border = "none";
    style.visibility = "hidden";
    var inner = outer.cloneNode(false);
    outer.appendChild(inner);
    document.body.appendChild(outer);
    outer.scrollTop = 200;
    var barWidth = outer.scrollTop;
    body.removeChild(outer);
    return barWidth;
}

/* IE9, またはIE11かの判定 */
function CheckBrowse() {
    var version = null; // IEのバージョン
    
    version = GetIEVersion();

    if (version == 9 || version == 11) {
        return true;
    }
    else {
        return false;
    }
}

function GetIEVersion() {
    var ua = navigator.userAgent;
    if (ua.match(/MSIE/) || ua.match(/Trident/)) {
        isIE = true;
        return ua.match(/(MSIE\s|rv:)([\d\.]+)/)[2];
    }
    else {
    	return null;
    }
}