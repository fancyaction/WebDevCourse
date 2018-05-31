const express = require('express');
const app = express();

// ===== ROUTES ===== //
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  let thing = req.params.thing;
  res.render('love.ejs', { thingVar: thing });
});

app.listen(3000, () => {
  console.log('Server Start: SUCCESS');
});
