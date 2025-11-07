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
    <img src="styles/legend/OccupationdusolBNETD2020_2_0.png" /> Habitat humain et infrastructures<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_1.png" /> Aménagement agricole/Autres cultures/Jacheres<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_2.png" /> Foret dense<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_3.png" /> Arboricultures/ Plantation fruitières<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_4.png" /> Foret marecageuse<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_5.png" /> Foret galerie<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_6.png" /> Foret secondaire<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_7.png" /> Mangrove<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_8.png" /> Zone marécageuse<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_9.png" /> Cacao<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_10.png" /> Coco<br />\
    <img src="styles/legend/OccupationdusolBNETD2020_2_11.png" /> Plan, Cours et voies d’eau<br />'
        });
var format_Courbedeniveau1mtreDEMALOSPALSAR2007_3 = new ol.format.GeoJSON();
var features_Courbedeniveau1mtreDEMALOSPALSAR2007_3 = format_Courbedeniveau1mtreDEMALOSPALSAR2007_3.readFeatures(json_Courbedeniveau1mtreDEMALOSPALSAR2007_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbedeniveau1mtreDEMALOSPALSAR2007_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau1mtreDEMALOSPALSAR2007_3.addFeatures(features_Courbedeniveau1mtreDEMALOSPALSAR2007_3);
var lyr_Courbedeniveau1mtreDEMALOSPALSAR2007_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbedeniveau1mtreDEMALOSPALSAR2007_3, 
                style: style_Courbedeniveau1mtreDEMALOSPALSAR2007_3,
                popuplayertitle: "Courbe de niveau 1 mètre [DEM, ALOS PALSAR 2007]",
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau1mtreDEMALOSPALSAR2007_3.png" /> Courbe de niveau 1 mètre [DEM, ALOS PALSAR 2007]'
            });
var format_Courbedeniveau5mtresDEMALOSPALSAR2007_4 = new ol.format.GeoJSON();
var features_Courbedeniveau5mtresDEMALOSPALSAR2007_4 = format_Courbedeniveau5mtresDEMALOSPALSAR2007_4.readFeatures(json_Courbedeniveau5mtresDEMALOSPALSAR2007_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbedeniveau5mtresDEMALOSPALSAR2007_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau5mtresDEMALOSPALSAR2007_4.addFeatures(features_Courbedeniveau5mtresDEMALOSPALSAR2007_4);
var lyr_Courbedeniveau5mtresDEMALOSPALSAR2007_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbedeniveau5mtresDEMALOSPALSAR2007_4, 
                style: style_Courbedeniveau5mtresDEMALOSPALSAR2007_4,
                popuplayertitle: "Courbe de niveau 5 mètres [DEM, ALOS PALSAR 2007]",
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau5mtresDEMALOSPALSAR2007_4.png" /> Courbe de niveau 5 mètres [DEM, ALOS PALSAR 2007]'
            });
var format_Courbedeniveau10mtresDEMALOSPALSAR2007_5 = new ol.format.GeoJSON();
var features_Courbedeniveau10mtresDEMALOSPALSAR2007_5 = format_Courbedeniveau10mtresDEMALOSPALSAR2007_5.readFeatures(json_Courbedeniveau10mtresDEMALOSPALSAR2007_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbedeniveau10mtresDEMALOSPALSAR2007_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau10mtresDEMALOSPALSAR2007_5.addFeatures(features_Courbedeniveau10mtresDEMALOSPALSAR2007_5);
var lyr_Courbedeniveau10mtresDEMALOSPALSAR2007_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbedeniveau10mtresDEMALOSPALSAR2007_5, 
                style: style_Courbedeniveau10mtresDEMALOSPALSAR2007_5,
                popuplayertitle: "Courbe de niveau 10 mètres [DEM, ALOS PALSAR 2007]",
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau10mtresDEMALOSPALSAR2007_5.png" /> Courbe de niveau 10 mètres [DEM, ALOS PALSAR 2007]'
            });
var format_BasfondsDEMALOSPALSAR2007_6 = new ol.format.GeoJSON();
var features_BasfondsDEMALOSPALSAR2007_6 = format_BasfondsDEMALOSPALSAR2007_6.readFeatures(json_BasfondsDEMALOSPALSAR2007_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasfondsDEMALOSPALSAR2007_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasfondsDEMALOSPALSAR2007_6.addFeatures(features_BasfondsDEMALOSPALSAR2007_6);
var lyr_BasfondsDEMALOSPALSAR2007_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasfondsDEMALOSPALSAR2007_6, 
                style: style_BasfondsDEMALOSPALSAR2007_6,
                popuplayertitle: "Bas-fonds [DEM, ALOS PALSAR 2007]",
                interactive: true,
    title: 'Bas-fonds [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_6_0.png" /> 3852 - 710120 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_6_1.png" /> 710120 - 2995256 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_6_2.png" /> 2995256 - 7358244 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_6_3.png" /> 7358244 - 14452620 m3<br />\
    <img src="styles/legend/BasfondsDEMALOSPALSAR2007_6_4.png" /> 14452620 - 45526770 m3<br />'
        });
var format_AkourAKouadio_7 = new ol.format.GeoJSON();
var features_AkourAKouadio_7 = format_AkourAKouadio_7.readFeatures(json_AkourAKouadio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AkourAKouadio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AkourAKouadio_7.addFeatures(features_AkourAKouadio_7);
var lyr_AkourAKouadio_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AkourAKouadio_7, 
                style: style_AkourAKouadio_7,
                popuplayertitle: "Akouré [A. Kouadio]",
                interactive: true,
                title: '<img src="styles/legend/AkourAKouadio_7.png" /> Akouré [A. Kouadio]'
            });
var format_Voirieopenstreetmaps_8 = new ol.format.GeoJSON();
var features_Voirieopenstreetmaps_8 = format_Voirieopenstreetmaps_8.readFeatures(json_Voirieopenstreetmaps_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voirieopenstreetmaps_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voirieopenstreetmaps_8.addFeatures(features_Voirieopenstreetmaps_8);
var lyr_Voirieopenstreetmaps_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voirieopenstreetmaps_8, 
                style: style_Voirieopenstreetmaps_8,
                popuplayertitle: "Voirie [openstreetmaps]",
                interactive: true,
    title: 'Voirie [openstreetmaps]<br />\
    <img src="styles/legend/Voirieopenstreetmaps_8_0.png" /> Voie routière<br />\
    <img src="styles/legend/Voirieopenstreetmaps_8_1.png" /> Sentier<br />'
        });
var format_Zonebatieopenstreetmaps_9 = new ol.format.GeoJSON();
var features_Zonebatieopenstreetmaps_9 = format_Zonebatieopenstreetmaps_9.readFeatures(json_Zonebatieopenstreetmaps_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonebatieopenstreetmaps_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonebatieopenstreetmaps_9.addFeatures(features_Zonebatieopenstreetmaps_9);
var lyr_Zonebatieopenstreetmaps_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonebatieopenstreetmaps_9, 
                style: style_Zonebatieopenstreetmaps_9,
                popuplayertitle: "Zone batie [openstreetmaps]",
                interactive: true,
                title: '<img src="styles/legend/Zonebatieopenstreetmaps_9.png" /> Zone batie [openstreetmaps]'
            });
var format_Localitsopenstreetmaps_10 = new ol.format.GeoJSON();
var features_Localitsopenstreetmaps_10 = format_Localitsopenstreetmaps_10.readFeatures(json_Localitsopenstreetmaps_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localitsopenstreetmaps_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localitsopenstreetmaps_10.addFeatures(features_Localitsopenstreetmaps_10);
var lyr_Localitsopenstreetmaps_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localitsopenstreetmaps_10, 
                style: style_Localitsopenstreetmaps_10,
                popuplayertitle: "Localités [openstreetmaps]",
                interactive: true,
                title: '<img src="styles/legend/Localitsopenstreetmaps_10.png" /> Localités [openstreetmaps]'
            });
var format_Equipementsopenstreetmaps_11 = new ol.format.GeoJSON();
var features_Equipementsopenstreetmaps_11 = format_Equipementsopenstreetmaps_11.readFeatures(json_Equipementsopenstreetmaps_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipementsopenstreetmaps_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipementsopenstreetmaps_11.addFeatures(features_Equipementsopenstreetmaps_11);
var lyr_Equipementsopenstreetmaps_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipementsopenstreetmaps_11, 
                style: style_Equipementsopenstreetmaps_11,
                popuplayertitle: "Equipements [openstreetmaps]",
                interactive: true,
                title: '<img src="styles/legend/Equipementsopenstreetmaps_11.png" /> Equipements [openstreetmaps]'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OccupationdusolBNETD2020_2.setVisible(true);lyr_Courbedeniveau1mtreDEMALOSPALSAR2007_3.setVisible(true);lyr_Courbedeniveau5mtresDEMALOSPALSAR2007_4.setVisible(true);lyr_Courbedeniveau10mtresDEMALOSPALSAR2007_5.setVisible(true);lyr_BasfondsDEMALOSPALSAR2007_6.setVisible(true);lyr_AkourAKouadio_7.setVisible(true);lyr_Voirieopenstreetmaps_8.setVisible(true);lyr_Zonebatieopenstreetmaps_9.setVisible(true);lyr_Localitsopenstreetmaps_10.setVisible(true);lyr_Equipementsopenstreetmaps_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_OccupationdusolBNETD2020_2,lyr_Courbedeniveau1mtreDEMALOSPALSAR2007_3,lyr_Courbedeniveau5mtresDEMALOSPALSAR2007_4,lyr_Courbedeniveau10mtresDEMALOSPALSAR2007_5,lyr_BasfondsDEMALOSPALSAR2007_6,lyr_AkourAKouadio_7,lyr_Voirieopenstreetmaps_8,lyr_Zonebatieopenstreetmaps_9,lyr_Localitsopenstreetmaps_10,lyr_Equipementsopenstreetmaps_11];
lyr_OccupationdusolBNETD2020_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Dept': 'Dept', 'Classe': 'Classe', 'Surface_m2': 'Surface_m2', });
lyr_Courbedeniveau1mtreDEMALOSPALSAR2007_3.set('fieldAliases', {'Id': 'Id', 'Contour': 'Contour', });
lyr_Courbedeniveau5mtresDEMALOSPALSAR2007_4.set('fieldAliases', {'Id': 'Id', 'Contour': 'Contour', });
lyr_Courbedeniveau10mtresDEMALOSPALSAR2007_5.set('fieldAliases', {'Id': 'Id', 'Contour': 'Contour', });
lyr_BasfondsDEMALOSPALSAR2007_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Superficie': 'Superficie', 'Volume': 'Volume', });
lyr_AkourAKouadio_7.set('fieldAliases', {'Name': 'Name', });
lyr_Voirieopenstreetmaps_8.set('fieldAliases', {'type': 'type', });
lyr_Zonebatieopenstreetmaps_9.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_Localitsopenstreetmaps_10.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_Equipementsopenstreetmaps_11.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_OccupationdusolBNETD2020_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Dept': 'TextEdit', 'Classe': 'TextEdit', 'Surface_m2': 'TextEdit', });
lyr_Courbedeniveau1mtreDEMALOSPALSAR2007_3.set('fieldImages', {'Id': 'TextEdit', 'Contour': 'TextEdit', });
lyr_Courbedeniveau5mtresDEMALOSPALSAR2007_4.set('fieldImages', {'Id': 'TextEdit', 'Contour': 'TextEdit', });
lyr_Courbedeniveau10mtresDEMALOSPALSAR2007_5.set('fieldImages', {'Id': 'TextEdit', 'Contour': 'TextEdit', });
lyr_BasfondsDEMALOSPALSAR2007_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Superficie': 'TextEdit', 'Volume': 'TextEdit', });
lyr_AkourAKouadio_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Voirieopenstreetmaps_8.set('fieldImages', {'type': 'TextEdit', });
lyr_Zonebatieopenstreetmaps_9.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Localitsopenstreetmaps_10.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Equipementsopenstreetmaps_11.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_OccupationdusolBNETD2020_2.set('fieldLabels', {'OBJECTID': 'no label', 'Dept': 'header label - visible with data', 'Classe': 'header label - visible with data', 'Surface_m2': 'header label - visible with data', });
lyr_Courbedeniveau1mtreDEMALOSPALSAR2007_3.set('fieldLabels', {'Id': 'no label', 'Contour': 'header label - visible with data', });
lyr_Courbedeniveau5mtresDEMALOSPALSAR2007_4.set('fieldLabels', {'Id': 'no label', 'Contour': 'header label - visible with data', });
lyr_Courbedeniveau10mtresDEMALOSPALSAR2007_5.set('fieldLabels', {'Id': 'no label', 'Contour': 'header label - visible with data', });
lyr_BasfondsDEMALOSPALSAR2007_6.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Superficie': 'header label - visible with data', 'Volume': 'header label - visible with data', });
lyr_AkourAKouadio_7.set('fieldLabels', {'Name': 'no label', });
lyr_Voirieopenstreetmaps_8.set('fieldLabels', {'type': 'header label - visible with data', });
lyr_Zonebatieopenstreetmaps_9.set('fieldLabels', {'name': 'no label', 'type': 'no label', });
lyr_Localitsopenstreetmaps_10.set('fieldLabels', {'name': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_Equipementsopenstreetmaps_11.set('fieldLabels', {'name': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_Equipementsopenstreetmaps_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});