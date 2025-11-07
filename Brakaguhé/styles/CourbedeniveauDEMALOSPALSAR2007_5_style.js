var size = 0;
var placement = 'point';
function categories_CourbedeniveauDEMALOSPALSAR2007_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Contour Line, Minor':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,129,49,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contour Line, Intermediate':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,239,36,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contour Line, Major':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(163,206,55,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.56}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CourbedeniveauDEMALOSPALSAR2007_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("LAYER");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 0.6;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("NAME") !== null) {
        labelText = String(feature.get("NAME"));
    }
    
    var style = categories_CourbedeniveauDEMALOSPALSAR2007_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
