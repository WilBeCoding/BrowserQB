  var postSnapStrings = {

    WR1oddsIncrease: {
      SafetyWR1Inc: "The Safety Is Cheating Right!",
     },

    WR1oddsDecrease: {
      LolbWR1Dec: "The LOLB dropped into coverage!",
      SafetyWR1Dec: "The Safety is cheating left!",
     },

    WR2oddsIncrease: {
      SafetyOnLineWR2inc: "The Safety is on the line",
     },

    WR2oddsDecrease: {
      MLBWR2Dec: "The MLB dropped back into coverage!",
      SafetyWR2Dec: "The Safety is staying mid-field!",
     },

    WR3oddsIncrease: {
      SafetyWR3Inc: "The safety is cheating left!",
      BeatWR3inc: "WR3 beat his man!",
     },

    WR3oddsDecrease: {
      RolbWR3Dec: "The ROLB dropped back into coverage",
      SafetyWR3Dec: "The Safety is cheating right",
     },

    GlobalIncrease: {
      OlineGlobalInc: "The line is holding strong!",
     },

    GlobalDecrease: {
      DefensiveEndGlobalDec: "The Defensive End is barreling towards you!",
      DonaldGlobalDec: "Dammit Donald!",
     }
  }

  var firstReadStrings = {

    WR1oddsIncrease: {
      SafetyWR1Inc: "The Safety Is Cheating Right!",
      LolbWR1inc: "The LOLB is blitzing!",
      CbWR1inc: "Left Cornerback Blitz!",
     },

    WR1oddsDecrease: {
      PressedWR1Dec: "WR1 Pressed!",
      LolbWR1Dec: "The LOLB dropped into coverage!",
      SafetyWR1Dec: "The Safety is cheating left!",
     },

    WR2oddsIncrease: {
      MLBWR2inc: "The MLB is blitzing!",
      SafetyWR2Inc: "Safety Blitz!",
      SafetyOnLineWR2inc: "The Safety is on the line",
     },

    WR2oddsDecrease: {
      PressedWR2Dec: "WR2 pressed!",
      MLBWR2Dec: "The MLB dropped back into coverage!",
      SafetyWR2Dec: "The Safety is staying mid-field!",
     },

    WR3oddsIncrease: {
      SafetyWR3Inc: "The safety is cheating left!",
      CbWR3Inc: "Right Cornerback Blitz!",
      RolbWR3inc: "The ROLB is blitzing!",
      BeatWR3inc: "WR3 beat his man!",
     },

    WR3oddsDecrease: {
      PressedWR3Dec: "WR3 pressed!",
      RolbWR3Dec: "The ROLB dropped back into coverage",
      SafetyWR3Dec: "The Safety is cheating right",
     },

    GlobalIncrease: {
      BlitzGlobalInc: "All Out Blitz!",
      OlineGlobalInc: "The line is holding strong!",
     },

    GlobalDecrease: {
      StuffedGlobalDec: "WRs stuffed at the line!",
      DefensiveEndGlobalDec: "The Defensive End is barreling towards you!",
      DonaldGlobalDec: "Dammit Donald!",
     },
  }  

  function pickRandomSubObject() {
    // console.log("interval pass strings is hitting")
                              var result;
                              var output;
                              var count = 0;
                              for(var prop in postSnapStrings)
                                  if (Math.random() < 1/++count) {
                                     result = prop;
                                  }
                                  var count2 = 0;
                                  for (var prop in postSnapStrings[result])
                                    // console.log(prop);
                                    // console.log(postSnapStrings[result]);
                                      if (Math.random() < 1/++count2) {
                                         output = postSnapStrings[result][prop];
                                      }
                                      // console.log(defensiveSpanText);
                                      // console.log(JSON.stringify(PlayResults,null, 4));
                                  return output
                              }

                              console.log(pickRandomSubObject());