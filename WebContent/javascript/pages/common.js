var LOCAL_URL="http://"+document.domain+":"+location.port;
var REAL_URL="http://"+document.domain+":"+location.port;
if(location.port==null || location.port=="" ||location.port=="80"){
	LOCAL_URL+="/study-web/";
	REAL_URL +="/study-service/";
}else{
	LOCAL_URL+="/study-web/";
	REAL_URL +="/study-service/";
}
var LOCAL_LOGINURL=LOCAL_URL + "html/login.html";
var LOCAL_INDEXURL=LOCAL_URL + "html/index.html";
//表单序列化方法
$.fn.serializeObject = function(){
	var o = {};
	var a = this.serializeArray();
	$.each(a,function(){
		if(o[this.name]!==undefined){
			if(!o[this.name].push){
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value||'');
		}else{
			o[this.name] = this.value||'';
		}
	});
	return o;
};