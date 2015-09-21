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
    setTimeout(returnToDefault, 4200);
    clearInterval(timerId);
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').css('margin-left', '-=100px');
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
  }

var blitzSackedTime = 0;
var returnToDefaultEndSacks = 0;
var downCount = 1;
var yardLine = 20;
var score = 0;
var drive = 1;


 function refresh() {
  location.reload();
 }

  function lost() {
    $('.defensiveSpan').text("You Lost!");
    setTimeout(refresh, 1500);
  }

  function won() {
    $('.defensiveSpan').text("You Won!")
    setTimeout(refresh, 1500);
  }

  function driveFunction() {
    console.log("driveFunction is running");
    if(drive === 2) {
      $('.drive').text("2nd of 3")
    }
    if(drive === 3 && score !== 14) {
      setTimeout(lost, 1000);
    }
    if(drive ===3) {
      $('.drive').text("Final Drive")
    }
    if(score !== 21 && drive === 4) {
      $('defensiveSpan').text("You Lost")
   }
  }

  function countDown() {
    console.log("countDown is Hit")
    if(downCount === 1) {
      $('.down').text("1st")
    }
    if(downCount === 2) {
      $('.down').text("2nd")
    }
    if(downCount === 3) {
      $('.down').text("3rd")
    }
    if(downCount === 4) {
      $('.down').text("4th")
    }
    if(downCount === 5) {
      $('.defensiveSpan').text("TURNOVER ON DOWNS!");
      $('.footballIMG').css('margin-left', mgr='0');
      downCount = 1;
      $('.down').text("1st");
      drive++
    }
    driveFunction();
  }

  function clearSackTimer() {
    clearInterval(timerId);
    clearTimeout(sackTimer);
    if(blitzSackedTime === 0) {
      blitzSackedTime = setTimeout(blitzSacked, 2000);
    }
    returnToSackDefaultEndSacks = setTimeout(returnToDefault, 4200);
    console.log("clearSackTimer fired");
  }


  function blitzSacked(){
    $('.defensiveSpan').text("SACKED!");
    $('.footballIMG').css('margin-left', '-=100px');
    $('.WRbuttons').addClass('placeholderWRbuttons');
    $('.WRbuttons').removeClass('WRbuttons');
    console.log("blitzSacked fired");
    blitzSackedTime = 0;
  }

  
  // // function eightYdGainFootballSlider () {
  //   $('.')
  // }

  function checkForTouchdown(){
    if(yardLine >= '100') {
      console.log("checkForTouchdown function hits");
      $('.footballIMG').css('margin-left', mgr='0');
      $('.defensiveSpan').text("Touchdown!")
      drive++;
      downCount = 1;
      $('.yards').text("10");

      if(score === 0) {
        $('.score').text("7");
        score += 7;
      }
      else if(score === 7) {
        $('.score').text("14");
        score += 7;
      }
      else if(score === 14) {
        setTimeout(won, 1000);     
      }
    }
    driveFunction();
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

  var postSnapStringsFlash = pickRandomPostSnapString(postSnapStrings)

  var WR1oddsIncreaseObject = postSnapStrings[0];
  var WR1oddsDecreaseObject = postSnapStrings[1];
  var WR2oddsIncreaseObject = postSnapStrings[2];
  var WR2oddsDecreaseObject = postSnapStrings[3];
  var WR3oddsIncreaseObject = postSnapStrings[4];
  var WR3oddsDecreaseObject = postSnapStrings[5];
  var globalOddsIncreaseObject = postSnapStrings[6];
  var globalOddsDecreaseObject = postSnapStrings[7];




var playClockId = 0;
var display;
  function playClock(duration, display) {
      playClockId = 0;
      var timer = duration, minutes, seconds;

      playClockId = setInterval(function () {
                        minutes = parseInt(timer / 60, 10)
                        seconds = parseInt(timer % 60, 10);

                        minutes = minutes < 10 ? "0" + minutes : minutes;
                        seconds = seconds < 10 ? "0" + seconds : seconds;

                        display.text(seconds);
                        // console.log(display.textContent);
                        // console.log(timer)
                        if (--timer < 0) {
                            timer = null;
                        }
                      }, 1000);
  }

  $('.playImages').on('click', function() {
    playClockId = 0;
    var thirtySeconds = 30;
    var display = $('#playClock');
    playClock(thirtySeconds, display);
    $('.topRight').addClass('placeHolderTopRight');
    $('.topLeft').addClass('placeHolderTopLeft');
    $('.placeHolderTopRight').removeClass('topRight');
    $('.placeHolderTopLeft').removeClass('topLeft');
    $('.placeholderButtons').addClass('buttons');
    $('.buttons').removeClass('placeholderButtons');
    $('.placeHolderSnap').addClass('snap');
    $('.snap').removeClass('placeHolderSnap');
    $('.placeholderBirdsEyeView').addClass('birdsEyeView');
    $('.birdsEyeView').removeClass('placeholderBirdsEyeView');

  });

var timerId = 0;

var sackTimer = 0;
  $('.buttonSnap').on('click', function() {
      timerId = 0;
      clearInterval(playClockId);
      sackTimer = setTimeout(sacked,8000);  
      $('.snap').addClass('placeHolderSnap');
      $('.snap').removeClass('snap');
      $('.buttonSnap').addClass('buttonSnapPlaceholder');
      $('.buttonSnap').removeClass('buttonSnap');
      $('.placeholderWRbuttons').addClass('WRbuttons');
      $('.placeholderWRbuttons').removeClass('placeholderWRbuttons');
      $('#playClock').removeClass('playClock');
      $('#playClock').addClass('hiddenPlayClock');
      $('.birdsEyeView').addClass('placeholderBirdsEyeView');
      $('.placeholderBirdsEyeView').removeClass('birdsEyeView');
      timerId = window.setInterval(function(){
        $('.defensiveSpan').text(pickRandomPostSnapString(postSnapStrings));
      }, 2000);
  })



  function returnToDefault () {
    $('.placeHolderTopRight').addClass('topRight');
    $('.placeHolderTopLeft').addClass('topLeft');
    $('.buttons').addClass('placeholderButtons');
    $('.placeholderButtons').removeClass('buttons');
    $('.snap').addClass('placeHoldersnap');
    $('.placeholderButtons').removeClass('snap');
    $('.birdsEyeView').addClass('placeholderBirdsEyeView');
    $('.placeholderBirdsEyeView').removeClass('birdsEyeView');
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
  }

  $('.wr1').on('click', function() {
    console.log(yardLine);
      clearTimeout(sackTimer);
      clearTimeout(blitzSackedTime);
      clearTimeout(returnToDefaultEndSacks);
      clearTimeout(blitzSackedTime);

    var yardsClass = document.getElementsByClassName('yards');
      clearInterval(timerId);
      setTimeout(returnToDefault, 4200);
      $('.WRbuttons').addClass('placeholderWRbuttons');
      $('.WRbuttons').removeClass('WRbuttons');

      if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2) {
        $('.defensiveSpan').text("Pass to WR1 is intercepeted!");
        $('.footballIMG').css('margin-left', mgr='0');
        yardLine = 20;
        drive++;
        console.log(drive);
      }
      if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .2 && PlayResults.WR1OddsAdj + PlayResults.Yards < .7) {
        $('.defensiveSpan').text("Pass to WR1 is complete for an 8 yard gain!")
        $('.footballIMG').css('margin-left', '+=100px');;
        if(yardsClass[0].innerText === '2') {
          $('.yards').text('10');
          downCount = 1;
        }else{
          $('.yards').text('2')
          downCount++
        }
        yardLine += 8;
      }
      if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .7 && PlayResults.WR1OddsAdj + PlayResults.Yards <= .8) {
        $('.defensiveSpan').text("Pass to WR1 is complete for a 15 yard gain!");
        $('.footballIMG').css('margin-left', '+=175px');
        $('.yards').text('10');
        yardLine += 15;

      }
      if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .81 && PlayResults.WR1OddsAdj + PlayResults.Yards <= .94) {
        $('.defensiveSpan').text("Pass to WR1 is complete for a 25 yard gain!")
        $('.footballIMG').css('margin-left', '+=280px');
        $('.yards').text('10');
        yardLine += 25;

      }
      if(PlayResults.WR1OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .95) {
        $('.defensiveSpan').text("Pass to WR1 is complete for a TOUCHDOWN!");
        $('.footballIMG').css('margin-left', '65%');
        $('.yards').text('10');
        yardLine = 100;
        drive++;
        console.log(drive);


      }
      PlayResults.Yards = .3 + randomInteger();
      PlayResults.WR1OddsAdj = 0;
      PlayResults.WR2OddsAdj = 0;
      PlayResults.WR3OddsAdj = 0;
      PlayResults.GlobalOddsAdj = 0;
      checkForTouchdown();
      countDown();
      driveFunction();
      console.log(drive);


  })

  $('.wr2').on('click', function() {
    console.log(yardLine);

      clearTimeout(sackTimer);
      clearTimeout(blitzSackedTime);
      clearTimeout(returnToDefaultEndSacks);
      clearTimeout(blitzSackedTime);

      var yardsClass = document.getElementsByClassName('yards');
      setTimeout(returnToDefault, 4200);
      clearInterval(timerId);

      $('.WRbuttons').addClass('placeholderWRbuttons');
      $('.WRbuttons').removeClass('WRbuttons');

      if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2) {
        $('.defensiveSpan').text("Pass to WR2 is intercepeted!");
        $('.footballIMG').css('margin-left', mgr='0');
        yardLine = 20;
        downCount=0;
        drive++;
      }
      if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .2 && PlayResults.WR2OddsAdj + PlayResults.Yards < .7) {
        $('.defensiveSpan').text("Pass to WR2 is complete for an 8 yard gain!");
        $('.footballIMG').css('margin-left', '+=100px');
        if(yardsClass[0].innerText === '2') {
          $('.yards').text('10');
          downCount = 1;
        }else{
          $('.yards').text('2')
          downCount++
        }
        yardLine+=8
      }
      if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .7 && PlayResults.WR2OddsAdj + PlayResults.Yards <= .8) {
        $('.defensiveSpan').text("Pass to WR2 is complete for a 15 yard gain!");
        $('.footballIMG').css('margin-left', '+=175px');
        $('.yards').text('10');
        yardLine += 15;
        downCount = 1;
      }
      if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .81 && PlayResults.WR2OddsAdj + PlayResults.Yards <= .94) {
        $('.defensiveSpan').text("Pass to WR2 is complete for a 25 yard gain!");
        $('.footballIMG').css('margin-left', '+=280px');
        $('.yards').text('10');
        yardLine += 25;
        downCount = 1;
      }
      if(PlayResults.WR2OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .95) {
        $('.defensiveSpan').text("Pass to WR2 is complete for a TOUCHDOWN!");
        $('.footballIMG').css('margin-left', '65%');
        $('.yards').text('10');
        yardLine = 100;
        downCount = 1;
        drive++;
      }
      PlayResults.Yards = .3 + randomInteger();
      PlayResults.WR1OddsAdj = 0;
      PlayResults.WR2OddsAdj = 0;
      PlayResults.WR3OddsAdj = 0;
      PlayResults.GlobalOddsAdj = 0;
      countDown();
      checkForTouchdown();
      driveFunction;
  })  

  $('.wr3').on('click', function() {
    console.log(yardLine);

      clearTimeout(sackTimer);
      clearTimeout(blitzSackedTime);
      clearTimeout(blitzSackedTime);
      clearTimeout(returnToDefaultEndSacks);

      var yardsClass = document.getElementsByClassName('yards');
      setTimeout(returnToDefault, 4200);
      clearInterval(timerId);
      $('.WRbuttons').addClass('placeholderWRbuttons');
      $('.WRbuttons').removeClass('WRbuttons');

      if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj < .2) {
        $('.defensiveSpan').text("Pass to WR3 is intercepeted!");
        $('.footballIMG').css('margin-left', mgr='0');
        yardLine = 20;
        downCount = 1;
        drive++;
      }
      if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .2 && PlayResults.WR3OddsAdj + PlayResults.Yards < .7) {
        $('.defensiveSpan').text("Pass to WR3 is complete for an 8 yard gain!");
        $('.footballIMG').css('margin-left', '+=100px');
        if(yardsClass[0].innerText === '2') {
          $('.yards').text('10');
          downCount = 1;
        }else{
          $('.yards').text('2')
          downCount++
        }
        yardLine+=8
      }
      if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .7 && PlayResults.WR3OddsAdj + PlayResults.Yards <= .8) {
        $('.defensiveSpan').text("Pass to WR3 is complete for a 15 yard gain!");
        $('.footballIMG').css('margin-left', '+=175px');
        yardLine += 15;
        downCount = 1;
      }
      if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .81 && PlayResults.WR3OddsAdj + PlayResults.Yards <= .94) {
        $('.defensiveSpan').text("Pass to WR3 is complete for a 25 yard gain!");
        $('.footballIMG').css('margin-left', '+=280px');
        yardLine += 25;
        downCount = 1;
      }
      if(PlayResults.WR3OddsAdj + PlayResults.Yards + PlayResults.GlobalOddsAdj >= .95) {
        $('.defensiveSpan').text("Pass to WR3 is complete for a TOUCHDOWN!");
        $('.footballIMG').css('margin-left', '65%');
        downCount = 1;
        yardLine = 100;
        drive++;
      }
      PlayResults.Yards = .3 + randomInteger();
      PlayResults.WR1OddsAdj = 0;
      PlayResults.WR2OddsAdj = 0;
      PlayResults.WR3OddsAdj = 0;
      PlayResults.GlobalOddsAdj = 0;
      countDown();   
      checkForTouchdown();
      driveFunction();
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



var WR1OddsCount = 0;
var WR2OddsCount = 0;
var WR3OddsCount = 0;
var GlobalOddsCount = 0;


  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var list = document.querySelector('.defensiveSpan');
  
  var observer = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {

     var defSpan = $('.defensiveSpan');
     var defSpanClassic = document.getElementsByClassName('defensiveSpan');
     var result;
     var WR1OddsCount = 0
     var WR2OddsCount = 0
     var WR3OddsCount = 0
     var GlobalOddsCount = 0
     var key;
     var keyArray = [];

         if(defSpanClassic[0].innerText === "The LOLB is blitzing!") {
            WR1OddsCount++;
            clearSackTimer();
           }

         if(defSpanClassic[0].innerHTML === "The Safety Is Cheating Right!") {
            WR1OddsCount++;
            WR3OddsCount--;
            WR2OddsCount++;
         }

         if(defSpanClassic[0].innerText === "Left Cornerback Blitz!") {
            WR1OddsCount++;
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
            clearSackTimer();
         }

         if(defSpanClassic[0].innerText === "Safety Blitz!") {
            GlobalOddsCount++;
            clearSackTimer();
         }

         
         if(defSpanClassic[0].innerText === "WR2 beat his man!") {
            WR2OddsCount++;
            WR2OddsCount++;
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
            clearSackTimer();
         }

         
         if(defSpanClassic[0].innerText === "The ROLB is blitzing!") {
            WR3OddsCount++;
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
            clearSackTimer();
         }

         
         if(defSpanClassic[0].innerText === "Dammit Donald!") {
            GlobalOddsCount--;
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