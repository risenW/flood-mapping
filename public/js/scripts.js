mapboxgl.accessToken =
  "pk.eyJ1IjoicmlzaW5nZGV2ZSIsImEiOiJjazZxemcyN2wwMG1iM2ZsOXViYmQxd2lsIn0.1kpM_uoscs_NJS0TVyhhMA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [8, 4],
  zoom: 5
});

fetch("/farms")
  .then(response => {
    return response.json();
  })
  .then(data => {
    map.on("load", function() {
      // Add a geojson point source.
      // Heatmap layers also work with a vector tile source.
      map.addSource("farms", {
        type: "geojson",
        data: data
      });

      //custom legends
      var layers = ["Commercial", "Both", "Subsistence"];
      var colors = ["#fbb03b", "#223b52", "#e55e5e"];

      for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement("div");
        var key = document.createElement("span");
        key.className = "legend-key";
        key.style.backgroundColor = color;

        var value = document.createElement("span");
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      }
      // end of custom legends

      map.addLayer({
        id: "farmtype",
        type: "circle",
        source: "farms",
        paint: {
          // make circles larger as the user zooms from z12 to z22
          "circle-radius": {
            base: 1.75,
            stops: [
              [12, 2],
              [22, 180]
            ]
          },
          // color circles by ethnicity, using a match expression
          // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
          "circle-color": [
            "match",
            ["get", "farm_type"],
            "Commercial",
            "#fbb03b",
            "Both",
            "#223b53",
            "Subsistence",
            "#e55e5e",
            /* other */ "#ccc"
          ]
        }
      });

      // var bbox = [
      //   [7, 3.2],
      //   [7.9, 3.6]
      // ];
      // map.fitBounds(bbox, {
      //   padding: { top: 10, bottom: 25, left: 15, right: 5 }
      // });

      // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
      map.on("click", "farmtype", function(e) {
        map.flyTo({ center: e.features[0].geometry.coordinates });
        console.log(e.features[0].geometry.coordinates)
      });

      // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
      map.on("mouseenter", "farmtype", function() {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "farmtype", function() {
        map.getCanvas().style.cursor = "";
      });
    });
  })
  .catch(err => {
    // Do something for an error here
  });
