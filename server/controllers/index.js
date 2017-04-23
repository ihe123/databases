var models = require('../models');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
    	console.log('response: ', res);
      console.log('request: ', req);
      models.messages.get(function(err, results){
        if (err) {
          throw err;
        } else {
          res.send(200);
          res.end(results);
        }
      })
    	// headers['Content-Type'] = 'application/json';  
    	// response.writeHead(200, headers);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(function(err, results) {
        if (err) {
          throw err;
        } else {
          res.end();    
        }
      })

    } // a function which handles posting a message to the database
    

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
// console.log(module.exports.messages.get(request, response));
