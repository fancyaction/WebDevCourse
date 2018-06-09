const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// ===== ROUTES ===== //
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  let thing = req.params.thing;
  res.render('love', { thingVar: thing });
});

app.get('/posts', (req, res) => {
  let posts = [
    { title: 'Post 1', author: 'Susy' },
    { title: 'My pet bunny', author: 'Charlie' },
    { title: 'Can you believe this corgi?', author: 'Colt' }
  ];
  res.render('posts', { postsVar: posts });
});

app.listen(3000, () => {
  console.log('Server Start: SUCCESS');
});
