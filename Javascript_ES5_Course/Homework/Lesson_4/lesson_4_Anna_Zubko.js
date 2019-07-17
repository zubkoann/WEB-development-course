
function checkArr(arr){
let newarr = []; 
arr.forEach((el,i) =>{
    if (i==0) newarr.push(el)
    if (el>=arr[i-1] && i>0) newarr.push(el); 

});
let b = (arr.length == newarr.length || arr.length - 1  == newarr.length) ? true :  false;
return b;
}

// TEST 
console.log(checkArr([1,2,33, 3, 3, 2]));
console.log(checkArr([1,2, 3, 3, 2]));