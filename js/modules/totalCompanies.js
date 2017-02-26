function TotalCompany(){
	this.getXHR();
}

TotalCompany.prototype = Object.create(App.prototype);

TotalCompany.prototype.getXHR = function(){
	this.tryXHR("GET", "http://codeit.pro/frontTestTask/company/getList" , this.resultXHR.bind(this), true);
}
TotalCompany.prototype.resultXHR = function(obj){
	var data = JSON.parse(obj);
		console.log(data);
		totalStr = data.list.length;
		console.log(totalStr);
		contentTotalCompany = document.querySelector(".contentTotalCompany");
		contentTotalCompany.innerHTML = totalStr;
		console.log(contentTotalCompany);
}
TotalCompany.prototype.templateList = function(data){
	var list = JSON.parse(obj);
	console.log(list);
}