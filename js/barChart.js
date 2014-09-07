function setColor(area,data,config,i,j,animPct,value) 
{
	if(area=="FILLCOLOR")
	{
	    if(value < 25)return("#99BD47");
	    else if(value >= 25 && value < 45)return("#F3E651");
	    else return("#C63139");

	}


}

function drawDoughnut()
{
	var barData = {
        labels: ["M", "T", "O", "T", "F", "L", "S"],
          datasets: [
            {
                labelColor: "RED", 
                fillColor: setColor,
                strokeColor: "WHITE",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                strokeWidth: "13",
                data: [10, 31, 17, 29, 52, 8, 22]
            }
        ]
	};

    var getChart = document.getElementById("barChart").getContext("2d");
    var myBarChart = new Chart(getChart).Bar(barData, {scaleShowGridLines : false, scaleShowLabels : false, barStrokeWidth: -15});

}