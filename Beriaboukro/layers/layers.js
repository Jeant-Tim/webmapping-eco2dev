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
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_OccupationdusolbrakaguhBNETD2020_2 = new ol.format.GeoJSON();
var features_OccupationdusolbrakaguhBNETD2020_2 = format_OccupationdusolbrakaguhBNETD2020_2.readFeatures(json_OccupationdusolbrakaguhBNETD2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OccupationdusolbrakaguhBNETD2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccupationdusolbrakaguhBNETD2020_2.addFeatures(features_OccupationdusolbrakaguhBNETD2020_2);
var lyr_OccupationdusolbrakaguhBNETD2020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccupationdusolbrakaguhBNETD2020_2, 
                style: style_OccupationdusolbrakaguhBNETD2020_2,
                popuplayertitle: 'Occupation du sol brakaguhé [BNETD, 2020]',
                interactive: true,
    title: 'Occupation du sol brakaguhé [BNETD, 2020]<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_0.png" /> Habitat humain et infrastructure<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_1.png" /> Aménagement agricole/Autres cultures/Jacheres<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_2.png" /> Anacarde<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_3.png" /> Arboricultures/ Plantation fruitières<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_4.png" /> Cacao<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_5.png" /> Cafe<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_6.png" /> Foret claire<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_7.png" /> Foret dense<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_8.png" /> Foret galerie<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_9.png" /> Foret secondaire<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_10.png" /> Plan, Cours et voies d’eau<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_2_11.png" /> Plantation forestiere<br />' });
var format_VoieroutireOpenstreetmaps_3 = new ol.format.GeoJSON();
var features_VoieroutireOpenstreetmaps_3 = format_VoieroutireOpenstreetmaps_3.readFeatures(json_VoieroutireOpenstreetmaps_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VoieroutireOpenstreetmaps_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VoieroutireOpenstreetmaps_3.addFeatures(features_VoieroutireOpenstreetmaps_3);
var lyr_VoieroutireOpenstreetmaps_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VoieroutireOpenstreetmaps_3, 
                style: style_VoieroutireOpenstreetmaps_3,
                popuplayertitle: 'Voie routière (Openstreetmaps)',
                interactive: true,
    title: 'Voie routière (Openstreetmaps)<br />\
    <img src="styles/legend/VoieroutireOpenstreetmaps_3_0.png" /> Route bitumée<br />\
    <img src="styles/legend/VoieroutireOpenstreetmaps_3_1.png" /> Route non bitumé<br />' });
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
                popuplayertitle: 'Courbe de niveau [DEM, ALOS PALSAR 2007]',
                interactive: true,
    title: 'Courbe de niveau [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_4_0.png" /> Courbe de niveau mineur 1 mètre<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_4_1.png" /> Courbe de niveau intermédiaire 5 mètres<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_4_2.png" /> Courbe de niveau majeur 10 mètres<br />' });
var format_Zonebatie_5 = new ol.format.GeoJSON();
var features_Zonebatie_5 = format_Zonebatie_5.readFeatures(json_Zonebatie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonebatie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonebatie_5.addFeatures(features_Zonebatie_5);
var lyr_Zonebatie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonebatie_5, 
                style: style_Zonebatie_5,
                popuplayertitle: 'Zone batie',
                interactive: true,
                title: '<img src="styles/legend/Zonebatie_5.png" /> Zone batie'
            });
var format_Beriaboukro_6 = new ol.format.GeoJSON();
var features_Beriaboukro_6 = format_Beriaboukro_6.readFeatures(json_Beriaboukro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beriaboukro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beriaboukro_6.addFeatures(features_Beriaboukro_6);
var lyr_Beriaboukro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beriaboukro_6, 
                style: style_Beriaboukro_6,
                popuplayertitle: 'Beriaboukro',
                interactive: false,
                title: '<img src="styles/legend/Beriaboukro_6.png" /> Beriaboukro'
            });
var format_TerroirdeBeriaboukroAKouadio_7 = new ol.format.GeoJSON();
var features_TerroirdeBeriaboukroAKouadio_7 = format_TerroirdeBeriaboukroAKouadio_7.readFeatures(json_TerroirdeBeriaboukroAKouadio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerroirdeBeriaboukroAKouadio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerroirdeBeriaboukroAKouadio_7.addFeatures(features_TerroirdeBeriaboukroAKouadio_7);
var lyr_TerroirdeBeriaboukroAKouadio_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerroirdeBeriaboukroAKouadio_7, 
                style: style_TerroirdeBeriaboukroAKouadio_7,
                popuplayertitle: 'Terroir de Beriaboukro [A. Kouadio] ',
                interactive: false,
                title: '<img src="styles/legend/TerroirdeBeriaboukroAKouadio_7.png" /> Terroir de Beriaboukro [A. Kouadio] '
            });
var format_Infrastructures_8 = new ol.format.GeoJSON();
var features_Infrastructures_8 = format_Infrastructures_8.readFeatures(json_Infrastructures_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructures_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructures_8.addFeatures(features_Infrastructures_8);
var lyr_Infrastructures_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructures_8, 
                style: style_Infrastructures_8,
                popuplayertitle: 'Infrastructures',
                interactive: true,
                title: '<img src="styles/legend/Infrastructures_8.png" /> Infrastructures'
            });
var format_Localites_9 = new ol.format.GeoJSON();
var features_Localites_9 = format_Localites_9.readFeatures(json_Localites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localites_9.addFeatures(features_Localites_9);
var lyr_Localites_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localites_9, 
                style: style_Localites_9,
                popuplayertitle: 'Localites',
                interactive: true,
                title: '<img src="styles/legend/Localites_9.png" /> Localites'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OccupationdusolbrakaguhBNETD2020_2.setVisible(true);lyr_VoieroutireOpenstreetmaps_3.setVisible(true);lyr_CourbedeniveauDEMALOSPALSAR2007_4.setVisible(true);lyr_Zonebatie_5.setVisible(true);lyr_Beriaboukro_6.setVisible(true);lyr_TerroirdeBeriaboukroAKouadio_7.setVisible(true);lyr_Infrastructures_8.setVisible(true);lyr_Localites_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_OccupationdusolbrakaguhBNETD2020_2,lyr_VoieroutireOpenstreetmaps_3,lyr_CourbedeniveauDEMALOSPALSAR2007_4,lyr_Zonebatie_5,lyr_Beriaboukro_6,lyr_TerroirdeBeriaboukroAKouadio_7,lyr_Infrastructures_8,lyr_Localites_9];
lyr_OccupationdusolbrakaguhBNETD2020_2.set('fieldAliases', {'Dept': 'Dept', 'Classe': 'Classe', 'Superficie': 'Superficie', });
lyr_VoieroutireOpenstreetmaps_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ref': 'ref', 'type': 'type', });
lyr_CourbedeniveauDEMALOSPALSAR2007_4.set('fieldAliases', {'ELEVATION': 'ELEVATION', 'TYPE': 'TYPE', });
lyr_Zonebatie_5.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_Beriaboukro_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'altitudeMo': 'altitudeMo', });
lyr_TerroirdeBeriaboukroAKouadio_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Infrastructures_8.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_Localites_9.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_OccupationdusolbrakaguhBNETD2020_2.set('fieldImages', {'Dept': 'TextEdit', 'Classe': 'TextEdit', 'Superficie': '', });
lyr_VoieroutireOpenstreetmaps_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', });
lyr_CourbedeniveauDEMALOSPALSAR2007_4.set('fieldImages', {'ELEVATION': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_Zonebatie_5.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Beriaboukro_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'altitudeMo': 'TextEdit', });
lyr_TerroirdeBeriaboukroAKouadio_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Infrastructures_8.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Localites_9.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_OccupationdusolbrakaguhBNETD2020_2.set('fieldLabels', {'Dept': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'Superficie': 'no label', });
lyr_VoieroutireOpenstreetmaps_3.set('fieldLabels', {'OBJECTID': 'no label', 'ref': 'no label', 'type': 'inline label - visible with data', });
lyr_CourbedeniveauDEMALOSPALSAR2007_4.set('fieldLabels', {'ELEVATION': 'inline label - visible with data', 'TYPE': 'no label', });
lyr_Zonebatie_5.set('fieldLabels', {'name': 'inline label - visible with data', 'type': 'inline label - always visible', });
lyr_Beriaboukro_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'altitudeMo': 'no label', });
lyr_TerroirdeBeriaboukroAKouadio_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Infrastructures_8.set('fieldLabels', {'name': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_Localites_9.set('fieldLabels', {'name': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_Localites_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});