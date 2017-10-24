$(document).ready(function() {
    

    console.log("test.js loaded, jQuery working");

    var service = new google.maps.places.PlacesService(document.createElement('div'));
    var myLocation = new google.maps.LatLng(50.7680,0.2905);
      var request = {
        location: myLocation,
        radius: '5000',
        type: ['restaurant']
      };
      
      function callback(results, status) {
        console.log(results);
        //console.log(results[0].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}));
        results.forEach(function(elem) {
            $("#results").append("<li>" +
                                 "<img src='" + elem.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) + "'>" +
                                 elem.name +
                                 "<span>visitors: <span id='" + elem.id + "-counter'>0</span></span>" +
                                 "<button class='location-btn' id='" + elem.id +"'>I'm going</button>" +
                                 "</li>");
        })
        
        
        
        $(".location-btn").click(function(event){

            $.ajax({
              type: "POST",
              url: "/test",
              data: {
                  googleID: event.target.id
              },
              success: function(data) {
                  console.log(data);
              },
            });


        });      
        
        
      }
    
    
    service.nearbySearch(request, callback);
    


})
