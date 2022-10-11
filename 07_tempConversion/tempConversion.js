const ftoc = function (fahr) {
  const celsius = Math.round((fahr - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

ftoc();

const ctof = function (celsius) {
  const fahrenheit = Math.round((celsius * (9 / 5) + 32) * 10) / 10;
  return fahrenheit;
};

ctof();

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
