var count = 0;
function ChatBoxCounter() {
	if (localStorage.getItem("Name") == null)
		document.getElementById("ChatBoxButton").style.display = 'none';
	else {
		count=count+1;	
		if (count%2 == 0)
			document.getElementById("ChatBoxWrapper").style.display = 'none';
		else
			document.getElementById("ChatBoxWrapper").style.display = 'block';
	}
}

function ChatCommentEnter() {
	var CurrentLoginName = document.createElement("span");
	CurrentLoginName.setAttribute("class", "name");
	CurrentLoginName.innerHTML= localStorage.getItem('Name');
	
	var CurrentDate = new Date();
	var	mins = CurrentDate.getMinutes();
	var Hours = CurrentDate.getHours();
	var Day = CurrentDate.getDate();
	var Month = CurrentDate.getMonth();
	Month+1;
	var Year = CurrentDate.getFullYear();
	CurrentDate = " " + Day +"/" + Month + "/" + Year + " " + Hours + ":" + mins;
	var NewDate = document.createElement("span");
	NewDate.innerHTML = CurrentDate;
	
	var NewComment = document.createElement("div");
	var NewCommentString = document.getElementById("ChatCommentData").value;
	var BottomBarUp = document.getElementById("ChatBoxBottomLine");
	
	NewComment.innerHTML= NewCommentString;
	
	BottomBarUp.parentNode.insertBefore(CurrentLoginName,BottomBarUp);
	BottomBarUp.parentNode.insertBefore(NewDate,BottomBarUp);
	BottomBarUp.parentNode.insertBefore(NewComment,BottomBarUp);
	document.getElementById("ChatBoxBottomLine").scrollIntoView();
}