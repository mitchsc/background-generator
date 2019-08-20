var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


setGradient();

function setGradient(){
	body.style.background = 
		"linear-gradient(to right," 
		+ color1.value + "," 
		+ color2.value
 		+ ")";
 	css.textContent = body.style.background + ";";
}

function setRandom(){
	color1.value = "#" + (Math.random().toString(16) + "000000").slice(2, 8);
	color2.value = "#" + (Math.random().toString(16) + "000000").slice(2, 8);
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandom);
