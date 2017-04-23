
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  // host     : '127.0.0.1:3000',
  user     : 'root',
  password : 'plantlife',
  database : 'chat'
});

module.exports.connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })
//connection.query("INSERT INTO users VALUES (1, 'Ivana He')");
// module.exports = {
//   getting: function() {
//     console.log("It's WORKING!!!")
//     return connection.query('SELECT * FROM users');
//   }
//   posting: function() {
//     connection.query('INSERT INTO ', function(){});
//   }
// }

//connection.end();
