function getRandomInt(min, max){
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}

var number_floors = getRandomInt(0, 5);
var number_flat = getRandomInt(0, 5);
function getMatrix(number_floors, number_flat){
    let matrix = [];
    for (i=0; i < number_floors; i++) {
      let floor =[]
      for (j=0; j <number_flat; j++){
          let ifNull = getRandomInt(0, 3);
          let rand = (ifNull==2)?0: getRandomInt(0, 10);
          floor.push(rand);
      }
      matrix.push(floor);
    }
   return matrix;
}
let matrix = getMatrix(number_floors, number_flat);

function totalSum(matrix){
let exepts = [];
let summ =0;
for (i=0; i<matrix.length; i++){
    matrix[i].forEach(function(currentValue, index) {
    if (currentValue ==0){ 
        exepts.push(index); return false;
    } else{
        if (exepts.length>0){
        exepts.forEach(exept=>{ 
            if(exept == index) return false;
            else  summ += currentValue;
        });
    }else summ += currentValue;
    }
  });
};
  console.log(matrix);
  console.log(exepts);
  console.log(summ);
}
totalSum(matrix)
