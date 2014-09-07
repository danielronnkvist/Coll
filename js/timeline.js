var trips = [
  {
    "type": "car",
    "classification": 3,
    "start": 0,
    "end": 1.3,
    "affect": 0.1
  },{
    "type": "walk",
    "classification": 1,
    "start": 1.8,
    "end": 2.2,
    "affect": 0.04
  },{
    "type": "car",
    "classification": 3,
    "start": 2.2,
    "end": 4,
    "affect": 0.16
  },{
    "type": "bus",
    "classification": 2,
    "start": 5.3,
    "end": 5.8,
    "affect": 0.04
  },{
    "type": "car",
    "classification": 3,
    "start": 9,
    "end": 10,
    "affect": 0.25
  },{
    "type": "walk",
    "classification": 1,
    "start": 10,
    "end": 12,
    "affect": 0.04
  },
];
var timelineConstant = 100;
var odd = false;
for(var i = trips.length-1; i >= 0; i--)
{
  var paus;
  var height = (trips[i].end - trips[i].start)*timelineConstant;
  var html = "";
  if(trips[i+1])
  {
    if(trips[i+1].start - trips[i].end > 0.2)
    {
      html += '<div class="end"></div>';
    }
  }
  html += htmlGenerator(height, trips[i]);
  if(trips[i-1])
  {
    if(trips[i].start - trips[i-1].end > 0.2)
    {
      html += '<div class="end"></div>';
    }
  }

  document.getElementById('timelineHolder').innerHTML += html;
}

function htmlGenerator(height, trip)
{
  var dia = 48 + trip.affect * timelineConstant *3;
  if(dia > height)
    dia = height-5;
  var circle = makeCircle(trip, dia)
  return '<div class="timeline-element classification-'+
               trip.classification+'" style="height:'+height+'px;">'+circle+'</div>';
}

function makeCircle(trip, dia)
{
  if(trip.classification)
  {
    odd = !odd;
    var html = "";
    if(odd)
    {
      html += '<label class="time time-top">'+trip.end+'</label>'
      html +='<div class="circle affect classification-'+trip.classification+'" style="width:'+dia+'px;height:'+dia+'px;margin-left:-'+(dia-3)+'px;"></div>';
      html += '<label class="time time-bottom">'+trip.start+'</label>'
    }
    else
    {
      html += '<label class="time time-top time-left">'+trip.end+'</label>'
      html +='<div class="circle affect classification-'+trip.classification+'" style="width:'+dia+'px;height:'+dia+'px;"></div>';
      html += '<label class="time time-bottom time-left">'+trip.start+'</label>'
    }
    return html
  }

}
