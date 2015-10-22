$( document ).ready(function() {

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

     Blitz: {
      DefensiveEnd: "The Defensive End is barreling towards you!",
      Donald: "Dammit Donald!",
      Blitz: "All Out Blitz!",
      Cb: "Right Cornerback Blitz!",
      Rolb: "The ROLB is blitzing!",
      Lolb: "The LOLB is blitzing!",
      Cb: "Left Cornerback Blitz!",
      MLB: "The MLB is blitzing!",
      Safety: "Safety Blitz!",
     }
  }

  var passingPlays = {
    Smash: {
      Cover2: {
        safetyReads: {
          safetyRead1: 'Two safeties high',
          safetyRead2: 'Strong Safety is cheating forward'
        },
        oLineReads: {
          oLineStatus1: 'The line is holding their blocks',
          oLineStatus2: 'O-Line placeholder'
        },
        hitchRouteReads: {
          hitchRoute1: "The CB drops back into coverage",
          hitchRoute2: "The FS is 15yds deep",
          hitchRoute3: "Mismatch with the LOLB"
        },
        outsidePostRouteReads: {
          outsidePostRoute1: "The FS is deep",
          outsidePostRoute2: "CB is backpedaling",
          outsidePostRoute3: "WR is double covered"
        },
        crossRouteReads: {
          crossRoute1: "Nobody is following WR3",
          crossRoute2: "The MLB steps in front of the route",
          crossRoute3: 'The LOLB is in coverage',
        },
        insidePostRouteReads: {
          insidePostRoute1: 'The SS is deep',
          insidePostRoute2: 'The CB is backpedaling',
          insidePostRoute3: 'WR is double covered'
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
        Cover2: {src:"../images/cover2.jpg"},
        Cover3: {src:"../images/cover3.png"},
        ManCoverage: {src:"../images/manCoverage.png"}
      }

  var smashSelected = false;
  var fourVerticalsSelected = false;
  var bobsYourUncleSelected = false;
  var lost = false;
  var clearSackTimerBooleanTrigger = false;
  var oddsDemoInterval = 0;
  var timesWon = 0;
  var timesWonData = 0;
  var timesLostData = 0;
  var timesLost = 0;
  var wonGame = false;
  var checkIntervals;
  var checkState;
  var interceptionReturnToDefaultBreak = false;
  var sackedReturnToDefault = 0;
  var returnToSackDefaultEndSacks = 0;
  var wrReturnToDefault = 0;
  var blitzSackedTime = 0;
  var returnToDefaultEndSacks = 0;
  var downCount = 1;
  var yardLine = 20;
  var score = 0;
  var drive = 1;
  var playClockId = 0;
  var display;
  var timerId = 0;
  var sackTimer = 0;
  var WR1OddsCount = 0;
  var WR2OddsCount = 0;
  var WR3OddsCount = 0;
  var GlobalOddsCount = 0;
  var yardsToFirst = 10;
  var interception = 0;
  var pageSize = 1;
  var list = document.querySelector('.defensiveSpan');
  var audio = document.getElementsByTagName("audio")[0];
  var initialWRodds =  function randomInt() {
                        return Number((Math.random() * (50 - 0)) + 0);
                      };  
  var wrTimeIncreaseOdds= function randomInt(){
                            return Number((Math.random() * (5 - 1)) + 1);
                          };

  var postSnapReadOddsAdjustment =  function randomInt(){
                                      return Number((Math.random() * (18 - 10)) + 10);
                                    };
  var showPage = function(page) {
    $('.howToPlayPage').hide();
    $('.howToPlayPage').each(function(n) {
        if(n >= pageSize * (page - 1) && n < pageSize * page)
          $(this).show();
    })
  }
  showPage(1)

  PlayResults = {
    WR1initialOdds: initialWRodds(),
    WR2initialOdds: initialWRodds(),
    WR3initialOdds: initialWRodds(),
    WR1timeIncreaseOdds: wrTimeIncreaseOdds(),
    WR2timeIncreaseOdds: wrTimeIncreaseOdds(),
    WR3timeIncreaseOdds: wrTimeIncreaseOdds(),
    WR1oddsAdjustment: 0,
    WR2oddsAdjustment: 0,
    WR3oddsAdjustment: 0,
    GlobalOddsAdjustment: 0,
    CurrentWR1Odds: 0,
    CurrentWR2Odds: 0,
    CurrentWR3Odds: 0
  }

  function currentOdds(WRodds) {
    // console.log(PlayResults)
    PlayResults.CurrentWR1Odds = PlayResults.WR1initialOdds + PlayResults.WR1timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR1oddsAdjustment;
    PlayResults.CurrentWR2Odds = PlayResults.WR2initialOdds + PlayResults.WR2timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR2oddsAdjustment;
    PlayResults.CurrentWR3Odds = PlayResults.WR3initialOdds + PlayResults.WR3timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR3oddsAdjustment;
    // console.log(PlayResults.CurrentWR1Odds +   "     WR1 odds");
    // console.log(PlayResults.CurrentWR2Odds +   "     WR2 odds");
    // console.log(PlayResults.CurrentWR3Odds +   "     WR3 odds");


    // console.log(PlayResults.CurrentWR2Odds + "                PlayResults.CurrentWR2Odds");
    // console.log(WR2oddsVar + "                 WR2oddsVar");
    var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(blitzSackedTime)
    clearTimeout(checkState);
    clearInterval(timerId);
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    if(WRodds < 5) {
      $('.defensiveSpan').text("Pass is intercepeted!");
      $('.footballIMG').animate({'left': '24.5%'}, "fast");
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
      $('.footballIMG').animate({'left': '+=6%'}, 'slow');
      yardLine+=8
      yardsToFirst-=8
    }
    if(WRodds >= 50 && WRodds < 70) {
      $('.defensiveSpan').text("Pass complete for a 15 yard gain!");
      $('.footballIMG').animate({'left': '+=9.5%'},'slow');
      yardLine += 15;
      yardsToFirst -=15
    }
    if(WRodds >= 70 && WRodds < 90) {
      $('.defensiveSpan').text("Pass complete for a 25 yard gain!");
      $('.footballIMG').animate({'left': '+=19.8%'}, 'slow');;
      yardLine += 25;
      yardsToFirst -= 25;        
    }
    if(WRodds > 90) {
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    var checkState = setTimeout(checkGameState,325);
    // console.log(JSON.stringify(PlayResults,null, 4));
  }


  function sacked(){
    console.log("sacked function hits");
    downCount++;
    yardLine-= 7;
    yardsToFirst+=7;
    // clearTimeout(wrReturnToDefault);
    clearInterval(timerId);
    // sackedReturnToDefault = setTimeout(returnToDefault, 2850);
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=4.5%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    scoreboardUpdate();
    checkState = setTimeout(checkGameState, 2500);
    // console.log("checkstate hits in sacked function");
  }

  function clearSackTimer() {
    console.log("clearSackTimer Hits");
    clearSackTimerBooleanTrigger = true;
    clearTimeout(sackTimer);
    // console.log("How many times does clearSackTimer hit?")
      blitzSackedTime = setTimeout(blitzSacked, 3000);
  }

  function blitzSacked(){
    console.log("blitzSacked hits")
    clearInterval(timerId);
    // clearTimeout(wrReturnToDefault);
    blitzSackedTime = 0;
    yardLine-= 10;
    yardsToFirst+= 10;
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=4.5%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    checkState = setTimeout(checkGameState, 850);
    // console.log("checkState hits in blitzSacked function");
  }

  function refresh() {
    location.reload();
  }

    function checkGameState() {
      debugger
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
      if(drive === 4 && score !== 14 || drive === 3 && score !==7) {
         // console.log("Lost Condition Hits")
        clearTimeout(sackedReturnToDefault);
        clearInterval(timerId);
        clearTimeout(sackTimer);
        clearTimeout(wrReturnToDefault);
        clearTimeout(returnToSackDefaultEndSacks);
        setTimeout(lost, 500);
        return
      }
      else if(score === 14) {
        // console.log("won condition hit");
        wonGame = true;
        clearTimeout(sackedReturnToDefault);
        clearInterval(timerId);
        clearTimeout(sackTimer);
        clearTimeout(wrReturnToDefault);
        clearTimeout(returnToSackDefaultEndSacks);
        setTimeout(won, 550);
        return
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
        clearTimeout(wrReturnToDefault);
        clearTimeout(returnToSackDefaultEndSacks);
        $('.defensiveSpan').text("TURNOVER ON DOWNS!");
        $('.footballIMG').animate({'left': '24.5%'}, "fast");
      }
      // console.log("Game State Function Hits")
      setTimeout(returnToDefault, 2500);
      // console.log(drive + "Drive at Bottom of game state function");
    }
  

  function lost() {
    // var initials = document.getElementById("initials").value;
    $('.defensiveSpan').text("You Lost!");
    // $.get("/data/"+ $('#initials').val(), function( data ) {
    //   for(var i = 0; i < data.length; i++) {
    //     if(data[i]['user'].initials === $('#initials').val()) {
    //       data[i]['user'].timesLost = data[i]['user'].timesLost;
    //       timesLostData = data[i]['user'].timesLost;
    //       timesWonData = data[i]['user'].timesWon;
    //     }
    //     // May need an else statement here for first time users
    //   }
    //   $.get("/data/"+ $('#initials').val(), function( data ) {
    //     for(var i = 0; i < data.length; i++) {
    //       if(data[i]['user'].initials === $('#initials').val()) {
    //         data[i]['user'].timesLost = data[i]['user'].timesLost;
    //         timesLostData = data[i]['user'].timesLost;
    //         timesWonData = data[i]['user'].timesWon;
    //       }
    //       // May need an else statement here for first time users
    //     }
    //     debugger;
    //     $.ajax({
    //         type: 'POST',
    //         url: "/",
    //         data: {initials: initials, timesLost: timesLost,timesWon: timesWon},
    //         success: function(req, res, data) {
    //           // May want some code here. Not sure why. CarpeYolo
    //         }
    //     })
    //   })
    //   $.get( "/data/"+ $('#initials').val(), function( data ) {
    //     for(var i = 0; i < data.length; i++) {
    //       if(data[i]['user'].initials === $('#initials').val()) {
    //         data[i]['user'].timesLost = data[i]['user'].timesLost;
    //         timesLostData = data[i]['user'].timesLost;
    //         timesWonData = data[i]['user'].timesWon;
    //       }
    //     }
    //     timesLost+=1
    //     $( ".record" ).text(timesWonData + " - " + timesLostData);
    //   }, "json" );
    // })
    setTimeout(refresh, 1500);
  }

  function won() {
    var initials = document.getElementById("initials").value;
    // clearInterval(wrReturnToDefault);
    // clearInterval(touchdownTimeout);
    // var data = {initials:initials, timesLost: Number(timesLost), timesWon: Number(timesWonData) + Number(1)};
    $('.defensiveSpan').text("You Won!")
    // $.get("/data/"+ $('#initials').val(), function( data ) {
    //   for(var i = 0; i < data.length; i++) {
    //     if(data[i]['user'].initials === $('#initials').val()) {
    //       data[i]['user'].timesWon = data[i]['user'].timesWon;
    //       // console.log(data[i]['user'].initials);
    //       // timesLostData = data[i]['user'].timesLost;
    //       // timesWonData = Number(data[i]['user'].timesWon);
    //     }
    //   }
    //   // debugger;
    //   $.ajax({
    //       type: 'POST',
    //       url: "/",
    //       data: {initials:initials, timesLost: timesLostData, timesWon:Number(timesWon) + Number(1)},
    //       success: function(req, res, data) {
    //         // console.log(data);
    //         // May want some code here. Not sure why. CarpeYolo
          setTimeout(refresh, 2200);
    //       }
    //     })
    // })
    // debugger;
  }

  function touchdownFunction() {
    $('.footballIMG').animate({'left': '24.5%'}, "slow");
    // console.log("touchdownFunction fires");
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

  var firstRead = function pickRandomSubObject() {
                              var result;
                              var output;
                              var count = 0;
                              for (var prop in firstReadStrings)
                                  if (Math.random() < 1/++count) {
                                     result = prop;
                                  }
                                  var count = 0;
                                  for (var prop in firstReadStrings[result])
                                      if (Math.random() < 1/++count) {
                                         output = firstReadStrings[result][prop];
                                      }
                                      // console.log(JSON.stringify(PlayResults,null, 4));

                                  return output
                              }

  function getRndmQBRead(route) {
                              var result;
                              var output;
                              var count = 0;
                              for(var prop in route)
                                  if (Math.random() < 1/++count) {
                                     result = prop;
                                  }
                               var count2 = 0;
                               for(var prop in route[result])
                                  if (Math.random() < 1/++count2) {
                                     output = route[result]
                                  }                    
                          return output
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

  $(".howToContainer").hide();
  $(".mask").hide();
  $(".hider").hide();
  $(".howToPlayDiv").hide();

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
    $('.pages').eq(5).hide();
    $('.pages').eq(6).show();
  })
  $('.lastPage').eq(7).click(function(){
    $('.pages').eq(8).hide();
    $('.pages').eq(7).show();
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
  });

  $('.fourVerticals').on('click', function() {
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
  });

  $('.bobsYourUncle').on('click', function() {
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
  });

  $('.runImage').on('click', function() {
    alert("You Audible To A Pass Play!");
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
    $('.birdsEyeView').removeClass('placeholderBirdsEyeView');
    $('.placeholderBirdsEyeView').addClass('birdsEyeImg');
    $('.birdsEyeImg').removeClass('placeholderBirdsEyeView');
    $('.buttons').css('background', 'white');
    audio.play();
  });

  $('.buttonSnap').on('click', function() {
    // $('.defensiveSpan').text(firstRead());
    clearInterval(playClockId);
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
      // debugger
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
                          return result
            }

  function getRndmDefensivePlayImg() {
      var imageSrc = defensiveCoverageImgs[getRndmDefensivePlay()].src
      return imageSrc
  }

  $(window).load(function() {
    validate();
    $('#initials').change(validate);
    // $('.down').text("1st and " + yardsToFirst);
    // $('.score').text(score);
    $('.birdsEyeImg').attr('src', defensiveCoverageImgs.Cover2.src)
    scoreboardUpdate()
  })

  function returnToDefault () {
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
    PlayResults.WR1OddsAdj = 0;
    PlayResults.WR2OddsAdj = 0;
    PlayResults.WR3OddsAdj = 0;
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
    smashSelected = false;
    fourVerticalsSelected = false;
    bobsYourUncle = false;
    $('.placeholderProgressionChoice').addClass('progressionChoice'); 
    $('.progressionChoice').removeClass('placeholderProgressionChoice'); 
    $('.birdsEyeImg').attr("src", getRndmImgSrc);
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
    postSnapStrings.WR1oddsIncrease.SafetyWR1Inc = "The Safety Is Cheating RIght!";
    postSnapStrings.WR1oddsIncrease.LolbWR1inc = "The LOLB is blitzing!";
    postSnapStrings.WR1oddsIncrease.CbWR1inc = "Left Cornerback Blitz!";
    postSnapStrings.WR1oddsDecrease.PressedWR1Dec = "WR1 Pressed!";
    postSnapStrings.WR1oddsDecrease.LolbWR1Dec = "The LOLB dropped into coverage!";
    postSnapStrings.WR1oddsDecrease.SafetyWR1Dec = " The Safety is cheaitng left!";
    postSnapStrings.WR2oddsIncrease.MLBWR2inc = "The MLB is blitzking!";
    postSnapStrings.WR2oddsIncrease.SafetyWR2Inc = "The Safety is on the line!";
    postSnapStrings.WR2oddsDecrease.PressedWR2Dec = "WR2 is pressed!";
    postSnapStrings.WR2oddsDecrease.MLBWR2Dec = "The MLB dropped back into coverage!";
    postSnapStrings.WR2oddsDecrease.SafetyWR2Dec = "The Safety is staying mid-field!";
    postSnapStrings.WR3oddsIncrease.SafetyWR3Inc = " The Safety is cheating left!";
    postSnapStrings.WR3oddsIncrease.CbWR3Inc = "Right Cornerback Blitz!";
    postSnapStrings.WR3oddsIncrease.RolbWR3inc = "The ROLB is blitzing!";
    postSnapStrings.WR3oddsIncrease.BeatWR3inc = "WR3 beat his man!";
    postSnapStrings.WR3oddsDecrease.PressedWR3Dec = "WR3 pressed!";
    postSnapStrings.WR3oddsDecrease.RolbWR3Dec = "The ROLB dropped into cover!";
    postSnapStrings.WR3oddsDecrease.SafetyWR3Dec = "The Safety is cheating right!";
    postSnapStrings.GlobalIncrease.BlitzGlobalInc = "All out blitz!";
    postSnapStrings.GlobalIncrease.OlineGlobalInc = "The line is holding strong!";
    postSnapStrings.GlobalDecrease.StuffedGlobalDec = "WRs stuffed at the line!";
    postSnapStrings.GlobalDecrease.DefensiveEndGlobalDec = "The Defensive End is barreling towards you!";
    postSnapStrings.GlobalDecrease.DonaldGlobalDec = "Dammit Donald!";
    // postSnapStrings.Blitz.DefensiveEnd = "The Defensive End is barreling towards you!";
    // postSnapStrings.Blitz.Donald = "Dammit Donald!";
    // postSnapStrings.Blitz.Blitz = "All Out Blitz!";
    // postSnapStrings.Blitz.Cb = "Right Cornerback Blitz!";
    // postSnapStrings.Blitz.Robl = "The ROLB is blitzing!";
    // postSnapStrings.Blitz.Lolb = "The LOLB is blitzing!";
    // postSnapStrings.Blitz.Cb = "Left Cornerback Blitz!;";
    // postSnapStrings.Blitz.MLB = "The MLB is blitzing!";
    // postSnapStrings.Blitz.Safety = "Safety Blitz!";
  }

  $('.wr1').on('click', function() {
    currentOdds(PlayResults.CurrentWR1Odds);
  })

  $('.wr2').on('click', function() {  
    currentOdds(PlayResults.CurrentWR2Odds);
  })  

  $('.wr3').on('click', function() {
    currentOdds(PlayResults.CurrentWR3Odds)
  })

  function displayReads(){
  if(smashSelected === true) {
    if($('#progression1').val() === 'p1WR1') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.hitchRouteReads))
    }
    if($('#progression1').val() === 'p1WR2') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.outsidePostRouteReads))
    }
    if($('#progression1').val() === 'p1WR3') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.crossRouteReads))
    }
    if($('#progression1').val() === 'p1WR4') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.insidePostRouteReads))
    }
    if($('#progression2').val() === 'p1WR1') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.hitchRouteReads))
    }
    if($('#progression2').val() === 'p1WR2') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.outsidePostRouteReads))
    }
    if($('#progression2').val() === 'p1WR3') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.crossRouteReads))
    }
    if($('#progression2').val() === 'p1WR4') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.insidePostRouteReads))
    }
    if($('#progression3').val() === 'p1WR1') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.hitchRouteReads))
    }
    if($('#progression3').val() === 'p1WR2') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.outsidePostRouteReads))
    }
    if($('#progression3').val() === 'p1WR3') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.crossRouteReads))
    }
    if($('#progression3').val() === 'p1WR4') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.insidePostRouteReads))
    }
    if($('#progression4').val() === 'p1WR1') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.hitchRouteReads))
    }
    if($('#progression4').val() === 'p1WR2') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.outsidePostRouteReads))
    }
    if($('#progression4').val() === 'p1WR3') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.crossRouteReads))
    }
    if($('#progression4').val() === 'p1WR4') {
      $('.defensiveSpan').text(getRndmQBRead(passingPlays.Smash.Cover2.insidePostRouteReads))
    }
  }
}

  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
        var defSpanClassic = document.getElementsByClassName('defensiveSpan');
        var defensiveSpanText = defSpanClassic[0].innerText
        var WR1OddsCount = 0
        var WR2OddsCount = 0
        var WR3OddsCount = 0
        var GlobalOddsCount =0
        var key;
        var keyArray = [];
        var key1;
        // console.log(" =========================   " + defensiveSpanText + "   ==================");
        for(var key in postSnapStrings) {
          for(var key1 in postSnapStrings[key]) {
            for(var key3 in firstReadStrings) {
              for(var key4 in firstReadStrings[key3]) {
            // console.log(key1 +  "      This is key1")
            if(defensiveSpanText.indexOf('Blitz') > -1 || defensiveSpanText.indexOf('blitzing') > -1) { 
              if(clearSackTimerBooleanTrigger === false) {
                // clearSackTimer();
              }
            }
            // if(postSnapStrings.blitz.length )
            if(defensiveSpanText === postSnapStrings.WR1oddsIncrease[key1] || defensiveSpanText === firstReadStrings.WR1oddsIncrease[key4]) {
              WR1OddsCount+= postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(postSnapStrings.WR1oddsIncrease[key1])
              // console.log(WR1OddsCount + "====== WR1");
              // console.log(WR1OddsCount + " WR1 odds count just hit positive");
            }
            if(defensiveSpanText === postSnapStrings.WR1oddsDecrease[key1] || defensiveSpanText === firstReadStrings.WR1oddsDecrease[key4]) {
              WR1OddsCount-= postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(postSnapStrings.WR1oddsDecrease[key1])
              // console.log(WR1OddsCount + "====== WR1")
              // console.log(WR1OddsCount + " WR1 odds count just hit negative");
            }
            if(defensiveSpanText === postSnapStrings.WR2oddsIncrease[key1] || defensiveSpanText === firstReadStrings.WR2oddsIncrease[key4]) {
              WR2OddsCount+= postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(WR2OddsCount + "====== WR2")
              // console.log(WR2OddsCount + " WR2 odds count just hit positive");
              // break;
              // console.log(postSnapStrings.WR2oddsIncrease[key1])
            }
            if(defensiveSpanText === postSnapStrings.WR2oddsDecrease[key1] || defensiveSpanText === firstReadStrings.WR2oddsDecrease[key4]) {
              WR2OddsCount-= postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(postSnapStrings.WR3oddsDecrease[key1])
              // console.log(WR2OddsCount + "====== WR2");
              // console.log(WR2OddsCount + " WR2 odds count just hit negative");
            }
            if(defensiveSpanText === postSnapStrings.WR3oddsIncrease[key1] || defensiveSpanText === firstReadStrings.WR3oddsIncrease[key4]) {
              WR3OddsCount+= postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(postSnapStrings.WR3oddsIncrease[key1])
              // console.log(WR3OddsCount + "====== WR3");
              // console.log(WR3OddsCount + " WR3 odds count just hit positive");
            }
            if(defensiveSpanText === postSnapStrings.WR3oddsDecrease[key1] || defensiveSpanText === firstReadStrings.WR3oddsDecrease[key4]) {
              WR3OddsCount-= postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(postSnapStrings.WR3oddsDecrease[key1]);
              // console.log(WR3OddsCount + "====== WR3");
              // console.log(WR3OddsCount + " WR3 odds count just hit negative");
            }
            if(defensiveSpanText === postSnapStrings.GlobalIncrease[key1] || defensiveSpanText === firstReadStrings.GlobalIncrease[key4]) {
              GlobalOddsCount+=postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(postSnapStrings.GlobalIncrease[key1])
              // console.log(GlobalOddsCount + "====== Global");
              // console.log(GlobalOddsCount + " Global odds count just hit positive");
            }
            if(defensiveSpanText === postSnapStrings.GlobalDecrease[key1] || defensiveSpanText === firstReadStrings.GlobalDecrease[key4]) {
              GlobalOddsCount-= postSnapReadOddsAdjustment();
              delete postSnapStrings.WR1oddsIncrease[key1];
              // console.log(postSnapStrings.GlobalDecrease[key1])
              // console.log(GlobalOddsCount + "====== Global")
              // console.log(GlobalOddsCount + " Global odds count just hit negative");
            }
          }
        }
      }
    }  
  console.log(WR1OddsCount +  "    WR1 odds count");
  console.log(WR2OddsCount +  "    WR2 odds count");
  console.log(WR3OddsCount +  "    WR3 odds count");
  // console.log(GlobalOddsCount +"   Global odds count");
      console.log(PlayResults.CurrentWR1Odds +   "     WR1 odds");
    console.log(PlayResults.CurrentWR2Odds +   "     WR2 odds");
    console.log(PlayResults.CurrentWR3Odds +   "     WR3 odds");

  PlayResults.WR1OddsAdjustment = PlayResults.WR1OddsAdjustment + Number(WR1OddsCount/2);
  PlayResults.WR2OddsAdjustment = PlayResults.WR2OddsAdjustment + Number(WR2OddsCount/2);
  PlayResults.WR3OddsAdjustment = PlayResults.WR3OddsAdjustment + Number(WR3OddsCount/2);
  PlayResults.GlobalOddsAdjustment = PlayResults.GlobalOddsAdjustment + (GlobalOddsCount/2);
  PlayResults.CurrentWR1Odds = PlayResults.WR1initialOdds + PlayResults.WR1timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR1oddsAdjustment;
  PlayResults.CurrentWR2Odds = PlayResults.WR2initialOdds + PlayResults.WR2timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR2oddsAdjustment;
  PlayResults.CurrentWR3Odds = PlayResults.WR3initialOdds + PlayResults.WR3timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR3oddsAdjustment;
  // console.log(JSON.stringify(PlayResults,null, 4));
    });
  })
  observer.observe(list, {
    attributes: true, 
    childList: true, 
    characterData: true
  });
});