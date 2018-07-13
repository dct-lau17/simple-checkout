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