angular.module('noServerProject')
.controller('cartCtrl', function($scope, mainService) {

  $scope.cartItems = mainService.cart;
})
