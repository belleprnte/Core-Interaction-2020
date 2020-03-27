function adding(number1, number2){
	console.log(number1 + number2)
}

adding(2,2)
adding(20000, -222)



function timeUnit(output, ourHtmlElement){
	if(output < 10){
		ourHtmlElement.innerHTML = "0" + output;
	}else{
		ourHtmlElement.innerHTML = output;
	}
}


var counter = 0;
var minuteCounter = 0;
var hourCounter = 0;

var seconds = document.getElementById("seconds")
var minutes = document.getElementById("minutes")
var hours = document.getElementById("hours")


function myRepeater(){
	timeUnit(counter, seconds)
	counter = counter + 1;

	if(counter === 60){
		counter = 0;
		minuteCounter = minuteCounter + 1;

		if(minuteCounter === 60){
			minuteCounter = 0;
			hourCounter = hourCounter + 1;
			timeUnit(hourCounter, hours);
		}

		timeUnit(minuteCounter, minutes);
	}
}


myRepeater()


setInterval(myRepeater, 1000)


var ticks = document.querySelector("ticks")

var ticks = document.getElementByClass("ticks")

for (var i = 0; i < 24; i++) {

  ticks.insertAdjacentHTML('beforeend', `<div class="ticks"></div>`)

}
