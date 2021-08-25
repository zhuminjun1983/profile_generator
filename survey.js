const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (answer1) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.close();

  // This is the second question:
  const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  r2.question(
    "What's your name? Nicknames are also acceptable :)",
    (answer2) => {
      console.log(`Thank you for your valuable feedback: ${answer2}`);
      r2.close();
      
 // This is the third question:
      const r3 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      r3.question("What do you listen to while doing that?", (answer3) => {
        console.log(`Thank you for your valuable feedback: ${answer3}`);
        r3.close();

      console.log(`Your name is ${answer1}. Nickname is ${answer2}. You like listen ${answer3}.`)
      });


  });
});

