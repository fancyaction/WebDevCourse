const express = require('express');
const app = express();

// ===== ROUTES ===== //

app.get('/', (req, res) => {
  res.send('Hi there, welcome to the assignment!');
});

// change noise based on animalType URL
app.get('/speak/:animalType', (req, res) => {
  let animal = req.params.animalType;
  function noise(animal) {
    if (animal === 'pig') {
      return "'oink'";
    } else if (animal === 'cow') {
      return "'moo'";
    } else {
      return "'woof woof!'";
    }
  }

  res.send(`The ${animal} says ${noise(animal)}`);
});

// repeat word by times 'num' input in URL
app.get('/repeat/:word/:num', (req, res) => {
  let word = req.params.word;
  let num = req.params.num;

  function repeat(word, num) {
    let i = 0;
    let total = '';
    while (i < num) {
      total = total.concat(word + ' ');
      i++;
    }
    return total;
  }
  res.send(repeat(word, num));
});

app.get('*', (req, res) => {
  res.send('Page Not Found');
});
app.listen(3000, () => {
  console.log('Server Start: Success!');
});
