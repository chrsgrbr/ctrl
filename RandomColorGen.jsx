// Random Color Generator Script for Adobe InDesign
// Created by Christian Gruber
// https://www.christiangruber.de
// Send questions or feedback to: mail@christiangruber.de

// Create a reference to the current document
var doc = app.activeDocument;

// Generate random CMYK values
var cyan = Math.floor(Math.random() * 100);
var magenta = Math.floor(Math.random() * 100);
var yellow = Math.floor(Math.random() * 100);
var black = Math.floor(Math.random() * 100);

// Create a new color
var newColor = app.activeDocument.colors.add();
newColor.properties = {
    model: ColorModel.PROCESS,
    space: ColorSpace.CMYK,
    colorValue: [cyan, magenta, yellow, black]
};

// Create a rectangle to fill with the random color
var rect = app.activeDocument.rectangles.add();
rect.geometricBounds = [0, 0, 10, 10]; // [y1, x1, y2, x2] - adjust coordinates as needed

// Fill the rectangle with the random color
rect.fillColor = newColor;

// Set the name of the color swatch to its CMYK values
newColor.name = "C" + cyan + " M" + magenta + " Y" + yellow + " K" + black;
