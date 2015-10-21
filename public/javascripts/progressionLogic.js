var passingPlays = {
  Smash: {
    Cover2: {
      safetyReads: {
        safetyRead1: 'Two safeties high',
        safetyRead2: 'Strong Safety is cheating forward'
      },
      oLineReads: {
        oLineStatus1: 'The line is holding their blocks',
        oLineStatus2: 'O-Line placeholder'
      },
      hitchRouteReads: {
        hitchRoute1: "The CB drops back into coverage",
        hitchRoute2: "The FS is 15yds deep",
        hitchRoute3: "Mismatch with the LOLB"
      },
      outsidePostRouteReads: {
        outsidePostRoute1: "The FS is deep",
        outsidePostRoute2: "CB is backpedaling",
        outsidePostRoute3: "WR is double covered"
      }
      crossRouteReads: {
        crossRoute1: "Nobody is following WR3",
        crossRoute2: "The MLB steps in front of the route",
        crossRoute3: 'The LOLB is in coverage',
      }
      insidePostRouteReads: {
        insidePostRoute1: 'The SS is deep',
        insidePostRoute2: 'The CB is backpedaling',
        insidePostRoute3: 'WR is double covered'
    }
  }
}

label 1
  select(name="progression1")
    option(value='p1WR1') WR1
    option(value='p1WR2') WR2
    option(value='p1WR3') WR3
    option(value='p1WR4') WR4

// ------------------------------------------------------
// Need to dim out options in the dropdown menu if 3 reads are selected for one WR
// -------- Have this function within the selection of the drop down thing. So in the jQuery file its all like 
  // --- Every time a drop down value is selected check the values and if a WR is selected 3 times do not 
  // let them be selected again


if($('.birdsEyeImg').attr('src', getRndmImgSrc) === defensiveCoverageImgs[0].src && smashSelected === true) {
  if(progression1.value === p1WR1) {
    Get random property value from passingPlays.Smash.Cover2.hitchRouteReads
  }
  if(progression1.value === p1WR2) {
    Get random property value from passingPlays.Smash.Cover2.outsidePostRouteReads
  }
  if(progression1.value === p1WR3) {
    Get random property value from passingPlays.Smash.Cover2.crossRouteReads
  }
  if(progression1.value === p1WR4) {
    Get random property value from passingPlays.Smash.Cover2.insidePostRouteReads
  }

  if(progression2.value === p2WR1) {
        Get random property value from passingPlays.Smash.Cover2.hitchRouteReads
  }
  if(progression2.value === p2WR2) {
        Get random property value from passingPlays.Smash.Cover2.outsidePostRouteReads
  }
  if(progression2.value === p2WR3) {
        Get random property value from passingPlays.Smash.Cover2.crossRouteReads
  }
  if(progression2.value === p2WR4) {
        Get random property value from passingPlays.Smash.Cover2.insidePostRouteReads
  }
  if(progression3.value === p3WR1) {
        Get random property value from passingPlays.Smash.Cover2.hitchRouteReads
  }
  if(progression3.value === p3WR2) {
        Get random property value from passingPlays.Smash.Cover2.outsidePostRouteReads
  }
  if(progression3.value === p3WR3) {
        Get random property value from passingPlays.Smash.Cover2.crossRouteReads
  }
  if(progression3.value === p3WR4) {
        Get random property value from passingPlays.Smash.Cover2.insidePostRouteReads
  }
  if(progression4.value === p4WR1) {
        Get random property value from passingPlays.Smash.Cover2.hitchRouteReads
  }
  if(progression4.value === p4WR2) {
        Get random property value from passingPlays.Smash.Cover2.outsidePostRouteReads
  }
  if(progression4.value === p4WR3) {
        Get random property value from passingPlays.Smash.Cover2.crossRouteReads
  }
  if(progression4.value === p4WR4) {
        Get random property value from passingPlays.Smash.Cover2.insidePostRouteReads
  }
  if(progression5.value === p5WR1) {
        Get random property value from passingPlays.Smash.Cover2.hitchRouteReads
  }
  if(progression5.value === p5WR2) {
        Get random property value from passingPlays.Smash.Cover2.outsidePostRouteReads
  }
  if(progression5.value === p5WR3) {
        Get random property value from passingPlays.Smash.Cover2.crossRouteReads
  }
  if(progression5.value === p5WR4) {
        Get random property value from passingPlays.Smash.Cover2.insidePostRouteReads
  }
}