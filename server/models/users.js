var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
},{
  timestamps:true
});


module.exports = UserSchema;
mongoose.model("User", UserSchema);
