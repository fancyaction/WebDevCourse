const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/addfriend', (req, res) => {
  const newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.get('/friends', (req, res) => {
  res.render('friends', { friends: friends });
});

app.listen(3000, () => {
  console.log('Server Start: Success');
});
