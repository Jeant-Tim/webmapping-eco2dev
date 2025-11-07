var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_OccupationdusolBNETD2020_2 = new ol.format.GeoJSON();
var features_OccupationdusolBNETD2020_2 = format_OccupationdusolBNETD2020_2.readFeatures(json_OccupationdusolBNETD2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OccupationdusolBNETD2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccupationdusolBNETD2020_2.addFeatures(features_OccupationdusolBNETD2020_2);
var lyr_OccupationdusolBNETD2020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccupationdusolBNETD2020_2, 
                style: style_OccupationdusolBNETD2020_2,
                popuplayertitle: "Occupation du sol [BNETD, 2020]",
                interactive: true,
    title: 'Occupation du sol [BNETD, 2020]<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_0.png" /> Habitat humain et infrastructure<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_1.png" /> Aménagement agricole/Autres cultures/Jacheres<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_2.png" /> Affleurement rocheux<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_3.png" /> Arboricultures/ Plantation fruitières<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_4.png" /> Foret galerie<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_5.png" /> Foret secondaire<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_6.png" /> Foret claire<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_7.png" /> Anacarde<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_8.png" /> Cacao<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_9.png" /> Savane arborée<br />'
        });
var lyr_PenteendegrDEMALOSPALSAR2007_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Pente en degré [DEM, ALOS PALSAR 2007]",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PenteendegrDEMALOSPALSAR2007_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-449372.468311, 822828.202735, -439641.854745, 827570.987620]
                            })
                        });
var format_CourbedeniveauDEMALOSPALSAR2007_4 = new ol.format.GeoJSON();
var features_CourbedeniveauDEMALOSPALSAR2007_4 = format_CourbedeniveauDEMALOSPALSAR2007_4.readFeatures(json_CourbedeniveauDEMALOSPALSAR2007_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CourbedeniveauDEMALOSPALSAR2007_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CourbedeniveauDEMALOSPALSAR2007_4.addFeatures(features_CourbedeniveauDEMALOSPALSAR2007_4);
var lyr_CourbedeniveauDEMALOSPALSAR2007_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CourbedeniveauDEMALOSPALSAR2007_4, 
                style: style_CourbedeniveauDEMALOSPALSAR2007_4,
                popuplayertitle: "Courbe de niveau [DEM, ALOS PALSAR 2007]",
                interactive: true,
    title: 'Courbe de niveau [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_4_1.png" /> Courbe de niveau mineure 1 mètres<br />\
	<img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_4_0.png" /> Courbe de niveau intermédiaire 5 mètre<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_4_2.png" /> Courbe de niveau majeure 10 mètres<br />'
        });
var format_Bas_fondsDEMALOSPALSAR2007_5 = new ol.format.GeoJSON();
var features_Bas_fondsDEMALOSPALSAR2007_5 = format_Bas_fondsDEMALOSPALSAR2007_5.readFeatures(json_Bas_fondsDEMALOSPALSAR2007_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bas_fondsDEMALOSPALSAR2007_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bas_fondsDEMALOSPALSAR2007_5.addFeatures(features_Bas_fondsDEMALOSPALSAR2007_5);
var lyr_Bas_fondsDEMALOSPALSAR2007_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bas_fondsDEMALOSPALSAR2007_5, 
                style: style_Bas_fondsDEMALOSPALSAR2007_5,
                popuplayertitle: "Bas_fonds [DEM, ALOS PALSAR 2007]",
                interactive: true,
    title: 'Bas_fonds [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/Bas_fondsDEMALOSPALSAR2007_5_0.png" /> 22894 - 2211844 m3<br />\
    <img src="styles/legend/Bas_fondsDEMALOSPALSAR2007_5_1.png" /> 2211844 - 7870314 m3<br />\
    <img src="styles/legend/Bas_fondsDEMALOSPALSAR2007_5_2.png" /> 7870314 - 18970782 m3<br />\
    <img src="styles/legend/Bas_fondsDEMALOSPALSAR2007_5_3.png" /> 18970782 - 39005415 m3<br />\
    <img src="styles/legend/Bas_fondsDEMALOSPALSAR2007_5_4.png" /> 39005415 - 58483189 m3<br />'
        });
var format_Voieroutireopenstreetmaps_6 = new ol.format.GeoJSON();
var features_Voieroutireopenstreetmaps_6 = format_Voieroutireopenstreetmaps_6.readFeatures(json_Voieroutireopenstreetmaps_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voieroutireopenstreetmaps_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voieroutireopenstreetmaps_6.addFeatures(features_Voieroutireopenstreetmaps_6);
var lyr_Voieroutireopenstreetmaps_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voieroutireopenstreetmaps_6, 
                style: style_Voieroutireopenstreetmaps_6,
                popuplayertitle: "Voie routière [openstreetmaps]",
                interactive: true,
                title: '<img src="styles/legend/Voieroutireopenstreetmaps_6.png" /> Voie routière [openstreetmaps]'
            });
var format_BofoinNGattakrpAKouassi_7 = new ol.format.GeoJSON();
var features_BofoinNGattakrpAKouassi_7 = format_BofoinNGattakrpAKouassi_7.readFeatures(json_BofoinNGattakrpAKouassi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BofoinNGattakrpAKouassi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BofoinNGattakrpAKouassi_7.addFeatures(features_BofoinNGattakrpAKouassi_7);
var lyr_BofoinNGattakrpAKouassi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BofoinNGattakrpAKouassi_7, 
                style: style_BofoinNGattakrpAKouassi_7,
                popuplayertitle: "Bofoin N'Gattakrp [A. Kouassi]",
                interactive: true,
                title: '<img src="styles/legend/BofoinNGattakrpAKouassi_7.png" /> Bofoin N\'Gattakrp [A. Kouassi]'
            });
var format_Zonebatie_8 = new ol.format.GeoJSON();
var features_Zonebatie_8 = format_Zonebatie_8.readFeatures(json_Zonebatie_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonebatie_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonebatie_8.addFeatures(features_Zonebatie_8);
var lyr_Zonebatie_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonebatie_8, 
                style: style_Zonebatie_8,
                popuplayertitle: "Zone batie",
                interactive: true,
                title: '<img src="styles/legend/Zonebatie_8.png" /> Zone batie'
            });
var format_Localiteopenstreetmaps_9 = new ol.format.GeoJSON();
var features_Localiteopenstreetmaps_9 = format_Localiteopenstreetmaps_9.readFeatures(json_Localiteopenstreetmaps_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localiteopenstreetmaps_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localiteopenstreetmaps_9.addFeatures(features_Localiteopenstreetmaps_9);
var lyr_Localiteopenstreetmaps_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localiteopenstreetmaps_9, 
                style: style_Localiteopenstreetmaps_9,
                popuplayertitle: "Localite [openstreetmaps]",
                interactive: true,
                title: '<img src="styles/legend/Localiteopenstreetmaps_9.png" /> Localite [openstreetmaps]'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OccupationdusolBNETD2020_2.setVisible(true);lyr_PenteendegrDEMALOSPALSAR2007_3.setVisible(true);lyr_CourbedeniveauDEMALOSPALSAR2007_4.setVisible(true);lyr_Bas_fondsDEMALOSPALSAR2007_5.setVisible(true);lyr_Voieroutireopenstreetmaps_6.setVisible(true);lyr_BofoinNGattakrpAKouassi_7.setVisible(true);lyr_Zonebatie_8.setVisible(true);lyr_Localiteopenstreetmaps_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_OccupationdusolBNETD2020_2,lyr_PenteendegrDEMALOSPALSAR2007_3,lyr_CourbedeniveauDEMALOSPALSAR2007_4,lyr_Bas_fondsDEMALOSPALSAR2007_5,lyr_Voieroutireopenstreetmaps_6,lyr_BofoinNGattakrpAKouassi_7,lyr_Zonebatie_8,lyr_Localiteopenstreetmaps_9];
lyr_OccupationdusolBNETD2020_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Dept': 'Dept', 'Classe': 'Classe', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Surface_m2': 'Surface_m2', });
lyr_CourbedeniveauDEMALOSPALSAR2007_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_Bas_fondsDEMALOSPALSAR2007_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'superficie': 'superficie', 'volume': 'volume', });
lyr_Voieroutireopenstreetmaps_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_BofoinNGattakrpAKouassi_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Zonebatie_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Localiteopenstreetmaps_9.set('fieldAliases', {'name': 'name', 'type': 'type', 'population': 'population', });
lyr_OccupationdusolBNETD2020_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Dept': 'TextEdit', 'Classe': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Surface_m2': '', });
lyr_CourbedeniveauDEMALOSPALSAR2007_4.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_Bas_fondsDEMALOSPALSAR2007_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'superficie': 'TextEdit', 'volume': 'TextEdit', });
lyr_Voieroutireopenstreetmaps_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', });
lyr_BofoinNGattakrpAKouassi_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Zonebatie_8.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Localiteopenstreetmaps_9.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'population': 'TextEdit', });
lyr_OccupationdusolBNETD2020_2.set('fieldLabels', {'OBJECTID': 'no label', 'Dept': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Surface_m2': 'inline label - visible with data', });
lyr_CourbedeniveauDEMALOSPALSAR2007_4.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'inline label - visible with data', 'MAP_NAME': 'no label', 'ELEVATION': 'no label', 'CLOSED_CON': 'no label', });
lyr_Bas_fondsDEMALOSPALSAR2007_5.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'superficie': 'inline label - visible with data', 'volume': 'inline label - visible with data', });
lyr_Voieroutireopenstreetmaps_6.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'inline label - visible with data', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_BofoinNGattakrpAKouassi_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Zonebatie_8.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_Localiteopenstreetmaps_9.set('fieldLabels', {'name': 'inline label - visible with data', 'type': 'inline label - visible with data', 'population': 'inline label - visible with data', });
lyr_Localiteopenstreetmaps_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});