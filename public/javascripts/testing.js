// $( document ).ready(function() {


var postSnapStrings = [

WR1oddsIncrease = {
  Safety: "The Safety Is Cheating Right!",
  Lolb: "The LOLB is blitzing!",
  Cb: "Left Cornerback Blitz!",
 },

WR1oddsDecrease = {
  Pressed: "WR1 Pressed!",
  Lolb: "The LOLB dropped into coverage!",
  Safety: "The Safety is cheating left!",
 },

WR2oddsIncrease = {
  MLB: "The MLB is blitzing!",
  Safety: "Safety Blitz!",
  SafetyOnLine: "The Safety is on the line",
 },

WR2oddsDecrease = {
  Pressed: "WR2 pressed!",
  MLB: "The MLB dropped back into coverage!",
  Safety: "The Safety staying mid-field!",
 },

WR3oddsIncrease = {
  Safety: "The safety is cheating left!",
  Cb: "Right Cornerback Blitz!",
  Rolb: "The ROLB is blitzing!",
 },

WR3oddsDecrease = {
  Pressed: "WR3 pressed!",
  Rolb: "The ROLB dropped back into coverage",
  Safety: "The Safety is cheating right",
 },

GlobalIncrease = {
  Blitz: "All Out Blitz!",
  Oline: "The line is holding strong!",
 },

GlobalDecrease = {
  Stuffed: "WRs stuffed at the line!",
  DefensiveEnd: "The Defensive End is barreling towards you!",
  Donald: "Dammit Donald!",
 }
 ]


    function pickRandomPostSnapString(array) {
       var result;
       var count = 0;
       var key;
       var keyArray = [];

       for (var prop in array)
           if (Math.random() < 1/++count) {
              result = array[prop];
            };
        for (var key in result) {
            keyArray.push(key);
        }
       return result[keyArray[Math.floor(Math.random() * keyArray.length)]]    
   }


var randomString = pickRandomPostSnapString(postSnapStrings);

var WR1oddsIncreaseObject = postSnapStrings[0];
var WR1oddsDecreaseObject = postSnapStrings[1];
var WR2oddsIncreaseObject = postSnapStrings[2];
var WR2oddsDecreaseObject = postSnapStrings[3];
var WR3oddsIncreaseObject = postSnapStrings[4];
var WR3oddsDecreaseObject = postSnapStrings[5];
var globalOddsIncreaseObject = postSnapStrings[6];
var globalOddsDecreaseObject = postSnapStrings[7];

// console.log(globalOddsDecreaseObject);

function testing(){
  for(var key in WR1oddsIncreaseObject) {
    console.log(WR1oddsIncreaseObject[key] + " one pass");
  }
}
console.log(testing());

// console.log(randomString);

//   function repeatString(func) {
//     setInterval(func, 17);
//   }

  // console.log(repeatString(randomString));
// console.log(postSnapStrings)

// Options:
//   -Put everything in one big object
//     -Would this make it more difficult to assign odds to certain properties?

// Database:
  // -Just store the results of the game in the database. Make a high score thing




var passOutcomeStrings = [

  shortCompletion = {
    five: "Pass completed for a 5 yard gain",
    ten: "Pass completed for a 10 yard gain",
  },
  mediumCompletion = {
    fifteen: "Pass completed for a 15 yard gain",
    twenty: "Pass completed for a 20 yard gain",
  },
  longCompletion = {
    thirty: "Pass completed for a 40 yard gain",
    fourty: "Pass completed for a 50 yard gain",
  },

  touchdownCompletion = {
    touchdown: "Pass completed for a touchdown!"
  }
]

function randomValueOfObjectInpostSnapStrings(array) {
      var result;
      var count = 0;
      var key;
      var keyArray = [];

     for (var prop in array)
         if (Math.random() < 1/++count) {
            result = array[prop];
          };
      for (var key in result) {
          keyArray.push(key);
      }
     return result   
 };


var WR1oddsIncreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(WR1oddsIncreaseObject);

var WR1oddsDecreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(WR1oddsDecreaseObject);

var WR2oddsIncreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(WR2oddsIncreaseObject);;

var WR2oddsDecreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(WR2oddsDecreaseObject);
var WR3oddsIncreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(WR3oddsIncreaseObject);

var WR3oddsDecreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(WR3oddsDecreaseObject);
var globalOddsIncreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(globalOddsIncreaseObject);
var globalOddsDecreaseObjectRandomValue = randomValueOfObjectInpostSnapStrings(globalOddsDecreaseObject);



// console.log(WR3oddsDecreaseObjectRandomValue);

  // function pickRandomPassOutcome(array) {
  //    var $defSpan = $('.defensiveSpan');
  //    var result;
  //    var count = 0;
  //    var key;
  //    var keyArray = [];


     // if the text in defensiveSpan is from the zero index of postSnapStrings then increase the odds of getting a medium and long completion


// MASSIVE SERIES OF IF STATEMENTS?

     // for(var i = 0; i < postSnapStrings.length; i++) {
       // if(defSpan.innerText === WR1oddsIncreaseObjectRandomValue) {
          // console.log("Holy Fuck This Works");
       // }
     // for (var prop in array)
     //     if (Math.random() < 1/++count) {
     //        result = array[prop];
     //      };
     //  for (var key in result) {
     //      keyArray.push(key);
     //  }
     // return result[keyArray[Math.floor(Math.random() * keyArray.length)]]    
 // };

// console.log(pickRandomPassOutcome(passOutcomeStrings));


// Photo

// http://i69.photobucket.com/albums/i72/3133thunder/Thunder%20Touchdown%20Club/4309587_400x400.jpg




