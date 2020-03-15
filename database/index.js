var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jezebel',
  database : 'dish_pics'
});
 
connection.connect();


 
// connection.end();

module.exports = connection;

// { foo: true }