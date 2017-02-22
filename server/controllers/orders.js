var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Item = mongoose.model('Item');

module.exports = {
    showAll: function (request, response) {
        Order.find({}, function(err, orders){
          if (err){
            response.json(err);
          }else{
            response.json(orders);
          }
        })
    },
    newOrder: function(req,res){
      var order = new Order(req.body);
      order.save(function(err){
        if (err){
          res.json(err);
        }else{
          Item.findOne({_id:order.item._id}, function(err,item){
            if(item){
              item.count = item.count - order.item.count;
              item.save(function(err){
                Order.find({}, function(err, orders){
                  if (!order){
                    res.json(err);
                  }else{
                    console.log("sent back to client");
                    res.json(orders);
                  }
                })
              })
            }
          })
        }
      })
    }
};
