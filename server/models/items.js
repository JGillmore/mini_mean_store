var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
  name: String,
  count: Number,
  description: String,
  imageUrl: String,
},{
  timestamps:true
});

module.exports = ItemSchema;

mongoose.model("Item", ItemSchema);
