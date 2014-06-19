$(document).ready(function () {

	var templateSource     = $("#results-template").html();
	var template 		   = Handlebars.compile(templateSource);
	var resultsPlaceholder = $("#results");

	var q = "charlie";

	$.ajax({
        url: 'http://gdata.youtube.com/feeds/api/videos?q=' + q + '&max-results=5&v=2&alt=jsonc',
        success: function (response) {
        	data = response.data;
        	console.log(data);
        	resultsPlaceholder.html(template(data));
        }
	});
})