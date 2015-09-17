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

  $('.playImages').on('click', function() {
    $('.topRight').addClass('invisible');
    $('.topLeft').addClass('invisible');
    $('.placeholderButtons').addClass('buttons');
    $('.buttons').removeClass('placeholderButtons');
    $('.placeHolderSnap').addClass('snap');
    $('.snap').removeClass('placeHolderSnap');
    $('.placeholderBirdsEyeView').addClass('birdsEyeView');
    $('.birdsEyeView').removeClass('placeholderBirdsEyeView');
  });

  // $('.snap').on('click', function() {
  //   console.log("DOES THIS HIT SNAP JQUERY")
  //   $('.snap').addClass('invisible')
  // })

   function pickRandomProperty(array) {
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

   var postSnapStringsFlash = pickRandomProperty(postSnapStrings)



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


  $('.buttonSnap').on('click', function() {
      var thirtySeconds = 30;
      var display = $('#playClock');
      $('.buttonSnap').css({color: "orange"});
      console.log(playClock);
      playClock(thirtySeconds, display);
      $('.snap').addClass('placeHolderSnap');
      $('.snap').removeClass('snap');
      $('.buttonSnap').addClass('buttonSnapPlaceholder');
      $('.buttonSnap').removeClass('buttonSnap');
      $('.placeholderWRbuttons').addClass('WRbuttons');
      $('.placeholderWRbuttons').removeClass('placeholderWRbuttons');
      window.setInterval(function(){
        $('.defensiveSpan').text(pickRandomProperty(postSnapStrings));
      }, 2000);
  })

});



// Can I set the flashing of the strings within the setInterval function thing?
    // addClass-removeClass