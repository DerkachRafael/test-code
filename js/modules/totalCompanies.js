function TotalCompany(){
	this.getXHR();
	// s
	
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
		contentTotalCompany = document.querySelector(".contentTotalCompany"),
		listTemplate = document.querySelector("#listTemplate").innerHTML,
		compiledTemplate = Handlebars.compile(listTemplate),
		generateHTML = compiledTemplate(data);
		containerList = document.querySelector(".listCompany"),
		containerList.innerHTML = generateHTML;
		console.log(compiledTemplate);
		console.log(generateHTML);
		contentTotalCompany.innerHTML = totalStr;
		console.log(contentTotalCompany);
		this.nameCompany = document.querySelector(".nameCompany");
		console.log(this.nameCompany);
		for(var i = 0; i < this.nameCompany.length; i++){ 
			console.log("for+");
		this.nameCompany[i].addEventListener("click", this.activateItem.bind(this));
	}
}
TotalCompany.prototype.clickHandler = function(){
	
}
TotalCompany.prototype.activateItem = function(){
	console.log("click+");
	console.log(this);
	$(this).addClass("activeName");
}

// var nameCompany = document.querySelectorAll(".nameCompany").length;
// console.log(nameCompany);
// for(var i = 0; i < nameCompany.length; i++){ 
// 	nameCompany[i].addEventListener("click", activeCompany);
// }
// function activeCompany(){
// 	this.classList.add("activeName");
// }






