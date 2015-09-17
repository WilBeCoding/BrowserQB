window.onload=start;


function start() {
  snap();
  // selectPlay();
}


function playClock(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function snap() {
var snapButton = document.getElementsByClassName('snap');
    console.log("Snap function loads")

    for(var i = 0; i < snapButton.length; i++) {
        snapButton[i].addEventListener("click", function() {
            var thirtySeconds = 30;
            var display = document.querySelector('#playClock')
            playClock(thirtySeconds, display)
        })
    }
}


// function selectPlay() {
//     var playImg = document.getElementsByClassName('playImages');
//     var snapButton = document.getElementsByClassName('placeHoldersnap');
//     var topLeft = document.getElementsByClassName('topLeft');
//     var topRight = document.getElementsByClassName('topRight');
//     var preSnapDefense = document.getElementsByClassName('placeholderBirdsEyeView');
//     var buttons = document.getElementsByClassName('placeholderButtons')

//     console.log("SelectPlay loads");
//     for(var i = 0; i < playImg.length; i++) {
//         playImg[i].addEventListener("click", function() {
//             topLeft[0].setAttribute('invisible', 'active')

//             topRight[0].setAttribute('invisible', 'active');
//             buttons[0].setAttribute('buttons', 'active')
//             snapButton[0].setAttribute('snap', 'active');
//             // preSnapDefense[0].className += 'birdsEyeView';

//         })
//     }
// }



