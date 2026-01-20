const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const upload = require('../middleware/multer');

router.post(
  '/admin/add-property',
  upload.any(),
  propertyController.addProperty,
);

module.exports = router;
