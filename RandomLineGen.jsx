// Random Line Generator for Adobe InDesign
// Created by Christian Gruber
// https://www.christiangruber.de
// Send questions or feedback to: mail@christiangruber.de


function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function createRandomClosedPath() {
    var doc = app.activeDocument;
    var page = doc.pages[0]; 

    
    if (app.layoutWindows.length > 0 && app.layoutWindows[0].activePage !== null) {
        page = app.layoutWindows[0].activePage;
    }

    var pageWidth = page.bounds[3]; 
    var pageHeight = page.bounds[2]; 

    var line = page.graphicLines.add();

    var numPoints = Math.floor(getRandomNumber(3, 30));

    var points = [];
    for (var i = 0; i < numPoints; i++) {
        var x = getRandomNumber(0, pageWidth);
        var y = getRandomNumber(0, pageHeight);
        points.push([x, y]);
    }

    points.push(points[0]);

    line.paths.item(0).entirePath = points;

    line.strokeWeight = 1;
    line.strokeColor = doc.colors.itemByName("Black");
}

createRandomClosedPath();
