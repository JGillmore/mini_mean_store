app.factory("OrderFactory", function ($http) {

   var orders = {};
   var factory = {};

   factory.showAll = function(callback){
     $http.get('/orders').then(function(data){
       orders = data.data;
       callback(orders);
      })
   }
   factory.newOrder = function(newOrder, callback){
     $http.post('/order', newOrder).then(function(data){
       orders = data.data;
       callback(orders);
     })
   }
   return factory;

});
