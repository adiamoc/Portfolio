window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

function myFunction() {
	if (window.pageYOffset > 0) {
		header.classList.add("bg");
	} else {
		header.classList.remove("bg");	  
	}
}

'use strict';

console.log('reading');
$(document).ready(function() {
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);
    });
});