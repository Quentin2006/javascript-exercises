const removeFromArray = function (arr, remove) {
  let i = 0;
  for (element of arr) {
    if (element === remove) {
      arr.splice(i, 1);
    } else i++;
  }
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4, 3, 5], 3));

// Do not edit below this line
module.exports = removeFromArray;
