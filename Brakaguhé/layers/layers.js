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
var lyr_ReliefDEMALOSPALSAR2007_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Relief [DEM, ALOS PALSAR 2007]<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ReliefDEMALOSPALSAR2007_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-732915.872782, 756312.334887, -725895.623073, 761312.678034]
        })
    });
var format_OccupationdusolbrakaguhBNETD2020_3 = new ol.format.GeoJSON();
var features_OccupationdusolbrakaguhBNETD2020_3 = format_OccupationdusolbrakaguhBNETD2020_3.readFeatures(json_OccupationdusolbrakaguhBNETD2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OccupationdusolbrakaguhBNETD2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccupationdusolbrakaguhBNETD2020_3.addFeatures(features_OccupationdusolbrakaguhBNETD2020_3);
var lyr_OccupationdusolbrakaguhBNETD2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccupationdusolbrakaguhBNETD2020_3, 
                style: style_OccupationdusolbrakaguhBNETD2020_3,
                popuplayertitle: 'Occupation du sol brakaguhé [BNETD, 2020]',
                interactive: true,
    title: 'Occupation du sol brakaguhé [BNETD, 2020]<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_0.png" /> Habitat humain et infrastructure<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_1.png" /> Aménagement agricole/Autres cultures/Jachères<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_2.png" /> Affleurement rocheux<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_3.png" /> Anacarde<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_4.png" /> Cacao<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_5.png" /> Café<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_6.png" /> Forêt claire<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_7.png" /> Forêt dense<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_8.png" /> Forêt galerie<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_9.png" /> Forêt secondaire<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_10.png" /> Hévéa<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_11.png" /> Plan, Cours et voies d’eau<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_12.png" /> Savane arborée<br />\
    <img src="styles/legend/OccupationdusolbrakaguhBNETD2020_3_13.png" /> Zone marécageuse<br />' });
var format_BasfondsDEMALOSPALSAR2007_4 = new ol.format.GeoJSON();
var features_BasfondsDEMALOSPALSAR2007_4 = format_BasfondsDEMALOSPALSAR2007_4.readFeatures(json_BasfondsDEMALOSPALSAR2007_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasfondsDEMALOSPALSAR2007_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasfondsDEMALOSPALSAR2007_4.addFeatures(features_BasfondsDEMALOSPALSAR2007_4);
var lyr_BasfondsDEMALOSPALSAR2007_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasfondsDEMALOSPALSAR2007_4, 
                style: style_BasfondsDEMALOSPALSAR2007_4,
                popuplayertitle: 'Bas-fonds [DEM, ALOS PALSAR 2007]',
                interactive: true,
    title: 'Bas-fonds [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_4_0.png" /> 26857 - 1508584 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_4_1.png" /> 1508584 - 5216184 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_4_2.png" /> 5216184 - 13312044 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_4_3.png" /> 13312044 - 21548800 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_4_4.png" /> 21548800 - 55036212 m3<br />' });
var format_CourbedeniveauDEMALOSPALSAR2007_5 = new ol.format.GeoJSON();
var features_CourbedeniveauDEMALOSPALSAR2007_5 = format_CourbedeniveauDEMALOSPALSAR2007_5.readFeatures(json_CourbedeniveauDEMALOSPALSAR2007_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CourbedeniveauDEMALOSPALSAR2007_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CourbedeniveauDEMALOSPALSAR2007_5.addFeatures(features_CourbedeniveauDEMALOSPALSAR2007_5);
var lyr_CourbedeniveauDEMALOSPALSAR2007_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CourbedeniveauDEMALOSPALSAR2007_5, 
                style: style_CourbedeniveauDEMALOSPALSAR2007_5,
                popuplayertitle: 'Courbe de niveau [DEM, ALOS PALSAR 2007]',
                interactive: true,
    title: 'Courbe de niveau [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_5_0.png" /> Courbe de niveau mineur 1 mètre<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_5_1.png" /> Courbe de niveau intermédiaire 5 mètres<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_5_2.png" /> Courbe de niveau majeur 10 mètres<br />' });
var format_Localitopenstreetmaps_6 = new ol.format.GeoJSON();
var features_Localitopenstreetmaps_6 = format_Localitopenstreetmaps_6.readFeatures(json_Localitopenstreetmaps_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localitopenstreetmaps_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localitopenstreetmaps_6.addFeatures(features_Localitopenstreetmaps_6);
var lyr_Localitopenstreetmaps_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localitopenstreetmaps_6, 
                style: style_Localitopenstreetmaps_6,
                popuplayertitle: 'Localité [openstreetmaps]',
                interactive: true,
                title: '<img src="styles/legend/Localitopenstreetmaps_6.png" /> Localité [openstreetmaps]'
            });
var format_Voieroutireopenstreetmaps_7 = new ol.format.GeoJSON();
var features_Voieroutireopenstreetmaps_7 = format_Voieroutireopenstreetmaps_7.readFeatures(json_Voieroutireopenstreetmaps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voieroutireopenstreetmaps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voieroutireopenstreetmaps_7.addFeatures(features_Voieroutireopenstreetmaps_7);
var lyr_Voieroutireopenstreetmaps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voieroutireopenstreetmaps_7, 
                style: style_Voieroutireopenstreetmaps_7,
                popuplayertitle: 'Voie routière [openstreetmaps]',
                interactive: true,
                title: '<img src="styles/legend/Voieroutireopenstreetmaps_7.png" /> Voie routière [openstreetmaps]'
            });
var format_TerroirdeBrakaguhAKouadio_8 = new ol.format.GeoJSON();
var features_TerroirdeBrakaguhAKouadio_8 = format_TerroirdeBrakaguhAKouadio_8.readFeatures(json_TerroirdeBrakaguhAKouadio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerroirdeBrakaguhAKouadio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerroirdeBrakaguhAKouadio_8.addFeatures(features_TerroirdeBrakaguhAKouadio_8);
var lyr_TerroirdeBrakaguhAKouadio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerroirdeBrakaguhAKouadio_8, 
                style: style_TerroirdeBrakaguhAKouadio_8,
                popuplayertitle: 'Terroir de Brakaguhé [A. Kouadio]',
                interactive: true,
                title: '<img src="styles/legend/TerroirdeBrakaguhAKouadio_8.png" /> Terroir de Brakaguhé [A. Kouadio]'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ReliefDEMALOSPALSAR2007_2.setVisible(true);lyr_OccupationdusolbrakaguhBNETD2020_3.setVisible(true);lyr_BasfondsDEMALOSPALSAR2007_4.setVisible(true);lyr_CourbedeniveauDEMALOSPALSAR2007_5.setVisible(true);lyr_Localitopenstreetmaps_6.setVisible(true);lyr_Voieroutireopenstreetmaps_7.setVisible(true);lyr_TerroirdeBrakaguhAKouadio_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_ReliefDEMALOSPALSAR2007_2,lyr_OccupationdusolbrakaguhBNETD2020_3,lyr_BasfondsDEMALOSPALSAR2007_4,lyr_CourbedeniveauDEMALOSPALSAR2007_5,lyr_Localitopenstreetmaps_6,lyr_Voieroutireopenstreetmaps_7,lyr_TerroirdeBrakaguhAKouadio_8];
lyr_OccupationdusolbrakaguhBNETD2020_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Dept': 'Dept', 'Classe': 'Classe', });
lyr_BasfondsDEMALOSPALSAR2007_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Superficie': 'Superficie', 'Volume': 'Volume', });
lyr_CourbedeniveauDEMALOSPALSAR2007_5.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'ELEVATION': 'ELEVATION', 'LINE_STYLE': 'LINE_STYLE', 'LINE_COLOR': 'LINE_COLOR', 'LINE_WIDTH': 'LINE_WIDTH', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'FONT_WEIGH': 'FONT_WEIGH', 'CLOSED_CON': 'CLOSED_CON', });
lyr_Localitopenstreetmaps_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'population': 'population', });
lyr_Voieroutireopenstreetmaps_7.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_TerroirdeBrakaguhAKouadio_8.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'DALOA17100': 'DALOA17100', 'DALOA17101': 'DALOA17101', 'DALOA25070': 'DALOA25070', 'TOPONYMIE': 'TOPONYMIE', });
lyr_OccupationdusolbrakaguhBNETD2020_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Dept': 'TextEdit', 'Classe': 'TextEdit', });
lyr_BasfondsDEMALOSPALSAR2007_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Superficie': 'TextEdit', 'Volume': 'TextEdit', });
lyr_CourbedeniveauDEMALOSPALSAR2007_5.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'ELEVATION': 'TextEdit', 'LINE_STYLE': 'TextEdit', 'LINE_COLOR': 'TextEdit', 'LINE_WIDTH': 'Range', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'FONT_WEIGH': 'Range', 'CLOSED_CON': 'TextEdit', });
lyr_Localitopenstreetmaps_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'population': 'TextEdit', });
lyr_Voieroutireopenstreetmaps_7.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', });
lyr_TerroirdeBrakaguhAKouadio_8.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'DALOA17100': 'TextEdit', 'DALOA17101': 'TextEdit', 'DALOA25070': 'TextEdit', 'TOPONYMIE': 'TextEdit', });
lyr_OccupationdusolbrakaguhBNETD2020_3.set('fieldLabels', {'OBJECTID': 'no label', 'Dept': 'inline label - visible with data', 'Classe': 'inline label - visible with data', });
lyr_BasfondsDEMALOSPALSAR2007_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Superficie': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_CourbedeniveauDEMALOSPALSAR2007_5.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'inline label - visible with data', 'MAP_NAME': 'no label', 'ELEVATION': 'no label', 'LINE_STYLE': 'no label', 'LINE_COLOR': 'no label', 'LINE_WIDTH': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'FONT_WEIGH': 'no label', 'CLOSED_CON': 'no label', });
lyr_Localitopenstreetmaps_6.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'type': 'inline label - visible with data', 'population': 'no label', });
lyr_Voieroutireopenstreetmaps_7.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'inline label - visible with data', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_TerroirdeBrakaguhAKouadio_8.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'DALOA17100': 'no label', 'DALOA17101': 'no label', 'DALOA25070': 'no label', 'TOPONYMIE': 'no label', });
lyr_TerroirdeBrakaguhAKouadio_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});