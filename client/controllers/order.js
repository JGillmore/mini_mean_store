app.controller('OrderController', function (OrderFactory, UserFactory, ItemFactory, $scope){
  UserFactory.getLoggedIn(function(loggedIn){
    $scope.loggedIn = loggedIn;
  })
  ItemFactory.showAll(function(items){
    $scope.items = items;
  })
  OrderFactory.showAll(function(orders){
    $scope.orders = orders;
  })
  $scope.Order = function(){
    $scope.newOrder.user = $scope.loggedIn;
    $scope.newOrder.item.count = $scope.newOrder.count;
    console.log($scope.newOrder);
    OrderFactory.newOrder($scope.newOrder, function(orders){
      $scope.orders = orders;
    })
  }
});
