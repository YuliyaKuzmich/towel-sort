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