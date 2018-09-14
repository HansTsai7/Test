popUp.CD0_ID_KEY="cd0id"; //クエリ引数名称：コード
popUp.CD1_ID_KEY="cd1id"; //クエリ引数名称：コード１・２・３・４がある場合の「コード１」
popUp.CD2_ID_KEY = "cd2id"; //クエリ引数名称：コード１・２・３・４がある場合の「コード２」
popUp.CD3_ID_KEY = "cd3id"; //クエリ引数名称：コード１・２・３・４がある場合の「コード3」
popUp.CD4_ID_KEY = "cd4id"; //クエリ引数名称：コード１・２・３・４がある場合の「コード4」

popUp.MN0_ID_KEY="nm0id";//クエリ引数名称：名称値表示用Label/TextBox
popUp.MN1_ID_KEY="nm1id";
popUp.MN2_ID_KEY="nm2id";
popUp.MN3_ID_KEY="nm3id";
popUp.MN4_ID_KEY="nm4id";
popUp.MN5_ID_KEY="nm5id";
popUp.MN6_ID_KEY="nm6id";

popUp.HD0_ID_KEY="hd0id";//クエリ引数名称：名称値保持用Hidden
popUp.LENGTH_KEY="length";//クエリ引数 長さ

popUp.BLK_CD_KEY="blkcd";//クエリ引数 検索条件ブロックデフォルト値
popUp.MR_CD_KEY ="mrcd"; //クエリ引数 検索条件ブロックデフォルト値用のMRコード
popUp.JIS_CD_KEY = "jiscd"; //クエリ引数 検索条件都道府県デフォルト値
popUp.ZIP_CDF_KEY = "zipcdf"; //クエリ引数 検索条件郵便番号デフォルト値
popUp.ZIP_CDL_KEY = "zipcdl"; //クエリ引数 検索条件郵便番号デフォルト値
popUp.ULT_CD_KEY = "ultcd"; //クエリ引数 都道府県デフォルト値用のアルトマーク都道府県コード
popUp.SIS_EBL_FLG = "siseblflg"; //クエリ引数 処方元施設フラグ


popUp.DAI_ID_KEY="daiid"; //クエリ引数 代理店IDの値
popUp.DAI_DPO_KEY = "daidpo"; //クエリ引数 代理店ID+デポコードの値
popUp.TOK_HON_ID_KEY = "tokhonid"; //クエリ引数 特約店本店ID
popUp.NOU_JUU_KEY = "noujuu"; //クエリ引数 得意先住所
popUp.ORO_TSK_MEI_KEY = "orotskmei"; //クエリ引数 得意先名
popUp.ORO_TSK_CD_KEY = "orotskcd"; //クエリ引数 伝送卸得意先コード

popUp.tokBkMstSearchListPage; //特約店部課マスタ
popUp.tokHonMstSearchListPage; //特約店本店マスタ
popUp.byoMstSearchListPage;   //病診マスタ(当期)
popUp.shaMstSearchListPage;   //社員マスタ(当期)
popUp.hinMstSearchListPage;   //商品マスタ
popUp.yosokuSearchListPage;  //予測

function popUp(){}

//予測ポップアップ
popUp.yosoku = function(TokHonId, OroTskCd,OroTskMei,NouJuu) {
this.open(this.yosokuSearchListPage +
			"?" + this.TOK_HON_ID_KEY + "=" + TokHonId +
			"&" + this.ORO_TSK_CD_KEY + "=" + OroTskCd +
			"&" + this.ORO_TSK_MEI_KEY + "=" + OroTskMei +
			"&" + this.NOU_JUU_KEY + "=" + NouJuu,
		"newwin", 996,435);
};


//特約店本店マスタ：コード
//tokHonCd:特約店コード本店のClientId
popUp.tokHonMstCode = function(tokHonCd) {
    this.open(this.tokHonMstSearchListPage +
			"?" + this.CD0_ID_KEY + "=" + tokHonCd,
		"newwin", 820, 435);
};
//特約店部課マスタ：コード
//tokHonCd:特約店コード本店のClientId
//tokSshCd:特約店コード支社のClientId
//tokStnCd:特約店コード支店のClientId
//tokBkCd:特約店コード部課のClientId
popUp.tokBkMstCode = function(tokHonCd,tokSshCd,tokStnCd,tokBkCd) {
this.open(this.tokBkMstSearchListPage +
			"?" + this.CD1_ID_KEY + "=" + tokHonCd +
			"&" + this.CD2_ID_KEY + "=" + tokSshCd+
			"&" + this.CD3_ID_KEY + "=" + tokStnCd+
			"&" + this.CD4_ID_KEY + "=" + tokBkCd,
		"newwin", 820, 435);
};

//代理店・デポマスタ：コード
//daiId:代理店IDのClientId
//dpoCd:デポコードのClientId
popUp.daiDpoMstCode=function(daiId,dpoCd){
	this.open(this.daiDpoMstSearchListPage+
			"?"+this.CD1_ID_KEY+"="+daiId+
			"&"+this.CD2_ID_KEY+"="+dpoCd,
		"newwin",820,435);
};
//代理店・デポマスタ：コード
//daidpo:代理店ID＋デポコードのClientId
popUp.daiDpoMstCodeDaiDpo=function(daidpo) {
    this.open(this.daiDpoMstSearchListPage +
			"?" + this.DAI_DPO_KEY + "=" + daidpo,
		"newwin", 820, 435);
};
//代理店・デポマスタ：コード
//daiId:代理店IDのClientId
popUp.daiDpoMstCodeDai = function(daiId) {
    this.open(this.daiDpoMstSearchListPage +
			"?" + this.DAI_ID_KEY + "=" + daiId,
		"newwin", 820, 435);
};

//病診マスタ(当期)：コード
//byoCd:病診コードのClientId
popUp.byoMstCode = function(byoCd, sisEblFlg) {
	this.open(this.byoMstSearchListPage+
			"?" + this.CD0_ID_KEY + "=" + byoCd +
			"&" + this.SIS_EBL_FLG + "=" + sisEblFlg,	
		"newwin",996,435);
};
//病診マスタ(当期)：コード
//byoCd:病診コードのClientId
popUp.byoMstCodeZipCd = function(byoCd, zipCdF, zipCdL, sisEblFlg) {
	this.open(this.byoMstSearchListPage+
			"?" + this.CD0_ID_KEY + "=" + byoCd +
			"&" + this.ZIP_CDF_KEY + "=" + zipCdF +
			"&" + this.ZIP_CDL_KEY + "=" + zipCdL +
			"&" + this.SIS_EBL_FLG + "=" + sisEblFlg,			
		"newwin",996,435);
};
//病診マスタ(当期)：コード・名称
//byoCd:病診コードのTextBoxのClientId
//byoNm:病診名を保持するHiddenのClientId
//byoDp:病診名を表示するLabelのClientId
popUp.byoMstCodeAndName=function(byoCd,byoNm,byoDp){
	this.open(this.byoMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+byoCd+
			"&"+this.HD0_ID_KEY+"="+byoNm+
			"&"+this.MN0_ID_KEY+"="+byoDp,
		"newwin",996,435);
};
//病診マスタ(当期)：コード・名称
//byoCd:病診コードのTextBoxのClientId
//byoNm:病診名を保持するHiddenのClientId
//byoDp:病診名を表示するLabelのClientId
popUp.byoMstCodeAndNameLimit=function(byoCd,byoNm,byoDp,length){
	this.open(this.byoMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+byoCd+
			"&"+this.HD0_ID_KEY+"="+byoNm+
			"&"+this.MN0_ID_KEY+"="+byoDp+
			"&"+this.LENGTH_KEY+"="+length,
		"newwin",996,435);
};
//病診マスタ(当期)：コード・名称
//byoCd:病診コードのTextBoxのClientId
//byoNm:病診名を保持するHiddenのClientId
//byoDp:病診名を表示するLabelのClientId
//conditionCd:デフォルト値用のClientId
popUp.byoMstCodeAndNameJisObj=function(byoCd,byoNm,byoDp,conditionCd){
	var jisCd=$('#'+conditionCd).attr("innerHTML").substring(0,2);//更新のLabelから
	if(jisCd==''){jisCd=$('#'+conditionCd).val().substring(0,2);}//登録のTextBoxから
	this.open(this.byoMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+byoCd+
			"&"+this.HD0_ID_KEY+"="+byoNm+
			"&"+this.MN0_ID_KEY+"="+byoDp+
			"&"+this.JIS_CD_KEY+"="+jisCd,
		"newwin",996,435);
};


//アルトマーク：情報
//ultSiyJoyCdDp：アルトマークコード
//nameKjNm：名称(漢字)
//nameKnNm：名称(カナ)
//juuKjNm：住所(漢字)
//juuKnNm：住所(カナ)
//byoCd:都道府県デフォルト値用の病診コード
popUp.ultSiyJoiInfoText=function(ultSiyJoyCdDp,
								nameKj,nameKn,
								juuKj,juuKn,
								byoCd){
	var ultPrefCd=byoCd.substring(0,2);//Labelから
	this.open(this.ultSiyJoiSearchListPage+
			"?"+this.CD0_ID_KEY+"="+ultSiyJoyCdDp+
			"&"+this.MN0_ID_KEY+"="+nameKj+
			"&"+this.MN1_ID_KEY+"="+nameKn+
			"&"+this.MN2_ID_KEY+"="+juuKj+
			"&"+this.MN3_ID_KEY+"="+juuKn+
			"&"+this.ULT_CD_KEY+"="+ultPrefCd,
		"newwin",950,435);
};

//社員マスタ(当期)：コード
//shaCd:社員IDのTextBoxのClientId
popUp.shaMstCode=function(shaCd){
	this.open(this.shaMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+shaCd,
		"newwin",510,435);
};
//社員マスタ(当期)：コード・名称
//shaCd:社員IDのTextBoxのClientId
//shaNm:氏名を保持するHiddenのClientId
//shaDp:氏名を表示するLabelのClientId
popUp.shaMstCodeAndName=function(shaCd,shaNm,shaDp){
	this.open(this.shaMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+shaCd+
			"&"+this.HD0_ID_KEY+"="+shaNm+
			"&"+this.MN0_ID_KEY+"="+shaDp,
		"newwin",510,435);
};
//社員マスタ(当期)：コード
//shaCd:社員IDのTextBoxのClientId
//blkCd:ブロックコードプルダウンのClientId
//検索条件のデフォルト値を指定する
popUp.shaMstCodeBlkCd=function(shaCd,blkCd){
	this.open(this.shaMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+shaCd+
			"&"+this.BLK_CD_KEY+"="+$('#'+blkCd).val(),
		"newwin",510,435);
};
//社員マスタ(当期)：コード・名称
//shaCd:社員IDのTextBoxのClientId
//shaNm:氏名を保持するHiddenのClientId
//shaDp:氏名を表示するLabelのClientId
popUp.shaMstCodeAndNameBlkCd=function(shaCd,shaNm,shaDp,blkCd){
	this.open(this.shaMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+shaCd+
			"&"+this.HD0_ID_KEY+"="+shaNm+
			"&"+this.MN0_ID_KEY+"="+shaDp+
			"&"+this.BLK_CD_KEY+"="+$('#'+blkCd).val(),
		"newwin",510,435);
};
//社員マスタ(当期)：コード
//targetShaCd:社員IDのTextBoxのClientId
//pairedShaCd:ブロックコード用社員IDのTextBoxのClientId
//検索条件のデフォルト値を指定する
popUp.shaMstCodeMrCd=function(targetShaCd,pairedShaCd){
	this.open(this.shaMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+targetShaCd+
			"&"+this.MR_CD_KEY +"="+$('#'+pairedShaCd).val(),
		"newwin",510,435);
};

//社員マスタ(当期)ブロック：コード
//targetShaCd:社員IDのTextBoxのClientId
//blkCd:ブロックコードプルダウンのClientId
//検索条件のデフォルト値を指定する
popUp.shaMstCodeMrCdBlk = function(targetShaCd, blkCd) {
	this.open(this.shaMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+targetShaCd+
			"&" + this.BLK_CD_KEY + "=" + $('#' + blkCd).val(),
		"newwin",510,435);
};


//商品マスタ：コード
//hinCd:商品コードのTextBoxのClientId
popUp.hinMstCode=function(hinCd){
	this.open(this.hinMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+hinCd,
		"newwin",550,435);
};
//商品マスタ：コード・名称
//hinCd:商品コードのTextBoxのClientId
//hinNm:商品名を保持するHiddenのClientId
//hinDp:商品名を表示するLabelのClientId
popUp.hinMstCodeAndName=function(hinCd,hinNm,hinDp){
	this.open(this.hinMstSearchListPage+
			"?"+this.CD0_ID_KEY+"="+hinCd+
			"&"+this.HD0_ID_KEY+"="+hinNm+
			"&"+this.MN0_ID_KEY+"="+hinDp,
		"newwin",550,435);
};


//ポップアップを開く
//url:ポップアップのURL
//windowname:ウィンドウ名
//width:幅
//height:高さ
popUp.open=function(url,windowname,width,height){
	var features="alwaysRaised=yes,dependent=yes,location=yes,menubar=no,status=yes,scrollbars=yes,resizable=yes,toolbar=no,directories=no,fullscreen=no";
	if(width){
		width+=18;
		if(window.screen.width > width){features+=",left="+(window.screen.width-width)/2;}
		else{width=window.screen.width;}
		features+= ",width="+width;
	}
	if(height){
		height+=18;
		if(window.screen.height>height){features+=",top="+(window.screen.height-height)/2;}
		else{height=window.screen.height;}
		features+=",height="+height;
	}
	window.open(url,windowname,features);
};

//ポップアップを閉じる
popUp.close=function(){window.close();};

//コード選択
//codeId:コード値を表示するTextBoxのClientId
//codeValue:コード値
popUp.SelCd=function(codeId,codeValue){
	if(codeId!=undefined&&codeId!=null&&codeId!=''&&0<window.opener.$('#'+codeId).size()){
		window.opener.$('#'+codeId).attr("value",codeValue);
		window.opener.$('#'+codeId).trigger("onchange");
	}
};
//コード選択
//codeId:コード値を保持しておくHiddenのClientId
//dispId:コード値を表示するTextBoxのClientId
//codeValue:コード値
popUp.SelCdDp=function(codeId,dispId,codeValue){
	if(codeId!=undefined&&codeId!=null&&codeId!=''&&0<window.opener.$('#'+codeId).size()){
		window.opener.$('#'+codeId).attr("value",codeValue);
	}
	if(dispId!=undefined&&dispId!=null&&dispId!=''&&0<window.opener.$('#'+dispId).size()){
		window.opener.$('#'+dispId).attr("value",codeValue);
	}
};

//名称選択
//nameId:名称値を保持しておくHiddenのClientId
//dispId:名称値を表示するLabelのClientId
//nameValue:名称値
popUp.SelNm=function(nameId,dispId,nameValue){
	if(dispId!=undefined&&dispId!=null&&dispId!=''&&0<window.opener.$('#'+dispId).size()){
		window.opener.$('#'+dispId).attr("innerHTML",nameValue);
	}
	if(nameId!=undefined&&nameId!=null&&nameId!=''&&0<window.opener.$('#'+nameId).size()){
		window.opener.$('#'+nameId).attr("value",nameValue);
	}
};

//名称選択
//nameId:名称値を保持しておくHiddenのClientId
//dispId:名称値を表示するLabelのClientId
//nameValue:名称値
//length:名称値の表示最大文字長
popUp.SelNmLn=function(nameId,dispId,nameValue,length){
	if(dispId!=undefined&&dispId!=null&&dispId!=''&&0<window.opener.$('#'+dispId).size()){
		var subValue=nameValue;
		if(subValue.length>length){subValue=subValue.slice(0,length-1)+"...";}
		window.opener.$('#'+dispId).attr("innerHTML",subValue);
		window.opener.$('#'+dispId).attr("title",nameValue);
	}
	if(nameId!=undefined&&nameId!=null&&nameId!=''&&0<window.opener.$('#'+nameId).size()){
		window.opener.$('#'+nameId).attr("value",nameValue);
	}
};