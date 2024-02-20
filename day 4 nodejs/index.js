// common.js module imports this way
// const add = require("./myModule"); importing only one function
const { add, prod } = require("./myModule"); //importing multiple function

console.log(add(2, 5), prod(2, 5));
