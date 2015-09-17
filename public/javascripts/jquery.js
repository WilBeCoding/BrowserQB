 $( document ).ready(function() {


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

  })











});



    // addClass-removeClass