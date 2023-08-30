#!usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => (setTimeout(res, 2000)));
};
async function welcome() {
    let neonTitle = chalkAnimation.neon("lets start calcutaion"); //start
    await sleep();
    neonTitle.stop();
    console.log(`
   ______________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`);
}
//welcome();
async function quesAns() {
    inquirer
        .prompt([
        {
            type: "List",
            name: "operator",
            message: "what operation you want to perform",
            choices: ["addition", "subtraction", "multiplication", "divide"],
        },
        {
            type: "Number",
            name: "num1",
            message: "Number 1",
        },
        {
            type: "Number",
            name: "num2",
            message: "Number 1",
        }
    ])
        .then((answers) => {
        //console.log(answers);
        if (answers.operator == "addition") {
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
        }
    });
}
;
quesAns();
