const imageControl = async (req, res) => {
  return res.render("addimage.ejs",{
      user: req.user
  });
};

module.exports = {
  imageControl,
};