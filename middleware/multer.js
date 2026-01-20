const multer = require('multer');
const path = require('path');
const fs = require('fs');

const imageStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      let imageFolder = 'images';

      if (file.fieldname === 'propertyImages') imageFolder = 'propertyImages';
      if (file.fieldname === 'hotels') imageFolder = 'hotels';

      //   if (file.fieldname === 'brandImage') imageFolder = 'brandImage';
      //   if (file.fieldname === 'bannerImage') imageFolder = 'bannerImage';

      const folderPath = path.join(__dirname, '..', 'images', imageFolder);

      if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath, { recursive: true });

      cb(null, folderPath);
    } catch (err) {
      cb(err);
    }
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/\s+/g, '-');
    cb(null, `${Date.now()}-${cleanName}`);
  },
});

const imageFileFilter = (req, file, cb) => {
  const allowedExtensions = /jpeg|jpg|png|jfif/;
  const isValidExtension = allowedExtensions.test(
    path.extname(file.originalname).toLowerCase(),
  );
  const isValidMimeType = allowedExtensions.test(file.mimetype);

  if (isValidExtension && isValidMimeType) cb(null, true);
  else cb(new Error('Only JPEG, JPG, and PNG images are allowed'));
};

const upload = multer({ storage: imageStorage, fileFilter: imageFileFilter });

module.exports = upload;
