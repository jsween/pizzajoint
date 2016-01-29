describe("Pizza", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("sm", "pepperoni");
    expect(testPizza.pizzaSize).to.equal("sm");
    expect(testPizza.pizzaToppings).to.equal("pepperoni");
    expect(testPizza.pizzaPrice).to.equal(null);
  });

});

describe("calcPizzaSize", function() {
  it("will return right amount for selected pizza", function() {
    var testPizza = new Pizza("xl", "pepperoni");
    // expect(testPizza.calcPizzaSize()).to.equal(8);
    // expect(testPizza.calcPizzaSize()).to.equal(12);
    // expect(testPizza.calcPizzaSize()).to.equal(15);
    expect(testPizza.calcPizzaSize()).to.equal(20);
  });
});

describe("calcPizzaToppings", function() {
  it("will return right amount for selected pizza", function() {
    var testPizza = new Pizza("xl", ["pepperoni"]);
    expect(testPizza.calcPizzaToppings()).to.equal(1);
  });

  it("will return right amount for selected pizza", function() {
    var testPizza = new Pizza("xl", ["pepperoni", "black olives"]);
    expect(testPizza.calcPizzaToppings()).to.equal(2);
  });
});
