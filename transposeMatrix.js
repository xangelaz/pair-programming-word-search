const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    result.push(row);
  }
  matrix = result;
  return matrix;
};

module.exports = transpose; 