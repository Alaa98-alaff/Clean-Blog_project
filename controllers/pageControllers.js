exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPostPage = (req, res) => {
  res.render('add_post');
};

exports.getBlogPage = async (req, res) => {
  await res.render('post');
};
