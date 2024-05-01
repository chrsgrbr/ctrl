// Random Baseline Offset Script for Adobe InDesign
// Created by Christian Gruber
// https://www.christiangruber.de
// Send questions or feedback to: mail@christiangruber.de

// Function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main function to randomize baseline shift
function randomizeBaselineShift() {
    // Get the active document
    var doc = app.activeDocument;

    // Create a dialog box
    var dialogBox = app.dialogs.add({ name: "Random Baseline Offset" });

    // Add a text editbox for min value
    var minValueInput = dialogBox.dialogColumns.add().textEditboxes.add({
        minWidth: 100,
        editContents: "Min Value"
    });

    // Add a text editbox for max value
    var maxValueInput = dialogBox.dialogColumns.add().textEditboxes.add({
        minWidth: 100,
        editContents: "Max Value"
    });

    // Show the dialog box and get user input
    if (dialogBox.show() === true) {
        var minValue = parseInt(minValueInput.editContents);
        var maxValue = parseInt(maxValueInput.editContents);

        // Check if user input is valid
        if (!isNaN(minValue) && !isNaN(maxValue)) {
            // Check if there is a selection
            if (doc.selection.length > 0 && doc.selection[0].constructor.name === "TextFrame") {
                // Loop through each character in the selected text frame
                var textFrame = doc.selection[0];

                for (var i = 0; i < textFrame.characters.length; i++) {
                    // Get a random baseline offset value within the user-defined range
                    var randomBaselineShift = getRandomInt(minValue, maxValue);

                    // Apply the random baseline offset to the current character
                    textFrame.characters[i].baselineShift = randomBaselineShift;
                }

                alert("Random baseline offset applied!");
            } else {
                alert("Please select a text frame and try again.");
            }
        } else {
            alert("Invalid input. Please enter numeric values for Min Value and Max Value.");
        }
    }
}

// Run the main function
randomizeBaselineShift();
