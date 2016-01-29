describe("Pizza object", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("sm", ["pepperoni"]);
    expect(testPizza.pSize).to.equal("sm");
    expect(testPizza.toppings).to.eql(["pepperoni"])
    expect(testPizza.pizzaPrice).to.equal(null);
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
  it("will return right amount for 1 topping", function() {
    var testPizza = new Pizza("xl", ["pepperoni"]);
    expect(testPizza.calcPizzaToppings()).to.equal(1);
  });

  it("will return right amount for 2 toppings", function() {
    var testPizza = new Pizza("xl", ["pepperoni", "black olives"]);
    expect(testPizza.calcPizzaToppings()).to.equal(2);
  });
});

describe("fullNewPizza", function() {
  it("will return the summary for an ordered pizza", function() {
    var testPizza = new Pizza("lg", ["pepperoni"]);
    expect(testPizza.fullNamePizza()).to.equal("lg pepperoni pizza");
  });
});
