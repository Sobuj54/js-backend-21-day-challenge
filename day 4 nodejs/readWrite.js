const fs = require("fs");

console.log("Before reading.");

/* 
synchronous way of reading file
reading from a file.it returns buffer so we convert it to readable string.

const fileContent = fs.readFileSync("./input.txt"); 
console.log(fileContent.toString());
*/

//asynchronous way of reading file
fs.readFile("./input.txt", (err, content) => {
  if (err) throw err;
  console.log(content.toString());
});

console.log("After reading.");

// ----------------------------->>>>>>
// writing in a file
console.log("\nBefore writing:");

// fs.writeFileSync("./input.txt", "writing synchronously."); writing synchronously

// writing asynchronously
fs.writeFile("./input.txt", "writing asynchronously.", (err) => {
  if (err) throw err;
  console.log("successfully written asynchronously.");
});

console.log("After writing in a file.");
