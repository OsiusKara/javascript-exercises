// const sumAll = function (minNum, maxNum) {
//   let finalSum = 0;

//   for (let i = minNum; i <= maxNum; i++) {
//     finalSum = finalSum + i;
//   }

//   if (minNum < 0 || maxNum < 0) {
//     return "ERROR";
//   } else if (minNum !== Number || maxNum !== Number) {
//     return "ERROR";
//   }
//   return finalSum;
// };
/////Code doesn't work!

// ---->>> Solution
const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
