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

app.get('/posts', (req, res) => {
  let posts = [
    { title: 'Post 1', author: 'Susy' },
    { title: 'My pet bunny', author: 'Charlie' },
    { title: 'Can you believe this corgi?', author: 'Colt' }
  ];
  res.render('posts.ejs', { postsVar: posts });
});

app.listen(3000, () => {
  console.log('Server Start: SUCCESS');
});
