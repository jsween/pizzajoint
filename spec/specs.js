describe("Pizza", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("small", "pepperoni");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.pizzaToppings).to.equal("pepperoni");
    expect(testPizza.pizzaPrice).to.equal(null);
  });

});
