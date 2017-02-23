app.controller('DashboardController', function (ItemFactory, UserFactory, OrderFactory, $scope){
  $scope.loggedIn = {};
  $scope.userLogin = {};
  ItemFactory.showAll(function(items){
    $scope.items = items;
  })
  UserFactory.showAll(function(users){
    $scope.users = users;
  })
  OrderFactory.showAll(function(orders){
    $scope.orders = orders;
  })
  UserFactory.getLoggedIn(function(loggedIn){
    $scope.loggedIn = loggedIn;
  })
  $scope.login = function(){
    console.log($scope.userLogin);
    UserFactory.login($scope.userLogin, function(loggedIn){
      $scope.loggedIn = loggedIn;
      console.log($scope.loggedIn);
    })
  }
  $scope.signOut = function(){
    UserFactory.signOut();
    $scope.loggedIn = {};
    $scope.userLogin = {};
  }
});
