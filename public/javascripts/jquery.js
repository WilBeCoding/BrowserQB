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
  $('.snap').on('click', function() {
    console.log("DOES THIS HIT SNAP JQUERY")
    $('.snap').addClass('invisible')
  })
});



    // addClass-removeClass