var mongoose = require('mongoose');
var ItemSchema = require('./items.js');
var UserSchema = require('./users.js');

var OrderSchema = mongoose.Schema({
  item: ItemSchema,
  user: UserSchema,
},{
  timestamps:true
});

mongoose.model("Order", OrderSchema);
