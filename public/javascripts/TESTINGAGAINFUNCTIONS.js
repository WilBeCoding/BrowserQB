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


console.log(PlayResults.Yards);


var IncTest = function test() {
  WR1OddsTest = 0;
  WR1OddsTest++;
  PlayResults.WR1OddsAdj = PlayResults.WR1OddsAdj + WR1OddsTest;
}



