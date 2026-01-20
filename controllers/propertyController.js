const Property = require('../models/propertySchema');

exports.addProperty = async (req, res) => {
  try {
    const body = req.body;
    const file = req.files;
    console.log('Body', body);
    console.log('file', file);
    res.json({ message: 'Success!' });
  } catch (err) {
    console.error('Adding property error', err);
  }
};
