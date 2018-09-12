(function(window, undefined){
	var iwsd={
		common:{}
	};

	iwsd.common.clientSupport={
			isHtmlUpload:function(){
				return this.isFormDataSupport();
			},
			isFormDataSupport:function(){
				return !(typeof window.FormData==='undefined');
			},
			isBlobSliceSupport:function(){
				return window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);
			}
	};

	iwsd.common.convertUtil={
		convertIntoMB:function(size){
			var s=iwsdUtil.nvl(size,0);
			if(s===0) return '0';
				return ((Math.round((size/(1024*1024))*1000))/1000);
		},
		addComma:function(number,position){
			position=position||3;
			var num=new String(number).replace(/,/g,'');
			while(num!=(num=num.replace(/^(-?\d+)(\d{3})/,'$1,$2')));
			return num;
		},
		fileName:function(fileName){
			return fileName.length>90?fileName.substring(0,45)+"..."+fileName.substring(fileName.length-45):fileName;
		}
	};

	iwsd.common.checksum=(function(){
		var algorithm={MD5:md5,ADLER32:adler32};
		function md5(data){
			return CryptoJS.MD5(CryptoJS.enc.u8array.parse(data)).toString();
		};
		function adler32(data,sum){
			var s1=sum&0xffff,s2=(sum>>>16)&0xffff,len1=data.byteLength,len2,i=0;
			while(len1>0){
				len2=len1>1024?1024:len1;
				len1-=len2;
				while(len2--){
					s1+=data[i++];
					s2+=s1;
				}
				s1%=65521;
				s2%=65521;
			}
			return (((s2<<16)|s1)>>>0).toString(16);
		};
		return{
			supportAlgorithm:algorithm,
			currentAlgorithm:algorithm.ADLER32,
			calculate:function(){
				var dfd=$.Deferred(),reader=new FileReader(),self=this,checksum=arguments[1]||1;
				reader.onload=function(e){
					var op=[];
					op.push(new Uint8Array(e.target.result));
					op.push(parseInt(checksum,16));
					dfd.resolve(self.currentAlgorithm.apply(this,op));
				};
				reader.readAsArrayBuffer(arguments[0]);
				return dfd.promise();
			}
		};
	}());

	iwsd.common.log={
		measurelog:function(msg){
			console.log(iwsdDate.getCurrentTime()+' : '+msg);
		}
	};

	iwsd.common.date={
		getCurrentTime:function(){
			var d=new Date();
			return d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'.'+d.getMilliseconds();
		}
	};

	iwsd.common.util={
		nvl:function(expr1,expr2){
			return(typeof expr1==='undefined'||expr1==null||expr1=='')?expr2:expr1;
		}
	};

	iwsd.common.file={
		getExtension:function(fileName){
			if(iwsdUtil.nvl(fileName,'')==''||fileName.indexOf('.')==-1)return'';
			return fileName.split(".").pop();
		}
	};

	window.iwsd=iwsd;
	window.iwsdSupport=iwsd.common.clientSupport;
	window.iwsdConvert=iwsd.common.convertUtil;
	window.iwsdChecksum=iwsd.common.checksum;
	window.iwsdLog=iwsd.common.log;
	window.iwsdDate=iwsd.common.date;
	window.iwsdUtil=iwsd.common.util;
	window.iwsdFile=iwsd.common.file;

})(window);