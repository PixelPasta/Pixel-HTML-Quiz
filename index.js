#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const sleep2 = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

let playername;

async function askname() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });

  playername = answers.player_name;
}

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Who Wants To Be A HTML Millionaire? \n"
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
   ${chalk.bgRed("Instructions - ")}
   ${chalk.bgMagenta("Choose the correct options using the ← ↑ → ↓ keys.")}
   ${chalk.bgGreen("Press Enter to select the current option.")}
   ${chalk.bgBlue("There are a total of 10 questions. Good Luck!")}
   `);
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "HTML was released in\n",
    choices: ["1990", "1996", "1997", "1995"],
  });

  return handleAnswer(answers.question_1 === "1990");
}

async function handleAnswer(isCorrect) {
  const spinner = await createSpinner("Checking Answer...").start();
  await sleep();
  if (isCorrect) {
    spinner.success({ text: `Nice Work ${playername}` });
  } else {
    spinner.error({ text: `Incorrect Answer! Better luck next time!` });
    process.exit(1);
  }
}

async function winner() {
  console.clear();
  const msg = `Congrats ${playername}, you answered every answer correctly! You are a certifed HTML wizard.`;
  const an = chalkAnimation.rainbow(msg);
  await sleep2();
  console.log(`Made By PixelPasta

https://github.com/PixelPasta
https://pixelpasta.github.io`);
  process.exit(0);
}

async function question2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "Apart from <b> tag, what other tag makes text bold?\n",
    choices: ["<fat>", "<strong>", "<black>", "<emp>"],
  });

  return handleAnswer(answers.question_2 === "<strong>");
}

async function question3() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "What is the full form of HTML?\n",
    choices: [
      "Hyper Text Markup Language",
      "Hyper Teach Markup Language",
      "Hyper Tech Markup Language",
      "None of these",
    ],
  });

  return handleAnswer(answers.question_3 === "Hyper Text Markup Language");
}
async function question4() {
  const answers = await inquirer.prompt({
    name: "question_4",
    type: "list",
    message: "How many levels of headings are there?\n",
    choices: ["9", "5", "8", "6"],
  });

  return handleAnswer(answers.question_4 === "6");
}
async function question5() {
  const answers = await inquirer.prompt({
    name: "question_5",
    type: "list",
    message: "Which of the following tags do not require a terminator?\n",
    choices: ["<u>", "<br>", "<b>", "<li>"],
  });

  return handleAnswer(answers.question_5 === "<br>");
}

async function question6() {
  const answers = await inquirer.prompt({
    name: "question_6",
    type: "list",
    message: "What should comments be enclosed between?\n",
    choices: ["<!- and — >", "<! And !>", "<!— and -“'", "none of the above"],
  });

  return handleAnswer(answers.question_6 === "<!- and — >");
}

async function question7() {
  const answers = await inquirer.prompt({
    name: "question_7",
    type: "list",
    message:
      "Which Symbol is used with href inside <a> to indicate intenal linking instead of an external address?\n",
    choices: ["&", "$", "#", "!"],
  });

  return handleAnswer(answers.question_7 === "#");
}

async function question8() {
  const answers = await inquirer.prompt({
    name: "question_8",
    type: "list",
    message: "What does OLE stand for?\n",
    choices: [
      "Object-level embedding",
      "Object linking and embedding",
      "Object-level extraction",
      "None of the above",
    ],
  });

  return handleAnswer(answers.question_8 === "Object linking and embedding");
}
async function question9() {
  const answers = await inquirer.prompt({
    name: "question_9",
    type: "list",
    message:
      "Which attribute is used to create a link that opens in a new window tab?\n",
    choices: [
      "src='_blank'",
      "alt='_blank'",
      "target='_self'",
      "target='_blank'",
    ],
  });

  return handleAnswer(answers.question_9 === "target='_blank'");
}
async function question10() {
  const answers = await inquirer.prompt({
    name: "question_10",
    type: "list",
    message:
      "Which attribute is used with the <script> tag to set the JS file to load after the HTML page has completely loaded?\n",
    choices: ["defer", "async", "type", "crossorigin"],
  });

  return handleAnswer(answers.question_10 === "defer");
}

async function question11() {
  const answers = await inquirer.prompt({
    name: "question_11",
    type: "list",
    message:
      "What is the correct way of adding a background color to an html page?\n",
    choices: [
      '<body style="background-color:blue;">',
      '<body bg="blue">',
      "<bg>blue</bg>",
      "<body color='blue'>",
    ],
  });

  return handleAnswer(
    answers.question_11 === '<body style="background-color:blue;">'
  );
}

async function question12() {
  const answers = await inquirer.prompt({
    name: "question_12",
    type: "list",
    message: "What is the correct way for making a checkbox?\n",
    choices: [
      '<input type="check">',
      "<check>",
      "<checkbox>",
      '<input type="checkbox">',
    ],
  });

  return handleAnswer(answers.question_12 === '<input type="checkbox">');
}

async function question13() {
  const answers = await inquirer.prompt({
    name: "question_13",
    type: "list",
    message:
      "Which of the following table tags is used to create a table row?\n",
    choices: ["<th>", "<td>", "<tr>", "<table>"],
  });

  return handleAnswer(answers.question_13 === "<tr>");
}

async function question14() {
  const answers = await inquirer.prompt({
    name: "question_14",
    type: "list",
    message:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?\n",
    choices: ["title", "othername", "desc", "alt"],
  });

  return handleAnswer(answers.question_14 === "alt");
}

async function question15() {
  const answers = await inquirer.prompt({
    name: "question_15",
    type: "list",
    message: "Which tag is used for creating a drop-down selection list?\n",
    choices: ["<select>", "<option>", "<dropdown>", "<list>"],
  });

  return handleAnswer(answers.question_15 === "<option>");
}

await console.clear();
await welcome();
await askname();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
await question11();
await question12();
await question13();
await question14();
await question15();
await winner();
