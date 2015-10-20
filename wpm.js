// Prompting user for their read speed
var userInput = prompt ("What is your read speed per minute?(The Global average is 230 WPM)");

var wpm  = function(userInput) {
  if(isNaN(userInput)) { //Brandon J reminded me that this needed to be done.
    userInput === 230;
  }
}
//This section extracts, arrayerizes and cleans whitespace
var text = document.body.textContent;
var textArray = text.split(" ");
//http://stackoverflow.com/questions/20668872/remove-whitespace-only-array-elements
//This is to remove my whitespace elements credit to Paul Draper.
var textClean = textArray.filter(function(str) {
    return (/\S/).test(str);
});
//Calculates average
var fuckingaverage = function(userWPM) {
    var wordtotal = textClean.length;
    var answer = Math.round((wordtotal / userWPM));//Juan gave me the idea of rounding the value.
    var pageInput = document.getElementsByClassName('time-to-read')[0];
    pageInput.innerHTML = answer + " " + "Words Per Minute";
};
fuckingaverage(+userInput);
