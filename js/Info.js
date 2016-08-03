function switcher_1() {
	if(document.getElementById("switch_1").style.display == "none")
		document.getElementById("switch_1").style.display = "block";
	else
		document.getElementById("switch_1").style.display = "none";
}

function switcher_2() {
	if(document.getElementById("switch_2").style.display == "none")
		document.getElementById("switch_2").style.display = "block";
	else
		document.getElementById("switch_2").style.display = "none"
}

function NYP_tutorial_on() {
	localStorage.removeItem("j");
	document.location.href = "mainpage.html";
}
