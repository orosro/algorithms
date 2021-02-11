// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let isOk = 'NO';
    for (let i = 0; i < s1.length; i++) {
        if(s2.indexOf(s1.charAt(i)) > -1) {
          isOk = 'YES'
          break;
        }
    }
    return isOk;
}

let a = 'indsindsauiduisanidsa';
let b = 'a';
twoStrings(b,a);