app.controller('ItemController', function (ItemFactory, UserFactory, $scope){
  $scope.newProduct = {};
  UserFactory.getLoggedIn(function(loggedIn){
    $scope.loggedIn = loggedIn;
  })
  ItemFactory.showAll(function(items){
    $scope.items = items;
  })
  $scope.createProduct = function(){
    ItemFactory.createProduct($scope.newProduct, function(items){
      $scope.items = items;
    });
  }
});
