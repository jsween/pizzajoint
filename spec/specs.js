describe("Pizza", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("pepperoni", "small");
    expect(testPizza.pizzaType).to.equal("pepperoni");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.pizzaBasePrice).to.equal(10);
  });

});
