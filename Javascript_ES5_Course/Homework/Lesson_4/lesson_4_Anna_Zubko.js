const checkArr = (arg) => {
  const matrix = [];
  for (let i = 0; i < arg.length; i++) {
  let array = [...arg];
  array.splice(i, 1);
  matrix.push(array);
  }
  let testArray = matrix.filter(arr => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] >= arr [i]) return false;
     }
     return true;
  })
 return (testArray.length>0) ? testArray[0]: false;
};
    
    // TEST
    console.log(checkArr([1,2,1, 2]));
    console.log(checkArr([1,1, 2, 3,3,4,4]));
    console.log(checkArr([1, 1, 1, 2, 3]));
    console.log(checkArr([10, 1, 2, 3, 4, 5]));
    console.log(checkArr([0, -2, 5, 6]));
    console.log(checkArr([1, 2, 5, 3, 5]));
    console.log(checkArr([0,-2, -2, 5, 6]));
    console.log(checkArr([1, 2, 5, 3, 5]));
    console.log(checkArr([1, 2, 5, 3, 5,3,3,2,3,4,5,6]));
    console.log(checkArr([5,4,3,2,1,2,3,4,5,6,7,8]));
    console.log(checkArr([5,1,2,3,4,4,3,2,1,2,3,4,5,6,7,8]));
    console.log(checkArr([1, 2, 3, 4, 3, 6]));
    console.log(checkArr([3, 5, 67, 98, 3]));
    console.log(checkArr([1, 2, 3, 1]));



