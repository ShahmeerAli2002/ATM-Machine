#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar

let myPin = 1234;
// object
let pinAnswer = await inquirer.prompt([
  {
    type: "number",
    name: "pin",
    message: "Enter your pin",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Login Successful");

  let operationAnswer = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "please select option",
      choices: ["fast cash", "Withdrawal", "check balance"],
    },
  ]);
  console.log(operationAnswer);

  if (operationAnswer.operator === "Withdrawal") {
    let amountAnswer = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: "Enter amount",
      },
    ]);

    if (amountAnswer.amount > myBalance) {
      console.log(`Insufficient Balance your amount is !${ myBalance}`);
    } else {
      console.log(`"your withdrawal amount is ${amountAnswer.amount}`);
  
    myBalance -= amountAnswer.amount;
    console.log(`"your remaining balance is ${myBalance}`);
    
    }
  } else if (operationAnswer.operator === "check balance") {
    console.log(`your balances is " ${myBalance}`);

  }
  else if (operationAnswer.operator === "fast cash") {
    let fastCashAnswer = await inquirer.prompt([
      {
        type: "list",
        name: "fastCash",
        message: "Select amount",
        choices: ["500", "1000", "2000", "5000", "10000"],
      },
    ]);
    console.log(`"your fast cash amount is ${fastCashAnswer.fastCash}`);

    myBalance -= fastCashAnswer.fastCash;
    console.log(`"your remaining balance is ${myBalance}`);

  } 
}

else {
  console.log("Wrong Pin");
}
