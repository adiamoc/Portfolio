window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

function myFunction() {
	if (window.pageYOffset > 0) {
		header.classList.add("bg");
	} else {
		header.classList.remove("bg");	  
	}
}