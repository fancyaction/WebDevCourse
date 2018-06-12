const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  const friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];
  res.render('friends', { friends: friends });
});

app.post('/addfriend', (req, res) => {
  res.send('You have reached the post route!');
});

app.listen(3000, () => {
  console.log('Server Start: Success');
});
