var postSnapStrings = {

    WR1oddsIncrease: {
      Safety: "The Safety Is Cheating Right!",
      Lolb: "The LOLB is blitzing!",
      Cb: "Left Cornerback Blitz!"
     },

    WR1oddsDecrease: {
      Pressed: "WR1 Pressed!",
      Lolb: "The LOLB dropped into coverage!",
      Safety: "The Safety is cheating left!"
     },

    WR2oddsIncrease: {
      MLB: "The MLB is blitzing!",
      Safety: "Safety Blitz!",
      SafetyOnLine: "The Safety is on the line"
     },

    WR2oddsDecrease: {
      Pressed: "WR2 pressed!",
      MLB: "The MLB dropped back into coverage!",
      Safety: "The Safety is staying mid-field!"
     },

    WR3oddsIncrease: {
      Safety: "The safety is cheating left!",
      Cb: "Right Cornerback Blitz!",
      Rolb: "The ROLB is blitzing!",
      Beat: "WR3 beat his man!"
     },

    WR3oddsDecrease: {
      Pressed: "WR3 pressed!",
      Rolb: "The ROLB dropped back into coverage",
      Safety: "The Safety is cheating right"
     },

    GlobalIncrease: {
      Blitz: "All Out Blitz!",
      Oline: "The line is holding strong!",
     },

    GlobalDecrease: {
      Stuffed: "WRs stuffed at the line!",
      DefensiveEnd: "The Defensive End is barreling towards you!",
      Donald: "Dammit Donald!"
     },

//      Blitz: {
//       DefensiveEnd: "The Defensive End is barreling towards you!",
//       Donald: "Dammit Donald!",
//       Blitz: "All Out Blitz!",
//       Cb: "Right Cornerback Blitz!",
//       Rolb: "The ROLB is blitzing!",
//       Lolb: "The LOLB is blitzing!",
//       Cb: "Left Cornerback Blitz!",
//       MLB: "The MLB is blitzing!",
//       Safety: "Safety Blitz!"
//      }
}

var postSnapStrings = {

    WR1oddsIncrease: {
      Safety: "The Safety Is Cheating Right!",
      Lolb: "The LOLB is blitzing!",
      Cb: "Left Cornerback Blitz!"
     },

    WR1oddsDecrease: {
      Pressed: "WR1 Pressed!",
      Lolb: "The LOLB dropped into coverage!",
      Safety: "The Safety is cheating left!"
     },

    WR2oddsIncrease: {
      MLB: "The MLB is blitzing!",
      Safety: "Safety Blitz!",
      SafetyOnLine: "The Safety is on the line"
     },

    WR2oddsDecrease: {
      Pressed: "WR2 pressed!",
      MLB: "The MLB dropped back into coverage!",
      Safety: "The Safety is staying mid-field!"
     },

    WR3oddsIncrease: {
      Safety: "The safety is cheating left!",
      Cb: "Right Cornerback Blitz!",
      Rolb: "The ROLB is blitzing!",
      Beat: "WR3 beat his man!"
     },

    WR3oddsDecrease: {
      Pressed: "WR3 pressed!",
      Rolb: "The ROLB dropped back into coverage",
      Safety: "The Safety is cheating right"
     },

    GlobalIncrease: {
      Blitz: "All Out Blitz!",
      Oline: "The line is holding strong!",
     },

    GlobalDecrease: {
      Stuffed: "WRs stuffed at the line!",
      DefensiveEnd: "The Defensive End is barreling towards you!",
      Donald: "Dammit Donald!"
     },

//      Blitz: {
//       DefensiveEnd: "The Defensive End is barreling towards you!",
//       Donald: "Dammit Donald!",
//       Blitz: "All Out Blitz!",
//       Cb: "Right Cornerback Blitz!",
//       Rolb: "The ROLB is blitzing!",
//       Lolb: "The LOLB is blitzing!",
//       Cb: "Left Cornerback Blitz!",
//       MLB: "The MLB is blitzing!",
//       Safety: "Safety Blitz!"
//      }
}

function pickRandomSubObject(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count) {
           result = prop;
        }
   return result;
}

var randomPassSubObject = pickRandomSubObject(postSnapStrings);
var randomPassString = pickRandomPassPropertyValue(randomPassSubObject);

function pickRandomPassPropertyValue(outerProperty) {
    var result;
    var count = 0;
    for (var prop in postSnapStrings[outerProperty])
        if (Math.random() < 1/++count) {
           result = postSnapStrings[outerProperty][prop];
        }
    return result
}

// console.log(randomPassString)

var passPlayReads = (function() {
  randomPassSubObject;
  return randomPassString;
});
console.log(passPlayReads());
