const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const methodOverride = require('method-override');
const blogController = require('./controllers/blogControllers');
const pageController = require('./controllers/pageControllers');

// DB connection
mongoose.connect('mongodb://localhost:27017/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Middelware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);

//Templet Engine
app.set('view engine', 'ejs');

// Routers
app.get('/', blogController.getAllBlogs);
app.get('/blogs/:id', blogController.getBlog);
app.post('/blogs', blogController.createBlog);
app.delete('/blogs/:id', blogController.deleteBlog);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post', pageController.getBlogPage);

const port = 3000;
app.listen(port, (req, res) => console.log(`connected to ${port}`));
