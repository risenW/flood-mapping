
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Administrative_LGAs_Original_1": {
            "type": "geojson",
            "data": json_Administrative_LGAs_Original_1
        }
                    ,
        "Proposed_System_Naming5K_2": {
            "type": "geojson",
            "data": json_Proposed_System_Naming5K_2
        }
                    ,
        "Proposed_Junctions_3": {
            "type": "geojson",
            "data": json_Proposed_Junctions_3
        }
                    ,
        "Proposed_Dikes_4": {
            "type": "geojson",
            "data": json_Proposed_Dikes_4
        }
                    ,
        "Proposed_Channels_Priority_Works_5": {
            "type": "geojson",
            "data": json_Proposed_Channels_Priority_Works_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_Administrative_LGAs_Original_1_0",
            "type": "line",
            "source": "Administrative_LGAs_Original_1",
            "layout": {},
            "paint": {'line-width': 1.738582677186, 'line-opacity': 1.0, 'line-color': '#b8bb15'}
        }
,
        {
            "id": "lyr_Proposed_System_Naming5K_2_0",
            "type": "line",
            "source": "Proposed_System_Naming5K_2",
            "layout": {},
            "paint": {'line-width': 4.006299212646, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
,
        {
            "id": "lyr_Proposed_Junctions_3_0",
            "type": "circle",
            "source": "Proposed_Junctions_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.551181102535, 2], 'circle-color': '#5bc02c', 'circle-opacity': 1.0, 'circle-stroke-width': 0.75590551182, 'circle-stroke-color': '#07b83c'}
        }
,
        {
            "id": "lyr_Proposed_Dikes_4_0",
            "type": "line",
            "source": "Proposed_Dikes_4",
            "layout": {},
            "paint": {'line-width': 18.8976377955, 'line-opacity': 1.0, 'line-color': '#ffffff'}
        }
,
        {
            "id": "lyr_Proposed_Channels_Priority_Works_5_0",
            "type": "fill",
            "source": "Proposed_Channels_Priority_Works_5",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#fb0419'}
        }
],
}