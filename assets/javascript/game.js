// some variables I think I'll need
var game = ["mario", "zelda", "metroid", "pokemon"];
var choice = Math.floor(Math.random() * 4);
var answer = game[choice];
var myLength = answer.length;
var alreadyG = [];
var solving = [];
// this takes the html id "start" and turns it into nothing on any key press.
// it also logs all keystrokes in the console.
document.onkeyup = function (event) {
    document.getElementById("start").innerHTML = "";
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);


    // this will attempt to make the logged strokes visible, but I don't
    // know how to to keep that from repeating yet
    alreadyG.push(userGuess);
    document.getElementById("alreadyG").innerHTML = "Letters Already Guessed " + alreadyG;


    // this is attempting to populate the answer space with the correct number of "_" for the
    // number of letters in the answer word
    for (var i; i < myLength; i++) {
        solving.push(
            _);
    };


    //NOTFINISHED here I am tyring to repopulate the blank spots with correctly guessed letters

    document.getElementById("correctG").innerHTML = "Answer: " + solving;

}



