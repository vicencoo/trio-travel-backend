const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartamentSchema = new Schema({
  listeningType: { type: String, required: true },
  propertyType: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  area: { type: String, required: true },
  price: { type: Number, required: true },
  space: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  toilets: { type: Number, required: true },
  buildYear: { type: Number, required: true },
  propertyImages: [{ type: String, required: true }],
});

module.exports = mongoose.model('Property', apartamentSchema);
