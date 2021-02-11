
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let index = null;
    let isOk = 'Yes';
    let i = 0;
    for (i; i < note.length; i++) {
        index = magazine.indexOf(note[i]);
        if ( index === -1 ) {
          isOk = 'No';
          break;
        } else {
          magazine.splice(index,1);
        }   
    }
    // return isOk;
    console.log(isOk)
}


let magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
let note = ['give', 'one', 'one', 'grand', 'today'];

checkMagazine(magazine, note);