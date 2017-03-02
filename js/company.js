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
Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
        
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});
function App(){
	this.init();
};

App.prototype = Object.create(Helper.prototype);

App.prototype.init = function(){
	new TotalCompany();
	new InfoSlider();
	// new Tabs();
};

window.addEventListener("DOMContentLoaded", function(){
	new App();
});

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
function InfoSlider(){
	this.getXHR();
}

InfoSlider.prototype = Object.create(App.prototype);

InfoSlider.prototype.getXHR = function(){
	this.tryXHR("GET", "http://codeit.pro/frontTestTask/news/getList" , this.templateSlider.bind(this), true);
}
InfoSlider.prototype.templateSlider = function(obj){
	var data = JSON.parse(obj),
	listTemplate = document.querySelector("#sliderTemplate").innerHTML,
	compiledTemplate = Handlebars.compile(listTemplate),
	generateHTML = compiledTemplate(data);
	containerList = document.querySelector(".carouselWrap"),
	containerList.innerHTML = generateHTML;
	this.parseUnixDate(); 
	this.cutStr(); 
}
InfoSlider.prototype.parseUnixDate = function(){
	this.dateBlocks = document.querySelectorAll(".date"); 
	for(var i = 0; i < this.dateBlocks.length; i++){
		var unixTime = this.dateBlocks[i];
		var unixTimeNum = +unixTime.innerHTML;
		var d = new Date(unixTimeNum * 1000),	
		yyyy = d.getFullYear(),
		mm = ("0" + (d.getMonth() + 1)).slice(-2),
		dd = ("0" + d.getDate()).slice(-2),			
		time;
		time = dd + '-' + mm + '-' + yyyy;
		console.log(time);
		unixTime.innerHTML = 'Date ' + time;
	}
	return unixTime.innerHTML;
}

InfoSlider.prototype.cutStr = function(){
	this.descrSlide = document.querySelectorAll(".description");
	for(var i = 0; i <  this.descrSlide.length; i++){
		var description = this.descrSlide[i];
		var descriptionTxt = description.innerHTML;
		var size = 270;
		if(descriptionTxt.length > size){
			var a = descriptionTxt.slice(0, 270);
			description.innerHTML = a + "...";
		}
	}
	return description.innerHTML;
}
