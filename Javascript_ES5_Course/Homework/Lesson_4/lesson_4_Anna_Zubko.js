function checkArr(arr){
    let newarr = [];
    var count = 0;
    arr.forEach((el,i) =>{
       if(el>newarr[newarr.length-1] && el>arr[i+1]){count++; return false;}
       if (el>newarr[newarr.length-1] || (newarr.length == 0 && el<= arr[i+1])) newarr.push(el);
       else count++;
      });
      console.log(newarr);

    return (count<=1) ? true :  false;
    }
    
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
