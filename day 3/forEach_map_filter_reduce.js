/*
1. forEach() is built-in method for arrays. It is also a higher order function
*/

const players = ["sakib", "mushfik", "baten", "mortuza"];
players.forEach((player) => console.log(player));

/*
2. map() is also a built in array method which is also higher order
*/
const nums = [1, 3, 4, 5, 6, 7];
const qubeNums = nums.map((num) => num ** 3); // ** will act as power here num^3
console.log(qubeNums);

/*
3.filter() is built in higher order function
*/
const arr2 = [1, 2, 3, 5, 74, 35, 20];
const even = arr2.filter((num) => num % 2 == 0);
console.log(even);

/*
4.reduce() is build in array method
*/
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr3.reduce((initial, value) => initial + value, 0);
console.log("sum: ", sum);
