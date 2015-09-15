window.onload=playClick;

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


function playClick() {
var plays = document.getElementById('playImages');
var playImg = document.getElementsByClassName('playImages');

    for(var i = 0; i < playImages.length; i++)
        playImg[i].addEventListener("click", function() {
        var thirtySeconds = 30;
        var display = document.querySelector('#playClock')
        playClock(thirtySeconds, display)
        })
}
