function outerFunc() {
  const outVariable = "I am outer variable";
  return () => {
    console.log(outVariable);
  };
}

const fn = outerFunc();
fn(); //we can access the outerFunc variable even though outerFunc has been removed from execution context. This is known as closure

// another example

function money() {
  let pocketMoney = 0;
  return () => {
    pocketMoney++;
    console.log(`you have ${pocketMoney} taka`);
  };
}

const sobuj = money();
const sohag = money();

sobuj(); //1 taka
sobuj(); //2 taka
sohag(); //1 taka. Here we can see that every individual variable retains their own unique variable. One is not affected by other.This is because of closure.
