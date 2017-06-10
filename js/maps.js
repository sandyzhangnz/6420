// Google Maps
var marker
function initMap() {
    var location = {lat: -36.8807697, lng: 174.705564};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 13
    });
    marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Unitec Institute of Technology',
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
//
// var nail
// function initMap()
// {
//     var location = {lat: -36.8807697, lng: 174.705564};
//     var map = new google.maps.Map(document.getElementById('map'),
//     {
//         center: location,
//         zoom: 13
//     });
//     nail = new google.maps.Marker({
//         position: location,
//         map: map,
//         title: 'Unitec Institute of Technology',
//     });
// }
