function InfoSlider(){
	this.getXHR();
	this.parseDate();
}

InfoSlider.prototype = Object.create(App.prototype);

InfoSlider.prototype.getXHR = function(){
		this.tryXHR("GET", "http://codeit.pro/frontTestTask/news/getList" , this.templateSlider.bind(this), true);
}
InfoSlider.prototype.templateSlider = function(obj){
	var data = JSON.parse(obj);
	console.log(data.list);
	console.log(data.list[0].img);
	// templateSlider = document.querySelector("#templateSlider").innerHTML;
	
	// this.findObj(data, this.parseDate)
	var dateBlock = document.querySelector(".date");
	for (var i = 0; i < data.list.length; i++){
		console.log(data.list[i].date);
		setTime = data.list[i].date,
		dateBlock.innerHTML = setTime;
	}
	this.status = true;
}
InfoSlider.prototype.parseDate = function(obj){
 var name = data.list[0].author;
 console.log(name);

	// this.getXHR();

}