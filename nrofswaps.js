function minimumSwaps(arr) {
  let swap = 0;
  let temp = null;
  console.log(arr)

  for (let i = 0; i < arr.length; i++) { 
    while (i+1 !== arr[i]) {
      temp = arr[arr[i] - 1];

      arr[arr[i] - 1] = arr[i]
      arr[i] = temp;
      swap += 1;
    }
  }
  return swap;
}


let arr = [7,1,3,2,4,5,6]

let x = minimumSwaps(arr);
console.log(x)    