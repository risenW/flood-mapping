// sample plot of plotly

var data = [{
    type: "choroplethmapbox", name: "US states", geojson:
        "https://github.com/risenW/education4all/blob/master/public/data/pry_sch.json",
   
    zmin: 25, zmax: 280, colorbar: { y: 0, yanchor: "bottom", title: { text: "Abia LGA", side: "right" } }
}
];

var layout = {
    mapbox: { style: "dark", center: { lon: 9, lat: 7 }, zoom: 5.0 }, width: 1000, height:
        800, margin: { t: 0, b: 0 }
};

var config = { mapboxAccessToken: "pk.eyJ1IjoicmlzaW5nZGV2ZSIsImEiOiJjazZxemcyN2wwMG1iM2ZsOXViYmQxd2lsIn0.1kpM_uoscs_NJS0TVyhhMA" };

Plotly.newPlot('myDiv', data, layout, config);


// sample 2

Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var cityName = unpack(rows, 'name'),
        cityPop = unpack(rows, 'pop'),
        cityLat = unpack(rows, 'lat'),
        cityLon = unpack(rows, 'lon'),
        color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        citySize = [],
        hoverText = [],
        scale = 50000;

    for ( var i = 0 ; i < cityPop.length; i++) {
        var currentSize = cityPop[i] / scale;
        var currentText = cityName[i] + " pop: " + cityPop[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
    }

    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: cityLat,
        lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        title: '2014 US City Populations',
        showlegend: false,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
    };

    Plotly.newPlot("div2", data, layout, {showLink: false});

});