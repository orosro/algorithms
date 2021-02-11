function binarySearch(searchFor) {
  let currentLength =  this.length;
  let tempIndex = 0;
  let currentStartIndex = 0;
  let currentEndIndex = currentLength - 1;

  if (this[tempIndex] === searchFor) {
    return tempIndex;
  }

  while(currentLength >= 0){
    // update temp index  
    tempIndex = currentStartIndex + Math.ceil(currentLength/2);

    if (this[tempIndex] === searchFor) {
      return tempIndex;
    }  
    

    if(searchFor < this[tempIndex]) {      
      currentEndIndex = tempIndex - 1;
    } else {
      currentStartIndex = tempIndex + 1;
    }
    currentLength = currentEndIndex - currentStartIndex;
  }

  // If the element can't be find return -1
  return -1;
}

if(typeof(Array.prototype.binarySearch) === 'undefined') {
Array.prototype.binarySearch = binarySearch;
}


let tenElList = [...Array(1000).keys()];
let toSearch = 4;
console.time('binarySearch');
let elPos = tenElList.binarySearch(toSearch);
console.timeEnd('binarySearch');
console.time('indexOf');
let elPos2 = tenElList.indexOf(toSearch);
console.timeEnd('indexOf');
console.log('Index If ::', elPos2)
console.log('Binary Search Result::', elPos, tenElList[elPos]);

