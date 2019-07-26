function checkIfArraySame(array1, array2){
    let count = 0;
    // let array1=aarray1;
    // let array2=aarray2;

    array1.forEach((element, i) => {
        if(element == array2[i]) return false;
        for (let j=i+1; j<array2.length; j++) {
            if(element == array2[j] && count<1){
                    count++;
                    var array2_el = array2.splice(i, 1, element);
                    array2.splice(j, 1, array2_el);
                    console.log('sec',array2, i)
                    return false;
            }else{
                count++;
            }
        }
    });
    return (count>1)? false:true;
}

// TEST 
console.log(checkIfArraySame([1, 2, 3], [1, 2, 3]))
console.log(checkIfArraySame([1, 2, 3], [2, 1, 3]))
console.log(checkIfArraySame([1, 2, 2], [2, 1, 1]))
console.log(checkIfArraySame([1, 3, 2, 3], [2, 3, 1, 3]))
