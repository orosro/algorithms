
function makeAnagram(a, b) {
  let smallest =  a.length > b.length ? b : a;
  let biggest = a.length > b.length ? a : b;
  let origBiggest = biggest;
  let commonLetters = 0;

  for(let i = 0; i < smallest.length; i++) {
    let idx = biggest.indexOf(smallest.charAt(i));
    if( idx > -1) {  
      biggest = biggest.substr(0, idx) + biggest.substr(idx+1, biggest.length)
      commonLetters++;
    }
  }

  let totalToDelete = origBiggest.length - commonLetters + smallest.length - commonLetters;

  return totalToDelete;
}



const a = 'fcrxzwscanmligyxyvym';
const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'

const x = makeAnagram(a,b)
console.log(x)