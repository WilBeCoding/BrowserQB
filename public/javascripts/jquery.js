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



  function playClock(duration, display) {
      var timer = duration, minutes, seconds;

      setInterval(function () {
          minutes = parseInt(timer / 60, 10)
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.text(seconds);
          console.log(display.textContent);
          if (--timer < 0) {
              timer = null;
          }
      }, 1000);
  }

  $('.playImages').on('click', function() {
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


// Need to add placeholders for top right and top left divs that I can use instead of invisible

// Need to figure out why the fuck birdsEyeView image is staying
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
    $('buttonSnap').removeClass('buttonSnapPlaceholder');
  }


  $('.wr1').on('click', function() {
      setTimeout(returnToDefault, 4000);
  })

});



// Can I set the flashing of the strings within the setInterval function thing?
    // addClass-removeClass