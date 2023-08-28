
// You should implement your task here.

//module.exports = 
/*function towelSort (matrix) {
  let result = [];
  matrix.forEach(element => {
    //console.log(element)
    if (element % 2 !== 0){
      result += element.reverse();
    }else {
      result += element;
    }
  })
  console.log(result);
}*/

module.exports = function towelSort (matrix) {
  let result = [];
  
    //console.log(element)
    for (let element in matrix) {
    if (element % 2 !== 0){
      result.push(matrix[element].reverse());
    }else {
      result.push(matrix[element]);
    }
    
  }
  return result.flat();
}





/*console.log(towelSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]))*/