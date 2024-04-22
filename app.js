#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 285,
    LIRA: 32.51,
    DIRHAM: 3.67
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'LIRA', 'DIRHAM']
    },
    {
        name: 'to',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'LIRA', 'DIRHAM']
    },
    { name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
