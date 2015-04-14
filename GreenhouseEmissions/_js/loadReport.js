$(document).ready(function($) {
	$.ajax({
		url: 'report.xml',
		type: 'GET',
		dataType: 'xml',
		success: loadToReport,
	});
});

function loadToReport(xml)
{
	//FRANCE
	$("#france .tableDisplay").find(".countryName").html($(xml).find("country").eq(0).text());
	$("#france .tableDisplay").append("<table><tr><th>Year</th>");
	for(var g = 0; g < 15; g += 5)
	{
		$("#france table tr").append("<th>" + $(xml).find("variable").eq(g).text() + "</th>");
	}
	for(var y = 0; y<5; y++)
	{
		$("#france table").append("<tr><td>" + $(xml).find("time").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y + 5).text() + "</td><td>" + $(xml).find("value").eq(y + 10).text() +"</td></tr>");
	}

	//GERMANY
	$("#germany .tableDisplay").find(".countryName").html($(xml).find("country").eq(15).text());
	$("#germany .tableDisplay").append("<table><tr><th>Year</th>");
	for(var g = 15; g < 30; g += 5)
	{
		$("#germany table tr").append("<th>" + $(xml).find("variable").eq(g).text() + "</th>");
	}
	for(var y = 15; y<20; y++)
	{
		$("#germany table").append("<tr><td>" + $(xml).find("time").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y + 5).text() + "</td><td>" + $(xml).find("value").eq(y + 10).text() +"</td></tr>");
	}

	//ITALY
	$("#italy .tableDisplay").find(".countryName").html($(xml).find("country").eq(30).text());
	$("#italy .tableDisplay").append("<table><tr><th>Year</th>");
	for(var g = 30; g < 40; g += 5)
	{
		$("#italy table tr").append("<th>" + $(xml).find("variable").eq(g).text() + "</th>");
	}
	for(var y = 30; y<35; y++)
	{
		$("#italy table").append("<tr><td>" + $(xml).find("time").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y + 5).text() + "</td></tr>");
	}

	//UK
	$("#uk .tableDisplay").find(".countryName").html($(xml).find("country").eq(40).text());
	$("#uk .tableDisplay").append("<table><tr><th>Year</th>");
	for(var g = 40; g < 55; g += 5)
	{
		$("#uk table tr").append("<th>" + $(xml).find("variable").eq(g).text() + "</th>");
	}
	for(var y = 40; y<45; y++)
	{
		$("#uk table").append("<tr><td>" + $(xml).find("time").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y).text() + "</td><td>" + $(xml).find("value").eq(y + 5).text() + "</td><td>" + $(xml).find("value").eq(y + 10).text() +"</td></tr>");
	}
}
