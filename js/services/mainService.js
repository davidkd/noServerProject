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
  // console.log(obj);
  this.cart.push(obj);
}
})
