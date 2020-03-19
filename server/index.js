var db = require("../database/index.js");
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
 

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.listen(port, () => console.log(`Going on port: ${port}`));

app.get('/dishPicTable', (req, res)=>{
  const joinTables = 'SELECT * FROM restaurants INNER JOIN dishes ON restaurants.id = dishes.restaurant_id INNER JOIN images ON dishes.id = images.dish_id';
  db.query(joinTables, (error, result, fields)=>{
    res.send(result)
    if(error) throw error;
  })
})
