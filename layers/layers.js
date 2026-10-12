var wms_layers = [];

var lyr_GemeindeinformationenAV_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo-vd.geometa-gemeinde",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gemeindeinformationen - AV',
                            popuplayertitle: 'Gemeindeinformationen - AV',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GemeindeinformationenAV_0, 0]);
var lyr_Landeskarte110000farbig_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.landeskarte-farbe-10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landeskarte 1:10`000 (farbig)',
                            popuplayertitle: 'Landeskarte 1:10`000 (farbig)',
                            type: '',
                            opacity: 0.699000,
                            
                            
                          });
              wms_layers.push([lyr_Landeskarte110000farbig_1, 0]);
var format_Hiergefunden_2 = new ol.format.GeoJSON();
var features_Hiergefunden_2 = format_Hiergefunden_2.readFeatures(json_Hiergefunden_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hiergefunden_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hiergefunden_2.addFeatures(features_Hiergefunden_2);
cluster_Hiergefunden_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hiergefunden_2
});
var lyr_Hiergefunden_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hiergefunden_2, 
                style: style_Hiergefunden_2,
                popuplayertitle: 'Hier gefunden',
                interactive: true,
                title: '<img src="styles/legend/Hiergefunden_2.png" /> Hier gefunden'
            });

lyr_GemeindeinformationenAV_0.setVisible(true);lyr_Landeskarte110000farbig_1.setVisible(true);lyr_Hiergefunden_2.setVisible(true);
var layersList = [lyr_GemeindeinformationenAV_0,lyr_Landeskarte110000farbig_1,lyr_Hiergefunden_2];
lyr_Hiergefunden_2.set('fieldAliases', {'Trivialnamen': 'Trivialnamen', 'Lat. Name': 'Lat. Name', 'Familie': 'Familie', 'Status': 'Status', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Hiergefunden_2.set('fieldImages', {'Trivialnamen': 'TextEdit', 'Lat. Name': 'TextEdit', 'Familie': 'TextEdit', 'Status': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_Hiergefunden_2.set('fieldLabels', {'Trivialnamen': 'inline label - visible with data', 'Lat. Name': 'inline label - visible with data', 'Familie': 'hidden field', 'Status': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_Hiergefunden_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});