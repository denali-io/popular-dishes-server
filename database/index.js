var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jezebel',
  database : 'dish_pics'
});
 
connection.connect();
 
connection.query('SELECT * FROM restaurants', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is foo: ', results);
});
 
connection.end();