function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$("#usa").hover(function(){
    $('#usa-description').show();
},function(){
    $('#usa-description').hide();
});

$("#usa-description").hover(function(){
    $('#usa-description').show();
},function(){
    $('#usa-description').hide();
});

$("#canada").hover(function(){
    $('#canada-description').show();
},function(){
    $('#canada-description').hide();
});

$("#canada-description").hover(function(){
    $('#canada-description').show();
},function(){
    $('#canada-description').hide();
});

$("#jordan").hover(function(){
    $('#jordan-description').show();
},function(){
    $('#jordan-description').hide();
});

$("#jordan-description").hover(function(){
    $('#jordan-description').show();
},function(){
    $('#jordan-description').hide();
});

$("#egypt").hover(function(){
    $('#egypt-description').show();
},function(){
    $('#egypt-description').hide();
});

$("#egypt-description").hover(function(){
    $('#egypt-description').show();
},function(){
    $('#egypt-description').hide();
});

$("#kenya").hover(function(){
    $('#kenya-description').show();
},function(){
    $('#kenya-description').hide();
});

$("#kenya-description").hover(function(){
    $('#kenya-description').show();
},function(){
    $('#kenya-description').hide();
});

$("#madagascar").hover(function(){
    $('#madagascar-description').show();
},function(){
    $('#madagascar-description').hide();
});

$("#madagascar-description").hover(function(){
    $('#madagascar-description').show();
},function(){
    $('#madagascar-description').hide();
});

$("#pakistan").hover(function(){
    $('#pakistan-description').show();
},function(){
    $('#pakistan-description').hide();
});

$("#pakistan-description").hover(function(){
    $('#pakistan-description').show();
},function(){
    $('#pakistan-description').hide();
});

$("a").on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
	}});