const transpose = require("./transposeMatrix.js");

const wordSearch = (letters, word) => {
  if (letters.length !== 0) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    // console.log(horizontalJoin);
    const verticalJoin = transpose(horizontalJoin).map(ls => ls.join(""));
    // console.log(verticalJoin);
  
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  }
};
module.exports = wordSearch;