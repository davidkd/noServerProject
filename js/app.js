angular.module('noServerProject', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
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
})
