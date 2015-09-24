$( document ).ready(function() {

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
      Safety: "The Safety is staying mid-field!",
    },

    WR3oddsIncrease = {
      Safety: "The safety is cheating left!",
      Cb: "Right Cornerback Blitz!",
      Rolb: "The ROLB is blitzing!",
      Beat: "WR3 beat his man!",
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
  ];
  var timesPlayed = 0;
  var timesWon = 0;
  var wonGame = false;
  var checkIntervals;
  var touchdown = false;
  var interceptionReturnToDefaultBreak = false;
  var sackedReturnToDefault = 0;
  var blitz = 0;
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
  var WR1oddsIncreaseObject = postSnapStrings[0];
  var WR1oddsDecreaseObject = postSnapStrings[1];
  var WR2oddsIncreaseObject = postSnapStrings[2];
  var WR2oddsDecreaseObject = postSnapStrings[3];
  var WR3oddsIncreaseObject = postSnapStrings[4];
  var WR3oddsDecreaseObject = postSnapStrings[5];
  var globalOddsIncreaseObject = postSnapStrings[6];
  var globalOddsDecreaseObject = postSnapStrings[7];
  var postSnapStringsFlash = pickRandomPostSnapString(postSnapStrings)
  var defSpan = $('.defensiveSpan');
  var defSpanClassic = document.getElementsByClassName('defensiveSpan');
  var result;
  var WR1OddsCount = 0
  var WR2OddsCount = 0
  var WR3OddsCount = 0
  var GlobalOddsCount = 0
  var key;
  var keyArray = [];
  var randomInteger = function randomInt() {
                        return Number((Math.random() * (.25 - 0)) + 0);
                    };

  PlayResults = {
    Yards: .3 + randomInteger(),
    WR1OddsAdj: 0,
    WR2OddsAdj: 0,
    WR3OddsAdj: 0,
    GlobalOddsAdj: 0,
  }

  function sacked(){
    downCount++;
    yardLine-= 7;
    yardsToFirst+=7;
    checkIfLost();
    checkIfTurnover();
    clearTimeout(wrReturnToDefault);
    clearInterval(timerId);
    sackedReturnToDefault = setTimeout(returnToDefault, 2850);
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=4.5%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    scoreboardUpdate();
  }

  function clearSackTimer() {
    clearInterval(timerId);
    clearTimeout(sackTimer);
    if(blitz <= 1) {
      blitzSackedTime = setTimeout(blitzSacked, 1250);
    }
  }

  function blitzSacked(){
    clearTimeout(wrReturnToDefault);
    downCount++;
    blitzSackedTime = 0;
    yardLine-= 10;
    yardsToFirst+= 10;
    checkIfLost();
    checkIfTurnover();
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').animate({'left': '-=4.5%'}, "slow");
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    returnToSackDefaultEndSacks = setTimeout(returnToDefault, 1850);
  }

  function refresh() {
    location.reload();
  }

  function checkIfLost() {
    if(drive === 4 && score != 14 || drive === 3 && score !=7) {
      clearTimeout(sackedReturnToDefault);
      clearInterval(timerId);
      clearTimeout(sackTimer);
      clearTimeout(wrReturnToDefault);
      setTimeout(lost, 500);
    }
  }

  function lost() {
    $('.defensiveSpan').text("You Lost!");
    setTimeout(refresh, 1500);
  }


  function checkIfWon() {
    if(score === 14) {
      wonGame = true;
      clearTimeout(sackedReturnToDefault);
      clearInterval(timerId);
      clearTimeout(sackTimer);
      clearTimeout(wrReturnToDefault);
      clearTimeout(returnToSackDefaultEndSacks);
      setTimeout(won, 550);
    }
  }

  function won() {
    timesWon += 1;
    $('.defensiveSpan').text("You Won!")
    setTimeout(refresh, 2200);
    $.ajax({
        type: 'POST',
        url: "/",
        data: {initials: initials, timesPlayed: Number(timesPlayed), timesWon: 0},
        success: function(data) {
          // CODE
        },
    })

  }

  function driveFunction() {
    if(drive === 2) {
      $('.drive').text("2 remaining drives")
    }
    if(drive ===3) {
      $('.drive').text("Final Drive")
    }
  }

  function checkIfTurnover() {
    if(downCount === 5 && yardLine < 100 && yardsToFirst > 0) {
      clearTimeout(sackedReturnToDefault);
      clearInterval(timerId);
      clearTimeout(sackTimer);
      clearTimeout(wrReturnToDefault);
      clearTimeout(returnToSackDefaultEndSacks);
      $('.defensiveSpan').text("TURNOVER ON DOWNS!");
      $('.footballIMG').animate({'left': '24.5%'}, "fast");
      downCount = 1;
      $('.down').text(downCount);
      drive++;
      yardsToFirst = 10;
      setTimeout(returnToDefault,1850);
    }
  }

  function touchdownFunction() {
    touchdown = false;
    if(score === 14) {
      checkIfWon();
    }
    setTimeout(returnToDefault, 2000)
    $('.footballIMG').animate({'left': '24.5%'}, "fast");
    drive++;
    downCount = 1;
    yardLine = 20;
    yardsToFirst = 10;
    driveFunction();
  }


    function checkForTouchdown(){
      if(yardLine >= '100') {
        $('.footballIMG').animate({'left': '87%'}, "fast");
        clearTimeout(wrReturnToDefault);
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
      checkIfWon();
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
  }

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

  var testingStringPostSnap =function repeatString() {
                var intervalID = window.setInterval(postSnapStringsFlash, 17);
                                 return intervalID;
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

  $('.startGameBtn').on('click', function() {
    timesPlayed = 0;
    var initials = document.getElementById("initials").value;
    // clearInterval(checkForInitials);
    $('.pregame').addClass('placeholderPregame');
    $('.placeholderPregame').removeClass('pregame');
    $('.topLeft').css('margin-right', 0);
    $('.placeholderTable').addClass('table');
    $('.table').removeClass('placeholderTable');
    $('.placeHolderTopRight').addClass('topRight');
    $('.placeHolderTopLeft').addClass('topLeft');
    $.ajax({
        type: 'POST',
        url: "/",
        data: {initials: initials, timesWon: timesWon, timesPlayed: timesPlayed},
        success: function(data) {
        },
     })
    $.get( "/" + 'data', function( data ) {
      console.log(" this is data.timesplayed   " + data.timesPlayed);
      $( ".record" ).text( data.timesPlayed + " - " + data.timesWon );
    }, "json" );
  })

  $('.passImage').on('click', function() {
    var thirtySeconds = 30;
    var display = $('#playClock');
    playClockId = 0;
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
  });

  $('.buttonSnap').on('click', function() {
    clearInterval(playClockId);
    timerId = 0;
    sackTimer = setTimeout(sacked,5000);
    $('.defensiveSpan').text(pickRandomPostSnapString(postSnapStrings));
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
      $('.defensiveSpan').text(pickRandomPostSnapString(postSnapStrings));
    }, 1500);
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
    setTimeout(returnToDefault, 1500);
  }

  // function checkForInitials() {
  //   $('#mainInitials input').blur(function() {
  //       if( !$(this).val() ) {
  //         console.log("The fuck is this")
  //             $(this).parents('p').addClass('warning');
  //       }
  //   });
  // }

  $(window).load(function() {
    $('.down').text("1st and " + yardsToFirst);
    $('.score').text(score);
  })


  function returnToDefault () {
    PlayResults.Yards = .3 + randomInteger();
    PlayResults.WR1OddsAdj = 0;
    PlayResults.WR2OddsAdj = 0;
    PlayResults.WR3OddsAdj = 0;
    PlayResults.GlobalOddsAdj = 0;
    blitz = 0;
    timeoutIntercepted();
    if(interceptionReturnToDefaultBreak === true) {
      $('.buttons').css('background', 'url("http://cdn.fansided.com/wp-content/blogs.dir/276/files/2014/12/gruden.jpg")');
      return;
    };
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
    $('.yards').text(yardsToFirst);
    $('.down').text(downCount);
    checkIfTurnover();
    driveFunction();
    if(yardsToFirst <= 0) {
      downCount = 1;
      yardsToFirst = 10;
    }
    scoreboardUpdate();
    interception = 0;
  }

  $('.wr1').on('click', function() {
   var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(blitzSackedTime);
    clearTimeout(returnToDefaultEndSacks);
    clearInterval(timerId);
    wrReturnToDefault = setTimeout(returnToDefault, 2850);
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2) {
      $('.defensiveSpan').text("Pass to WR1 is intercepted!");
      $('.footballIMG').animate({'left': '24.5%'}, "fast");
      interception++
      yardLine = 20;
      drive++;
      yardsToFirst = 10;
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
    if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .95) {
      $('.defensiveSpan').text("Pass to WR1 is complete for a TOUCHDOWN!");
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    downCount++;
    checkForTouchdown();
    checkIfLost();
    checkIfTurnover();
    checkIfWon();
  })

  $('.wr2').on('click', function() {
    var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(blitzSackedTime);
    clearTimeout(returnToDefaultEndSacks);
    wrReturnToDefault= setTimeout(returnToDefault, 2850);
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
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .2 && PlayResults.WR2OddsAdj + PlayResults.Yards < .7) {
      $('.defensiveSpan').text("Pass to WR2 is complete for an 8 yard gain!");
      $('.footballIMG').animate({'left': '+=6%'}, 'slow');
      yardLine+=8
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
    if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .95) {
      $('.defensiveSpan').text("Pass to WR2 is complete for a TOUCHDOWN!");
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    downCount++;
    checkForTouchdown();
    checkIfTurnover();
    checkIfLost();
    checkIfWon();
  })  

  $('.wr3').on('click', function() {
      var yardsClass = document.getElementsByClassName('yards');
    clearTimeout(sackTimer);
    clearTimeout(blitzSackedTime);
    clearTimeout(returnToDefaultEndSacks);
    wrReturnToDefault= setTimeout(returnToDefault, 2850);
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
    if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .95) {
      $('.defensiveSpan').text("Pass to WR3 is complete for a TOUCHDOWN!");
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    downCount++
    checkForTouchdown();
    checkIfTurnover();
    checkIfLost();
    checkIfWon();
  })

    function pickRandomPassOutcome(array) {
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


  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var list = document.querySelector('.defensiveSpan');
  var observer = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        if(defSpanClassic[0].innerText === "The LOLB is blitzing!") {
          WR1OddsCount++;
          blitz++;
          clearSackTimer();
        }

        if(defSpanClassic[0].innerHTML === "The Safety Is Cheating Right!") {
          WR1OddsCount++;
          WR3OddsCount--;
          WR2OddsCount++;
        }

        if(defSpanClassic[0].innerText === "Left Cornerback Blitz!") {
          WR1OddsCount++;
          blitz++;
          clearSackTimer();
        }

        if(defSpanClassic[0].innerText === "WR1 Pressed!") {
          WR1OddsCount--;
        }

        if(defSpanClassic[0].innerText === "The LOLB dropped into coverage!") {
          WR1OddsCount--;
          WR2OddsCount--;
        }

        if(defSpanClassic[0].innerText === "The Safety is cheating left") {
          WR1OddsCount--;
          WR3OddsCount++;
          WR2OddsCount++;
        }

        if(defSpanClassic[0].innerText === "The MLB is blitzing!") {
          WR2OddsCount++;
          blitz++;
          clearSackTimer();            
        }

        if(defSpanClassic[0].innerText === "Safety Blitz!") {
          GlobalOddsCount++;
          blitz++;
          clearSackTimer();
        }

        if(defSpanClassic[0].innerText === "WR3 beat his man!") {
          WR3OddsCount++;
          WR3OddsCount++;
        }

       
        if(defSpanClassic[0].innerText === "WR2 pressed!") {
         WR2OddsCount--;
         WR2OddsCount--;
        }

         
        if(defSpanClassic[0].innerText === "The MLB dropped back into coverage") {
          WR2OddsCount--;
        }

         
        if(defSpanClassic[0].innerText === "The Safety is staying mid-field!") {
          WR2OddsCount--;
        }       
        if(defSpanClassic[0].innerText === "Right Cornerback Blitz!") {
          WR3OddsCount++;
          blitz++;
          clearSackTimer();            
        }
        if(defSpanClassic[0].innerText === "The ROLB is blitzing!") {
          WR3OddsCount++;
          blitz++;
          clearSackTimer();  
        }
        if(defSpanClassic[0].innerText === "WR3 pressed!") {
          WR3OddsCount--;
          WR3OddsCount--;
        }
        if(defSpanClassic[0].innerText === "The ROLB dropped back into coverage") {
          WR3OddsCount++;
          WR2OddsCount--;
        }
        if(defSpanClassic[0].innerText === "The Safety is cheating right") {
          WR1OddsCount++;
          WR3OddsCount--;
        }
        if(defSpanClassic[0].innerText === "All Out Blitz!") {
          GlobalOddsCount++;
          blitz++;
          clearSackTimer();       
        }
        if(defSpanClassic[0].innerText === "The line is holding strong!") {
          GlobalOddsCount++;
        }
        if(defSpanClassic[0].innerText === "WRs stuffed at the line!") {
          GlobalOddsCount--;
          GlobalOddsCount--;
        }         
        if(defSpanClassic[0].innerText === "The Defensive End is barreling towards you!") {
          GlobalOddsCount--;
          WR3++;
          blitz++;
          clearSackTimer();
        }
        if(defSpanClassic[0].innerText === "Dammit Donald!") {
          GlobalOddsCount--;
          WR1++;
          blitz++;
          clearSackTimer();
        }  
    PlayResults.WR1OddsAdj = PlayResults.WR1OddsAdj+ WR1OddsCount * .1;
    PlayResults.WR2OddsAdj= PlayResults.WR2OddsAdj+ WR2OddsCount * .1;
    PlayResults.WR3OddsAdj= PlayResults.WR3OddsAdj+ WR3OddsCount * .1;
    PlayResults.GlobalOddsAdj= PlayResults.GlobalOddsAdj+ GlobalOddsCount * .1;
      }
    });
  })

  observer.observe(list, {
    attributes: true, 
    childList: true, 
    characterData: true
  });
});