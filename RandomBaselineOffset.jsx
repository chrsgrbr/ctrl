// Random Baseline Offset Script for Adobe InDesign
// Created by Christian Gruber
// https://www.christiangruber.de
// Send questions or feedback to: mail@christiangruber.de

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeBaselineShift() {
    var doc = app.activeDocument;

    var dialogBox = app.dialogs.add({ name: "Random Baseline Offset" });

    var dialogColumn = dialogBox.dialogColumns.add();
    var minValueInput = dialogColumn.textEditboxes.add({
        minWidth: 100,
        editContents: "0", // Set default minimum value
        editLabel: "Min Value:"
    });

    var maxValueInput = dialogColumn.textEditboxes.add({
        minWidth: 100,
        editContents: "10", // Set default maximum value
        editLabel: "Max Value:"
    });

    if (dialogBox.show() === true) {
        var minValue = parseInt(minValueInput.editContents, 10);
        var maxValue = parseInt(maxValueInput.editContents, 10);

        if (!isNaN(minValue) && !isNaN(maxValue)) {

            if (doc.selection.length > 0 && doc.selection[0].constructor.name === "TextFrame") {

                var textFrame = doc.selection[0];

                for (var i = 0; i < textFrame.characters.length; i++) {

                    var randomBaselineShift = getRandomInt(minValue, maxValue);

                    textFrame.characters[i].baselineShift = randomBaselineShift;
                }

                alert("Random baseline offset applied!");
            } else {
                alert("Please select a text frame and try again.");
            }
        } else {
            alert("Invalid input. Please enter numeric values for Min Value and Max Value.");
        }
    } else {
        dialogBox.destroy(); // Clean up dialog if not used
    }
}

randomizeBaselineShift();
