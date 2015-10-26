$( document ).ready(function() {


  var passingPlays = {
    Smash: {
      Cover2: {
        safetyReads: {
          safetyRead1: {
            value:'Two safeties high',
            isActive: true,
            odds: false
          },
          safetyRead2: {
            value: 'Strong Safety is cheating forward',
            isActive: true,
            odds: false
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
            odds: false,
          },
          hitchRoute2: {
            value: "The FS is 15yds deep",
            isActive: true,
            odds: false,
          },
          hitchRoute3: {
            value: "Mismatch with the LOLB",
            isActive: true,
            odds: false, 
          }
        },
        WR2: {
          outsidePostRoute1: {
            value: "The FS is deep",
            isActive: true,
            odds: false, 
          },
          outsidePostRoute2: {
            value: "CB is backpedaling",
            isActive: true,
            odds: false,
          },
          outsidePostRoute3: {
            value: "WR is double covered",
            isActive: true,
            odds: false,
          }
        },
        WR3: {
          crossRoute1: {
            value: "Nobody is following WR3",
            isActive: true,
            odds: false,
          },
          crossRoute2: {
            value: "The MLB steps in front of the route",
            isActive: true,
            odds: false,
          },
          crossRoute3: {
            value: 'The LOLB is in coverage',
            isActive: true,
            odds: false,
          }
        },
        WR4: {
          insidePostRoute1: {
            value:'The SS is deep',
            isActive: true,
            odds: false,
          },
          insidePostRoute2: {
            value: 'The CB is backpedaling',
            isActive: true,
            odds: false, 
          },
          insidePostRoute3: {
            value:'WR is double covered',
            isActive: true,
            odds: false,
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
        Cover2: {src:"../images/cover2.jpg"},
        Cover3: {src:"../images/cover3.png"},
        ManCoverage: {src:"../images/manCoverage.png"}
      }

  var prog1 = false;
  var prog2 = false;
  var prog3 = false;
  var prog4 = false;
  var defensivePlay;
  var offensivePlay;
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
    // console.log(PlayResults)
    PlayResults.CurrentWR1Odds = PlayResults.WR1initialOdds + PlayResults.WR1timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR1oddsAdjustment;
    PlayResults.CurrentWR2Odds = PlayResults.WR2initialOdds + PlayResults.WR2timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR2oddsAdjustment;
    PlayResults.CurrentWR3Odds = PlayResults.WR3initialOdds + PlayResults.WR3timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR3oddsAdjustment;
    PlayResults.CurrentWR4Odds = PlayResults.WR4initialOdds + PlayResults.WR4timeIncreaseOdds + PlayResults.GlobalOddsAdjustment + PlayResults.WR4oddsAdjustment;
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
      // debugger
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
      defensivePlay = 'Cover2'
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
    console.log("return to default function hits");
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
    // $('.birdsEyeImg').attr("src", getRndmImgSrc);
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

  $('.wr4').on('click', function() {
    currentOdds(PlayResults.CurrentWR4Odds)
  })



  function displayReads(){
    defensivePlay = 'Cover2';
    if($('#progression1').val() === 'p1WR1' && prog1 === false) {
      console.log("WR1 === prog1");
      prog1 = true;
      $('.defensiveSpan').text(getRndmQBRead('WR1'))
    }
    if($('#progression1').val() === 'p1WR2' && prog1 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR2'))
      prog1 = true;
      console.log("WR2 === prog1");
      return
    }
    if($('#progression1').val() === 'p1WR3' && prog1 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR3'))
      prog1 = true;
      console.log("WR3 === prog1");
      return
    }
    if($('#progression1').val() === 'p1WR4'&& prog1 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR4'))
      prog1 = true;
      console.log("WR4 === prog1");
      return
    }
    if($('#progression2').val() === 'p2WR1' && prog2 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR1'))
      prog2 = true;
      console.log("WR1 === prog2");
      return
    }
    if($('#progression2').val() === 'p2WR2' && prog2 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR2'))
      prog2 = true;
      console.log("WR2 === prog2");
      return
    }
    if($('#progression2').val() === 'p2WR3' && prog2 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR3'))
      prog2 = true;
      console.log("WR3 === prog2");
      return
    }
    if($('#progression2').val() === 'p2WR4' && prog2 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR4'))
      prog2 = true;
      console.log("WR4 === prog2");
      return
    }
    if($('#progression3').val() === 'p3WR1' && prog3 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR1'))
      prog3 = true;
      console.log("WR1 === prog3");
      return
    }
    if($('#progression3').val() === 'p3WR2' && prog3 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR2'))
      prog3 = true;
      console.log("WR2 === prog3");
      return
    }
    if($('#progression3').val() === 'p3WR3' && prog3 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR3'))
      prog3 = true;
      console.log("WR3 === prog3");
      return
    }
    if($('#progression3').val() === 'p3WR4' && prog3 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR4'))
      prog3 = true;
      console.log("WR4 === prog3");
      return
    }
    if($('#progression4').val() === 'p4WR1' && prog4 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR1'))
      prog4 = true;
      console.log("WR1 === prog4");
      return
    }
    if($('#progression4').val() === 'p4WR2' && prog4 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR2'))
      prog4 = true;
      console.log("WR2 === prog4");
      return
    }
    if($('#progression4').val() === 'p4WR3' && prog4 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR3'))
      prog4 = true;
      console.log("WR3 === prog4");
      return
    }
    if($('#progression4').val() === 'p4WR4' && prog4 === false) {
      $('.defensiveSpan').text(getRndmQBRead('WR4'))
      prog4 = true;
      console.log("WR4 === prog4");
      return
    }
  }

  function getRndmQBRead(WR) {
    console.log(offensivePlay    +   "    offensive play");
    console.log(defensivePlay  +   "    defensive play");
    console.log(WR +    "   WR" );
                              var result;
                              var output;
                              var count = 0;
                              for(var prop in passingPlays[offensivePlay][defensivePlay][WR])
                                  if (Math.random() < 1/++count) {
                                     output = prop
                                  }
                                return passingPlays[offensivePlay][defensivePlay][WR][output].value
                              }
});