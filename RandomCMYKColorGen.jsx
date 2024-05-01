// Random Color Generator Script for Adobe InDesign
// Created by Christian Gruber
// https://www.christiangruber.de
// Send questions or feedback to: mail@christiangruber.de

var doc = app.activeDocument;

var cyan = Math.floor(Math.random() * 100);
var magenta = Math.floor(Math.random() * 100);
var yellow = Math.floor(Math.random() * 100);
var black = Math.floor(Math.random() * 100);

var newColor = app.activeDocument.colors.add();
newColor.properties = {
    model: ColorModel.PROCESS,
    space: ColorSpace.CMYK,
    colorValue: [cyan, magenta, yellow, black]
};

var rect = app.activeDocument.rectangles.add();
rect.geometricBounds = [0, 0, 10, 10]; 

rect.fillColor = newColor;

newColor.name = "C" + cyan + " M" + magenta + " Y" + yellow + " K" + black;
