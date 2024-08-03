const sumAll = function (start, end) {
  let sumAll = 0;
  let temp = 0;

  if (end < start) {
    temp = start;
    start = end;
    end = temp;
  }

  if (start < 0 || end < 0) return "ERROR";
  if (Math.trunc(start) !== start || Math.trunc(end) !== end) return "ERROR"
  
  if (typeof start === "number" && typeof end === "number") {
    for (start; start < end + 1; start++) {
      sumAll += start;
    }
    return sumAll;
  } else return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;

