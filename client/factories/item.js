app.factory("ItemFactory", function ($http) {

   var items= {};
   var factory = {};

   factory.showAll = function(callback){
     $http.get('/items').then(function(data){
       items = data.data;
       callback(items);
      })
   }
   factory.createProduct = function(newProduct, callback){
     $http.post('/item', newProduct).then(function(data){
       items = data.data;
       callback(items);
     })
   }
   return factory;

});
