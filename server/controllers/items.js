var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {
    showAll: function (request, response) {
        Item.find({}, function(err, items){
          if (err){
            response.json(err);
          }else{
            response.json(items);
          }
        })
    },
    createProduct: function(req,res){
      var item = new Item(req.body);
      item.save(function(err){
        if(err){
          res.json({err:'err}'})
        }else{
          Item.find({}, function(err, items){
            if (err){
              res.json(err);
            }else{
              res.json(items);
            }
          })
        }
      })
    }
};
