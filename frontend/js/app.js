const map = L.map('map').setView([17.385044, 78.486671], 15);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Create a marker for the vehicle
const vehicleMarker = L.marker([17.385044, 78.486671]).addTo(map);

// Polyline for the vehicle's path
const vehiclePath = L.polyline([], { color: 'blue' }).addTo(map);

async function fetchVehicleData() {
  try {
    const response = await fetch('http://localhost:3000/api/vehicle-location');
    const data = await response.json();

    // Update the marker position and path
    const latlngs = data.map(point => [point.latitude, point.longitude]);
    const latestPoint = latlngs[latlngs.length - 1];

    vehicleMarker.setLatLng(latestPoint);
    vehiclePath.setLatLngs(latlngs);

    // Adjust map view
    map.panTo(latestPoint);
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
  }
}

// Fetch data every 5 seconds
setInterval(fetchVehicleData, 5000);
fetchVehicleData();
