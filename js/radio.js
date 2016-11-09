window.onload = radio();

function radio(){
	
	
	var play = document.getElementById("play");
	var stop = document.getElementById("stop");
	var radioTxt = document.getElementById("radioTxt");
	
	stop.style.display = "hidden";
	play.style.display = "block";
	play.style.backgroundColor = "red";
	play.style.border = "1px solid red";
	//radioTxt.style.cursor = "pointer";
	
	
	
	play.onclick = function (){
		
		
		document.getElementById("audio").play();
		play.style.display = "none";
		stop.style.display = "block";
		//stop.style.backgroundColor = "#007FFF";
		radioTxt.style.cursor = "";
		
		
	}
	
	
	stop.onclick = function (){
		
		
		document.getElementById("audio").pause();
		play.style.display = "block";
		stop.style.display = "none";
		play.style.backgroundColor = "red";
		radioTxt.style.cursor = "pointer";
		
		
	}
	
	radioTxt.onclick = function (){
		
		document.getElementById("audio").play();
		play.style.display = "none";
		stop.style.display = "block";
		radioTxt.style.cursor = "";
	}
}