var current = 1;
var green = '#99BD47',
    yellow = '#F7EA3A';
$('#arrow-past').hide()
$('#bus-timetable').hide()

$('#alt-text').css('color', green);
$('#current').html($('#alt-1').html())
$('#current').swipe( {fingers: 'all', swipeRight: rightSwipe, swipeLeft: leftSwipe, allowPageScroll:'auto'} );

$('#arrow-next').click(leftSwipe)
$('#arrow-past').click(rightSwipe)

function rightSwipe()
{
  console.log("rightswipe")
  switch(current)
  {
    case 2:
      $('#current').animate({
        marginLeft: "+=100%"
      }, 200, function(){
        $('#current').css("margin-left", "0");
        $('#current').html($('#alt-1').html())
        $('#alt-text').text('ALTERNATIV 1')
        $('#alt-text').css('color', green);
        $('#arrow-next').show()
        $('#arrow-past').hide()
        $('#bus-timetable').hide()

      })
      current = 1
    break;
    default:
    break;
  }
}
function leftSwipe()
{
  console.log("leftswipe")
  switch(current)
  {
    case 1:
      $('#current').animate({
        marginLeft: "-=100%"
      }, 200, function(){
        $('#current').css("margin-left", "0");
        $('#current').html($('#alt-2').html())
        $('#alt-text').text('ALTERNATIV 2')
        $('#alt-text').css('color', yellow);
        $('#arrow-next').hide()
        $('#arrow-past').show()
        $('#bus-timetable').show()
      })
      current = 2
    break;
    default:
    break;
  }
}
