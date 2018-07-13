'use strict';

describe('Checkout', function() {

  var checkout;
  var items;

  beforeEach(function(){
    items = {"cat food": 10, "dog food": 5, "Fred's food": 3.99 };
    checkout = new Checkout(items);
  });

  // As a shopper
  // So I know how much an item costs
  // I would like to be able to see its price

  it("can access the prices of items", function() {
    expect((checkout.items)).toEqual(items);
  });

  //   As a shopper
  //  So that I can buy an item
  //  I would like to be able to scan items at the checkout

  it("can scan items at checkout", function() {
    checkout.scan("cat food");
    checkout.scan("dog food");
    expect(checkout.basket).toEqual(["cat food", "dog food"]);
  });

  it("raises an error when item scanned is not available", function() {
    expect(function(){ checkout.scan("garbage food");}).toThrowError('item is not available');
  });

  // As a shopper
  // So that I know how much to pay
  // I would like to be able to see a total for all scanned items

  it("calculates the total for items in the basket", function() {
    checkout.scan("cat food");
    checkout.scan("dog food");
    expect(checkout.calcTotal()).toEqual(15)
  });

//   As a shopper
//  So that I know how much to pay
//  I would like to see all prices correctly formatted (£xx.xx)




});
