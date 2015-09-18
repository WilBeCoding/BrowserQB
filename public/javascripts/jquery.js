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
      Safety: "The Safety staying mid-field!",
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
]


  // $('.snap').on('click', function() {
  //   console.log("DOES THIS HIT SNAP JQUERY")
  //   $('.snap').addClass('invisible')
  // })

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
      timerId = window.setInterval(function(){
        $('.defensiveSpan').text(pickRandomPostSnapString(postSnapStrings));
      }, 2000);
  })

  $('.wr1').on('click', function() {
      clearInterval(timerId);
      $('.defensiveSpan').text("Pass Completed to WR1!");
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
  }


  $('.wr1').on('click', function() {
      setTimeout(returnToDefault, 4000);
  })

    function pickRandomPassOutcome(array) {
      // var $defSpan = $('.defensiveSpan');
       var result;
       var count = 0;
       var key;
       var keyArray = [];
       // if the text in defensiveSpan is from the zero index of postSnapStrings then increase the odds of getting a medium and long completion

       for(var i = 0; i < passOutcomeStrings.length; i++) {
       // if(defSpan.innerText === postSnapStrings[0][i]) {
          // console.log(postSnapStrings[0][i]);
       }
       for (var prop in array)
           if (Math.random() < 1/++count) {
              result = array[prop];
            };
        for (var key in result) {
            keyArray.push(key);
        }
       return result[keyArray[Math.floor(Math.random() * keyArray.length)]]    
   }

   console.log(pickRandomPassOutcome(passOutcomeStrings));

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

$('.buttonSnap').on('click', function() {
  console.log("pickRandom function is invoked")
     var defSpan = $('.defensiveSpan');
     var defSpanClassic = document.getElementsByClassName('defensiveSpan');
     var result;
     var count = 0;
     var key;
     var keyArray = [];


     // if the text in defensiveSpan is from the zero index of postSnapStrings then increase the odds of getting a medium and long completion


// MASSIVE SERIES OF IF STATEMENTS?

     // for(var i = 0; i < postSnapStrings.length; i++) {
       if(defSpanClassic.innerHTML === WR1oddsIncreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }
       if(defSpanClassic.innerHTML === WR1oddsDecreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }
       if(defSpanClassic.innerHTML === WR2oddsIncreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }

       if(defSpanClassic.innerHTML === WR2oddsDecreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }

       if(defSpanClassic.innerHTML === WR3oddsIncreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }

       if(defSpanClassic.innerText === WR3oddsDecreaseObjectRandomValue) {
          console.log("defSpanClassic with innerText");
       }

       if(defSpan.innerText === globalOddsIncreaseObjectRandomValue) {
          console.log("defSpan with innertext");
       }

       if(defSpan.innerHTML === globalOddsDecreaseObjectRandomValue) {
          console.log("defSpan with innerHTML");
       }
    return runThis();
 });

// $(document).load(function() {
//   pickRandomPassOutcome();
// })


// Can I set the flashing of the strings within the setInterval function thing?
    // addClass-removeClass
});

// Set Interval