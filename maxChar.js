function maxChar(str) {
  let current = '';
  let count = 0;
  let max_char = null;
  let max_count = '';
  let prev_char = null;

  for (let i =0; i< str.length;  i++) {
    current = str.charAt(i);
    
    // add 1 if we have 2 in a row
    if (current === prev_char) {
      count++;
    } else {
      count = 1;
    }

    if (count > max_count) {
      max_char = current;
      max_count = count;
    }

    prev_char = current;
  }

  return {
    [max_char]: max_count
  }
}

const x = maxChar('aaaaaaabbbbbbbbbbbcccddddeeeee');
console.log(x);