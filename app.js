const express = require('express');
const app = express();
const path = require('path');

//connection
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Templet Engine
app.set('view engine', 'ejs');

// pages
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

const port = 3000;
app.listen(port, (req, res) => console.log(`connected to ${port}`));
