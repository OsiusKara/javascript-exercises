const removeFromArray = function (...args) {
  const array = args[0]; // [1, 2, 3, 4]
  const newArray = []; //  becomes [1,2,4] after the forEach loop

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line

module.exports = removeFromArray;
