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
      html += makeCircle();
    }
  }
  html += htmlGenerator(height, trips[i].classification, trips[i].affect, paus);
  if(trips[i-1])
  {
    if(trips[i].start - trips[i-1].end > 0.2)
    {
      html += makeCircle();
    }
  }

  document.getElementById('timelineHolder').innerHTML += html;
}

function htmlGenerator(height, classification, affect, paus)
{
  var dia = affect * timelineConstant * 3;
  var circle = makeCircle(classification, dia)
  return '<div class="timeline-element classification-'+
               classification+'" style="height:'+height+'px;">'+circle+'</div>';
}

function makeCircle(classification, dia)
{
  if(classification)
    return '<div class="circle affect classification-'+classification+'" style="width:'+dia+'px;height:'+dia+'px;"></div>'
  else
  {
    odd = !odd;
    if(odd)
      return '<div class="circle marker end"></div>'
    else
      return '<div class="circle marker"></div>'
  }

}
