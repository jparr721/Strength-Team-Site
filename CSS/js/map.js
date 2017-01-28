
var myCenter = new google.maps.LatLng(42.966945, 85.889879);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeID.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps / Marker({
            position: myCenter,
        });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
