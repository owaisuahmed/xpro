// TODO: add your own access token.
mapboxgl.accessToken = '';

//This variable holds the value for the number of ms to wait before moving the marker on the map.
const moveMarkerInterval = 300;

//This variable holds the coordinates for the center of the map.
const mapCenter = [39.210101147377294, 21.45029543296145];

// This array contains the coordinates for all bus stops that will be shown in the animation.
const busStops = [
    [39.184005577295984, 21.482813674616526],
    [39.1831528214241, 21.48157767465453],
    [39.18339523877879, 21.481363969093877],
    [39.18380352063932, 21.480817831235914],
    [39.18380352063932, 21.480794086065195],
    [39.184505255087096, 21.480663487556946],
    [39.18579389470938, 21.480722850529766],
    [39.18838393276209, 21.481411459245564],
    [39.18898359674474, 21.481530184557048],
    [39.18992774854721, 21.481553929607735],
    [39.19154811718117, 21.483085477195793],
    [39.19268365110576, 21.4846051363966],
    [39.19306641547339, 21.48536496009229],
    [39.19545231259584, 21.48475947594109],
    [39.1975319983229, 21.484688242345964],
    [39.19977754855579, 21.48550742658535],
    [39.199790307363926, 21.48478322046505],
    [39.19975203093951, 21.483667223651985],
    [39.19947133716039, 21.4826936875303],
    [39.19912684934057, 21.481862614958466],
    [39.19796712749665, 21.480437934643266],
    [39.19637925981954, 21.47934971384822],
    [39.19337518585552, 21.478271468753466],
    [39.190177992850955, 21.477482747377994],
    [39.188418463549574, 21.477332989623044],
    [39.187432159601194, 21.477205260594655],
    [39.18726356167956, 21.47496394231036],
    [39.187143134575194, 21.47285707176439],
    [39.186669324721606, 21.468673276034878],
    [39.187801339502585, 21.468673276034878],
    [39.19447300108408, 21.47100434690422],
    [39.19856752277905, 21.47340262129645],
    [39.20037392934444, 21.471138830649714],
    [39.20030167308182, 21.46959226037647],
    [39.200638868974025, 21.468875004821648],
    [39.20049435644879, 21.46784394377499],
    [39.199001060354746, 21.464930036151028],
    [39.19827849772858, 21.464078267531537],
    [39.19818215604511, 21.459460698366875],
    [39.197897736878176, 21.448003349953],
    [39.20492263406527, 21.445104037426066],
    [39.210564990793245, 21.45014620649098],
    [39.217497542049536, 21.443308564150193],
    [39.20989981086381, 21.43619546105992],
    [39.218225798267085, 21.428089402787347],
    [39.213377641593105, 21.423556174111408],
    [39.230624521073025, 21.407994132800614],
    [39.23569539833685, 21.407747102910626],
    [39.24568628152601, 21.41706286943456]
  ];
      
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: mapCenter,
    zoom: 12,
  });
  
  // Add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker".
  let marker = new mapboxgl.Marker().setLngLat(busStops[0]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // Move the marker on the map every x ms as per moveMarkerInterval. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops, and call move() after incrementing the counter.
    setTimeout(function(){    
      if (counter <= busStops.length) {
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
      } else {
        return;
      }
    }, moveMarkerInterval);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }