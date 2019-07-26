// function longestWordArrayGet(array){
    // let longestWordArray = [];
    // let longestWordSize = array[0].length;
    // array.forEach(element => {
    //     if (element.length == longestWordSize ){
    //         longestWordArray.push(element);
    //     } else if (element.length>longestWordArray[longestWordArray.length-1].length){
    //         longestWordArray = []
    //         longestWordArray.push(element);
    //         longestWordSize = element.length;//добавила данную строку
    //     }
    // });
    // return longestWordArray;
// }
function longestWordArrayGet(array){
let $iterator = array[Symbol.iterator]();
let $next = $iterator.next();
let longestWordSize = array[0].length;
let longestWordArray = [];
while (!$next.done) {
    var val = $next.value;
    if (val.length == longestWordSize ){
                longestWordArray.push(val);
            } else if (val.length>longestWordArray[longestWordArray.length-1].length){
                longestWordArray = []
                longestWordArray.push(val);
                longestWordSize = val.length;
            }
    $next = $iterator.next();
}
return longestWordArray;
}
// TEST 
console.log(longestWordArrayGet(["aba", "aa", "ad", "vcd", "aba"]))
console.log(longestWordArrayGet(["abc", "eeee", "abcd", "dcd"]))