const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./db/db');
const PORT = process.env.PORT || 3001;
const app = express();
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
/////
app.use(express.static('public'));







require("./routing/html-routes")(app);
require("./routing/api-routes")(app);
//////////
app.listen(PORT, () => {
    console.log(`API server  on port ${PORT}!`);
  });