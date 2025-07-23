// Initialize and add the map
function initMap() {
  // The location of RPI
  const rpi = { lat: -25.344, lng: 131.031 };
  // The map, centered at RPI
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: rpi,
  });
  // The marker, positioned at RPI
  const marker = new google.maps.Marker({
    position: rpi,
    map: map,
  });
}

window.initMap = initMap;