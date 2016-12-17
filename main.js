mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhcm5vIiwiYSI6ImNpdXExcTQ1NTAyMGsydHFtcHh5Zmc3cmgifQ.BEW6Jb-XaBgBM3ShGq5sJA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-65.017, -16.457],
  zoom: 2
});
// add meteors to map
$.get('https://data.nasa.gov/resource/y77d-th95.json').then(function (data) {
  data.forEach(function (meteor) {
    var el = $('<div class="meteor">');

    el.on("mouseover", function (event) {
      $('#name').text(meteor.name);
      $('#year').text(meteor.year);
      $('#mass').text(meteor.mass + 'g');
    });
    // add meteor to map
    new mapboxgl.Marker(el[0])
      .setLngLat([meteor.reclong, meteor.reclat])
      .addTo(map);
  });
});
