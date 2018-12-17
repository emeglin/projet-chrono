var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;


var startbtn = document.querySelector("#start");
startbtn.addEventListener("click",chronoStart);

var stopbtn = document.querySelector("#stop");
stopbtn.addEventListener("click",chronoStop);
stopbtn.addEventListener("click",compareTime);

var resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click",chronoReset)


function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
    }
    
    document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()",10)
}

function chronoStart(){
    start = new Date();
    chrono();
}

function chronoStop(){
    clearTimeout(timerID);
}

function chronoReset(){
    document.getElementById("chronotime").innerHTML = "0:00:00:000";
	start = new Date();
	chronoStop();
}


// localstorage


var saveButton = document.querySelector("#save");
var saveinput = document.querySelector("#saveinput");

saveButton.addEventListener("click",saveTime);


function saveTime(event) {
	localStorage.setItem("saveTime",)
}

// Best time
function compareTime(){
	var bestTime = document.querySelector("#best_time");
	var stopTime = document.querySelector("#chronotime");
	bestTime.innerText = stopTime.innerText;
}