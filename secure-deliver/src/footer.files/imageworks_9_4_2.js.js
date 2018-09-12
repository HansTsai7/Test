/************************************************************************/
/*																		*/
/*FileName: imageworks.js 												*/
/*Author  : Xie Guangzhuang												*/
/*Version :	0.1															*/
/*History 																*/
/*	    01:	2006/01/26, Xie Guangzhuang, Create							*/
/*																		*/
/************************************************************************/

function getSingleElement(name) {
	if (document.all) {
		//alert("document.all");
		return document.all(name);
	} else if (document.getElementById(name)) {
		//alert("document.getElementById");
		return document.getElementById(name);
	} else if (document.getElementsByName(name)) {
		//alert("document.getElementsByName");
		return document.getElementsByName(name)[0];
	} else {
		return null;
	}
}

function isNull( targetString ) {
	if( targetString == "")	{
		return true;
	}
	else {
		return false;
	}
}

function trim(targetString) {
	return targetString.replace(/(^\s*)|(\s*$)/g, "") ;
}

function submitConfirmPassword(sourceField, confirmField) {
	if (bCancel) {
		return true;
	}
	if (sourceField.value != confirmField.value) {
		alert("password should be equal!");
		sourceField.focus();
		return false;
	}
	return true;
}

function selectOption(obj, val)
{
	for(var i = 0; i < obj.options.length; i++)
	{
		if (obj.options(i).value == val) {
			obj.options(i).selected = true;
		}
	}
}

function editObject(messageSelectAtLeastOne, messageSelectMutiple) {
	var selectCheckBoxChount = 0;
	for(var i =0; i<document.getElementsByTagName("input").length;i++) {
		if (document.getElementsByTagName("input")[i].type == "checkbox" && document.getElementsByTagName("input")[i].checked)	{
			selectCheckBoxChount ++;
			getSingleElement("infoId").value=document.getElementsByTagName("input")[i].name;
		}
	}

	if (selectCheckBoxChount > 1) {
		alert(messageSelectMutiple);
		return -1;
	} else if (selectCheckBoxChount == 0) {
		alert(messageSelectAtLeastOne);
		return -2;
	}

	return;
}

function deleteOneObject(messageSelectAtLeastOne, messageSelectMutiple, messageConfirm) {
	var selectCheckBoxChount = 0;
	for(var i =0; i<document.getElementsByTagName("input").length;i++) {
		if (document.getElementsByTagName("input")[i].type == "checkbox" && document.getElementsByTagName("input")[i].checked)	{
			selectCheckBoxChount ++;
			getSingleElement("infoId").value=document.getElementsByTagName("input")[i].name;
		}
	}

	if (selectCheckBoxChount > 1) {
		alert(messageSelectMutiple);
		return -1;
	} else if (selectCheckBoxChount == 0) {
		alert(messageSelectAtLeastOne);
		return -2;
	} else {
		if (!confirm(messageConfirm)) {
			return 0;
		}
	}
	return;
}

function deleteObject(messageSelectAtLeastOne, messageConfirm) {
	var userIds ="";
	for(var i =0; i < document.getElementsByTagName("input").length; i++) {
		if (document.getElementsByTagName("input")[i].type == "checkbox" && document.getElementsByTagName("input")[i].checked)	{
			userIds += ";" ;
			userIds += document.getElementsByTagName("input")[i].name;
			//we can use the name as the provider id;
			//the first checked provider is edited.
		}
	}
	if (userIds == "") {
		alert(messageSelectAtLeastOne);
		return -2;
	} else {
		if( !confirm(messageConfirm)) {
			return 0;
		}
		//alert(userIds);
	}
	getSingleElement("infoId").value=userIds;
	//alert(getSingleElement("infoId").value);
}


function preloadImages() { //v3.0
    var d = document;
    if(d.images){
  	    if(!d.imageBuffer) {
  		    d.imageBuffer = new Array();
  		}
        var i;
        var j = d.imageBuffer.length;
        var a = preloadImages.arguments;
        for(i = 0; i < a.length; i++) {
    	    if (a[i].indexOf("#") != 0){
    		    d.imageBuffer[j] = new Image;
    		    d.imageBuffer[j++].src = a[i];
    	    }
    	}
    }
}

function swapImage(imgObjectName, toImageName) { //v3.0
	var imgObj = getSingleElement(imgObjectName);
	if (imgObj != null) {
		if(!imgObj.oSrc) {
			imgObj.oSrc = imgObj.src;
		}
		imgObj.src = toImageName;
	}
}

//?@Macintosh           ?@->  MacOS
//?@Windows95/98/NT/2000/XP  ->?@Windows
//?@UNIX                  ->?@UNIX
function getOSType()
{
    var uAgent  = navigator.userAgent.toUpperCase();
    if (uAgent.indexOf("MAC") >= 0) return "MacOS";
    if (uAgent.indexOf("WIN") >= 0) return "Windows";
    if (uAgent.indexOf("X11") >= 0) return "UNIX";
    return "Unkown";
}
//?@Netscape Navigator ->  Netscape
//?@Internet Explorer  ->?@Explorer
//?@Safari  ->?@Safari
//?@Opera  ->?@Opera
function getBrowserName()
{
    var aName  = navigator.appName.toUpperCase();
    var uName = navigator.userAgent.toUpperCase();
    if (uName.indexOf("SAFARI") >= 0)  return "Safari";
    if (uName.indexOf("OPERA") >= 0)  return "Opera";
    if (aName.indexOf("NETSCAPE") >= 0)  return "Netscape";
    if (aName.indexOf("MICROSOFT") >= 0) return "Explorer";
    return "Unkown";
}
function getBrowserVersion()
{
        var browser = getBrowserName();
        var version = 0;
        var s = 0;
        var e = 0;
        var appVer  = navigator.appVersion;
        var uName  = navigator.userAgent.toUpperCase();
        if (browser == "Safari")
        {
                version = eval(appVer.substring(0,3)) - 4;
        }
        if (browser == "Opera")
        {
                s = uName.indexOf("OPERA ",0) + 6;
                e = uName.indexOf(" ",s);
                version = eval(uName.substring(s,e));
        }
        if (browser == "Netscape")
        {
                s = appVer.indexOf(" ",0);
                version = eval(appVer.substring(0,s));
                if (version >= 5) version++;
        }
        if (browser == "Explorer")
        {
                appVer  = navigator.userAgent;
                s = appVer.indexOf("MSIE ",0) + 5;
                e = appVer.indexOf(";",s);
                version = eval(appVer.substring(s,e));
        }
        return version;
}


function onKeyDownSetting(e){
	if (!e){
	    var e = window.event;
	}
	if ( e.keyCode==13 ){
		//e.preventDefault ? e.preventDefault() : e.returnValue = false;        		
		return false;
	}
   	if (getOSType()=='MacOS' && e.keyCode == 3) {
   		return false;
   	}
}

function isBeforeDate(strStartDate, strEndDate) {
	if (parseInt(strStartDate.substring(0, 4), 10) < parseInt(strEndDate.substring(0, 4), 10)) {
		return true;
	} else if (parseInt(strStartDate.substring(0, 4), 10) > parseInt(strEndDate.substring(0, 4), 10)) {
		return false;
	} else {
		if (parseInt(strStartDate.substring(5, 7), 10) < parseInt(strEndDate.substring(5, 7), 10)) {
			return true;
		} else if (parseInt(strStartDate.substring(5, 7), 10) > parseInt(strEndDate.substring(5, 7), 10)) {
			return false;
		} else {
			if (parseInt(strStartDate.substring(8, 10), 10) < parseInt(strEndDate.substring(8, 10), 10)) {
				return true;
			} else if (parseInt(strStartDate.substring(8, 10), 10) > parseInt(strEndDate.substring(8, 10), 10)) {
				return false;
			}
		}
	}
	return true;
}

// check is email
// modified by yeq in 2006/08/16
function checkEmail(emailStr) {
   if (emailStr.length == 0) {
       return true;
   }
   var mask = /^[A-Za-z0-9!#$%&'*+\/=?^_`{}|~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{}|~-]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*)+(\.([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*))*$/;
   if (!mask.exec(emailStr)) {
       return false;
   }
   
   return true;
   
   /*
   var emailPat=/^(.+)@(.+)$/;
   var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
   var validChars="\[^\\s" + specialChars + "\]";
   var quotedUser="(\"[^\"]*\")";
   var ipDomainPat=/^(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})$/;
   var atom=validChars + '+';
   var word="(" + atom + "|" + quotedUser + ")";
   var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
   var domainPat=new RegExp("^" + atom + "(\\." + atom + ")*$");
   var matchArray=emailStr.match(emailPat);
   if (matchArray == null) {
       return false;
   }
   var user=matchArray[1];
   var domain=matchArray[2];
   if (user.match(userPat) == null) {
       return false;
   }
   var IPArray = domain.match(ipDomainPat);
   if (IPArray != null) {
       for (var i = 1; i <= 4; i++) {
          if (IPArray[i] > 255) {
             return false;
          }
       }
       return true;
   }
   var domainArray=domain.match(domainPat);
   if (domainArray == null) {
       return false;
   }
   var atomPat=new RegExp(atom,"g");
   var domArr=domain.match(atomPat);
   var len=domArr.length;
   if ((domArr[domArr.length-1].length < 2) ||
       (domArr[domArr.length-1].length > 3)) {
       return false;
   }
   if (len < 2) {
       return false;
   }
   return true;
   */
}
    
function isLong( targetString ){
	if ( targetString.search(/[\D]/g,'') > -1 ){
		return false;
	}
	return true;
}
    
//check whethe input is integer number
function isIntegerNumber(input)
{
	return (!isNaN(input) && isLong(input));
}
	
// check string only contain English char and number
function checkCharandNumber(checkStr) {
	if (checkStr.length == 0) {
       return true;
   	}
   	var pattern = /^[._a-zA-Z0-9-@]+$/;
   	var matchArray = new String(checkStr).match(pattern);
   	
   	if (matchArray == null) {
       	return false;
   	}
   	
   	return true;
}
    
// added by Zhou Dong, to fix applet height problem on Safari
function resizeWindowForSafari(isEnlarge) {
	if (getBrowserName() == 'Safari') {
		if (isEnlarge) {
			window.resizeBy(4, 4);
		} else {
			window.resizeBy(-4, -4);
		}
	}
}

// add by chen yong, to fix div problem on safari
function resizeWindowForSafari(isEnlarge, resize) {
	if (getBrowserName() == 'Safari') {
		if (isEnlarge) {
			window.resizeBy(resize, resize);
		} else {
			window.resizeBy((0-resize), (0-resize));
		}
	}
}

// added by Ye Qing in 20060803, used to check text area's length.
function checkTextAreaLength(obj, maxLength) {
	var textAreaValue = obj.value;
	var re = new RegExp("\n","g") ;
	
	if (getBrowserName() != 'Explorer') {
		textAreaValue = textAreaValue.replace(re, "\r\n");
	}

	if (textAreaValue.length > maxLength) {
		return false;
	}

	return true;
}

    
// check is validate file name & folder name.
function checkFileFolderName(fileFolderValue){
	// if contains invalid character
	//if ( fileFolderValue.search(/[\\|\/|:|\*|\?|"|<|>|\|]/g,'') > -1 ){
	// modified by yumt for phase5.
	//add : to check for IWSD li yang
	//if ( fileFolderValue.search(/[\\\/]/g,'') > -1 ){
	if ( fileFolderValue.search(/[\\\/\:]/g,'') > -1 ){
		return false;
	}
	
	//the following seperate character is not allowed
	//However, UTF-8 code may include the following special character
	for ( var i=0; i<fileFolderValue.length; i++ ) {
        var singleChar = fileFolderValue.charAt(i);
		//alert("escape(singleChar)="+escape(singleChar));
		var result = escape(singleChar).search(/^(%95|%A5|%uF022|%uF026)$/g,'');
        if ( result >-1 ){ 
	    	return false;
		}
    }

	// if leading char is "." or "-"
	if ( fileFolderValue.charAt(0) == '.' ){
		return false;				
	}
	return true;
}
    
// Added by zhoud, Move it here from tools.jsp 
// To show or hide a layer
function showHideLayers(obj, showOrHide) { //v6.0
    var v = showOrHide;
    if (obj.style) {
        obj=obj.style;
        v=(v=='show')?'visible':(v=='hide')?'hidden':v;
     }
    obj.visibility=v;
}

function externalLinks(){
	if (!document.getElementsByTagName("a")) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++){
		var anchor = anchors[i];
		if (anchor.getAttribute("href"))
			anchor.target = "_blank";
	}
}

//--- frequently used frames --//
function getMainToolsFrame(isHtmlMode) { //isHtmlMode is reserved for future extension
	return window.top.frames["contents"].frames["tool"];
}

// use to setting tooltip for safari,firefox  
function setAltToTitleUseTagName(tagName){
	if(document.getElementsByTagName(tagName)){
		var tempArray = document.getElementsByTagName(tagName);   
		for (var i=0; i<tempArray.length; i++){
	    var tempSingle = tempArray[i];
	    if(tagName == "input" && tempSingle.type != "image") continue;
		if(tempSingle.getAttribute("title")) continue;
			if (tempSingle.getAttribute("alt"))
				tempSingle.setAttribute("title",tempSingle.getAttribute("alt"));
		}
         }
}

function setTitleTooltip () {
   if (getBrowserName() == 'Explorer')  return;  // "alt" can show the tooltip in IE very well. 
   setAltToTitleUseTagName("area");
   setAltToTitleUseTagName("img");
   setAltToTitleUseTagName("input");
}

//the following 3 functions are used to trim spacer
//delete left and right spacer
function trim(str){  
 return str.replace(/(^\s*)|(\s*$)/g, "");
}

//delete the left spacer
function ltrim(str){  
 return str.replace(/(^\s*)/g,"");
}
	
//delete the right spacer
function rtrim(str){  
	return str.replace(/(\s*$)/g,"");
}
	
function isIncludeFullWidthCharacter (inputstring) {
	for(var i = 0; i < inputstring.length ; i++){
	// inputstring.charCodeAt(i) >= 128 means the input is full-width character.
		if(inputstring.charCodeAt(i) >= 128){
		   return true;
		}		
   	}
   	return false;
}
	
function isIncludeHalfWidthCharacter (inputstring) {
	for(var i = 0; i < inputstring.length ; i++){
	// inputstring.charCodeAt(i) >= 128 means the input is full-width character.
		if(inputstring.charCodeAt(i) < 128){
		   return true;
		}		
   	}
   	return false;
}
	
/**
 * forbid contextmenu on image.
 * Ma Wenhao add at 2008/06/04
 */
function disableRightClick (ev) {
	var ev = ev || window.event;
	var browserName = getBrowserName();
	// for IE browser.
	if (browserName == "Explorer") {
		if (ev.srcElement.tagName == "IMG") {
			ev.returnValue = false;
		}
		//if (e.srcElement.tagName == "INPUT") {
		//	if (e.srcElement.type == "image") {
		//		e.returnValue = false;
		//	}
		//}
	}
	// for FireFox, Safari, Camino and etc.
	else {
		if (ev.target.tagName == "IMG") {
			ev.preventDefault();
		}
		//if (e.target.tagName == "INPUT") {
		//	if (e.target.type == "image") {
		//		e.preventDefault();
		//	}
		//}
	}
}
document.oncontextmenu = disableRightClick;

// Chen Yong add start 2008/06/10

	function moveUp(ObjId)  
	{   
		Obj = getSingleElement(ObjId);
		var theObjOptions = Obj.options; 
		for(var i = 1; i < theObjOptions.length; i++) 
		{ 
			if(theObjOptions[i].selected && !theObjOptions[i-1].selected) 
			{ 
				swapOptionProperties(theObjOptions[i], theObjOptions[i-1]); 
			} 
		} 
	}     
	    
	function moveDown(ObjId) 
	{   
		Obj = getSingleElement(ObjId);
		var theObjOptions = Obj.options;  
		for(var i = theObjOptions.length - 2; i > -1; i--) 
		{ 
			if(theObjOptions[i].selected && !theObjOptions[i+1].selected) { 
				swapOptionProperties(theObjOptions[i],theObjOptions[i+1]); 
			} 
		} 
	}     
	
	function   swapOptionProperties(option1,option2)
	{ 
		var   tempStr=option1.value; 
		option1.value=option2.value; 
		option1.value=tempStr; 
		tempStr=option1.text; 
		option1.text=option2.text; 
		option2.text=tempStr; 
		tempStr=option1.selected; 
		option1.selected=option2.selected; 
		option2.selected=tempStr; 
	} 
	
	function moveToRight(fromObjId)
	{
		fromObj = getSingleElement(fromObjId);
		for(var i=0;i <fromObj.length;i++)
		{
			var srcOption=fromObj.options[i]; 
			if(srcOption.selected) 
			{ 
				fromObj.remove(i);
				i--; 
			} 
		}
	}
	
	function moveToLeft(fromObjId, toObjId) 
	{     
		
		fromObj = getSingleElement(fromObjId);
		toObj = getSingleElement(toObjId);
		var isSelect = false;
		
		for(var i = 0; i < fromObj.length; i++) 
		{ 
			var srcOption = fromObj.options[i]; 
			if(srcOption.selected) 
			{ 
				
				for(var j = 0; j < toObj.length; j++)
				{
					var tmpOption = toObj.options[j];
					if(srcOption.value == tmpOption.value)
					{
						isSelect = true;
					}
				}
				if(!isSelect)
				{
					var varItem = new Option(srcOption.text, srcOption.value);
					// Ma Wenhao modify at (2008/08/19) start.
					// Following code doesn't work on safari at mac computer. So
					// change to another syntax.
					// toObj.options.add(varItem);
					toObj.options[toObj.length] = varItem;
					// Ma Wenhao modify at (2008/08/19) end.
				}
				else
				{
					isSelect = false;
				}
			} 
		} 
	}
	
	function isNotHalfShape(stringValue){
		var i;
		for(i=0;i<stringValue.length;i++){
			if(stringValue.charCodeAt(i)>128){
				return true;
			}
		}
		return false;
	} 
	
	function subFullShape(stringValue, fullShapeLength){
		fullShapeLength = fullShapeLength * 2;
		if (fullShapeLength <= 1){ 
			return stringValue;
		}
		var i;
		var currentLength = 0;
		
		var result = new Array();
		for(i=0;i<stringValue.length;i++){
			if(stringValue.charCodeAt(i)>128){
				currentLength += 2;
			}else{
				currentLength += 1;
			}
			if(currentLength <= fullShapeLength){
				result.push(stringValue.charAt(i));
			}else{
				break;
			}
		}
		var resultStr = result.join("");
		if(resultStr.length < stringValue.length){
			resultStr += '...';
		}
		return resultStr;
	} 
	
	function changeCheckDefaultValue(objID){
		getSingleElement("checkDefaultValue" + objID).value = "0";
	}    

// Chen Yong add end 2008/06/10

//add by fuqy 2008/07/28
// round off
// num : the num which will be convert. 
// n :   lines
function roundOff(num,n) {
	var digit = 1; 
	var result; 
	for(var i = 0; i < n; i++) 
	{ 
		digit = accMul(digit, 10); 
	} 
	result = accMul(num, digit); 
	result = Math.round(result) / digit; 
	return result; 
}

//this is a function for multiply two float numbers
//this function can give a more accurate result than directly use *
//and so far this function is enough for orgazination size limit function.
function accMul(arg1,arg2){
   	var m=0,s1=arg1.toString(),s2=arg2.toString();
   	try{m+=s1.split(".")[1].length;}catch(e){}
   	try{m+=s2.split(".")[1].length;}catch(e){}
   	return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

// locale start with 1...... not 0
// for safari is not support this method, so create this method by ourself.
function iwOptionsAdd(orgOptions, addOption, locale){
	if(getBrowserName() != 'Safari'){
		return orgOptions.options.add(addOption, locale - 1);
	}
	if(null == locale){
		locale = 0;
	}			
	for(var i = orgOptions.options.length; i > 0; i --){
		orgOptions.options[i] = new Option(orgOptions.options[i - 1].text, orgOptions.options[i - 1].value);
		if(i == locale) break;
	}
	orgOptions.options[locale -1] = addOption;
	return orgOptions;
}

//show special string: &,<,>,space,",', 
function replaceSpecialCharacter(word) {
	if(word == null || word == ""){
		return word;
	}
	
	word = word.replace(/&#38;/g, "&")
					   .replace(/&#60;/g, "<")
					   .replace(/&#62;/g, ">")
					   .replace(/&#34;/g, "\"")
					   .replace(/&#039;/g, "'")
					   .replace(/&#160;/g, " ");	
	return word;
}

function replaceSpece(word) {
	if(word == null || word == ""){
		return word;
	}
	
	word = word.replace(/ /g,"&#160;");	
	return word;
}

function disableDiv(frameDivId, isDisable){
	var arr = getSingleElement(frameDivId).getElementsByTagName('input');
	for(var i=0;i < arr.length;i++){
		if(isDisable){
			arr[i].disabled=false;
		}else{
			arr[i].disabled=true;
		}
	}
}

function elementClick(obj){
	if(getBrowserName()=="Explorer"){
		obj.click();
	}else{
		var evt = document.createEvent("MouseEvents");
		evt.initMouseEvent("click", true, true, window,
				0, 0, 0, 0, 0, false, false, false, false, 0, null);
		obj.dispatchEvent(evt);
	}
}

/*var replaceEllipsis(node, content) {  
node.innerHTML = content;  
// use your favorite framework to detect the gecko browser  
if (YAHOO.env.ua.gecko) {  
var pnode = node.parentNode,  
newNode = node.cloneNode(true);  
pnode.replaceChild(newNode, node);  
}
};
*/  



function getViewWidth(){
	var tempWidth;
	if (!(document.documentElement.clientWidth) || (document.documentElement.clientWidth === 0)) {
		// IE 5-7 Quirks and IE 4 case
		tempWidth = document.body.clientWidth;
	} else { 
		//IE 6+ Strict Case
		tempWidth = document.documentElement.clientWidth;
	}
	
	if (getBrowserName() == 'Explorer'){
		return tempWidth;
	} else {
		// Gecko and Other DOM compliant case
		return window.innerWidth;
	}
}


function getViewHeight(){
	var tempHeight;
	if (!(document.documentElement.clientHeight) || (document.documentElement.clientHeight === 0)) {
		// IE 5-7 Quirks and IE 4 case
		tempHeight = document.body.clientHeight;
	} else { 
		//IE 6+ Strict Case
		tempHeight = document.documentElement.clientHeight;
	}
	
	if (getBrowserName() == 'Explorer'){
		return tempHeight;
	} else {
		// Gecko and Other DOM compliant case
		return window.innerHeight;
	}
}  

function setDivHeight(divName , height ){
	document.getElementById(divName).style.height = height;
}
function setDivWidth(divName , width ){
	document.getElementById(divName).style.width = width;
}

function objectPosition(obj) {
    var curleft = 0;
      var curtop = 0;
      if (obj.offsetParent) {
            do {
                  curleft += obj.offsetLeft;
                  curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
      }
      return [curleft,curtop];
}
function showHiddenElement(objectid){
	try{
		getSingleElement(objectid).style.display = "";
	}catch(e){}
}
function hideElement(objectid){
	try{
		getSingleElement(objectid).style.display = "none";
	}catch(e){}
}

/**
 * ファイルインプットオブジェクトを渡すと、ファイル名を返却する。
 * 
 * @param object ファイルインプットオブジェクト
 * @return ファイル名(パスを含まない)
 */
function getFilenameFromFileElement(object) {
	try {
		var filepath = object.value; // Inputオブジェクトからファイルパスを取得する。
		var x;

		if ( "Windows" == getOSType() ) {
			x = filepath.lastIndexOf('\\');
		} else {
			x = filepath.lastIndexOf('/');
			if (x < 0) {
				if (filepath.lastIndexOf("C:\\fakepath\\",0) == 0) {
					return filepath.replace("C:\\fakepath\\", "");
				} else {
					return filepath;
				}
			}
			// ネスケの話は、今回無し
		}
		return filepath.substr(x+1);
		
	} catch(e) {
		return "";
	}
}

//add end

/**
 * iwのactionButtonコンポーネントの表示を変更時に、
 * ツールチップの変更が忘れやすいので、共通方法を定義します。
 * newTooltipがnullの場合、ツールチップと新しいラベルと同じくする
 */
function changeButtonLabel(object,newLabel,newTooltip){
	try{
		if(object != null && newLabel !=null){
			if(newTooltip == null){
				newTooltip = newLabel;
			}
			object.title = newTooltip;
			object.innerHTML = newLabel;
		}
	}catch(e){}
}

/**
 * 指定ウィンドーハンドルのオープンナーオブジェクトを取得する
 * オープンナーが別画面に遷移した後、オープンナーハンドルが取れないケースを考え込む
 * @param targetWindow
 * @returns
 */
function getWindowOpener(targetWindow){
	try{
		if(targetWindow == null || typeof targetWindow != 'object'){
			return null;
		}
		return targetWindow.opener.window;
	}catch(e){
		//ie6の場合、openerハンドルが失うと、
		//opener.windowを取ろうとすると異常が発生する
		return null;
	}
}

/**
 * パラメータありメッセージ出力メソッド（単一パラメータ）
 * @param message			メッセージの文言（パラメータを{0},{1}に定義してください）
 * @param parameter			メッセージ内のパラメータ
 * @returns
 */
function getMessageWithParameter(message, parameter){
	return getMessageWithParameters(message, new Array(parameter));
}

/**
 * パラメータありメッセージ出力メソッド（複数パラメータ）
 * @param message			メッセージの文言（パラメータを{0},{1}に定義してください）
 * @param parameter			メッセージ内の複数パラメータ
 * @returns
 */
function getMessageWithParameters(message, parameters){
	for ( var i = 0; i < parameters.length; i++ ) {
		message = message.replace("{" + i + "}", parameters[i]);
	}
	return message;
}

var sd = {};