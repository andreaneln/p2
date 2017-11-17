var locations = [
    [
        "Mount Doug Trails",
        48.491043, 
        -123.338419
    ],
    [
    		"Carsa Gym ",
        48.467883, 
        -123.310966
    ],
    [
    		"Centennial Stadium Track",
        48.467611, 
        -123.315143
    ],
    [
       "Mount Tolmie Trails",
        48.456986, 
        -123.325852
    ],
    [
        "Beach Rd",
        48.454979, 
        -123.300783
    ]

]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(48.4671678, -123.3265902),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
       
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        cnt++;
          infowindow.setContent(locations[i][0]+cnt);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    var cnt = 0;
   
   function counting() {
   cnt++;
   alert(cnt);    
       }