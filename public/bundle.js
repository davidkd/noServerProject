angular.module('noServerProject', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('shop', {
      templateUrl: './views/shop.html',
      controller: 'shopCtrl',
      url: '/shop'
    })
    .state('cart', {
      templateUrl: './views/cart.html',
      controller: 'cartCtrl',
      url: '/cart'
    })
}])

angular.module('noServerProject')
.controller('cartCtrl', ["$scope", "mainService", function($scope, mainService) {

  $scope.cartItems = mainService.cart;
}])

angular.module('noServerProject')
.controller('homeCtrl', ["$scope", function($scope) {

  // $(function () {
  //     var main = $('main-container');
  //     var backgrounds = [
  //       'url(https://hd.unsplash.com/photo-1438978187846-8e00862e53f7)',
  //       'url(https://hd.unsplash.com/photo-1438978187846-8e00862e53f7)'];
  //     var current = 0;
  //
  //     function nextBackground() {
  //         main.css(
  //             'main-container',
  //         backgrounds[current = ++current % backgrounds.length]);
  //
  //         setTimeout(nextBackground, 5000);
  //     }
  //     setTimeout(nextBackground, 5000);
  //     main.css('main-container', backgrounds[0]);
  // });
}])

angular.module('noServerProject')
.controller('shopCtrl', ["$scope", "mainService", function($scope, mainService) {

  $scope.products1 = mainService.flannelData1;

  $scope.products2 = mainService.flannelData2;

  $scope.popUp = function(img) {

    $('.pop-up-opaque').css('visibility', 'visible');
    $('.pop-up').css('visibility', 'visible');

    for (var i = 0; i < mainService.flannelData1.length; i++) {
      if (img === mainService.flannelData1[i].image) {
        $scope.selectedProduct = mainService.flannelData1[i];
        $scope.selectedImage = {'background-image': 'url('+$scope.selectedProduct.image+')'};
      }
    }
  }

  $scope.popUp2 = function(img) {

    $('.pop-up-opaque').css('visibility', 'visible');
    $('.pop-up').css('visibility', 'visible');

    for (var i = 0; i < mainService.flannelData2.length; i++) {
      if (img === mainService.flannelData2[i].image) {
        $scope.selectedProduct = mainService.flannelData2[i];
        $scope.selectedImage = {'background-image': 'url('+$scope.selectedProduct.image+')'};
      }
    }
  }

  $scope.disappear = function() {
    $('.pop-up').css('visibility', 'hidden');
    $('.pop-up-opaque').css('visibility', 'hidden');
  }


$scope.addToCart = function(id) {
  for (var i = 0; i < mainService.flannelData1.length; i++) {
    if (id === mainService.flannelData1[i].id) {
      mainService.addToCart(mainService.flannelData1[i])
    }
  }
}

$scope.addToCart = function(id) {
  for (var i = 0; i < mainService.flannelData2.length; i++) {
    if (id === mainService.flannelData2[i].id) {
      mainService.addToCart(mainService.flannelData2[i])
    }
  }
}

}])

angular.module('noServerProject')
.directive('footerDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/footerDirective.html'
  }
})

angular.module('noServerProject')
.directive('navBarDir', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/navBarDir.html'
  }
})

angular.module('noServerProject')
.service('mainService', function() {

this.cart = [];

  this.flannelData1 = [{
    description: 'HEATHER GRAVEL PLAID',
    image: '../images/flannel1.jpeg',
    price: 40,
    id: 111
  },

  {
    description: 'MARLOW PLAID',
    image: '../images/flannel2.jpeg',
    price: 40,
    id: 222
  },

  {
    description: 'NAVY BUFFALO CHECK',
    image: '../images/flannel3.jpeg',
    price: 40,
    id: 333
  }]


  this.flannelData2 = [{
    description: 'RED BUFFALO CHECK',
    image: '../images/flannel4.jpeg',
    price: 40,
    id: 444
  },

  {
    description: 'DARK PLAID',
    image: '../images/flannel5.jpeg',
    price: 40,
    id: 555
  },

  {
    description: 'MULTICOLOR PLAID',
    image: '../images/flannel6.jpeg',
    price: 40,
    id: 666
  }]

this.addToCart = function(obj) {
  console.log(obj);
  this.cart.push(obj);
}
})
