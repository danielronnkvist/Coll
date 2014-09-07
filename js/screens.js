var dayView = $("#main-1"),
    main2 = $("#main-2"),
    main3 = $("#main-3"),
    target = $('#currentScreen');

current = "dayView"

target.html(main3.html());
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
        // ADD FUNCTION HERE
        start();
      })
      current = "main3"
    break;
    default:
    break;
  }
}