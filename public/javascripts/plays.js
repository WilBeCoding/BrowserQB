var passingPlays = {
  Smash: {
    Cover2: {
      safetyRead1: 'Two safeties high',
      safetyRead2: 'Strong Safety is cheating forward',
      oLineStatus1: 'The line is holding their blocks',
      oLineStatus2: 'O-Line placeholder',
      hitchRoute1: "The CB drops back into coverage",
      hitchRoute2: "The FS is 15yds deep",
      hitchRoute3: "Mismatch with the LOLB",
      outsidePostRoute1: "The FS is deep",
      outsidePostRoute2: "CB is backpedaling",
      outsidePostRoute3: "WR is double covered",
      crossRoute1: "Nobody is following WR3",
      crossRoute2: "The MLB steps in front of the route",
      crossRoute3: 'The LOLB is in coverage',
      InsidePostRoute1: 'The SS is deep',
      InsidePostRoute2: 'The CB is backpedaling',
      InsidePostRoute3: 'WR is double covered'
    }
  },
  FourVerticals: {
    Cover2: {
      safetyRead1: 'Placeholder',
      safetyRead2: 'Placeholder',
      oLineStatus1: 'Placeholder',
      oLineStatus2: 'Placeholder',
      hitchRoute1: "Placeholder String",
      hitchRoute2: "Placeholder",
      hitchRoute3: "Placeholder",
      outsidePostRoute1: "Placeholder",
      outsidePostRoute2: "Placeholder",
      outsidePostRoute3: "Placeholder",
      crossRoute1: "Placeholder",
      crossRoute2: "Placeholder",
      crossRoute3: 'placeholder',
      InsidePostRoute1: 'placeholder',
      InsidePostRoute2: 'placeholder',
      InsidePostRoute3: 'placeholder'
    }
  },
  BobsYourUncle: {
    Cover2: {
      safetyRead1: 'Placeholder',
      safetyRead2: 'Placeholder',
      oLineStatus1: 'Placeholder',
      oLineStatus2: 'Placeholder',
      hitchRoute1: "Placeholder String",
      hitchRoute2: "Placeholder",
      hitchRoute3: "Placeholder",
      outsidePostRoute1: "Placeholder",
      outsidePostRoute2: "Placeholder",
      outsidePostRoute3: "Placeholder",
      crossRoute1: "Placeholder",
      crossRoute2: "Placeholder",
      crossRoute3: 'placeholder',
      InsidePostRoute1: 'placeholder',
      InsidePostRoute2: 'placeholder',
      InsidePostRoute3: 'placeholder'
    }
  }
}

var defensiveCoverageImgs = {
      Cover2: {src:"../images/cover2.jpg"},
      Cover3: {src:"../images/cover3.png"},
      ManCoverage: {src:"../images/manCoverage.png"}
  }

  function getRndmDefensivePlay() {
    // console.log("interval pass strings is hitting")
                              var result;
                              var output;
                              var count = 0;
                              for(var prop in defensiveCoverageImgs)
                                  if (Math.random() < 1/++count) {
                                     result = prop;
                                  }
                          return result
            }


         function getRndmDefensivePlayImg() {
             var imageSrc = defensiveCoverageImgs[getRndmDefensivePlay()].src
             return imageSrc
         }

           

console.log(getRndmDefensivePlayImg())


// So then when calculating what strings to show and whatnot it starts with something like
if($('.birdsEyeImg')).attr(('src')) === defensiveCoverageImgs.Cover2.src) {
  // run the cover2 string information for the given play
}

if($('.birdsEyeImg')).attr(('src')) === defensiveCoverageImgs.Cover3.src) {
  // run the cover3 string information for the given play
}

if($('.birdsEyeImg')).attr(('src')) === defensiveCoverageImgs.ManCoverage.src) {
  // run the manCoverage string information for the given play
}

