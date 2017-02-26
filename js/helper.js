// "use strict";
function Helper(){
};
Helper.prototype.start=function(){
	console.log("works");
}

Helper.prototype.tryXHR = function(method, url, callback){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			callback(xmlhttp.responseText);
		}
    }
    xmlhttp.open(method, url, true);
    xmlhttp.send();
};