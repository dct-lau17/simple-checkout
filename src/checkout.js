'use strict';

function Checkout(items){

  this.items = items;
  this.basket = [];

}

Checkout.prototype.scan = function(item) {
  if(this.isAvailable(item)){
    this.basket.push(item);
  }else{
  throw new Error('item is not available')
  }
};

Checkout.prototype.isAvailable = function(item) {
   return this.items[item];
};

Checkout.prototype.calcTotal = function() {
  var total = 0
  for(var i= 0; i< this.basket.length; i++) {
    total += this.items[this.basket[i]]
  }
 return total
};

Checkout.prototype.total = function() {
  return "£" + this.calcTotal().toFixed(2)
};
