var map, infoWindow, geocoder, location, 
		sunrise, daylength,
		marker, sunrisePolyline, sunsetPolyline, sunPolyline, sunInfoOverlay,
		geolocationInProgress,
		limitedUpdateResult = limitExecByInterval(updateResult, 40),
		date = new Date(),
		moreDetailed = false;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
//        infoWindow = new google.maps.InfoWindow;
          var marker = new google.maps.Marker({
              map: map,
            draggable: true,
        });

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

                    var lat= position.coords.latitude;
                    var lng= position.coords.longitude 
                    // Display retrieved Latitude and Longitude
                     document.getElementById('latitude').value = position.coords.latitude;
                     document.getElementById('longitude').value = position.coords.longitude; 
            marker.setPosition(pos);       
//            infoWindow.setPosition(pos);
//            infoWindow.setContent('Location found.');
//            infoWindow.open(map);
//            marker.setPosition(pos);
            map.setCenter(pos);
            marker.setMap(map);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
        
        
   var placeInput = (document.getElementById('location'));

 var autocomplete = new google.maps.places.Autocomplete(placeInput);

 autocomplete.bindTo('bounds', map);

google.maps.event.addListener(autocomplete, 'place_changed', function () {
    
//    marker.setVisible(true);

var place = autocomplete.getPlace();

          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }


            marker.setPosition(place.geometry.location);
//        marker.setVisible(true);
console.log(place.address_components);
console.log("You selected: '" + place.formatted_address + "'");

});      
        
        
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      


