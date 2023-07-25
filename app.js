const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const productController = require("./controllers/datacontrollers");

app.get('/check', productController.dataRecords);
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});