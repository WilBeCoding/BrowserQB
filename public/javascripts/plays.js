var passingPlays = {
  Smash: {
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

var defensiveCoverageImgs = [
      {src:"../images/cover2.jpg"},
      {src:"../images/cover3.png"},
      {src:"../images/manCoverage.png"}
    ];

var randomImage = function randomInt(){
    return Math.floor((Math.random() * (3 - 0)) + 0);
};

// Put this jQuery on load as well as in the returnToDefault function
// $('.placeHolderSnap .img').attr('src', defensiveCoverageImgs[randomImage].src)

// console.log(randomImage())

  function getRndmImgSrc(){
    var imageSrc = defensiveCoverageImgs[randomImage()].src
    return imageSrc
  }

console.log(getRndmImgSrc());

// So then when calculating what strings to show and whatnot it starts with something like
if($('.birdsEyeImg')).attr(('src')) === defensiveCoverageImgs[0].src) {
  // run the cover2 string information for the given play
}

if($('.birdsEyeImg')).attr(('src')) === defensiveCoverageImgs[1].src) {
  // run the cover3 string information for the given play
}

if($('.birdsEyeImg')).attr(('src')) === defensiveCoverageImgs[2].src) {
  // run the manCoverage string information for the given play
}

