const multer = require('multer');
const path = require('path');
const db = require("../configs/DBConnect");

const fetchImagesFromDatabase = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM images';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching images:', err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const imageControl = async (req, res) => {
  const fetchedImages = await fetchImagesFromDatabase();

  return res.render("addimage.ejs", {
    images: fetchedImages,
    user: req.user
  });
};


const uploadImage = (req, res) => {
  const { originalname, mimetype, buffer } = req.file;

  const sql = 'INSERT INTO images (filename, mimetype, image_data) VALUES (?, ?, ?)';
  const values = [originalname, mimetype, buffer];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting image:', err);
      res.status(500).send('Error uploading image');
    } else {
      console.log('Image uploaded successfully');
      res.redirect('./img');
    }
  });
};


module.exports = {
  imageControl,
  uploadImage,
};
