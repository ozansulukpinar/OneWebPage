function assignColours() {
    var rgb = [];
    for (k = 0; k < 3; k++) {
        var rgbNumber = Math.floor(Math.random() * 256);
        rgb[k] = rgbNumber;
    }
    return rgb;
}

for (i = 0; i < 4; i++) {
    var rgbNumbers = assignColours();
    $('#' + i).css({ 'background-color': 'rgb(' + rgbNumbers[0] + ',' + rgbNumbers[1] + ',' + rgbNumbers[2] + ')' });
}

function Click() {
    $('#0').delay(1000).fadeOut();
    $('#1').delay(750).fadeOut();
    $('#2').delay(500).fadeOut();
    $('#3').delay(250).fadeOut();
    setTimeout(function () { window.open("https://github.com/ozansulukpinar/OneWebPage", "_self") }, 1250); //Open the web page of source code
}

$('#0, #1, #2, #3').on('click', Click);
