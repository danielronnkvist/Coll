path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];
path2 = [[58.392589, 15.557079], [58.394175, 15.560362], [58.395052, 15.564439]]
path3 = [[58.392589, 15.557079], [58.395052, 15.564439]]

function createMap(){
  map = new GMaps({
    div: '#mapHolder',
    lat: 58.393796,
    lng: 15.561152,
    scrollwheel: false
  });

  map.drawPolyline({
    path: path3,
    strokeColor: '#131540',
    strokeOpacity: 0.6,
    strokeWeight: 6
  });
  map.drawPolyline({
    path: path2,
    strokeColor: 'red',
    strokeOpacity: 0.6,
    strokeWeight: 6
  });
}

createMap()
