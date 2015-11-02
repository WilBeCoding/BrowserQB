$( document ).ready(function() {

  var postSnapReadOddsAdjustment =  function randomInt(){
                                      return Number((Math.random() * (18 - 10)) + 10);
                                    };
  var passingPlays = {
    Smash: {
      Cover2: {
        safetyReads: {
          safetyRead1: {
            value:'Two safeties high',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          safetyRead2: {
            value: 'Strong Safety is cheating forward',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          hitchRoute1: {
            value: "The CB drops back into coverage",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hitchRoute2: {
            value: "The FS is 15yds deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hitchRoute3: {
            value: "Mismatch with the LOLB",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          outsidePostRoute1: {
            value: "The FS is deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          outsidePostRoute2: {
            value: "CB is backpedaling",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          outsidePostRoute3: {
            value: "WR is double covered",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          crossRoute1: {
            value: "Nobody is following WR3",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          crossRoute2: {
            value: "The MLB steps in front of the route",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          crossRoute3: {
            value: 'The LOLB is in coverage',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          insidePostRoute1: {
            value:'The SS is deep',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute2: {
            value: 'The CB is backpedaling',
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          insidePostRoute3: {
            value:'WR is double covered',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      },
      Cover3: {
        safetyReads: {
          safetyRead1: {
            value:'Two safeties high',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'Strong Safety is cheating forward',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          hitchRoute1: {
            value: "The CB drops back into coverage",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hitchRoute2: {
            value: "The FS is 15yds deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hitchRoute3: {
            value: "Mismatch with the LOLB",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          outsidePostRoute1: {
            value: "The FS is deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          outsidePostRoute2: {
            value: "CB is backpedaling",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          outsidePostRoute3: {
            value: "WR is double covered",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          crossRoute1: {
            value: "Nobody is following WR3",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          crossRoute2: {
            value: "The MLB steps in front of the route",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          crossRoute3: {
            value: 'The LOLB is in coverage',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          insidePostRoute1: {
            value:'The SS is deep',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute2: {
            value: 'The CB is backpedaling',
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          insidePostRoute3: {
            value:'WR is double covered',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      },
      ManCoverage: {
        safetyReads: {
          safetyRead1: {
            value:'Two safeties high',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'Strong Safety is cheating forward',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          hitchRoute1: {
            value: "The CB drops back into coverage",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hitchRoute2: {
            value: "The FS is 15yds deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hitchRoute3: {
            value: "Mismatch with the LOLB",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          outsidePostRoute1: {
            value: "The FS is deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          outsidePostRoute2: {
            value: "CB is backpedaling",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          outsidePostRoute3: {
            value: "WR is double covered",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          crossRoute1: {
            value: "Nobody is following WR3",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          crossRoute2: {
            value: "The MLB steps in front of the route",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          crossRoute3: {
            value: 'The LOLB is in coverage',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          insidePostRoute1: {
            value:'The SS is deep',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute2: {
            value: 'The CB is backpedaling',
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          insidePostRoute3: {
            value:'WR is double covered',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      }
    },
    FourVerticals: {
      Cover2: {
        safetyReads: {
          safetyRead1: {
            value:'placeholder',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'placeholder',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          goRoute1: {
            value:"placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      },
      Cover3: {
        safetyReads: {
          safetyRead1: {
            value:'placeholder',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'placeholder',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          goRoute1: {
            value:"placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      },
      ManCoverage: {
        safetyReads: {
          safetyRead1: {
            value:'placeholder',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'placeholder',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          goRoute1: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          goRoute1: {
            value:"placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute3: {
            value: "placeholder",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      }
    },
    BobsYourUncle: {
      Cover2: {
        safetyReads: {
          safetyRead1: {
            value:'Two safeties high',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'Strong Safety is cheating forward',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          insidePostRoute1: {
            value: "The CB drops back into coverage",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute2: {
            value: "The FS is 15yds deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute3: {
            value: "Mismatch with the LOLB",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          hbFlatRoute1: {
            value: "The FS is deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          hbFlatRoute2: {
            value: "CB is backpedaling",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hbFlatRoute3: {
            value: "WR is double covered",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          texasRoute1: {
            value: "Nobody is following WR3",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          texasRoute2: {
            value: "The MLB steps in front of the route",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          texasRoute3: {
            value: 'The LOLB is in coverage',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          goRoute1: {
            value:'The SS is deep',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: 'The CB is backpedaling',
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute3: {
            value:'WR is double covered',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      },
      ManCoverage: {
        safetyReads: {
          safetyRead1: {
            value:'Two safeties high',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'Strong Safety is cheating forward',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          insidePostRoute1: {
            value: "The CB drops back into coverage",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute2: {
            value: "The FS is 15yds deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute3: {
            value: "Mismatch with the LOLB",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          hbFlatRoute1: {
            value: "The FS is deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          hbFlatRoute2: {
            value: "CB is backpedaling",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hbFlatRoute3: {
            value: "WR is double covered",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          texasRoute1: {
            value: "Nobody is following WR3",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          texasRoute2: {
            value: "The MLB steps in front of the route",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          texasRoute3: {
            value: 'The LOLB is in coverage',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          goRoute1: {
            value:'The SS is deep',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: 'The CB is backpedaling',
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute3: {
            value:'WR is double covered',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      },
      Cover3: {
        safetyReads: {
          safetyRead1: {
            value:'Two safeties high',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          },
          safetyRead2: {
            value: 'Strong Safety is cheating forward',
            isActive: true,
            odds: postSnapReadOddsAdjustment()
          }
        },
        oLineReads: {
          oLineStatus1: {
            value:'The line is holding their blocks',
            isActive: true,
            timeElement: false
          },
          oLineStatus2: {
            value: 'O-Line placeholder',
            isActive: true,
            timeElement: false,
          }
        },
        WR1: {
          insidePostRoute1: {
            value: "The CB drops back into coverage",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute2: {
            value: "The FS is 15yds deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          insidePostRoute3: {
            value: "Mismatch with the LOLB",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          }
        },
        WR2: {
          hbFlatRoute1: {
            value: "The FS is deep",
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          hbFlatRoute2: {
            value: "CB is backpedaling",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          hbFlatRoute3: {
            value: "WR is double covered",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR3: {
          texasRoute1: {
            value: "Nobody is following WR3",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          texasRoute2: {
            value: "The MLB steps in front of the route",
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          texasRoute3: {
            value: 'The LOLB is in coverage',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        },
        WR4: {
          goRoute1: {
            value:'The SS is deep',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          },
          goRoute2: {
            value: 'The CB is backpedaling',
            isActive: true,
            odds: postSnapReadOddsAdjustment(), 
          },
          goRoute3: {
            value:'WR is double covered',
            isActive: true,
            odds: postSnapReadOddsAdjustment(),
          }
        }
      }
    }
  }


  var passOutcomeStrings = {

    shortCompletion: {
      five: "Pass completed for a 5 yard gain",
      ten: "Pass completed for a 10 yard gain"
    },

    mediumCompletion: {
      fifteen: "Pass completed for a 15 yard gain",
      twenty: "Pass completed for a 20 yard gain"
    },

    longCompletion: {
      thirty: "Pass completed for a 40 yard gain",
      fourty: "Pass completed for a 50 yard gain"
    },

    touchdownCompletion: {
      touchdown: "Pass completed for a touchdown!"
    },

    incomplete: {
      tipped: "Incomplete Pass. Tipped by the defender",
      batted: 'Incomplete Pass. Batted down by the defender',
      dropped: 'Incomplete Pass. The WR dropped the ball'
    }
  }

  var defensiveCoverageImgs = {
        Cover2: {src:"../images/cover2.png"},
        Cover3: {src:"../images/cover3.png"},
        ManCoverage: ''
      }
  
  var manCoverages = {
    ManCoverageVsSmash: {src:"../images/ManVsSmash.jpg"} ,
    ManCoverageVsFourVertical: {src:"../images/manCoverage.png"},
    ManCoverageVsBobsYourUncle: {src:"../images/ManVsBob.jpg"} 
  }

  var WR1clicked = 0;
  var WR2clicked = 0;
  var WR3clicked = 0;
  var WR4clicked = 0;
  var checkGameStateReturnToDefaultTimeout;
  var prog1 = false;
  var prog2 = false;
  var prog3 = false;
  var prog4 = false;
  var prog5 = false;
  var defensivePlayImagez;
  var offensivePlay;
  var smashSelected = false;
  var fourVerticalsSelected = false;
  var bobsYourUncleSelected = false;
  var lost = false;
  var clearSackTimerBooleanTrigger = false;
  var timesWon = 0;
  var lost = false;
  var timesWonData = 0;
  var timesLostData = 0;
  var timesLost = 0;
  var wonGame = false;
  var checkIntervals;
  var checkState;
  var interceptionReturnToDefaultBreak = false;
  var sackedReturnToDefault = 0;
  var returnToSackDefaultEndSacks = 0;
  var blitzSackedTime = 0;
  var returnToDefaultEndSacks = 0;
  var downCount = 1;
  var yardLine = 20;
  var score = 0;
  var drive = 1;
  var ManDefense;
  var playClockId = 0;
  var display;
  var timerId = 0;
  var sackTimer = 0;
  var WR1OddsCount = 0;
  var WR2OddsCount = 0;
  var WR3OddsCount = 0;
  var WR4OddsCount = 0;
  var GlobalOddsCount = 0;
  var yardsToFirst = 10;
  var interception = 0;
  var pageSize = 1;
  var toBeSacked = false;
  var oLineTimeOut = 0;
  var offensiveLine;
  var manDefense = false;
  var finalRead = false;
  var progressionPageSize = 1;
  var offensiveLineBuckles = false;
  var list = document.querySelector('.defensiveSpan');
  var audio = document.getElementsByTagName("audio")[0];
  var initialWRodds =  function randomInt() {
                        return Number((Math.random() * (50 - 0)) + 0);
                      };  
  var wrTimeIncreaseOdds= function randomInt(){
                            return Number((Math.random() * (5 - 1)) + 1);
                          };
  function sackOddsInt() {
                          return Number((Math.random() * (100 - 0)) + 0);
                        };  

  function checkProgressionSelections(){
    if(WR1clicked === 3){
      $('.WR1submissionBtn').prop('disabled',true);
      console.log("Does this shit in wr1??")
    }
    if(WR2clicked === 3){
      $('.WR2submissionBtn').prop('disabled',true);
    }
    if(WR3clicked === 3){
      $('.WR3submissionBtn').prop('disabled',true);
    }
    if(WR4clicked === 3){
      $('.WR4submissionBtn').prop('disabled',true);
    }
  }

  function goodOffensiveLinePlay(){
    console.log("good offensive line play hits");
    oLineTimeOut = setTimeout(clearOlineSpan, 850);
    return $('.offensiveLineSpan').text('The offensive line is holding their blocks');
  }

  function badOffensiveLinePlay(){
    console.log("bad offensive line play hits");
     sackOdds+=10;
     offensiveLineBuckles = true;
     oLineTimeOut = setTimeout(clearOlineSpan, 850);
    return $('.offensiveLineSpan').text('The offensive line is buckling!');
  }

  function oLineBuckling(){
    console.log("olinebuckling hits");
    if(offensiveLineBuckles = true) {
      sackOdds+=10
    }
  }

  function sackTimeout() {
     return Number((Math.random() * (1500 - 800)) + 800);
  };  

  var showPage = function(page) {
    $('.howToPlayPage').hide();
    $('.howToPlayPage').each(function(n) {
        if(n >= pageSize * (page - 1) && n < pageSize * page)
          $(this).show();
    })
  }
  showPage(1)

  showProgressionPage = function(progressionPage) {
    $('.progressionPages').hide();
    $('.progressionPages').each(function(n) {
      if(n >= progressionPageSize * (progressionPage - 1) && n <progressionPageSize * progressionPage)
        $(this).show();
    })
  }
  showProgressionPage(1);

  PlayResults = {
    WR1initialOdds: initialWRodds(),
    WR2initialOdds: initialWRodds(),
    WR3initialOdds: initialWRodds(),
    WR4initialOdds: initialWRodds(),
    WR1timeIncreaseOdds: wrTimeIncreaseOdds(),
    WR2timeIncreaseOdds: wrTimeIncreaseOdds(),
    WR3timeIncreaseOdds: wrTimeIncreaseOdds(),
    WR4timeIncreaseOdds: wrTimeIncreaseOdds(),
    WR1oddsAdjustment: 0,
    WR2oddsAdjustment: 0,
    WR3oddsAdjustment: 0,
    WR4oddsAdjustment: 0,
    GlobalOddsAdjustment: 0,
    CurrentWR1Odds: 0,
    CurrentWR2Odds: 0,
    CurrentWR3Odds: 0,
    CurrentWR4Odds: 0,
  }

  function currentOdds(WRodds) {
    console.log(WRodds, '   ------------------- WR odds')
    // console.log(PlayResults)
    // console.log(PlayResults.CurrentWR1Odds +   "     WR1 odds");
    // console.log(PlayResults.CurrentWR2Odds +   "     WR2 odds");
    // console.log(PlayResults.CurrentWR3Odds +   "     WR3 odds");
    // console.log(PlayResults.CurrentWR2Odds + "                PlayResults.CurrentWR2Odds");
    // console.log(WR2oddsVar + "                 WR2oddsVar");
    var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(blitzSackedTime);
    clearTimeout(checkState);
    clearInterval(timerId);
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    // console.log(WRodds+     "        ----------- WR odds")
    if(WRodds < 5) {
      $('.defensiveSpan').text("Pass is intercepted!");
      $('.footballIMG').animate({'left': '22.2%'}, "fast");
      yardLine = 20;
      yardsToFirst = 10;
      drive++
      interceptionReturnToDefaultBreak = true;
    }
    if(WRodds >= 5 && WRodds < 25) {
      $('.defensiveSpan').text("Incomplete Pass");
    }
    if(WRodds >= 25 && WRodds < 50) {
      $('.defensiveSpan').text("Pass complete for an 8 yard gain!");
      $('.footballIMG').animate({'left': '+=7.6%'}, 'slow');
      yardLine+=8
      yardsToFirst-=8
    }
    if(WRodds >= 50 && WRodds < 70) {
      $('.defensiveSpan').text("Pass complete for a 15 yard gain!");
      $('.footballIMG').animate({'left': '+=12.4%'},'slow');
      yardLine += 15;
      yardsToFirst -=15
    }
    if(WRodds >= 70 && WRodds < 90) {
      $('.defensiveSpan').text("Pass complete for a 25 yard gain!");
      $('.footballIMG').animate({'left': '+=20.7%'}, 'slow');;
      yardLine += 25;
      yardsToFirst -= 25;        
    }
    if(WRodds > 90) {
      $('.footballIMG').animate({'left': '95.9%'}, 'fast');
      yardLine = 100;
    }
    var checkState = setTimeout(checkGameState,650);
    // console.log(JSON.stringify(PlayResults,null, 4));
  }


  function sacked(){
    // console.log("sacked function hits");
    downCount++;
    yardLine-= 7;
    yardsToFirst+=7;
    clearInterval(timerId);
    // sackedReturnToDefault = setTimeout(returnToDefault, 2850);
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=7%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    scoreboardUpdate();
    checkState = setTimeout(checkGameState, 1500);
    // console.log("checkstate hits in sacked function");
  }

  function checkOffensiveLine(){
    console.log(offensiveLine, ' --------- offensiveLine')
    $('.placeholderOffensiveLineSpan').addClass('offensiveLineSpan');
    $('.offensiveLineSpan').removeClass('placeholderOffensiveLineSpan');
    if(offensiveLine >= 50 && toBeSacked === false) {
      goodOffensiveLinePlay()
    }
    else if(offensiveLine < 50){
      badOffensiveLinePlay();
    }
  }

  function clearSackTimer() {
    // console.log("clearSackTimer Hits");
    clearSackTimerBooleanTrigger = true;
    clearTimeout(sackTimer);
    // console.log("How many times does clearSackTimer hit?")
    blitzSackedTime = setTimeout(blitzSacked, 3000);
  }

  function blitzSacked(){
    // console.log("blitzSacked hits")
    clearInterval(timerId);
    blitzSackedTime = 0;
    yardLine-= 10;
    yardsToFirst+= 10;
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=9.7%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    checkState = setTimeout(checkGameState, 850);
    // console.log("checkState hits in blitzSacked function");
  }

  function refresh() {
    location.reload();
  }

  function loser() {
    clearTimeout(checkGameStateReturnToDefaultTimeout);
    // console.log("lost function hits")
    $('.defensiveSpan').text("You Lost!");
    setTimeout(refresh, 1500);
  }

  function won() {
    var initials = document.getElementById("initials").value;
    $('.defensiveSpan').text("You Won!")
    setTimeout(refresh, 2200);
  }

  function touchdownFunction() {
    $('.footballIMG').animate({'left': '22.2%'}, "slow");
    yardLine = 20;
  }

  function clearOlineSpan(){
    $('.offensiveLineSpan').addClass('placeholderOffensiveLineSpan');
    $('.placeholderOffensiveLineSpan').removeClass('offensiveLineSpan');
  }

  function scoreboardUpdate() {
    if(downCount === 1) {
      $('.down').text("1st and " + yardsToFirst);
    }
    if(downCount === 2) {
      $('.down').text("2nd and " + yardsToFirst);
    }
    if(downCount === 3) {
      $('.down').text("3rd and " + yardsToFirst);
    }
    if(downCount === 4) {
      $('.down').text("4th and " + yardsToFirst);
    }
    if(score === 0){
      $('.score').text("Score " + score);
    }
    if(score === 7) {
      $('.score').text("Score " + score);
    }
    if(score === 14){
      $('.score').text("Score " + score)
    }
    if(drive === 1) {
      $('.drive').text("1st Drive")
    }
    if(drive === 2) {
      $('.drive').text("2nd Drive")
    }
    if(drive ===3) {
      $('.drive').text("Final Drive")
    }
  }

  function playClock(duration, display) {
      playClockId = 0;
      var timer = duration, minutes, seconds;
      playClockId = setInterval(function () {
                        minutes = parseInt(timer / 60, 10)
                        seconds = parseInt(timer % 60, 10);
                        minutes = minutes < 10 ? "0" + minutes : minutes;
                        seconds = seconds < 10 ? "0" + seconds : seconds;
                        display.text(seconds);
                        if (--timer < 0) {
                            timer = null;
                        }
                    }, 1000);
  }

  function checkPlayclock(){
    console.log("checkPlayClockRuns");
    if($('#playClock').innerHTML === '00'){
      console.log("checkplayclock hits inside the if statement");
      clearInterval(timerId)
      $('.defensiveSpan').text("Delay Of Game!")
      setTimeout(fifteenYardPenalty, 400);
    }
  }

  function fifteenYardPenalty(){
    $('.defensiveSpan').text("15 yard penalty!");
    yardLine -= 15;
    yardsToFirst -= 15;
    $('.footballIMG').animate({'left': '14.5%'}, 'fast');
  }

  function hideProgressionPage(){
    $(".progressionContainer").fadeOut("fast");
    $('.progressionMask').fadeOut("fast");
    $(".progressionHider").fadeOut("fast");
    $('.progressionDiv').fadeOut("fast");
    $('.progressionPages').hide();
  }

var firstRead;
var secondRead;
var thirdRead;
var fourthRead;
var fifthRead;

  $(".howToContainer").hide();
  $(".mask").hide();
  $(".hider").hide();
  $(".howToPlayDiv").hide();

  $('.progressionContainer').hide();
  $('.progressionMask').hide();
  $('.progressionHider').hide();
  $('.progressionDiv').hide();

  $('.progressionSubmissionBtn1').click(function() {
    $('.progressionPages').eq(0).hide(); 
    $('.progressionPages').eq(1).show();
    firstRead = this.value;
    console.log(this, '  ----------- this after selecting first read')
    if(this.value === 'WR1'){
      WR1clicked++
    }
    if(this.value === 'WR2'){
      WR2clicked++
    }
    if(this.value === 'WR3'){
      WR3clicked++
    }
    if(this.value === 'WR4'){
      WR4clicked++
    }
    checkProgressionSelections();
  })

  $('.progressionSubmissionBtn2').click(function() {
    $('.progressionPages').eq(1).hide(); 
    $('.progressionPages').eq(2).show();
    secondRead = this.value
    if(this.value === 'WR1'){
      WR1clicked++
    }
    if(this.value === 'WR2'){
      WR2clicked++
    }
    if(this.value === 'WR3'){
      WR3clicked++
    }
    if(this.value === 'WR4'){
      WR4clicked++
    }
    checkProgressionSelections();  
  })

  $('.progressionSubmissionBtn3').click(function() {
    $('.progressionPages').eq(2).hide(); 
    $('.progressionPages').eq(3).show(); 
    thirdRead = this.value;
    if(this.value === 'WR1'){
      WR1clicked++
    }
    if(this.value === 'WR2'){
      WR2clicked++
    }
    if(this.value === 'WR3'){
      WR3clicked++
    }
    if(this.value === 'WR4'){
      WR4clicked++
    }
    checkProgressionSelections();
  })

  $('.progressionSubmissionBtn4').click(function() {
    $('.progressionPages').eq(3).hide(); 
    $('.progressionPages').eq(4).show();
    fourthRead = this.value;
    if(this.value === 'WR1'){
      WR1clicked++
    }
    if(this.value === 'WR2'){
      WR2clicked++
    }
    if(this.value === 'WR3'){
      WR3clicked++
    }
    if(this.value === 'WR4'){
      WR4clicked++
    }
    checkProgressionSelections();
  })

  $('.progressionSubmissionBtn5').click(function() {
    fifthRead = this.value;
    hideProgressionPage();
  })


  function progressionPaginate(){
    $('.progressionContainer').fadeIn('fast');
    $('.progressionMask').fadeIn('fast');
    $('.progressionHider').fadeIn('fast');
    $('.progressionDiv').fadeIn('fast');
    $('.progressionPages').eq(0).show()
  }

  $(".howToPlayButton").click(function () {
    $(".howToContainer").fadeIn("slow");
    $('.mask').fadeIn("slow");
    $(".hider").fadeIn("slow");
    $('.howToPlayDiv').fadeIn("slow");
    $('.pages').eq(0).show()
    $('.topLeft').css('z-index', '-1');
    $('.topRight').css('z-index', '-1');
  });


  $('.nextPage').eq(0).click(function(){
    $('.pages').eq(0).hide();
    $('.pages').eq(1).show();
  })
  $('.nextPage').eq(1).click(function(){
    $('.pages').eq(1).hide();
    $('.pages').eq(2).show();
  })
  $('.nextPage').eq(2).click(function(){
    $('.pages').eq(2).hide();
    $('.pages').eq(3).show();
  })
  $('.nextPage').eq(3).click(function(){
    $('.pages').eq(3).hide();
    $('.pages').eq(4).show();
  })
  $('.nextPage').eq(4).click(function(){
    $('.pages').eq(4).hide();
    $('.pages').eq(5).show();
  })
  $('.nextPage').eq(5).click(function(){
    $('.pages').eq(5).hide();
    $('.pages').eq(6).show();
  })
  $('.nextPage').eq(6).click(function(){
    $('.pages').eq(6).hide();
    $('.pages').eq(7).show();
  })
  $('.nextPage').eq(7).click(function(){
    $('.pages').eq(7).hide();
    $('.pages').eq(8).show();
  })
  $('.nextPage').eq(8).click(function(){
    $('.pages').eq(8).hide();
    $('.pages').eq(9).show();
  })
  // BREAK
  $('.lastPage').eq(0).click(function(){
    $('.pages').eq(1).hide();
    $('.pages').eq(0).show();
  })

  $('.lastPage').eq(1).click(function(){
    $('.pages').eq(2).hide();
    $('.pages').eq(1).show();
  })

  $('.lastPage').eq(2).click(function(){
    $('.pages').eq(3).hide();
    $('.pages').eq(2).show();
  })

  $('.lastPage').eq(3).click(function(){
    $('.pages').eq(4).hide();
    $('.pages').eq(3).show();
  })
  $('.lastPage').eq(4).click(function(){
    $('.pages').eq(5).hide();
    $('.pages').eq(4).show();
  })
  $('.lastPage').eq(5).click(function(){
    $('.pages').eq(6).hide();
    $('.pages').eq(5).show();
  })
  $('.lastPage').eq(6).click(function(){
    $('.pages').eq(7).hide();
    $('.pages').eq(6).show();
  })
  $('.lastPage').eq(7).click(function(){
    $('.pages').eq(8).hide();
    $('.pages').eq(7).show();
  })
  $('.lastPage').eq(8).click(function(){
    $('.pages').eq(9).hide();
    $('.pages').eq(8).show();
  })
  $('.lastPage').eq(9).click(function(){
    $('.pages').eq(10).hide();
    $('.pages').eq(9).show();
  })
  $('.lastPage').eq(11).click(function(){
    $('.pages').eq(12).hide();
    $('.pages').eq(11).show();
  })

  $(".closeHowToButton").click(function () {
    $(".howToContainer").fadeOut("slow");
    $('.mask').fadeOut("slow");
    $(".hider").fadeOut("slow");
    $('.howToPlayDiv').fadeOut("slow");
    $('.pages').hide();
    $('.topLeft').css('z-index', '0');
    $('.topRight').css('z-index', '0');
  });

  function validate(){
      if ($('#initials').val().length   >   0) {
          $("input[type=submit]").prop("disabled", false);
      }
      else {
          $("input[type=submit]").prop("disabled", true);
      }
  }

  $( "#initials" ).on('keyup', function() {
    var initials = document.getElementById("initials").value;
    if(initials.length > 3) {
      $('.startGameBtn').prop('disabled', false);
      if(event.keyCode == 13){
          $(".startGameBtn").click();
      }
    }
      $(document).unbind('keypress');
  });

  $('.startGameBtn').on('click', function() {
    if ($('header').width() < 481){
      $("label").css('margin-left', '70%');
      $('.field').css('-webkit-filter','none'); 
    }
    var initials = document.getElementById("initials").value;
    $('.pregame').addClass('placeholderPregame');
    $('.placeholderPregame').removeClass('pregame');
    $('.topLeft').css('margin-right', 0);
    $('.placeholderTable').addClass('table');
    $('.table').removeClass('placeholderTable');
    $('.placeHolderTopRight').addClass('topRight');
    $('.placeHolderTopLeft').addClass('topLeft');
    $.get("/data/"+ $('#initials').val(), function( data ) {
      for(var i = 0; i < data.length; i++) {
        if(data[i]['user'].initials === $('#initials').val()) {
          data[i]['user'].timesLost = data[i]['user'].timesLost;
          timesLostData = data[i]['user'].timesLost;
        }
        // May need an else statement here for first time users
      }
      $.ajax({
          type: 'POST',
          url: "/",
          data: {initials: initials},
          success: function(req, res, data) {
            // May want some code here. Not sure why. CarpeYolo
          }
      })
    })
    $.get( "/data/"+ $('#initials').val(), function( data ) {
      for(var i = 0; i < data.length; i++) {
        if(data[i]['user'].initials === $('#initials').val()) {
        }
      }
      $( ".record" ).text(timesWon + " - " + timesLost);
    }, "json" );
  })

  $('.smashImg').on('click', function() {
    offensivePlay = 'Smash';
    smashSelected = true;
    playClockId = 0;
    var thirtySeconds = 30;
    var display = $('#playClock');
    playClock(thirtySeconds, display);
    $('.topRight').addClass('placeHolderTopRight');
    $('.topLeft').addClass('placeHolderTopLeft');
    $('.table').addClass('placeholderTable');
    $('.table').removeClass('table')
    $('.placeHolderTopRight').removeClass('topRight');
    $('.placeHolderTopLeft').removeClass('topLeft');
    $('.placeholderButtons').addClass('buttons');
    $('.buttons').removeClass('placeholderButtons');
    $('.placeHolderSnap').addClass('snap');
    $('.snap').removeClass('placeHolderSnap');
    $('.placeholderBirdsEyeView').addClass('birdsEyeImg');
    $('.birdsEyeImg').removeClass('placeholderBirdsEyeView');
    $('.buttons').css('background', 'white');
    checkForManDefense();
    checkingThePlayClockTimeout = setTimeout(checkPlayclock, 33000);
    progressionPaginate();
  });

  $('.fourVerticals').on('click', function() {
    offensivePlay = 'FourVerticals';
    fourVerticalsSelected = true;
    playClockId = 0;
    var thirtySeconds = 30;
    var display = $('#playClock');
    playClock(thirtySeconds, display);
    $('.topRight').addClass('placeHolderTopRight');
    $('.topLeft').addClass('placeHolderTopLeft');
    $('.table').addClass('placeholderTable');
    $('.table').removeClass('table')
    $('.placeHolderTopRight').removeClass('topRight');
    $('.placeHolderTopLeft').removeClass('topLeft');
    $('.placeholderButtons').addClass('buttons');
    $('.buttons').removeClass('placeholderButtons');
    $('.placeHolderSnap').addClass('snap');
    $('.snap').removeClass('placeHolderSnap');
    $('.placeholderBirdsEyeView').addClass('birdsEyeImg');
    $('.birdsEyeImg').removeClass('placeholderBirdsEyeView');
    $('.buttons').css('background', 'white');
    checkForManDefense();
    progressionPaginate();
    checkingThePlayClockTimeout = setTimeout(checkPlayclock, 4500);
  });

  $('.BobsYourUncle').on('click', function() {
    console.log("bob gets clicked");
    bobsYourUncleSelected = true;
    playClockId = 0;
    var thirtySeconds = 30;
    var display = $('#playClock');
    playClock(thirtySeconds, display);
    $('.topRight').addClass('placeHolderTopRight');
    $('.topLeft').addClass('placeHolderTopLeft');
    $('.table').addClass('placeholderTable');
    $('.table').removeClass('table')
    $('.placeHolderTopRight').removeClass('topRight');
    $('.placeHolderTopLeft').removeClass('topLeft');
    $('.placeholderButtons').addClass('buttons');
    $('.buttons').removeClass('placeholderButtons');
    $('.placeHolderSnap').addClass('snap');
    $('.snap').removeClass('placeHolderSnap');
    $('.placeholderBirdsEyeView').addClass('birdsEyeImg');
    $('.birdsEyeImg').removeClass('placeholderBirdsEyeView');
    $('.buttons').css('background', 'white');
    checkForManDefense();
    checkingThePlayClockTimeout = setTimeout(checkPlayclock, 4500);
    progressionPaginate();
  });

  $('.buttonSnap').on('click', function() {
    // $('.defensiveSpan').text(firstRead());
    hideProgressionPage();
    clearInterval(playClockId);
    clearTimeout(checkingThePlayClockTimeout);
    // sackTimer = setTimeout(sacked,5000);
    $('.progressionChoice').addClass('placeholderProgressionChoice'); 
    $('.placholderProgressionChoice').removeClass('progressionChoice'); 
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
    timerId = window.setInterval(function(){
      $('.defensiveSpan').text(displayReads());
    }, 850);
  })

  function getRndmDefensivePlay() {
    // console.log("interval pass strings is hitting")
                              var result;
                              var output;
                              var count = 0;
                              for(var prop in defensiveCoverageImgs)
                                  if (Math.random() < 1/++count) {
                                     result = prop;
                                  }
                          defensivePlay = result;
                          defensivePlayImagez = result;
                          console.log(defensivePlay, ' --------------------------------- defensivePlay inside getRndmDefensivePlay')
                          return result
            }
  function checkForManDefense() {
    console.log(defensivePlayImagez, 'defensiveplay inside check for man defense');
    console.log(smashSelected, ' smash selected');
    console.log(fourVerticalsSelected, ' four verts selected');
    console.log(bobsYourUncleSelected, ' bobs your uncle selected');
    // console.log('check for man defense hits');
    if(defensivePlayImagez === 'ManCoverage' && smashSelected === true) {
      // console.log('Man Vs SMash Hits');
      // console.log(manCoverages.ManCoverageVsSmash.src)
      $('.birdsEyeImg').attr('src', manCoverages.ManCoverageVsSmash.src);
    }
    if(defensivePlayImagez === 'ManCoverage' && fourVerticalsSelected === true) {
      $('.birdsEyeImg').attr('src', 'https://media.giphy.com/media/PkX6O4vfRwjao/giphy.gif')
      // console.log('ManVsFourVertsHits');
    }
    if(defensivePlayImagez === 'ManCoverage' && bobsYourUncleSelected === true) {
      console.log('bobs your uncle hits inside img function')
      $('.birdsEyeImg').attr('src',manCoverages.ManCoverageVsBobsYourUncle.src)
    }
  }

  function getRndmDefensivePlayImg() {
      var imageSrc = defensiveCoverageImgs[getRndmDefensivePlay()].src
      $('.birdsEyeImg').attr('src', imageSrc)
      console.log(imageSrc);
      console.log($('.birdsEyeImg').attr('src', imageSrc));
      // console.log(defensivePlay, '-------- DefensivePlay inside getRndmDefensivePlayImg')
  }

  $(window).load(function() {
    validate();
    $('#initials').change(validate);
    // $('.down').text("1st and " + yardsToFirst);
    // $('.score').text(score);
    getRndmDefensivePlayImg();
    scoreboardUpdate()
  })

  function returnToDefault () {
    prog1 = false;
    prog2 = false;
    prog3 = false;
    prog4 = false;
    // console.log("return to default function hits");
    blitz = 0;
    clearSackTimerBooleanTrigger = false;
    if(interceptionReturnToDefaultBreak === true) {
      downCount =1;
      $('.buttons').css('background', 'url("http://cdn.fansided.com/wp-content/blogs.dir/276/files/2014/12/gruden.jpg")');
    };
    interceptionReturnToDefaultBreak = false;
    if(yardsToFirst <= 0) {
      downCount = 1;
      yardsToFirst = 10;
    }
    $('.yards').text(yardsToFirst);
    $('.down').text(downCount);
    scoreboardUpdate();
    interception = 0;
    PlayResults.WR1initialOdds = initialWRodds();
    PlayResults.WR2initialOdds = initialWRodds();
    PlayResults.WR3initialOdds = initialWRodds();
    PlayResults.GlobalOddsAdj = 0;
    PlayResults.CurrentWR1Odds = 0; 
    PlayResults.CurrentWR2Odds = 0; 
    PlayResults.CurrentWR3Odds = 0;
    PlayResults.WR1timeIncreaseOdds = wrTimeIncreaseOdds(); 
    PlayResults.WR2timeIncreaseOdds = wrTimeIncreaseOdds(); 
    PlayResults.WR3timeIncreaseOdds = wrTimeIncreaseOdds(); 
    PlayResults.GlobalOddsAdjustment = 0;
    WR1OddsCount = 0;
    WR2OddsCount = 0;
    WR3OddsCount = 0;
    GlobalOddsCount = 0;
    finalRead = false;
    smashSelected = false;
    fourVerticalsSelected = false;
    bobsYourUncle = false;
    WR1clicked = 0;
    WR2clicked = 0;
    WR3clicked = 0;
    WR4clicked = 0;
    $('.WR1submissionBtn').prop('disabled',false);
    $('.WR2submissionBtn').prop('disabled',false);
    $('.WR3submissionBtn').prop('disabled',false);
    $('.WR4submissionBtn').prop('disabled',false);
    getRndmDefensivePlayImg();
    $('.placeholderProgressionChoice').addClass('progressionChoice'); 
    $('.progressionChoice').removeClass('placeholderProgressionChoice'); 
    $('.buttons').css("margin-top", "25px");
    $('.placeHolderTopRight').addClass('topRight');
    $('.placeHolderTopLeft').addClass('topLeft');
    $('.topRight').removeClass('placeHolderTopRight');
    $('.topLeft').removeClass('placeHolderTopLeft');
    $('.buttons').addClass('placeholderButtons');
    $('.placeholderButtons').removeClass('buttons');
    $('.snap').addClass('placeHoldersnap');
    $('.placeholderButtons').removeClass('snap');
    $('.birdsEyeImg').addClass('placeholderBirdsEyeView');
    $('.placeholderBirdsEyeView').removeClass('birdsEyeImg');
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.placeholderWRbuttons').removeClass('WRbuttons');
    $('.placeHolderSnap').addClass('snap');
    $('.snap').removeClass('placeHoldersnap');
    $('.buttonSnapPlaceholder').addClass('buttonSnap');
    $('.buttonSnap').removeClass('buttonSnapPlaceholder');
    $('.defensiveSpan').text(" ");
    $('#playClock').removeClass('hiddenPlayClock');
    $('#playClock').addClass('playClock');
    $('#playClock').text(" ");
    $('.placeholderTable').addClass('table');
    $('.table').removeClass('placeholderTable');
    setIsActiveTrue();
  }

  function getRndmQBRead(WR) {
    // console.log(offensivePlay    +   "    offensive play");
    // console.log(defensivePlay  +   "    defensive play");
    // console.log(WR +    "   WR" );
                              var result;
                              var output;
                              var count = 0;
                              // console.log(passingPlays[offensivePlay])
                              for(var prop in passingPlays[offensivePlay][defensivePlay][WR])
                                  if (Math.random() < 1/++count) {
                                     output = prop
                                     // console.log(prop +   "      prop")
                                  }
                                return passingPlays[offensivePlay][defensivePlay][WR][output]
                              }

  $('.wr1').on('click', function() {
    clearTimeout(oLineTimeOut);
    clearOlineSpan();
    calculateOdds();
    setTimeout(currentOdds(PlayResults.CurrentWR1Odds, 200));
    console.log(PlayResults);
    clearInterval(timerId)
  })

  $('.wr2').on('click', function() {  
    clearTimeout(oLineTimeOut);
    clearOlineSpan();
    calculateOdds();
    setTimeout(currentOdds(PlayResults.CurrentWR2Odds, 200));
    console.log(PlayResults);
    clearInterval(timerId)
  })  

  $('.wr3').on('click', function() {
    clearTimeout(oLineTimeOut);
    clearOlineSpan();
    calculateOdds();
    setTimeout(currentOdds(PlayResults.CurrentWR3Odds));
    console.log(PlayResults);
    clearInterval(timerId)
  })

  $('.wr4').on('click', function() {
    clearTimeout(oLineTimeOut);
    clearOlineSpan();
    calculateOdds();
    setTimeout(currentOdds(PlayResults.CurrentWR4Odds, 200));
    console.log(PlayResults);
    clearInterval(timerId)
  })

  function calculateOdds(){
    PlayResults.CurrentWR1Odds = PlayResults.WR1initialOdds + PlayResults.WR1timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR1oddsAdjustment;
    PlayResults.CurrentWR2Odds = PlayResults.WR2initialOdds + PlayResults.WR2timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR2oddsAdjustment;
    PlayResults.CurrentWR3Odds = PlayResults.WR3initialOdds + PlayResults.WR3timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR3oddsAdjustment;
    PlayResults.CurrentWR4Odds = PlayResults.WR4initialOdds + PlayResults.WR4timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR4oddsAdjustment;

    console.log(PlayResults, ' -------------PlayResults at the end of calculateOdds function');
  }

  function displayReads(){
    offensiveLine = sackOddsInt();
    sackOdds = sackOddsInt();
    if(sackOdds <= 15){
      toBeSacked = true;
    }
    // console.log(defensivePlay);
    console.log("display reads function is running");
    if(firstRead === 'WR1' && prog1 === false) {
      console.log(" get read hits in prog1 but not in function");
      prog1 = true;
      (function getRead(){
        var subObject = getRndmQBRead('WR1');
        if(subObject.isActive) {
        console.log("getRead hits inside prog1 WR1");
          subObject.isActive = false;
          PlayResults.WR1oddsAdjustment += subObject.odds
          return $('.defensiveSpan').text(subObject.value);
        }else{
          getRead();
        }
      })();
    }
    else if(firstRead === 'WR2' && prog1 === false) {
        prog1 = true;
        (function getRead(){
          console.log("getRead hits inside prog1 WR2");
          var subObject = getRndmQBRead('WR2');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR2oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(firstRead === 'WR3' && prog1 === false) {
        prog1 = true;
        (function getRead(){
          console.log("getRead hits inside prog1 WR3");
          var subObject = getRndmQBRead('WR3');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR3oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(firstRead === 'WR4'&& prog1 === false) {
        prog1 = true;
        (function getRead(){
          console.log("getRead hits inside prog1 WR4");
          var subObject = getRndmQBRead('WR4');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR4oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(secondRead === 'WR1' && prog2 === false) {
        prog2 = true;
        (function getRead(){
          console.log("getRead hits inside prog2 WR1");
          var subObject = getRndmQBRead('WR1');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR1oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(secondRead === 'WR2' && prog2 === false) {
        prog2 = true;
        (function getRead(){
          console.log("getRead hits inside prog2 WR2");
          var subObject = getRndmQBRead('WR2');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR2oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(secondRead === 'WR3' && prog2 === false) {
        prog2 = true;
        (function getRead(){
          console.log("getRead hits inside prog2 WR3");
          var subObject = getRndmQBRead('WR3');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR3oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(secondRead === 'WR4' && prog2 === false) {
        prog2 = true;
        (function getRead(){
          console.log("getRead hits inside prog2 WR4");
          var subObject = getRndmQBRead('WR4');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR4oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(thirdRead === 'WR1' && prog3 === false) {
      checkOffensiveLine()
      if(sackOdds <= 15){
        sacked();
        return
      }
        prog3 = true;
        (function getRead(){
          console.log("getRead hits inside prog3 WR1");
          var subObject = getRndmQBRead('WR1');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR1oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(thirdRead === 'WR2' && prog3 === false) {
      checkOffensiveLine()
      if(sackOdds <= 15){
        sacked();
        return
      }
        prog3 = true;
        (function getRead(){
          console.log("getRead hits inside prog3 WR2");
          var subObject = getRndmQBRead('WR2');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR2oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(thirdRead === 'WR3' && prog3 === false) {
      checkOffensiveLine()
      if(sackOdds <= 15){
        sacked();
        return
      }
        prog3 = true;
        (function getRead(){
          console.log("getRead hits inside prog3 WR3");
          var subObject = getRndmQBRead('WR3');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR3oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(thirdRead === 'WR4' && prog3 === false) {
      checkOffensiveLine()
      if(sackOdds <= 15){
        sacked();
        return
      }
        prog3 = true;
        (function getRead(){
          console.log("getRead hits inside prog3 WR4");
          var subObject = getRndmQBRead('WR4');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR4oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
      else if(fourthRead === 'WR1' && prog4 === false) {
        debugger;
        oLineBuckling();
        oLineBuckling()
        if(sackOdds <= 30){
          sacked();
          return
        }
          prog4 = true;
          (function getRead(){
            console.log("getRead hits inside prog4 WR1");
            var subObject = getRndmQBRead('WR1');
            if(subObject.isActive) {
              subObject.isActive = false;
              PlayResults.WR1oddsAdjustment += subObject.odds
              return $('.defensiveSpan').text(subObject.value);
            }else{
              getRead();
            }
          })();
        }
    else if(fourthRead === 'WR2' && prog4 === false) {
      oLineBuckling();
      if(sackOdds <= 30){
        sacked();
        return
      }
      prog4 = true;
        (function getRead(){
          console.log("getRead hits inside prog4 WR2");
          var subObject = getRndmQBRead('WR2');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR2oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
        prog4 = true;
            getRead();
          }
        })();
      }
    else if(fourthRead === 'WR3' && prog4 === false) {
      oLineBuckling();
      if(sackOdds <= 30){
        sacked();
        return
      }
        (function getRead(){
          console.log("getRead hits inside prog4 WR3");
          var subObject = getRndmQBRead('WR3');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR3oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
        prog4 = true;
            getRead();
          }
        })();
      }
    else if(fourthRead === 'WR4' && prog4 === false) {
      oLineBuckling();
      if(sackOdds <= 30){
        sacked();
        return
      }
        (function getRead(){
          console.log("getRead hits inside prog4 WR4");
          var subObject = getRndmQBRead('WR4');
          if(subObject.isActive) {
            console.log("if statement hits in FOURTH READ PROG4")
            subObject.isActive = false;
            PlayResults.WR4oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(fifthRead === 'WR1' && prog5 === false) {
      oLineBuckling();
      finalRead = true;
      if(sackOdds <= 45){
        sacked();
        return
      }
            prog5 = true;
        (function getRead(){
          console.log("getRead hits inside prog5 wr1");
          var subObject = getRndmQBRead('WR1');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR1oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(fifthRead === 'WR2' && prog5 === false) {
      oLineBuckling();
      finalRead = true;
      if(sackOdds <= 45){
        sacked();
        return
      }
            prog5 = true;
        (function getRead(){
          console.log("getRead hits inside prog5 WR2");
          var subObject = getRndmQBRead('WR2');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR2oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(fifthRead === 'WR3' && prog5 === false) {
      oLineBuckling();
      finalRead = true;
      if(sackOdds <= 45){
        sacked();
        return
      }
            prog5 = true;
        (function getRead(){
          console.log("getRead hits inside prog5 WR3");
          var subObject = getRndmQBRead('WR3');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR3oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
    else if(fifthRead === 'WR4' && prog5 === false) {
      oLineBuckling();
      finalRead = true;
      if(sackOdds <= 45){
        sacked();
        return
      }
            prog5 = true;
        (function getRead(){
          console.log("getRead hits inside prog5 WR4");
          var subObject = getRndmQBRead('WR4');
          if(subObject.isActive) {
            subObject.isActive = false;
            PlayResults.WR4oddsAdjustment += subObject.odds
            return $('.defensiveSpan').text(subObject.value);
          }else{
            getRead();
          }
        })();
      }
      if(finalRead === true) {
        setTimeout(sackOdds, sackTimeout())
      }
  }

  function setIsActiveTrue(){
      for(prop in passingPlays)
        for(subProp in passingPlays[prop])
            for(subSubProp in passingPlays[prop][subProp])
                for(subSubSubProp in passingPlays[prop][subProp][subSubProp])
                  passingPlays[prop][subProp][subSubProp][subSubSubProp].isActive = true
                    return
  }

    function checkGameState() {
      downCount++
      if(yardLine >= '100') {
        $('.defensiveSpan').text("Touchdown!")
        $('.buttons').css('background', 'url("http://netstorage.discovery.com/feeds/brightcove/asset-stills/apl/135966413090713964101001197_Puppy_Bowl_IX_BIGPLAY_4_Lift_10.jpg")');
        score += 7;
        drive++;
        downCount = 1;
        setTimeout(touchdownFunction, 1500);
      }
      // console.log(drive + "Drive Top of game state function");
      // console.log(score  +  " this is the score at top of gamestate function");
      else if(drive === 4 && score !== 14 || drive === 3 && score !==7) {
        // console.log("Lose Condition Hits")
        clearTimeout(sackedReturnToDefault);
        clearInterval(timerId);
        clearTimeout(sackTimer);
        clearTimeout(returnToSackDefaultEndSacks);
        lost = true;
      }
      if(score === 14) {
        // console.log("Win condition hit");
        wonGame = true;
        clearTimeout(sackedReturnToDefault);
        clearInterval(timerId);
        clearTimeout(sackTimer);
        clearTimeout(returnToSackDefaultEndSacks);
      }
      else if(downCount === 5 && yardLine < 100 && yardsToFirst) {
        drive++;
        downCount = 1;
        yardsToFirst = 10;
          setTimeout(returnToDefault,2000)
        // console.log("turnover condition hit");
        clearTimeout(sackedReturnToDefault);
        clearInterval(timerId);
        clearTimeout(sackTimer);
        clearTimeout(returnToSackDefaultEndSacks);
        $('.defensiveSpan').text("TURNOVER ON DOWNS!");
        $('.footballIMG').animate({'left': '22.2%'}, "fast");
      }
      if(lost === true) {
        // console.log("lost true hits")
        setTimeout(loser, 850);
      }
      if(wonGame === true) {
        setTimeout(won, 650)
      }else{    
      checkGameStateReturnToDefaultTimeout = setTimeout(returnToDefault, 2500);
      }
      // console.log("Game State Function Hits")
      // console.log(drive + "Drive at Bottom of game state function");
    }
  
});