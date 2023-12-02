var elTitle = document.querySelector( '.title ')
var elInp = document.querySelector( '.inp' )
var elPp = document.querySelector( '.pp')

function fn() {
  var val = elInp.value;
  if( length = 5 ** 30,  val  != val.toLowerCase()) {
       elInp.style.borderBottom = '4px solid green';
    elPp.textContent = 'ura parolni togri kiritingiz';
    elPp.style.color = "white";
    }
    else if (val == val.toLowerCase() )  {
            elInp.style.borderBottom = "4px solid red";
      elPp.textContent = 'afsus bitta bolsaham katta harf kiriting';
      elPp.style.color = "white";
    }
    
}

