require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const propertyRoutes = require('./routes/propertyRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(propertyRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

// const PORT = process.env.PORT || 8001;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected at port ${process.env.PORT}!`);
    });
  })
  .catch((err) => {
    console.error('Connection failed!!', err);
  });
