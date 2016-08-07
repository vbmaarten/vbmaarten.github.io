var crossindex = 0;
var crosscount = 4;
var crossspeed = 5000;

var crossfade = function(){
	var newindex = (crossindex + 1)%4;

	var current = $("#crossfader")[0].children[crossindex];
	var next = $("#crossfader")[0].children[newindex];

	current.className = "";
	next.className = "active";

	crossindex = newindex;

	setTimeout(crossfade, crossspeed);
}

$(document).ready(function(){
	setTimeout(crossfade, crossspeed);
	setTimeout(function(){$("#main")[0].style.opacity = 1;}, 500);
});
