(function(iwsd, undefined){
	accessTrace={
		options:{
			path:'trace'
		},
		pageTrace:function(param){
			requestTrace('page',param);
		},
		actionTrace:function(param){
			requestTrace('action',param);
		},
		rolloverTrace:function(param){
			requestTrace('rollover',param);
		}
	};
	function requestTrace(traceType,param){
		$.get(getTraceURL(traceType,param));
	}
	function getTraceURL(traceType,param){
		return '/'+iwAT.options.path+'/'+getURLAbbrevation()+'/'+traceType+'/'+param;
	}
	function getURLAbbrevation(){
		return location.pathname.split("/").length>1?location.pathname.split("/")[2]:'-';
	};
	iwsd.accessTrace=iwAT=accessTrace;
})(iwsd);