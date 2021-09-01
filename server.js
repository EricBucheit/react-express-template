const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require("cors");
require('dotenv').config()
const {db, connection} = require('./Sequelize');
const Routes = require('./Server/Routes');

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

for (let index in Routes) {
  Routes[index](app, db);
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8100);
