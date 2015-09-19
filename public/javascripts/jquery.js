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

  $('.buttonSnap').on('click', function() {
      timerId = 0;
      clearInterval(playClockId);      
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

  $('.wr1').on('click', function() {
      clearInterval(timerId);
      $('.defensiveSpan').text("Pass Completed to WR1!");
  })

    $('.wr2').on('click', function() {
      clearInterval(timerId);
      $('.defensiveSpan').text("Pass Completed to WR2!");
  })

  $('.wr3').on('click', function() {
      clearInterval(timerId);
      $('.defensiveSpan').text("Pass Completed to WR3!");
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
      setTimeout(returnToDefault, 4200);
      console.log(WR1OddsCount);
      console.log(WR2OddsCount);
      console.log(WR3OddsCount);
      console.log(GlobalOddsCount);
  })

  $('.wr2').on('click', function() {
      setTimeout(returnToDefault, 4200);
  })  

  $('.wr3').on('click', function() {
      setTimeout(returnToDefault, 4200);
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
           }

         if(defSpanClassic[0].innerHTML === "The Safety Is Cheating Right!") {
            WR1OddsCount++;
            WR3OddsCount--;
            WR2OddsCount++;
         }

         if(defSpanClassic[0].innerText === "Left Cornerback Blitz!") {
            WR1OddsCount++;
         }

         if(defSpanClassic[0].innerText === "WR1 Pressed!") {
            WR1OddsCount--;
         }

         if(defSpanClassic[0].innerText === "The LOLB dropped into coverage!") {
            WR1OddsCount--;
         }

         if(defSpanClassic[0].innerText === "The Safety is cheating left") {
            WR1OddsCount--;
            WR3OddsCount++;
            WR2OddsCount++;
         }

         if(defSpanClassic[0].innerText === "The MLB is blitzing!") {
            WR2OddsCount++;
         }

         if(defSpanClassic[0].innerText === "Safety Blitz!") {
            GlobalOddsCount++;
         }

         
         if(defSpanClassic[0].innerText === "WR2 beat his man!") {
            WR2OddsCount++;
            WR2OddsCount++;
         }

         
         if(defSpanClassic[0].innerText === "WR2 pressed!") {
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
         }

         
         if(defSpanClassic[0].innerText === "The ROLB is blitzing!") {
            WR3OddsCount++;
         }

         
         if(defSpanClassic[0].innerText === "WR3 pressed!") {
            WR3OddsCount--;
            WR3OddsCount--;
         }

         
         if(defSpanClassic[0].innerText === "The ROLB dropped back into coverage") {
            WR3OddsCount++;
         }

         
         if(defSpanClassic[0].innerText === "The Safety is cheating right") {
            WR1OddsCount++;
            WR3OddsCount--;
         }

         
         if(defSpanClassic[0].innerText === "All Out Blitz!") {
            GlobalOddsCount++;
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
         }

         
         if(defSpanClassic[0].innerText === "Dammit Donald!") {
            GlobalOddsCount--;
         }  
  PlayResults.WR1OddsAdj = PlayResults.WR1OddsAdj+ WR1OddsCount;
  PlayResults.WR2OddsAdj= PlayResults.WR2OddsAdj+ WR2OddsCount;
  PlayResults.WR3OddsAdj= PlayResults.WR3OddsAdj+ WR3OddsCount;
  PlayResults.GlobalOddsAdj= PlayResults.GlobalOddsAdj+ GlobalOddsCount;
      }
    });
  })

  observer.observe(list, {
    attributes: true, 
    childList: true, 
    characterData: true
  });



});