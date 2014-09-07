function drawDoughnut()
{
var pieData = [
	{
		value: 83,
		color:"#99BD47",
		label: 'green points',
		labelColor: "#F38630",
		labelFontSize : '16',
		strokeColor: '#F6F6F6',
		highlightStroke: '#F6F6F6'
	},
	{
		value: 17,
		color: "#F6F6F6",
		fillColor: "#F6F6F6",
		strokeColor: '#F6F6F6',
		highlightStroke: '#F6F6F6'
	}
];
var pieOptions = {
	segmentShowStroke : false,
	animateScale : true,
	datasetShowStroke: false,
	barShowStroke: false,
	segmentShowStroke: false,
	animationEasing: "easeOutBounce"

}

var ctx = document.getElementById("myChart").getContext("2d");

var myDoughnutChart = new Chart(ctx).Doughnut(pieData, {percentageInnerCutout : 88}, pieOptions);
}
