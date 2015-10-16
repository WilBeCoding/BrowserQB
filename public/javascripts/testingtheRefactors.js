PlayResults = {
  WR1initialOdds: Random Number Between 0 and 50,
  WR2initialOdds: Random Number Between 0 and 50,
  WR3initialsOdds: Random Number between 0 and 50,
  WR1timeIncreaseOdds: Random Number between 1 and 5,
  WR2timeIncreaseOdds: Random Number between 1 and 5,
  WR3timeIncreaseOdds: Random Number between 1 and 5,
  WR1oddsAdjustment: Random Number derived from mutation function,
  WR2oddsAdjustment: Random Number derived from mutation function,
  WR3oddsAdjustment: Random Number derived from mutation function,
  GlobalOddsAdjustment: Random Number derived from mutaiton function,
  CurrentWR1Odds: 28,
  CurrentWR2Odds: WR2initialOdds + WR2timeIncreaseOdds + GlobalOddsAdjustment,
  CurrentWR3odds: WR3initialsOdds + WR3timeIncreaseOdds + GlobalOddsAdjustment
}

function currentOdds(WRodds) {
    if(WRodds < 5) {
      $('.defensiveSpan').text("Pass to WR3 is intercepeted!");
      $('.footballIMG').animate({'left': '24.5%'}, "fast");
      interception++;
      yardLine = 20;
      yardsToFirst = 10;
    }
    if(WRodds >= 5 && WRodds < 25) {
      $('.defensiveSpan').text("Incomplete Pass");
    }
    if(WRodds >= 25 && WRodds < 50) {
      $('.defensiveSpan').text("Pass to WR3 is complete for an 8 yard gain!");
      $('.footballIMG').animate({'left': '+=6%'}, 'slow');
      yardLine+=8
      yardsToFirst-=8
    }
    if(WRodds >= 50 && WRodds < 70) {
      $('.defensiveSpan').text("Pass to WR3 is complete for a 15 yard gain!");
      $('.footballIMG').animate({'left': '+=9.5%'},'slow');
      yardLine += 15;
      yardsToFirst -=15
    }
    if(WRodds >= 70 && WRodds < 90) {
      $('.defensiveSpan').text("Pass to WR3 is complete for a 25 yard gain!");
      $('.footballIMG').animate({'left': '+=19.8%'}, 'slow');;
      yardLine += 25;
      yardsToFirst -= 25;        
    }
    if(WRodds > 90) {
      $('.footballIMG').animate({'left': '86.5%'}, 'slow');
      yardLine = 100;
    }
    checkForTouchdown();
    var checkState = setTimeout(checkGameState,1);
}

console.log(currentOdds(PlayResults.CurrentWR1Odds));

  var intialWRodds = function randomInt() {
                        return Number((Math.random() * (50 - 0)) + 0);
                      };


var wrTimeIncreaseOdds= function randomInt(){
                            return Number((Math.random() * (5 - 1)) + 1);
                        };


var postSnapReadOddsAdjustment = function randomInt(){
                                    return Number((Math.random() * (25 - 10)) + 10);
                                 };
