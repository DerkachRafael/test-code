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
