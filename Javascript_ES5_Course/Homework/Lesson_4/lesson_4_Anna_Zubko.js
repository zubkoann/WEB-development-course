function checkArr(arr){
    let newarr = [];
    let count = 0;
    arr.forEach((el,i) =>{
       if (el>newarr[newarr.length-1] || (newarr.length == 0 && el<= arr[i+1]) || (el>newarr[newarr.length-1] && el> arr[i+1]) ) newarr.push(el)
       else count++;  
    //    if (count>1) return false;     
    });
    console.log(newarr);
    return (arr.length == newarr.length || arr.length - 1  == newarr.length) ? true :  false;
    }
    
    // TEST
    console.log(checkArr([1,2,1, 2]));
    console.log(checkArr([1,1, 2, 3,3,4,4]));
    console.log(checkArr([10, 1, 2, 3, 4, 5]));
    console.log(checkArr([0, -2, 5, 6]));
    console.log(checkArr([1, 2, 5, 3, 5]));
    console.log(checkArr([0,-2, -2, 5, 6]));