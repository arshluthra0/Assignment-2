// WEB303 Assignment 2

$(document).on("click", '#vprospect', function(event) { 
	var linkone = new XMLHttpRequest;
    dataone.open('GET', 'prospect.html', true);
    $('#vprospect').load('prospect.html #vprospect');
});
$(document).on("click", '#vconvert', function(event) { 
	var linktwo = new XMLHttpRequest;
    linktwo.open('GET', 'convert.html', true);
    $('#vconvert').load('convert.html #vconvert');
});
$(document).on("click", '#vretain', function(event) { 
	var linkthree = new XMLHttpRequest;
    linkthree.open('GET', 'retain.html', true);
    $('#vretain').load('retain.html #vretain');
});

