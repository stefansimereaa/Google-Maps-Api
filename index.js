// Set map
function initialize() {
    const mapOptions = {
        // Zoom of map on start
        zoom: 10,
        // Initial center cordinates on start (Pescara Italy)
        center: new google.maps.LatLng(42.4617902, 14.2160898),
        // Type of map RoadMap
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimum zoom of map
        minZoom: 2
    };

    // Create a new map instance using provided options
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create an info window to display location info
    const infoWindow = new google.maps.InfoWindow();

    // Create a marker for example : Rome, Italy
    const marker = new google.maps.Marker({
        // Cordinates
        position: new google.maps.LatLng(41.9027835, 12.4963655),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Rome, Italy'
    });
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // Adjust map center when the window is resized
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });


}

// Initialize the map when window loading finished
google.maps.event.addDomListener(window, 'load', initialize);