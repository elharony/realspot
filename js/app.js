$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function(){
	$("#typed").typed({
		strings: ["Manage real estate units", "Lorem ipsum dolor sit.", "Sed eu tellus feugiat."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true
	});
});
