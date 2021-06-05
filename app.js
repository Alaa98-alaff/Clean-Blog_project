const express = require('express');
const app = express();
const path = require('path');
<<<<<<< HEAD
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

// DB connection
mongoose.connect('mongodb://localhost:27017/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
=======
>>>>>>> cdae3bb9ae2bdafd39913fe6e6e7bf6b60ed19d9

//connection
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Templet Engine
app.set('view engine', 'ejs');

// pages
<<<<<<< HEAD
app.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.render('index', { blogs });
=======
app.get('/', (req, res) => {
  res.render('index');
>>>>>>> cdae3bb9ae2bdafd39913fe6e6e7bf6b60ed19d9
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

<<<<<<< HEAD
app.get('/post', async (req, res) => {
  await res.render('post');
});

// Get Data from add_post page
app.post('/blogs', async (req, res) => {
  // new Blog information
  await Blog.create(req.body);

  //back to home page
  res.redirect('/');
});

=======
>>>>>>> cdae3bb9ae2bdafd39913fe6e6e7bf6b60ed19d9
const port = 3000;
app.listen(port, (req, res) => console.log(`connected to ${port}`));
