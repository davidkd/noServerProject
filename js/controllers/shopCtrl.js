angular.module('noServerProject')
.controller('shopCtrl', function($scope, mainService) {

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
}

$scope.addToCart = function(id) {
  for (var i = 0; i < mainService.flannelData2.length; i++) {
    if (id === mainService.flannelData2[i].id) {
      mainService.addToCart(mainService.flannelData2[i])
    }
  }
}

})
