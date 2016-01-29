describe("Pizza", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("pepperoni", "small");
    expect(testPizza.pizzaType).to.equal("pepperoni");
  });


});
