const add = (a, b) => {
  return a + b;
};

const prod = (a, b) => {
  return a * b;
};

// common.js module export this way
// module.exports = add; exporting one function

// exporting multiple function
module.exports = { add, prod };
