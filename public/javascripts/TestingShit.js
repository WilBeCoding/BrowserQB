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


   function pickRandomProperty(array) {
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


console.log(pickRandomProperty(postSnapStrings));
// console.log(postSnapStrings)

// Options:
//   -Put everything in one big object
//     -Would this make it more difficult to assign odds to certain properties?

// Database:
  // -Just store the results of the game in the database. Make a high score thing