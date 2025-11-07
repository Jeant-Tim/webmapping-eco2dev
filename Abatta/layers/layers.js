var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRITopo_3 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_OccupationdusolAbattaBNETD2020_4 = new ol.format.GeoJSON();
var features_OccupationdusolAbattaBNETD2020_4 = format_OccupationdusolAbattaBNETD2020_4.readFeatures(json_OccupationdusolAbattaBNETD2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OccupationdusolAbattaBNETD2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccupationdusolAbattaBNETD2020_4.addFeatures(features_OccupationdusolAbattaBNETD2020_4);
var lyr_OccupationdusolAbattaBNETD2020_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccupationdusolAbattaBNETD2020_4, 
                style: style_OccupationdusolAbattaBNETD2020_4,
                popuplayertitle: 'Occupation du sol Abatta [BNETD, 2020]',
                interactive: true,
    title: 'Occupation du sol Abatta [BNETD, 2020]<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_0.png" /> Habitat humain et infrastructure<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_1.png" /> Aménagement agricole/Autres cultures/Jacheres<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_2.png" /> Arboricultures/ Plantation fruitières<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_3.png" /> Cacao<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_4.png" /> Coco<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_5.png" /> Foret dense<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_6.png" /> Plan, Cours et voies d’eau<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_7.png" /> Sol nu<br />\
    <img src="styles/legend/OccupationdusolAbattaBNETD2020_4_8.png" /> Zone marécageuse<br />' });
var format_OccupationdusolLandCover_5 = new ol.format.GeoJSON();
var features_OccupationdusolLandCover_5 = format_OccupationdusolLandCover_5.readFeatures(json_OccupationdusolLandCover_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OccupationdusolLandCover_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccupationdusolLandCover_5.addFeatures(features_OccupationdusolLandCover_5);
var lyr_OccupationdusolLandCover_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccupationdusolLandCover_5, 
                style: style_OccupationdusolLandCover_5,
                popuplayertitle: 'Occupation du sol [Land Cover]',
                interactive: true,
    title: 'Occupation du sol [Land Cover]<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_0.png" /> Couvert arboré<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_1.png" /> Végétation inondée<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_2.png" /> Zone bâtie<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_3.png" /> Cultures<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_4.png" /> Eau<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_5.png" /> Nuage<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_6.png" /> Prairie<br />\
    <img src="styles/legend/OccupationdusolLandCover_5_7.png" /> Sol nu<br />' });
var format_CouvertarborOpenstreetmaps_6 = new ol.format.GeoJSON();
var features_CouvertarborOpenstreetmaps_6 = format_CouvertarborOpenstreetmaps_6.readFeatures(json_CouvertarborOpenstreetmaps_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CouvertarborOpenstreetmaps_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CouvertarborOpenstreetmaps_6.addFeatures(features_CouvertarborOpenstreetmaps_6);
var lyr_CouvertarborOpenstreetmaps_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CouvertarborOpenstreetmaps_6, 
                style: style_CouvertarborOpenstreetmaps_6,
                popuplayertitle: 'Couvert arboré (Openstreetmaps)',
                interactive: true,
                title: '<img src="styles/legend/CouvertarborOpenstreetmaps_6.png" /> Couvert arboré (Openstreetmaps)'
            });
var format_VoieroutireOpenstreetmaps_7 = new ol.format.GeoJSON();
var features_VoieroutireOpenstreetmaps_7 = format_VoieroutireOpenstreetmaps_7.readFeatures(json_VoieroutireOpenstreetmaps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VoieroutireOpenstreetmaps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VoieroutireOpenstreetmaps_7.addFeatures(features_VoieroutireOpenstreetmaps_7);
var lyr_VoieroutireOpenstreetmaps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VoieroutireOpenstreetmaps_7, 
                style: style_VoieroutireOpenstreetmaps_7,
                popuplayertitle: 'Voie routière (Openstreetmaps)',
                interactive: true,
    title: 'Voie routière (Openstreetmaps)<br />\
    <img src="styles/legend/VoieroutireOpenstreetmaps_7_0.png" /> Voie résidentielle<br />\
    <img src="styles/legend/VoieroutireOpenstreetmaps_7_1.png" /> Voie principale<br />' });
var format_CourbedeniveauDEMALOSPALSAR2007_8 = new ol.format.GeoJSON();
var features_CourbedeniveauDEMALOSPALSAR2007_8 = format_CourbedeniveauDEMALOSPALSAR2007_8.readFeatures(json_CourbedeniveauDEMALOSPALSAR2007_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CourbedeniveauDEMALOSPALSAR2007_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CourbedeniveauDEMALOSPALSAR2007_8.addFeatures(features_CourbedeniveauDEMALOSPALSAR2007_8);
var lyr_CourbedeniveauDEMALOSPALSAR2007_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CourbedeniveauDEMALOSPALSAR2007_8, 
                style: style_CourbedeniveauDEMALOSPALSAR2007_8,
                popuplayertitle: 'Courbe de niveau [DEM, ALOS PALSAR 2007]',
                interactive: true,
    title: 'Courbe de niveau [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_8_0.png" /> Courbe de niveau mineur 1 mètre<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_8_1.png" /> Courbe de niveau intermédiaire 5 mètres<br />\
    <img src="styles/legend/CourbedeniveauDEMALOSPALSAR2007_8_2.png" /> Courbe de niveau majeur 10 mètres<br />' });
var format_DirectiondcoulementdeauDEMALOSPALSAR2007_9 = new ol.format.GeoJSON();
var features_DirectiondcoulementdeauDEMALOSPALSAR2007_9 = format_DirectiondcoulementdeauDEMALOSPALSAR2007_9.readFeatures(json_DirectiondcoulementdeauDEMALOSPALSAR2007_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectiondcoulementdeauDEMALOSPALSAR2007_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectiondcoulementdeauDEMALOSPALSAR2007_9.addFeatures(features_DirectiondcoulementdeauDEMALOSPALSAR2007_9);
var lyr_DirectiondcoulementdeauDEMALOSPALSAR2007_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DirectiondcoulementdeauDEMALOSPALSAR2007_9, 
                style: style_DirectiondcoulementdeauDEMALOSPALSAR2007_9,
                popuplayertitle: 'Direction d\'écoulement d\'eau  [DEM, ALOS PALSAR 2007]',
                interactive: true,
    title: 'Direction d\'écoulement d\'eau  [DEM, ALOS PALSAR 2007]<br />\
    <img src="styles/legend/DirectiondcoulementdeauDEMALOSPALSAR2007_9_0.png" /> 1 - 2<br />\
    <img src="styles/legend/DirectiondcoulementdeauDEMALOSPALSAR2007_9_1.png" /> 2 - 3<br />\
    <img src="styles/legend/DirectiondcoulementdeauDEMALOSPALSAR2007_9_2.png" /> 3 - 4<br />' });
var format_ArretsdebusOpenstreetmaps_10 = new ol.format.GeoJSON();
var features_ArretsdebusOpenstreetmaps_10 = format_ArretsdebusOpenstreetmaps_10.readFeatures(json_ArretsdebusOpenstreetmaps_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArretsdebusOpenstreetmaps_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArretsdebusOpenstreetmaps_10.addFeatures(features_ArretsdebusOpenstreetmaps_10);
var lyr_ArretsdebusOpenstreetmaps_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArretsdebusOpenstreetmaps_10, 
                style: style_ArretsdebusOpenstreetmaps_10,
                popuplayertitle: 'Arrets de bus (Openstreetmaps)',
                interactive: true,
                title: '<img src="styles/legend/ArretsdebusOpenstreetmaps_10.png" /> Arrets de bus (Openstreetmaps)'
            });
var format_InfrastructuresOpenstreetmaps_11 = new ol.format.GeoJSON();
var features_InfrastructuresOpenstreetmaps_11 = format_InfrastructuresOpenstreetmaps_11.readFeatures(json_InfrastructuresOpenstreetmaps_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastructuresOpenstreetmaps_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastructuresOpenstreetmaps_11.addFeatures(features_InfrastructuresOpenstreetmaps_11);
var lyr_InfrastructuresOpenstreetmaps_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastructuresOpenstreetmaps_11, 
                style: style_InfrastructuresOpenstreetmaps_11,
                popuplayertitle: 'Infrastructures (Openstreetmaps)',
                interactive: true,
    title: 'Infrastructures (Openstreetmaps)<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_0.png" /> Centre de santé<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_1.png" /> Gare maritime<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_2.png" /> Hôtel<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_3.png" /> Inspection de véhicule<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_4.png" /> Lieu de culte<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_5.png" /> Pharmacie<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_6.png" /> restaurant<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_7.png" /> Écoles<br />\
    <img src="styles/legend/InfrastructuresOpenstreetmaps_11_8.png" /> <br />' });
var format_ABATTA_12 = new ol.format.GeoJSON();
var features_ABATTA_12 = format_ABATTA_12.readFeatures(json_ABATTA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABATTA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABATTA_12.addFeatures(features_ABATTA_12);
var lyr_ABATTA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABATTA_12, 
                style: style_ABATTA_12,
                popuplayertitle: 'ABATTA',
                interactive: true,
                title: '<img src="styles/legend/ABATTA_12.png" /> ABATTA'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_ESRITopo_3.setVisible(true);lyr_OccupationdusolAbattaBNETD2020_4.setVisible(true);lyr_OccupationdusolLandCover_5.setVisible(true);lyr_CouvertarborOpenstreetmaps_6.setVisible(true);lyr_VoieroutireOpenstreetmaps_7.setVisible(true);lyr_CourbedeniveauDEMALOSPALSAR2007_8.setVisible(true);lyr_DirectiondcoulementdeauDEMALOSPALSAR2007_9.setVisible(true);lyr_ArretsdebusOpenstreetmaps_10.setVisible(true);lyr_InfrastructuresOpenstreetmaps_11.setVisible(true);lyr_ABATTA_12.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,lyr_ESRITopo_3,lyr_OccupationdusolAbattaBNETD2020_4,lyr_OccupationdusolLandCover_5,lyr_CouvertarborOpenstreetmaps_6,lyr_VoieroutireOpenstreetmaps_7,lyr_CourbedeniveauDEMALOSPALSAR2007_8,lyr_DirectiondcoulementdeauDEMALOSPALSAR2007_9,lyr_ArretsdebusOpenstreetmaps_10,lyr_InfrastructuresOpenstreetmaps_11,lyr_ABATTA_12];
lyr_OccupationdusolAbattaBNETD2020_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Dept': 'Dept', 'Classe': 'Classe', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_OccupationdusolLandCover_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Classe': 'Classe', });
lyr_CouvertarborOpenstreetmaps_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_VoieroutireOpenstreetmaps_7.set('fieldAliases', {'osm_id': 'osm_id', 'Nom': 'Nom', 'Type': 'Type', });
lyr_CourbedeniveauDEMALOSPALSAR2007_8.set('fieldAliases', {'ELEVATION': 'ELEVATION', 'Type': 'Type', });
lyr_DirectiondcoulementdeauDEMALOSPALSAR2007_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'arcid': 'arcid', 'grid_code': 'grid_code', 'from_node': 'from_node', 'to_node': 'to_node', 'Shape_Leng': 'Shape_Leng', });
lyr_ArretsdebusOpenstreetmaps_10.set('fieldAliases', {'osm_id': 'osm_id', 'Nom': 'Nom', 'Type': 'Type', });
lyr_InfrastructuresOpenstreetmaps_11.set('fieldAliases', {'osm_id': 'osm_id', 'Nom': 'Nom', 'Type': 'Type', });
lyr_ABATTA_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OccupationdusolAbattaBNETD2020_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Dept': 'TextEdit', 'Classe': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_OccupationdusolLandCover_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Classe': 'TextEdit', });
lyr_CouvertarborOpenstreetmaps_6.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_VoieroutireOpenstreetmaps_7.set('fieldImages', {'osm_id': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', });
lyr_CourbedeniveauDEMALOSPALSAR2007_8.set('fieldImages', {'ELEVATION': 'TextEdit', 'Type': 'TextEdit', });
lyr_DirectiondcoulementdeauDEMALOSPALSAR2007_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'arcid': 'TextEdit', 'grid_code': 'TextEdit', 'from_node': 'TextEdit', 'to_node': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_ArretsdebusOpenstreetmaps_10.set('fieldImages', {'osm_id': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', });
lyr_InfrastructuresOpenstreetmaps_11.set('fieldImages', {'osm_id': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', });
lyr_ABATTA_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_OccupationdusolAbattaBNETD2020_4.set('fieldLabels', {'OBJECTID_1': 'header label - always visible', 'Dept': 'header label - always visible', 'Classe': 'header label - always visible', 'Shape_Leng': 'header label - always visible', 'Shape_Area': 'header label - always visible', });
lyr_OccupationdusolLandCover_5.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'gridcode': 'header label - always visible', 'Shape_Leng': 'header label - always visible', 'Shape_Area': 'header label - always visible', 'Classe': 'header label - always visible', });
lyr_CouvertarborOpenstreetmaps_6.set('fieldLabels', {'osm_id': 'header label - always visible', 'name': 'header label - always visible', 'type': 'header label - always visible', });
lyr_VoieroutireOpenstreetmaps_7.set('fieldLabels', {'osm_id': 'header label - always visible', 'Nom': 'header label - always visible', 'Type': 'header label - always visible', });
lyr_CourbedeniveauDEMALOSPALSAR2007_8.set('fieldLabels', {'ELEVATION': 'header label - always visible', 'Type': 'header label - always visible', });
lyr_DirectiondcoulementdeauDEMALOSPALSAR2007_9.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'arcid': 'header label - always visible', 'grid_code': 'header label - always visible', 'from_node': 'header label - always visible', 'to_node': 'header label - always visible', 'Shape_Leng': 'header label - always visible', });
lyr_ArretsdebusOpenstreetmaps_10.set('fieldLabels', {'osm_id': 'header label - always visible', 'Nom': 'header label - always visible', 'Type': 'header label - always visible', });
lyr_InfrastructuresOpenstreetmaps_11.set('fieldLabels', {'osm_id': 'header label - always visible', 'Nom': 'header label - always visible', 'Type': 'header label - always visible', });
lyr_ABATTA_12.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'timestamp': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', 'altitudeMo': 'header label - always visible', 'tessellate': 'header label - always visible', 'extrude': 'header label - always visible', 'visibility': 'header label - always visible', 'drawOrder': 'header label - always visible', 'icon': 'header label - always visible', });
lyr_ABATTA_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});