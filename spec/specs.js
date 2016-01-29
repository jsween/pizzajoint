describe("Pizza", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("sm", "pepperoni");
    expect(testPizza.pizzaSize).to.equal("sm");
    expect(testPizza.pizzaToppings).to.equal("pepperoni");
    expect(testPizza.pizzaPrice).to.equal(null);
  });

});

describe("getPizzaSize", function() {
  it("will return right amount for selected pizza", function() {
    var testPizza = new Pizza("xl", "pepperoni");
    // expect(testPizza.calcPizzaSize()).to.equal(8);
    // expect(testPizza.calcPizzaSize()).to.equal(12);
    // expect(testPizza.calcPizzaSize()).to.equal(15);
    expect(testPizza.calcPizzaSize()).to.equal(20);
  });
});
