const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort('-dateCreated');
  res.render('index', { blogs });
};

exports.getBlog = async (req, res) => {
  // console.log(req.params.id);
  const blog = await Blog.findById(req.params.id);
  res.render('post', { blog });
};

exports.createBlog = async (req, res) => {
  // new Blog information
  await Blog.create(req.body);

  //back to home page
  res.redirect('/');
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
