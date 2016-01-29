describe("Pizza object", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("sm");
    expect(testPizza.pizzaSize).to.equal("sm");
    expect(testPizza.pizzaPrice).to.equal(null);
  });

});

describe("Toppings object", function() {
  it("will create an array of toppings", function() {
    var testToppings = new PizzaToppings("pepperoni");
    expect(testToppings.getPizzaToppings()).to.equal("pepperoni");
  });

});
//
// describe("calcPizzaSize", function() {
//   it("will return right amount for selected pizza", function() {
//     var testPizza = new Pizza("xl", "pepperoni");
//     // expect(testPizza.calcPizzaSize()).to.equal(8);
//     // expect(testPizza.calcPizzaSize()).to.equal(12);
//     // expect(testPizza.calcPizzaSize()).to.equal(15);
//     expect(testPizza.calcPizzaSize()).to.equal(20);
//   });
// });
//
// describe("calcPizzaToppings", function() {
//   it("will return right amount for selected pizza", function() {
//     var testPizza = new Pizza("xl", ["pepperoni"]);
//     expect(testPizza.calcPizzaToppings()).to.equal(1);
//   });
//
//   it("will return right amount for selected pizza", function() {
//     var testPizza = new Pizza("xl", ["pepperoni", "black olives"]);
//     expect(testPizza.calcPizzaToppings()).to.equal(2);
//   });
// });
