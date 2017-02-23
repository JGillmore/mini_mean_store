app.factory("UserFactory", function ($http, $location) {
  var loggedIn = {first_name: 'Jeremy'};
   var users = {};
   var factory = {};

   factory.showAll = function(callback){
     $http.get('/users').then(function(data){
       users = data.data;
       callback(users);
      })
   }
   factory.getLoggedIn = function(callback){
     callback(loggedIn);
   }
   factory.signOut = function(){
     user = {};
     $location.path('/');
   }
   factory.login = function(userLogin, callback){
     $http.post('/login', userLogin).then(function(data){
       loggedIn = data.data;
       callback(loggedIn);
     })
   }
   factory.signOut = function(){
     loggedIn = {};
     $location.path('/');
   }
   return factory;

});
