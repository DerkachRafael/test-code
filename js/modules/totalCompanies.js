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
		contentTotalCompany = document.querySelector(".contentTotalCompany"),
		listTemplate = document.querySelector("#listTemplate").innerHTML,
		compiledTemplate = Handlebars.compile(listTemplate),
		generateHTML = compiledTemplate(data);
		containerList = document.querySelector(".companyNameList"),
		containerList.innerHTML = generateHTML;
		contentTotalCompany.innerHTML = totalStr;	
		this.getPartners(data);
		// this.getLocation(data);
}
// TotalCompany.prototype.test = function(data){
// 	var name = data.list;
// 	console.log(name);
// }

TotalCompany.prototype.getPartners = function(data){
		listTemplate = document.querySelector("#partnersTemplate").innerHTML,
		compiledTemplate = Handlebars.compile(listTemplate),
		generateHTML = compiledTemplate(data),
		containerList = document.querySelector(".rowContentCompany"),
		containerList.innerHTML = generateHTML;
	}

	// Get LocationList func
// TotalCompany.prototype.getLocation = function(data){
// 		listTemplate = document.querySelector("#locationTemplate").innerHTML,
// 		compiledTemplate = Handlebars.compile(listTemplate),
// 		generateHTML = compiledTemplate(a);
// 		containerList = document.querySelector(".rowContentCompany"),
// 		containerList.innerHTML = generateHTML;
// }