/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'plantlife');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('users', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING
});

var Message = db.define('messages', {
  id: Sequelize.INTEGER,
  user: Sequelize.INTEGER,
  message: Sequelize.STRING,
});

var Room = db.define('rooms', {
  id: Sequelize.INTEGER,
  room: Sequelize.STRING
});

var Connection = db.define('connection', {
  id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  message_id: Sequelize.INTEGER,
  room_id: Sequelize.INTEGER
}); 
/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
User.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return User.create({username: 'Jean Valjean'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return User.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then(function(users) {
    users.forEach(function(user) {
      console.log(user.username + ' exists');
    });
    db.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
