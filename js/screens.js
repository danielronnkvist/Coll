var dayView = $("#main-1"),
    main2 = $("#main-2"),
    main3 = $("#main-3"),
    target = $('#currentScreen'),
    ind1 = $('#indicator-1'),
    ind2 = $('#indicator-2'),
    ind3 = $('#indicator-3');

var green = '#99BD47',
    white = '#FFF'

current = "dayView"

target.html(dayView.html());
ind1.css('background-color', green)
target.swipe( {fingers: 'all', swipeRight: rightSwipe, swipeLeft: leftSwipe, allowPageScroll:'auto'} );

function rightSwipe(){
  switch(current)
  {
    case "main2":
      console.log("Till dayView")
      target.animate({
        marginLeft: "+=100%"
      }, 200, function(){
        target.html(dayView.html())
        target.css("margin-left", "0");
        ind2.css('background-color', white)
        ind1.css('background-color', green)
      })
      current = "dayView"
    break;
    case "main3":
      console.log("Till main2")
      target.animate({
        marginLeft: "+=100%"
      }, 200, function(){
        target.html(main2.html())
        target.css("margin-left", "0");
        // ADD FUNCTION HERE
        start();
        ind3.css('background-color', white)
        ind2.css('background-color', green)
        createMap();
      })
      current = "main2"
    break;
    default:
    break;
  }
}

function leftSwipe(){
  switch(current)
  {
    case "dayView":
      console.log("Till main2")
      target.animate({
        marginLeft: "-=100%"
      }, 200, function(){
        target.html(main2.html())
        target.css("margin-left", "0");
        ind1.css('background-color', white)
        ind2.css('background-color', green)
        createMap();
      })
      current = "main2"
    break;
    case "main2":
      console.log("Till main3")
      target.animate({
        marginLeft: "-=100%"
      }, 200, function(){
        target.html(main3.html())
        target.css("margin-left", "0");
        start();
        ind2.css('background-color', white)
        ind3.css('background-color', green)
      })
      current = "main3"
    break;
    default:
    break;
  }
}
