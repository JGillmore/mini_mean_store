var UserController = require('../controllers/users');
var OrderController = require('../controllers/orders');
var ItemController = require('../controllers/items');


module.exports = function(app){
  app.get('/items', function(req,res){
    ItemController.showAll(req,res);
  });
  app.get('/users', function(req,res){
    UserController.showAll(req,res);
  });
  app.get('/orders', function(req,res){
    OrderController.showAll(req,res);
  });
  app.post('/login', function(req,res){
    UserController.login(req,res);
  });
  app.post('/item', function(req,res){
    ItemController.createProduct(req,res)
  });
  app.post('/order', function(req,res){
    OrderController.newOrder(req,res)
  })
}
