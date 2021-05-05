const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question(`What is your hobby? `, (answer2) => {
    rl.question(`What is favourite food? `, (answer3) => {
      rl.question(`Do you have any pet? (y/n) `, (answer4) => {
        if (answer4 === 'y' || answer4 === 'yes') {
          rl.question(`What's your pet's name? `, (answer5) => {
            console.log(`${answer1} loves doing ${answer2}, eating ${answer3}. And I bet ${answer5} is very cute! :)`);
            rl.close();
          });
        } else if (answer4 === 'n' || answer4 === 'no') {
          console.log(`${answer1} loves doing ${answer2}, eating ${answer3}. Sadly, ${answer1} doesn't have pet..:(`);
          rl.close();
        } else {
          console.log("Wrong input .... :( Start over if you don't mind :)");
          rl.close();
        }
      });

    });

  });
});