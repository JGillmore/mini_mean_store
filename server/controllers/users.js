var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    showAll: function (request, response) {
        User.find({}, function(err, users){
          if (err){
            response.json(err);
          }else{
            response.json(users);
          }
        })
    },
    login: function(req,res){
      console.log(req.body);
      var user = req.body;
      console.log("user", user);
      User.findOne({first_name: user.first_name, last_name: user.last_name}, function(err, loggedIn){
        if(loggedIn){
          res.json(loggedIn);
        }else{
          var newUser = new User();
          newUser.first_name = user.first_name;
          newUser.last_name = user.last_name;
          newUser.save(function(err){
            if(err){
              res.json({err:'err'});
            }else{
              User.findOne({first_name: user.first_name, last_name: user.last_name}, function(err, loggedIn){
                res.json(loggedIn);
              })
            }
          })
        }
      })
    }
};
