$(document).ready(function($) {
    $.ajax({
        url: 'report.xml',
        type: 'GET',
        dataType: 'xml',
        success:loadChartData,
    });
});
    

function loadChartData(xml)
{
    var years = new Array();

    var frMethane = new Array();
    var gerMethane = new Array();
    var ukMethane = new Array();

    var frN2O = new Array();
    var gerN2O = new Array();
    var itaN2O = new Array();
    var ukN2O = new Array();


    var frHFC = new Array();
    var gerHFC = new Array();
    var itaHFC = new Array();
    var ukHFC = new Array();

    for(var i = 0; i < 5; i++)
    {
        years[i] = $(xml).find("time").eq(i).text();

        frMethane[i] = $(xml).find("value").eq(i).text();
        
        gerMethane[i] = $(xml).find("value").eq(i+15).text();
        ukMethane[i] = $(xml).find("value").eq(i+40).text();

        frN2O[i] = $(xml).find("value").eq(i+5).text();
        gerN2O[i] = $(xml).find("value").eq(i+20).text();
        itaN2O[i] = $(xml).find("value").eq(i+30).text();
        ukN2O[i] = $(xml).find("value").eq(i+45).text();

        frHFC[i] = $(xml).find("value").eq(i+10).text();
        gerHFC[i] = $(xml).find("value").eq(i+25).text();
        itaHFC[i] = $(xml).find("value").eq(i+35).text();
        ukHFC[i] = $(xml).find("value").eq(i+50).text();
    }
    console.log(frMethane);

    var methaneData = {
        labels: years,
        datasets: [
            {
                label: "France",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: frMethane
            },
            {
                label: "Germany",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: gerMethane
            },
            {
                label: "UK",
                fillColor: "rgba(241, 215, 223,0.2)",
                strokeColor: "rgba(241, 215, 223,1)",
                pointColor: "rgba(241, 215, 223,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data:ukMethane
            }
        ]
    };

     var n2oData = {
        labels: years,
        datasets: [
            {
                label: "France",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: frN2O
            },
            {
                label: "Germany",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: gerN2O
            },
            {
                label: "Italy",
                fillColor: "rgba(215,236,241,0.2)",
                strokeColor: "rgba(215,236,241,1)",
                pointColor: "rgba(215,236,241,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: itaN2O
            },
            {
                label: "UK",
                fillColor: "rgba(241, 215, 223,0.2)",
                strokeColor: "rgba(241, 215, 223,1)",
                pointColor: "rgba(241, 215, 223,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data:ukN2O
            }
        ]
    };

     var hfcData = {
        labels: years,
        datasets: [
            {   
                label: "France",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: frHFC
            },
            {
                label: "Germany",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: gerHFC
            },
            {
                label: "Italy",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: itaHFC
            },
            {
                label: "UK",
                fillColor: "rgba(241, 215, 223,0.2)",
                strokeColor: "rgba(241, 215, 223,1)",
                pointColor: "rgba(241, 215, 223,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data:ukHFC
            }
        ]
    };
    var options ={
        animation: true,
        animationEasing: "easeOutQuart",
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };
    



    var ctx = $("#methane").get(0).getContext("2d");
    var lineChart = new Chart(ctx).Line(methaneData, options);
    var methLegend = lineChart.generateLegend();
    $("#methGas").append(methLegend);

    var ctx = $("#n2o").get(0).getContext("2d");
    var lineChart = new Chart(ctx).Line(n2oData, options);
    var n2oLegend = lineChart.generateLegend();
    $("#n2oGas").append(n2oLegend);

    var ctx = $("#hfc").get(0).getContext("2d");
    var lineChart = new Chart(ctx).Line(hfcData, options);
    var hfcLegend = lineChart.generateLegend();
    $("#hfcGas").append(hfcLegend);
}
