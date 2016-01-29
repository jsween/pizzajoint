describe("Pizza object", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("sm");
    expect(testPizza.pizzaSize).to.equal("sm");
    expect(testPizza.pizzaPrice).to.equal(null);
  });

});

describe("Toppings object", function() {
  it("will create an array of toppings", function() {
    var testToppings = new PizzaToppings(["pepperoni"]);
    expect(testToppings.getPizzaToppings()).to.equal("pepperoni");
  });
  it("will create an array of toppings", function() {
    var testToppings = new PizzaToppings(["pepperoni", "ham"]);
    expect(testToppings.getPizzaToppings()).to.equal("pepperoni ham");
  });

  it("will create an array of toppings", function() {
    var testToppings = new PizzaToppings(["pepperoni", "ham", "black olives"]);
    expect(testToppings.getPizzaToppings()).to.equal("pepperoni ham black olives");
  });

});

describe("calcPizzaSize", function() {
  it("will return right amount for xl pizza", function() {
    var testPizza = new Pizza("xl");
    expect(testPizza.calcPizzaSize()).to.equal(20);
  });
  it("will return right amount for small pizza", function() {
    var testPizza = new Pizza("sm");
    expect(testPizza.calcPizzaSize()).to.equal(8);
  });
  it("will return right amount for med pizza", function() {
    var testPizza = new Pizza("md");
    expect(testPizza.calcPizzaSize()).to.equal(12);
  });
  it("will return right amount for large pizza", function() {
    var testPizza = new Pizza("lg");
    expect(testPizza.calcPizzaSize()).to.equal(15);
  });
});

describe("calcPizzaToppings", function() {
  it("will return right amount for selected pizza", function() {
    var testPizza = new PizzaToppings(["pepperoni"]);
    expect(testPizza.calcPizzaToppings()).to.equal(1);
  });

  it("will return right amount for selected pizza", function() {
    var testPizza = new PizzaToppings(["pepperoni", "black olives"]);
    expect(testPizza.calcPizzaToppings()).to.equal(2);
  });
});
