const repeatString = function (string, num) {
  let repeat = "";

  while (num > 0) {
    repeat += string;
    num--;
  }

  if (num < 0) {
    return "ERROR";
  }
  return repeat;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
