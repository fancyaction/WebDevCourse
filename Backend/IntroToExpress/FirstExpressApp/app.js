const express = require('express');
const app = express();

// === ROUTES ===

//root
app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

app.get('/dog', (req, res) => {
  res.send('BARK!');
});

app.get('/r/:subredditName', (req, res) => {
  let subreddit = req.params.subredditName.toUpperCase();
  res.send(`Welcome to the ${subreddit} subreddit!`);
});

app.get('/r/:subredditName/comments/:id/:title/', (req, res) => {
  res.send('Welcome to the comments page!');
});

app.get('*', (req, res) => {
  res.send('You are a star!');
});

// tell express to listen for requests
app.listen(3000, () => {
  console.log('Server Start: Success');
});
