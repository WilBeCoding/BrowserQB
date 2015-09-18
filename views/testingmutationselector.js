<!DOCTYPE html>
<ol contenteditable oninput="">
  <li>Press enter</li>
</ol>
<script>
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var list = document.querySelector('defensiveSpan');
  
  var observer = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
            console.log("Holy fucking shit IM MUTATING");
     var defSpan = $('.defensiveSpan');
     var defSpanClassic = document.getElementsByClassName('defensiveSpan');
     var result;
     var count = 0;
     var key;
     var keyArray = [];


      for(var key in wr1oddsD) {
         if(defSpanClassic.innerHTML === WR1oddsIncreaseObjectRandomValue) {
            console.log("Holy Fuck This Works");
       }  
    }
       if(defSpanClassic.innerHTML === WR1oddsDecreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }
       if(defSpanClassic.innerHTML === WR2oddsIncreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }

       if(defSpanClassic.innerHTML === WR2oddsDecreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }

       if(defSpanClassic.innerHTML === WR3oddsIncreaseObjectRandomValue) {
          console.log("Holy Fuck This Works");
       }

       if(defSpanClassic.innerText === WR3oddsDecreaseObjectRandomValue) {
          console.log("defSpanClassic with innerText");
       }

       if(defSpan.innerText === globalOddsIncreaseObjectRandomValue) {
          console.log("defSpan with innertext");
       }

       if(defSpan.innerHTML === globalOddsDecreaseObjectRandomValue) {
          console.log("defSpan with innerHTML");
       }
    }
         });
        console.log(list_values);
      }
    });
  });
  
  observer.observe(list, {
    attributes: true, 
    childList: true, 
    characterData: true
  });
</script>