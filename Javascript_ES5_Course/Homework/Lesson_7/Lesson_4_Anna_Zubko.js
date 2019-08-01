function checkIfArraySame(array1, array2){
    if (array1.length != array2.length) return false;
    return array1.some((el, i) => {
        return array2.some((el, j) => {
            let array1_spliced = [...array1];
            let array2_spliced = [...array2];
            array1_spliced.splice(i, 1);
            array1_spliced.splice(j, 1); 
            array2_spliced.splice(i, 1); 
            array2_spliced.splice(j, 1);
            return (array1_spliced.join() == array2_spliced.join() && (array1[i] == array2[i] || array1[i] == array2[j]) && (array1[j] == array2[i] || array1[j] == array2[j]))? 
            true: false;
        })
    });
}
// TEST 
console.log(checkIfArraySame([2, 3, 1],  [1, 3, 2]));//true
console.log(checkIfArraySame([1, 2, 3], [1, 2, 3]));//true
console.log(checkIfArraySame([1, 2, 3], [2, 1, 3]));//true
console.log(checkIfArraySame([1, 2, 3, 4, 5], [2, 1, 3, 4, 4]));//false
console.log(checkIfArraySame([2, 1, 1, 2, 3, 4], [1, 1, 2, 1, 3, 4]));//true
console.log(checkIfArraySame([1, 2, 2], [2, 1, 1]));//false
console.log(checkIfArraySame([1, 3, 2, 3], [2, 3, 1, 3]));//false
console.log(checkIfArraySame([1, 3, 2, 3], [2, 3, 1, 3, 4]));//false
console.log(checkIfArraySame([4, 6, 3,7], [3, 4, 6,7]));//false
console.log(checkIfArraySame([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]));//true


