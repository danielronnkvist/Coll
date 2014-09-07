var timelineConstant = 150;
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
  if(dia > ($(window).width()/2))
    dia = ($(window).width()/2) - 5
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
    var info = '<img src="img/'+trip.type+'-white.svg" style="fill:white;width:70%;margin-left:'+((0.3*dia)/2)+'px;margin-top:'+((0.3*dia)/5)+'px;width:'+(0.7*dia)+';margin-bottom:-10px;">'
    info += '<p class="text-center circle-text">10km</p>'
    if(odd)
    {
      html += '<label class="time time-top">'+trip.end+'</label>'
      html +='<a href="http://localhost/ESH/presentation.html"><div class="circle affect classification-'+trip.classification+'" style="width:'+dia+'px;height:'+dia+'px;margin-left:-'+(dia-3)+'px;">'+info+'</div></a>';
      html += '<label class="time time-bottom">'+trip.start+'</label>'
    }
    else
    {
      html += '<label class="time time-top time-left">'+trip.end+'</label>'
      html +='<a href="http://localhost/ESH/presentation.html"><div class="circle affect classification-'+trip.classification+'" style="width:'+dia+'px;height:'+dia+'px;">'+info+'</div></a>';
      html += '<label class="time time-bottom time-left">'+trip.start+'</label>'
    }
    return html
  }

}
