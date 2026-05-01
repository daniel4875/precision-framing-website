// SET UP MAP

function initMap() {
    const mapCenter = { lat: 51.5332196933208, lng: -2.4197680622405904 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: mapCenter,
    });

    const circle = new google.maps.Circle({
        strokeColor: "#000000",
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: "#000000",
        fillOpacity: 0.3,
        map,
        center: mapCenter,
        radius: 12874.8, // 8 miles
    });
}
