#! /usr/bin/env node

/*
	Batch 47
	Roll No.	PIAIC210428
	Name:		  Shahzada Nadeem
*/

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function screen(){
  const rainbow = chalkAnimation.rainbow('WELLCOME TO TYPESCRIPT CALCULATOR'); 
  await setTimeOut();  
  rainbow.stop();
}

const setTimeOut = () => {
  return new Promise((promise) => {
    setTimeout(promise, 5000);
  });
};

async function calculator() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "operators",
      message: chalk.blue.bgGreen.bold("Please Select Options\n"),
      choices: ["+ Addition", "- Subtractions", "x Multiplications", "/ Division"],
    },
    {
      type: "number",
      name: "num1",
      message: chalk.white("Enter Ist number: "),
    },
    {
      type: "number",
      name: "num2",
      message: chalk.white("Enter 2nd number: "),
    },
  ]);

  if (answers.operators == "+ Addition") {
    const result = answers.num1 + answers.num2;
    console.log(chalk.greenBright(` ${answers.num1} + ${answers.num2} = ${result}`));
  } else if (answers.operators == "- Subtractions") {
    const result = answers.num1 - answers.num2;
    console.log(chalk.greenBright(`${answers.num1} - ${answers.num2} = ${result}`));
  } else if (answers.operators == "x Multiplications") { 
    const result = answers.num1 * answers.num2;
    console.log(chalk.greenBright(`${answers.num1} * ${answers.num2} = ${result}`));
  } else if (answers.operators == "/ Division") {
    const result = answers.num1 / answers.num2;
    console.log(chalk.greenBright(`${answers.num1} / ${answers.num2} = ${result}`));
  }
}

async function start() {

  await screen();
  do {
    await calculator();
    var again = await inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: chalk.bgWhite("Press y for continue Or any other key for exist: "),
      },
    ]);

  } while (again.restart == "Y" || again.restart == "y" );
}

await start()