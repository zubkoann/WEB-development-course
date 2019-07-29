function checkIfArraySame(array1, array2){
    let count = 0;
    if (array1.length != array2.length)return false;
    array1.forEach((element, i) => {
        if(element == array2[i]){
            return false;
        } 
        else if (count<=1){
        for (let j=i+1; j<array2.length; j++) {
            if(element == array2[j]){
                    let arr2_spliced_el = array2.splice(i, 1, element)[0];
                    array2.splice(j, 1, arr2_spliced_el);
                    count++;
            }
        }
    }
    });
    return (array1.join(',') == array2.join(','))? true: false;
}


// TEST 
console.log(checkIfArraySame([1, 2, 3], [1, 2, 3]))
console.log(checkIfArraySame([1, 2, 3], [2, 1, 3]))
console.log(checkIfArraySame([1, 2, 3, 4, 5], [2, 1, 3, 4, 4]))
console.log(checkIfArraySame([2, 1, 1, 2, 3, 4], [1, 1, 2, 1, 3, 4]))
console.log(checkIfArraySame([1, 2, 2], [2, 1, 1]))
console.log(checkIfArraySame([1, 3, 2, 3], [2, 3, 1, 3]))
console.log(checkIfArraySame([1, 3, 2, 3], [2, 3, 1, 3, 4]))
