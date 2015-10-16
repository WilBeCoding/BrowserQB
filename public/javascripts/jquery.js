$( document ).ready(function() {

  var postSnapStrings = {

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

     // Blitz = {
     //  DefensiveEnd: "The Defensive End is barreling towards you!",
     //  Donald: "Dammit Donald!",
     //  Blitz: "All Out Blitz!",
     //  Cb: "Right Cornerback Blitz!",
     //  Rolb: "The ROLB is blitzing!",
     //  Lolb: "The LOLB is blitzing!",
     //  Cb: "Left Cornerback Blitz!",
     //  MLB: "The MLB is blitzing!",
     //  Safety: "Safety Blitz!",
     // }
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
  var touchdown = false;
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
  // console.log(audio);
  var showPage = function(page) {
    $('.howToPlayPage').hide();
    $('.howToPlayPage').each(function(n) {
        if(n >= pageSize * (page - 1) && n < pageSize * page)
          $(this).show();
    })
  }
  var randomInteger = function randomInt() {
                        return Number((Math.random() * (.25 - 0)) + 0);
                      };
  showPage(1)

  PlayResults = {
    Yards: .3 + randomInteger(),
    WR1OddsAdj: 0,
    WR2OddsAdj: 0,
    WR3OddsAdj: 0,
    GlobalOddsAdj: 0,
  }

  function sacked(){
    yardLine-= 7;
    yardsToFirst+=7;
    // clearTimeout(wrReturnToDefault);
    clearInterval(timerId);
    // sackedReturnToDefault = setTimeout(returnToDefault, 2850);
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=4.5%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    checkState = setTimeout(checkGameState, 1250);
    console.log("checkstate hits in sacked function");
  }

  function clearSackTimer() {
    if(clearSackTimerBooleanTrigger === false) {
    clearInterval(timerId);
    clearTimeout(sackTimer);
    // console.log("How many times does clearSackTimer hit?")
      blitzSackedTime = setTimeout(blitzSacked, 1250);
      clearSackTimerBooleanTrigger = true;
    }
  }

  function blitzSacked(){
    // clearTimeout(wrReturnToDefault);
    blitzSackedTime = 0;
    yardLine-= 10;
    yardsToFirst+= 10;
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=4.5%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    checkState = setTimeout(checkGameState, 1850);
    console.log("checkState hits in blitzSacked function");
  }

  function refresh() {
    location.reload();
  }
var howManyTimesGameStateHits = 0;

    function checkGameState() {
      console.log(drive + "     This is the drive number before the fucking loss condition");
      console.log(score + "     this is the score before the fucking loss conidtion");
      howManyTimesGameStateHits++;
      downCount++
        console.log("if statement in gamestate is increasing drive count")
      if(score === 14) {
        console.log("won condition hit");
        wonGame = true;
        clearTimeout(sackedReturnToDefault);
        clearInterval(timerId);
        clearTimeout(sackTimer);
        clearTimeout(wrReturnToDefault);
        clearTimeout(returnToSackDefaultEndSacks);
        setTimeout(won, 550);
        return
      }
      else if(downCount === 5 && yardLine < 100 && yardsToFirst > 0) {
        drive++;
        console.log("turnover condition hit");
        clearTimeout(sackedReturnToDefault);
        clearInterval(timerId);
        clearTimeout(sackTimer);
        clearTimeout(wrReturnToDefault);
        clearTimeout(returnToSackDefaultEndSacks);
        $('.defensiveSpan').text("TURNOVER ON DOWNS!");
        $('.footballIMG').animate({'left': '24.5%'}, "fast");
        $('.down').text(downCount);
        stopBecauseOfLoss = setTimeout(returnToDefault, 2500);
        // checkIfTurnoverTimeout = setTimeout(returnToDefault,1850);
        console.log("This hits in checking for turnover")
        yardsToFirst = 10;
      }
      if(drive === 4 && score !== 14 || downCount === 5 && drive === 3 && score !==7) {
         console.log("Lost Condition Hits")
          clearTimeout(stopBecauseOfLoss);
          clearTimeout(sackedReturnToDefault);
          clearInterval(timerId);
          clearTimeout(sackTimer);
          clearTimeout(wrReturnToDefault);
          clearTimeout(returnToSackDefaultEndSacks);
          $('.defensiveSpan').text("You Lost!");
          setTimeout(refresh, 1500);
          return
        }
      console.log(drive + "      before drive if statements");
      console.log(howManyTimesGameStateHits + "    Game State Function Hits");
      setTimeout(returnToDefault, 2500);
    }
  

  function lost() {
    console.log("Lost function hits")
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
    touchdown = false;
    // touchdownTimeout = setTimeout(returnToDefault, 2000)
    $('.footballIMG').animate({'left': '24.5%'}, "slow");
    drive++;
    downCount = 1;
    yardLine = 20;
    yardsToFirst = 10;
  }

  function checkForTouchdown(){
    if(yardLine >= '100') {
      $('.footballIMG').animate({'left': '87%'}, "fast");
      // clearTimeout(wrReturnToDefault);
      touchdown = true;
      $('.defensiveSpan').text("Touchdown!")
      $('.buttons').css('background', 'url("http://netstorage.discovery.com/feeds/brightcove/asset-stills/apl/135966413090713964101001197_Puppy_Bowl_IX_BIGPLAY_4_Lift_10.jpg")');
      setTimeout(touchdownFunction, 1500);
      if(score === 0) {
        score += 7;
        $('.score').text(score);
      }
      else if(score === 7) {
        score += 7;
        $('.score').text(score);
      }
    }
  }

  var intervalPassStrings = function pickRandomSubObject() {
    var defSpanClassic = document.getElementsByClassName('defensiveSpan');

    var defensiveSpanText = defSpanClassic[0].innerText
                              var result;
                              var output;
                              var count = 0;
                              for (var prop in postSnapStrings)
                                  if (Math.random() < 1/++count) {
                                     result = prop;
                                  }
                                  var count = 0;
                                  for (var prop in postSnapStrings[result])
                                      if (Math.random() < 1/++count) {
                                         output = postSnapStrings[result][prop];
                                      }
                                      // console.log(defensiveSpanText);
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
    if(downCount === 5) {
      downCount = 1;
    }
    if(drive === 2) {
      $('.drive').text("2nd")
    }
    if(drive ===3) {
      $('.drive').text("Final")
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



   //on click hide the message and the
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

  $('.passImage').on('click', function() {
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
    $('.defensiveSpan').text(intervalPassStrings());
    timerId = 0;
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
    timerId = window.setInterval(function(){
      $('.defensiveSpan').text(intervalPassStrings());
    }, 600);
  })

  function timeoutIntercepted(){
    if(interception > 0) {
      interceptionReturnToDefaultBreak = true;
      setTimeout(intercepted, 150)
      downCount = 1;
      yardsToFirst = 10;
      interception = 0;
    }
  }

  function intercepted() {
    interceptionReturnToDefaultBreak = false;
    interception = 0;
    checkState = setTimeout(checkGameState, 1500);
    console.log("checkState hits in intercepted function")
  }

  $(window).load(function() {
    validate();
    $('#initials').change(validate);
    $('.down').text("1st and " + yardsToFirst);
    $('.score').text(score);
  })

  function returnToDefault () {
    console.log("return to default function hits");
    blitz = 0;
    clearSackTimerBooleanTrigger = 0;
    timeoutIntercepted();
    if(interceptionReturnToDefaultBreak === true) {
      $('.buttons').css('background', 'url("http://cdn.fansided.com/wp-content/blogs.dir/276/files/2014/12/gruden.jpg")');
      return;
    };
    PlayResults.Yards = .3 + randomInteger();
    PlayResults.WR1OddsAdj = 0;
    PlayResults.WR2OddsAdj = 0;
    PlayResults.WR3OddsAdj = 0;
    PlayResults.GlobalOddsAdj = 0;
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
    if(yardsToFirst <= 0) {
      downCount = 1;
      yardsToFirst = 10;
    }
    $('.yards').text(yardsToFirst);
    $('.down').text(downCount);
    scoreboardUpdate();
    interception = 0;
  }

  $('.wr1').on('click', function() {
   var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(checkState);
    clearTimeout(blitzSackedTime);
    // clearTimeout(returnToDefaultEndSacks);
    clearInterval(timerId);
    // wrReturnToDefault = setTimeout(returnToDefault, 2850);
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .1) {
      $('.defensiveSpan').text("Pass to WR1 is intercepted!");
      $('.footballIMG').animate({'left': '24.5%'}, "fast");
      interception++
      yardLine = 20;
      drive++;
      yardsToFirst = 10;
    }
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2 && PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj > .1) {
      $('.defensiveSpan').text("Incomplete Pass");
    }
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .2 && PlayResults.WR1OddsAdj + PlayResults.Yards < .7) {
      $('.defensiveSpan').text("Pass to WR1 is complete for an 8 yard gain!")
      $('.footballIMG').animate({'left': '+=6%'}, 'slow');
      yardsToFirst -=8
      yardLine += 8;
    }
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .7 && PlayResults.WR1OddsAdj + PlayResults.Yards <= .8) {
      $('.defensiveSpan').text("Pass to WR1 is complete for a 15 yard gain!");
      $('.footballIMG').animate({'left': '+=9.5%'},'slow');
      yardLine += 15;
      yardsToFirst -= 15;
    }
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .81 && PlayResults.WR1OddsAdj + PlayResults.Yards <= .94) {
      $('.defensiveSpan').text("Pass to WR1 is complete for a 25 yard gain!")
      $('.footballIMG').animate({'left': '+=19.8%'}, 'slow');;
      yardLine += 25;
      yardsToFirst -= 25;
    }
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .99) {
      $('.defensiveSpan').text("Pass to WR1 is complete for a TOUCHDOWN!");
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    checkForTouchdown();
    checkGameState();
  })

  $('.wr2').on('click', function() {
    var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(blitzSackedTime);
    clearTimeout(checkState);
    // clearTimeout(returnToDefaultEndSacks);
    // wrReturnToDefault= setTimeout(returnToDefault, 2850);
    clearInterval(timerId);
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2) {
      $('.defensiveSpan').text("Pass to WR2 is intercepeted!");
      $('.footballIMG').animate({'left': '24.5%'}, "fast");
      interception++;
      yardLine = 20;
      drive++;
      yardsToFirst = 10;
    }
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2 && PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj > .1) {
      $('.defensiveSpan').text("Incomplete Pass");
    }
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .2 && PlayResults.WR2OddsAdj + PlayResults.Yards < .7) {
      $('.defensiveSpan').text("Pass to WR2 is complete for an 8 yard gain!");
      $('.footballIMG').animate({'left': '+=6%'}, 'slow');
      yardLine+=8;
      yardsToFirst -= 8;
    }
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .7 && PlayResults.WR2OddsAdj + PlayResults.Yards <= .8) {
      $('.defensiveSpan').text("Pass to WR2 is complete for a 15 yard gain!");
      $('.footballIMG').animate({'left': '+=9.5%'},'slow');
      yardLine += 15;
      yardsToFirst -= 15;
    }
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .81 && PlayResults.WR2OddsAdj + PlayResults.Yards <= .94) {
      $('.defensiveSpan').text("Pass to WR2 is complete for a 25 yard gain!");
      $('.footballIMG').animate({'left': '+=19.8%'}, 'slow');;
      yardLine += 25;
      yardsToFirst -= 25;
    }
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .99) {
      $('.defensiveSpan').text("Pass to WR2 is complete for a TOUCHDOWN!");
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    checkForTouchdown();
    checkGameState();
  })  

  $('.wr3').on('click', function() {
    var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(checkState);
    clearTimeout(blitzSackedTime);
    // clearTimeout(returnToDefaultEndSacks);
    // wrReturnToDefault= setTimeout(returnToDefault, 2850);
    clearInterval(timerId);
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2) {
      $('.defensiveSpan').text("Pass to WR3 is intercepeted!");
      $('.footballIMG').animate({'left': '24.5%'}, "fast");
      interception++;
      yardLine = 20;
      drive++;
      yardsToFirst = 10;
    }
    if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2 && PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj > .1) {
      $('.defensiveSpan').text("Incomplete Pass");
    }
    if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .2 && PlayResults.WR3OddsAdj + PlayResults.Yards < .7) {
      $('.defensiveSpan').text("Pass to WR3 is complete for an 8 yard gain!");
      $('.footballIMG').animate({'left': '+=6%'}, 'slow');
      yardLine+=8
      yardsToFirst-=8
    }
    if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .7 && PlayResults.WR3OddsAdj + PlayResults.Yards <= .8) {
      $('.defensiveSpan').text("Pass to WR3 is complete for a 15 yard gain!");
      $('.footballIMG').animate({'left': '+=9.5%'},'slow');
      yardLine += 15;
      yardsToFirst -=15
    }
    if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .81 && PlayResults.WR3OddsAdj + PlayResults.Yards <= .94) {
      $('.defensiveSpan').text("Pass to WR3 is complete for a 25 yard gain!");
      $('.footballIMG').animate({'left': '+=19.8%'}, 'slow');;
      yardLine += 25;
      yardsToFirst -= 25;
    }
    if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .99) {
      $('.defensiveSpan').text("Pass to WR3 is complete for a TOUCHDOWN!");
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    checkForTouchdown();
    checkGameState();
  })

  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
        var defSpanClassic = document.getElementsByClassName('defensiveSpan');
        var defensiveSpanText = defSpanClassic[0].innerText
        var WR1OddsCount = 0
        var WR2OddsCount = 0
        var WR3OddsCount = 0
        var GlobalOddsCount = 0
        var key;
        var keyArray = [];
        var key1;
        // console.log(" =========================   " + defensiveSpanText + "   ==================");
        for(var key in postSnapStrings) {
          for(var key1 in postSnapStrings[key]) {
            // console.log(key1 +  "      This is key1")
            if(defensiveSpanText === postSnapStrings.WR1oddsIncrease[key1]) {
              WR1OddsCount++;
              // console.log(postSnapStrings.WR1oddsIncrease[key1])
              // console.log(WR1OddsCount + "====== WR1");
              // console.log(WR1OddsCount + " WR1 odds count just hit positive");
            }
            if(defensiveSpanText === postSnapStrings.WR1oddsDecrease[key1]) {
              WR1OddsCount--;
              // console.log(postSnapStrings.WR1oddsDecrease[key1])
              // console.log(WR1OddsCount + "====== WR1")
              // console.log(WR1OddsCount + " WR1 odds count just hit negative");
            }
            if(defensiveSpanText === postSnapStrings.WR2oddsIncrease[key1]) {
              WR2OddsCount++;
              // console.log(WR2OddsCount + "====== WR2")
              // console.log(WR2OddsCount + " WR2 odds count just hit positive");
              // break;
              // console.log(postSnapStrings.WR2oddsIncrease[key1])
            }
            if(defensiveSpanText === postSnapStrings.WR2oddsDecrease[key1]) {
              WR2OddsCount--;
              // console.log(postSnapStrings.WR3oddsDecrease[key1])
              // console.log(WR2OddsCount + "====== WR2");
              // console.log(WR2OddsCount + " WR2 odds count just hit negative");
            }
            if(defensiveSpanText === postSnapStrings.WR3oddsIncrease[key1]) {
              WR3OddsCount++
              // console.log(postSnapStrings.WR3oddsIncrease[key1])
              // console.log(WR3OddsCount + "====== WR3");
              // console.log(WR3OddsCount + " WR3 odds count just hit positive");
            }
            if(defensiveSpanText === postSnapStrings.WR3oddsDecrease[key1]) {
              WR3OddsCount--
              // console.log(postSnapStrings.WR3oddsDecrease[key1]);
              // console.log(WR3OddsCount + "====== WR3");
              // console.log(WR3OddsCount + " WR3 odds count just hit negative");
            }
            if(defensiveSpanText === postSnapStrings.GlobalIncrease[key1]) {
              GlobalOddsCount++
              // console.log(postSnapStrings.GlobalIncrease[key1])
              // console.log(GlobalOddsCount + "====== Global");
              // console.log(GlobalOddsCount + " Global odds count just hit positive");
            }
            if(defensiveSpanText === postSnapStrings.GlobalDecrease[key1]) {
              GlobalOddsCount--
              // console.log(postSnapStrings.GlobalDecrease[key1])
              // console.log(GlobalOddsCount + "====== Global")
              // console.log(GlobalOddsCount + " Global odds count just hit negative");
            }
          }
          if(defensiveSpanText.indexOf('Blitz') > -1 || defensiveSpanText.indexOf('blitzing') > -1) { 
            clearSackTimer()
          }
        }
  PlayResults.WR1OddsAdj = PlayResults.WR1OddsAdj + (WR1OddsCount/2) * .025;
  PlayResults.WR2OddsAdj = PlayResults.WR2OddsAdj + (WR2OddsCount/2) * .025;
  PlayResults.WR3OddsAdj = PlayResults.WR3OddsAdj + (WR3OddsCount/2) * .025;
  PlayResults.GlobalOddsAdj = PlayResults.GlobalOddsAdj + (GlobalOddsCount/2) * .025;
  // console.log(JSON.stringify(PlayResults,null, 4));
    });
  })
  observer.observe(list, {
    attributes: true, 
    childList: true, 
    characterData: true
  });
});