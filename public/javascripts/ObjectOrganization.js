// PlayResults = {
//   WR3initialOdds = Random Number Between  and 50,
//   WR2initialOdds = Random Number Between 0 and 50,
//   WR3initialsOdds = Random Number between 0 and 50,
//   WR2timeIncreaseOdds = Random Number between 1 and 5
//   WR2timeIncreaseOdds = Random Number between 1 and 5
//   WR3timeIncreaseOdds = Random Number between 1 and 5
//   WR1oddsAdjustment = Random Number derived from mutation function
//   WR2oddsAdjustment = Random Number derived from mutation function
//   WR3oddsAdjustment = Random Number derived from mutation function
//   GlobalOddsAdjustment = Random Number derived from mutaiton function
//   CurrentWR1Odds = WR1initialOdds + WR1timeIncreaseOdds + GlobalOddsAdjustment
//   CurrentWR2Odds = WR2initialOdds + WR2timeIncreaseOdds + GlobalOddsAdjustment
//   CurrentWR3odds = WR3initialsOdds + WR3timeIncreaseOdds + GlobalOddsAdjustment
// }


var QuarterbackReads = {
      FirstReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
                  SafetyWR1Inc: "The Safety Is Cheating Right",
                  LolbWR1inc: "Left Cornerback Blitz!",
                  SpaceOnCB: "WR1 creates some space between the CB",
            },
            DecreseWR1Odds: {
                  BumpedWR1: "WR1 is bumped on the line",
                  LOLB: "LOLB dropped in zone coverage",
                  Safety: "Safety is working left"
            }
        },
        WR2: {
            IncreaseWR2Odds: {
                  MlbWR2Inc: "The MLB is blitzing",
                  SafetyWRBlitz: "Safety Blitz",
            },
            DecreaseWR2Odds: {
                  PressedWR2: "WR2 is pressed!",
                  BumpedWR1: "WR1 is bumped on the line",
                  SafetyWR2inc: "The Safety is midfield",
            }
        },
        WR3: {
            IncreaseWR3Odds: {
                  SafetyWR3Inc: "The Safety is working left",
                  CBWR3Inc: "Right Cornerback Blitz!",
                  BeatWR3Inc: "WR3 beat his man!"
            },
            DecreaseWR3Odds: {
                  PressedWR3Dec: "WR3 is pressed",
                  BumpedWR3: "WR is bumped at the line",
                  Rolb: "The ROLB dropped into zone coverage"
            }
        },
        Global: {
            GlobalIncrease: {
                  OLineGlobaInc: "The line is buying you time",
            },
            GlobalDecrease: {
                  DonalGlobalDec: "Dammit Donald!",
                  StuffedGlobalDec: "WRs stuffed at the line",
                  DefensiveEndGlobalDec: "The Defensive End is barreling towards you!"
            }
        }
      },
      SecondReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for SecondReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for SecondReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for SecondReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for SecondReadStrings Object",

            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for SecondReadStrings Object",

            },
            DecreaseWR3Odds: {
              Test: "This is a test string for SecondReadStrings Object",

            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for SecondReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for SecondReadStrings Object",

            }
        }
      },
      ThirdReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for ThirdReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for ThirdReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for ThirdReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for ThirdReadStrings Object",

            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for ThirdReadStrings Object",

            },
            DecreaseWR3Odds: {
              Test: "This is a test string for ThirdReadStrings Object",

            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for ThirdReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for ThirdReadStrings Object",

            }
        }
      },
      FourthReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for FourthReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for FourthReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for FourthReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for FourthReadStrings Object",

            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for FourthReadStrings Object",

            },
            DecreaseWR3Odds: {
              Test: "This is a test string for FourthReadStrings Object",

            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for FourthReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for FourthReadStrings Object",

            }
        }
      },
      FifthReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for FifthReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for FifthReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for FifthReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for FifthReadStrings Object",

            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for FifthReadStrings Object",

            },
            DecreaseWR3Odds: {
              Test: "This is a test string for FifthReadStrings Object",

            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for FifthReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for FifthReadStrings Object",

            }
        }
      },
      SixthReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for SixthReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for SixthReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for SixthReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for SixthReadStrings Object",

            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for SixthReadStrings Object",

            },
            DecreaseWR3Odds: {
              Test: "This is a test string for SixthReadStrings Object",

            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for SixthReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for SixthReadStrings Object",

            }
        }
      },
      SeventhReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for SeventhReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for SeventhReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for SeventhReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for SeventhReadStrings Object",

            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for SeventhReadStrings Object",

            },
            DecreaseWR3Odds: {
              Test: "This is a test string for SeventhReadStrings Object",

            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for SeventhReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for SeventhReadStrings Object",

            }
        }
      },
      EigthReadStrings: {

        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for EigthReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for EigthReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for EigthReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for EigthReadStrings Object",

            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for EigthReadStrings Object",

            },
            DecreaseWR3Odds: {
              Test: "This is a test string for EigthReadStrings Object",

            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for EigthReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for EigthReadStrings Object",

            }
        }
      },
      NinthReadStrings: {
        WR1: {
            IncreaseWR1Odds: {
              Test: "This is a test string for NinthReadStrings Object",
                  
            },
            DecreseWR1Odds: {
              Test: "This is a test string for NinthReadStrings Object",

            }
        },
        WR2: {
            IncreaseWR2Odds: {
              Test: "This is a test string for NinthReadStrings Object",

            },
            DecreaseWR2Odds: {
              Test: "This is a test string for NinthReadStrings Object",
            }
        },
        WR3: {
            IncreaseWR3Odds: {
              Test: "This is a test string for NinthReadStrings Object",
            },
            DecreaseWR3Odds: {
              Test: "This is a test string for NinthReadStrings Object",
            }
        },
        Global: {
            GlobalIncrease: {
              Test: "This is a test string for NinthReadStrings Object",

            },
            GlobalDecrease: {
              Test: "This is a test string for NinthReadStrings Object",

            }
        },
      }
}

function firstPassWR1() {
  var result;
  var output;
  var count = 0;
  var count2 = 0;
  for(var key in QuarterbackReads.FirstReadStrings.WR1)
    if (Math.random() < 1/++count) {
       result = key;
    }
    for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
      if(Math.random() < 1/++count2) {
        output = QuarterbackReads.FirstReadStrings.WR1[result][value];
      }
    console.log(output);
  }

function firstPassWR2() {
  var result;
  var output;
  var count = 0;
  var count2 = 0;
  for(var key in QuarterbackReads.FirstReadStrings.WR2)
    if (Math.random() < 1/++count) {
       result = key;
    }
    for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
      if(Math.random() < 1/++count2) {
        output = QuarterbackReads.FirstReadStrings.WR2[result][value];
      }
    console.log(output);
  }

  function firstPassWR3() {
    var result;
    var output;
    var count = 0;
    var count2 = 0;
    for(var key in QuarterbackReads.FirstReadStrings.WR3)
      if (Math.random() < 1/++count) {
         result = key;
      }
      for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
        if(Math.random() < 1/++count2) {
          output = QuarterbackReads.FirstReadStrings.WR3[result][value];
        }
      console.log(output);
    }

    function secondPassWR1() {
      var result;
      var output;
      var count = 0;
      var count2 = 0;
      for(var key in QuarterbackReads.FirstReadStrings.WR1)
        if (Math.random() < 1/++count) {
           result = key;
        }
        for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
          if(Math.random() < 1/++count2) {
            output = QuarterbackReads.FirstReadStrings.WR1[result][value];
          }
        console.log(output);
      }

    function secondPassWR2() {
      var result;
      var output;
      var count = 0;
      var count2 = 0;
      for(var key in QuarterbackReads.FirstReadStrings.WR2)
        if (Math.random() < 1/++count) {
           result = key;
        }
        for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
          if(Math.random() < 1/++count2) {
            output = QuarterbackReads.FirstReadStrings.WR2[result][value];
          }
        console.log(output);
      }

    function secondPassWR3() {
      var result;
      var output;
      var count = 0;
      var count2 = 0;
      for(var key in QuarterbackReads.FirstReadStrings.WR3)
        if (Math.random() < 1/++count) {
           result = key;
        }
        for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
          if(Math.random() < 1/++count2) {
            output = QuarterbackReads.FirstReadStrings.WR3[result][value];
          }
        console.log(output);
      }

    function thirdPassWR1() {
      var result;
      var output;
      var count = 0;
      var count2 = 0;
      for(var key in QuarterbackReads.FirstReadStrings.WR1)
        if (Math.random() < 1/++count) {
           result = key;
        }
        for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
          if(Math.random() < 1/++count2) {
            output = QuarterbackReads.FirstReadStrings.WR1[result][value];
          }
        console.log(output);
      }

      function thirdPassWR2() {
        var result;
        var output;
        var count = 0;
        var count2 = 0;
        for(var key in QuarterbackReads.FirstReadStrings.WR2)
          if (Math.random() < 1/++count) {
             result = key;
          }
          for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
            if(Math.random() < 1/++count2) {
              output = QuarterbackReads.FirstReadStrings.WR2[result][value];
            }
          console.log(output);
        }

      function thirdPassWR3() {
        var result;
        var output;
        var count = 0;
        var count2 = 0;
        for(var key in QuarterbackReads.FirstReadStrings.WR3)
          if (Math.random() < 1/++count) {
             result = key;
          }
          for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
            if(Math.random() < 1/++count2) {
              output = QuarterbackReads.FirstReadStrings.WR3[result][value];
            }
          console.log(output);
        }

      function fourthPassWR1() {
        var result;
        var output;
        var count = 0;
        var count2 = 0;
        for(var key in QuarterbackReads.FirstReadStrings.WR1)
          if (Math.random() < 1/++count) {
             result = key;
          }
          for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
            if(Math.random() < 1/++count2) {
              output = QuarterbackReads.FirstReadStrings.WR1[result][value];
            }
          console.log(output);
        }

        function fourthPassWR2() {
          var result;
          var output;
          var count = 0;
          var count2 = 0;
          for(var key in QuarterbackReads.FirstReadStrings.WR2)
            if (Math.random() < 1/++count) {
               result = key;
            }
            for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
              if(Math.random() < 1/++count2) {
                output = QuarterbackReads.FirstReadStrings.WR2[result][value];
              }
            console.log(output);
          }

          function fourthPassWR3() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR3)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR3[result][value];
                }
              console.log(output);
            }

          function fifthPassWR1() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR1)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR1[result][value];
                }
              console.log(output);
            }

            function fifthPassWR2() {
              var result;
              var output;
              var count = 0;
              var count2 = 0;
              for(var key in QuarterbackReads.FirstReadStrings.WR2)
                if (Math.random() < 1/++count) {
                   result = key;
                }
                for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
                  if(Math.random() < 1/++count2) {
                    output = QuarterbackReads.FirstReadStrings.WR2[result][value];
                  }
                console.log(output);
              }

              function fifthPassWR3() {
                var result;
                var output;
                var count = 0;
                var count2 = 0;
                for(var key in QuarterbackReads.FirstReadStrings.WR1)
                  if (Math.random() < 1/++count) {
                     result = key;
                  }
                  for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
                    if(Math.random() < 1/++count2) {
                      output = QuarterbackReads.FirstReadStrings.WR1[result][value];
                    }
                  console.log(output);
                }

              function sixthPassWR1() {
                var result;
                var output;
                var count = 0;
                var count2 = 0;
                for(var key in QuarterbackReads.FirstReadStrings.WR1)
                  if (Math.random() < 1/++count) {
                     result = key;
                  }
                  for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
                    if(Math.random() < 1/++count2) {
                      output = QuarterbackReads.FirstReadStrings.WR1[result][value];
                    }
                  console.log(output);
                }

            function sixthPassWR2() {
              var result;
              var output;
              var count = 0;
              var count2 = 0;
              for(var key in QuarterbackReads.FirstReadStrings.WR2)
                if (Math.random() < 1/++count) {
                   result = key;
                }
                for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
                  if(Math.random() < 1/++count2) {
                    output = QuarterbackReads.FirstReadStrings.WR2[result][value];
                  }
                console.log(output);
              }

            function sixthPassWR3() {
              var result;
              var output;
              var count = 0;
              var count2 = 0;
              for(var key in QuarterbackReads.FirstReadStrings.WR3)
                if (Math.random() < 1/++count) {
                   result = key;
                }
                for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
                  if(Math.random() < 1/++count2) {
                    output = QuarterbackReads.FirstReadStrings.WR3[result][value];
                  }
                console.log(output);
              }

              function seventhPassWR1() {
                var result;
                var output;
                var count = 0;
                var count2 = 0;
                for(var key in QuarterbackReads.FirstReadStrings.WR1)
                  if (Math.random() < 1/++count) {
                     result = key;
                  }
                  for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
                    if(Math.random() < 1/++count2) {
                      output = QuarterbackReads.FirstReadStrings.WR1[result][value];
                    }
                  console.log(output);
                }

            function seventhPassWR2() {
              var result;
              var output;
              var count = 0;
              var count2 = 0;
              for(var key in QuarterbackReads.FirstReadStrings.WR2)
                if (Math.random() < 1/++count) {
                   result = key;
                }
                for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
                  if(Math.random() < 1/++count2) {
                    output = QuarterbackReads.FirstReadStrings.WR2[result][value];
                  }
                console.log(output);
              }

          function seventhPassWR3() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR3)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR3[result][value];
                }
              console.log(output);
            }

          function eigthPassWR1() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR1)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR1[result][value];
                }
              console.log(output);
            }

            function eigthPassWR2() {
              var result;
              var output;
              var count = 0;
              var count2 = 0;
              for(var key in QuarterbackReads.FirstReadStrings.WR2)
                if (Math.random() < 1/++count) {
                   result = key;
                }
                for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
                  if(Math.random() < 1/++count2) {
                    output = QuarterbackReads.FirstReadStrings.WR2[result][value];
                  }
                console.log(output);
              }


          function eigthPassWR3() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR3)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR3[result][value];
                }
              console.log(output);
            }


          function ninthPassWR1() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR1)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR1[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR1[result][value];
                }
              console.log(output);
            }

          function ninthPassWR2() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR2)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR2[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR2[result][value];
                }
              console.log(output);
            }

          function ninthPassWR3() {
            var result;
            var output;
            var count = 0;
            var count2 = 0;
            for(var key in QuarterbackReads.FirstReadStrings.WR3)
              if (Math.random() < 1/++count) {
                 result = key;
              }
              for(var value in QuarterbackReads.FirstReadStrings.WR3[result]);
                if(Math.random() < 1/++count2) {
                  output = QuarterbackReads.FirstReadStrings.WR3[result][value];
                }
              console.log(output);
            }

firstPass();

initialRead = {
  Line is holding up
  BLITZ
}

var    firstReadWR1 = 0; 
var    firstReadWR2 = 0; 
var    firstReadWR3 = 0; 
   var firstReadGlobal = 0;
 var   secondReadWR1 = 0; 
 var   secondReadWR2 = 0; 
 var   secondReadWR3 = 0; 
    varsecondReadGlobal = 0;
var    thirdReadWR1 = 0; 
var    thirdReadWR2 = 0; 
var    thirdReadWR3 = 0; 
   var thirdReadGlobal = 0;
var    fouthReadWR1 = 0; 
var    fouthReadWR2 = 0; 
var    fouthReadWR3 = 0; 
   var fouthReadGlobal = 0;
var    fifthReadWR1 = 0; 
var    fifthReadWR2 = 0; 
var    fifthReadWR3 = 0; 
   var fifthReadGlobal = 0;
var    sixthReadWR1 = 0; 
var    sixthReadWR2 = 0; 
var    sixthReadWR3 = 0; 
   var sixthReadGlobal = 0;
  var  seventhReadWR1 = 0; 
  var  seventhReadWR2 = 0; 
  var  seventhReadWR3 = 0; 
    svareventhReadGlobal = 0;
var    eigthReadWR1 = 0; 
var    eigthReadWR2 = 0; 
var    eigthReadWR3 = 0; 
   var eigthReadGlobal = 0;
var    ninthReadWR1 = 0; 
var    ninthReadWR2 = 0; 
var    ninthReadWR3 = 0; 
   var ninthReadGlobal = 0; 

  $('.buttonSnap').on('click', function() {
    $('.defensiveSpan').text(Initial Read);
    firstReadWR1 = 0; 
    firstReadWR2 = 0; 
    firstReadWR3 = 0; 
    firstReadGlobal = 0;
    secondReadWR1 = 0; 
    secondReadWR2 = 0; 
    secondReadWR3 = 0; 
    secondReadGlobal = 0;
    thirdReadWR1 = 0; 
    thirdReadWR2 = 0; 
    thirdReadWR3 = 0; 
    thirdReadGlobal = 0;
    fouthReadWR1 = 0; 
    fouthReadWR2 = 0; 
    fouthReadWR3 = 0; 
    fouthReadGlobal = 0;
    fifthReadWR1 = 0; 
    fifthReadWR2 = 0; 
    fifthReadWR3 = 0; 
    fifthReadGlobal = 0;
    sixthReadWR1 = 0; 
    sixthReadWR2 = 0; 
    sixthReadWR3 = 0; 
    sixthReadGlobal = 0;
    seventhReadWR1 = 0; 
    seventhReadWR2 = 0; 
    seventhReadWR3 = 0; 
    seventhReadGlobal = 0;
    eigthReadWR1 = 0; 
    eigthReadWR2 = 0; 
    eigthReadWR3 = 0; 
    eigthReadGlobal = 0;
    ninthReadWR1 = 0; 
    ninthReadWR2 = 0; 
    ninthReadWR3 = 0; 
    ninthReadGlobal = 0; 
    clearInterval(playClockId);
    sackTimer = setTimeout(sacked,5000);
    $('.snap').addClass('placeHolderSnap');
    $('.snap').removeClass('snap');
    $('.buttonSnap').addClass('buttonSnapPlaceholder');
    $('.buttonSnap').removeClass('buttonSnap');
    $('.placeholderWRbuttons').addClass('WRbuttons');
    $('.placeholderWRbuttons').removeClass('placeholderWRbuttons');
    $('#playClock').removeClass('playClock');
    $('#playClock').addClass('hiddenPlayClock');
    $('.birdsEyeImg').addClass('placeholderBirdsEyeView');
    $('.placeholderBirdsEyeView').removeClass('birdsEyeImg');
    firstReadWR1 = setTimeout(    firstReadWR1; , 300); 
    firstReadWR2 = setTimeout(    firstReadWR2; , 300); 
    firstReadWR3 = setTimeout(    firstReadWR3; , 300); 
    firstReadGlobal = setTimeout(    firstReadGlobal;, 300);
    secondReadWR1 = setTimeout(    secondReadWR1; , 300); 
    secondReadWR2 = setTimeout(    secondReadWR2; , 300); 
    secondReadWR3 = setTimeout(    secondReadWR3; , 300); 
    secondReadGlobal = setTimeout(    secondReadGlobal;, 300);
    thirdReadWR1 = setTimeout(    thirdReadWR1; , 300); 
    thirdReadWR2 = setTimeout(    thirdReadWR2; , 300); 
    thirdReadWR3 = setTimeout(    thirdReadWR3; , 300); 
    thirdReadGlobal = setTimeout(    thirdReadGlobal;, 300);
    fouthReadWR1 = setTimeout(    fouthReadWR1; , 300); 
    fouthReadWR2 = setTimeout(    fouthReadWR2; , 300); 
    fouthReadWR3 = setTimeout(    fouthReadWR3; , 300); 
    fouthReadGlobal = setTimeout(    fouthReadGlobal;, 300);
    fifthReadWR1 = setTimeout(    fifthReadWR1; , 300); 
    fifthReadWR2 = setTimeout(    fifthReadWR2; , 300); 
    fifthReadWR3 = setTimeout(    fifthReadWR3; , 300); 
    fifthReadGlobal = setTimeout(    fifthReadGlobal;, 300);
    sixthReadWR1 = setTimeout(    sixthReadWR1; , 300); 
    sixthReadWR2 = setTimeout(    sixthReadWR2; , 300); 
    sixthReadWR3 = setTimeout(    sixthReadWR3; , 300); 
    sixthReadGlobal = setTimeout(    sixthReadGlobal;, 300);
    seventhReadWR1 = setTimeout(    seventhReadWR1; , 300); 
    seventhReadWR2 = setTimeout(    seventhReadWR2; , 300); 
    seventhReadWR3 = setTimeout(    seventhReadWR3; , 300); 
    seventhReadGlobal = setTimeout(    seventhReadGlobal;, 300);
    eigthReadWR1 = setTimeout(    eigthReadWR1; , 300); 
    eigthReadWR2 = setTimeout(    eigthReadWR2; , 300); 
    eigthReadWR3 = setTimeout(    eigthReadWR3; , 300); 
    eigthReadGlobal = setTimeout(    eigthReadGlobal;, 300);
    ninthReadWR1 = setTimeout(    ninthReadWR1; , 300); 
    ninthReadWR2 = setTimeout(    ninthReadWR2; , 300); 
    ninthReadWR3 = setTimeout(    ninthReadWR3; , 300); 
    ninthReadGlobal = setTimeout(    ninthReadGlobal; , 300);
  })