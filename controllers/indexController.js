const getHomePage = async (req, res) => {
  res.render("index");
};

module.exports = {
  getHomePage,
};
