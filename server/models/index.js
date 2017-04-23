console.log("MOMM IM HERE");
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function(callback) {
    	db.connection.query('SELECT * FROM users', function(err, results) {
        if(err) throw err;
        console.log('zomg it worksssssssssss')
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (callback) {
      db.connection.query('INSERT INTO users VALUES (3, "cool")', function(err, results) {
        if (err) throw err;
        console.log('POst HERE');
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// db.connection.end();