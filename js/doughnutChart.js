var pieData = [
	{
		value: 83,
		color:"#99BD47",
		label: 'green points',
		labelColor: "#F38630", 
		labelFontSize : '16'
		strokeColor: "rgba(220,220,220,0.8)",
	},
	{
		value: 17, 
		color: "RED"
	}
];
var pieOptions = {
	segmentShowStroke : false,
	animateScale : true,

}
		
var ctx = document.getElementById("myChart").getContext("2d");
var myDoughnutChart = new Chart(ctx).Doughnut(pieData, {percentageInnerCutout : 88}, pieOptions);