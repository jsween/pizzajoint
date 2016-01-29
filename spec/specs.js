describe("Pizza object", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("Extra Large", "Pepperoni", 0);
    expect(testPizza.pSize).to.equal("Extra Large");
    expect(testPizza.pType).to.equal("Pepperoni");
    expect(testPizza.toppings).to.equal(0);
    expect(testPizza.calcPizzaSize()).to.equal(20);
    expect(testPizza.calcPizzaType()).to.equal(2);
    expect(testPizza.calcPizzaPrice()).to.equal(22);
  });
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("Medium", "Pepperoni", 0);
    expect(testPizza.pSize).to.equal("Medium");
    expect(testPizza.pType).to.equal("Pepperoni");
    expect(testPizza.toppings).to.equal(0);
    expect(testPizza.calcPizzaSize()).to.equal(12);
    expect(testPizza.calcPizzaType()).to.equal(2);
    expect(testPizza.calcPizzaPrice()).to.equal(14);
  });
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("Medium", "Pepperoni", ["pepperoni"]);
    expect(testPizza.pSize).to.equal("Medium");
    expect(testPizza.pType).to.equal("Pepperoni");
    expect(testPizza.calcPizzaToppings()).to.equal(1);
    expect(testPizza.calcPizzaSize()).to.equal(12);
    expect(testPizza.calcPizzaType()).to.equal(2);
    expect(testPizza.calcPizzaPrice()).to.equal(15);
  });
});

describe("calcPizzaSize", function() {
  it("will return right amount for xl pizza", function() {
    var testPizza = new Pizza("Extra Large", "cheese", 0);
    expect(testPizza.calcPizzaSize()).to.equal(20);
  });
  it("will return right amount for small pizza", function() {
    var testPizza = new Pizza("Small");
    expect(testPizza.calcPizzaSize()).to.equal(8);
  });
  it("will return right amount for med pizza", function() {
    var testPizza = new Pizza("Medium");
    expect(testPizza.calcPizzaSize()).to.equal(12);
  });
  it("will return right amount for large pizza", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.calcPizzaSize()).to.equal(15);
  });
});

describe("calcPizzaType", function() {
  it("will return right amount for pepperoni", function() {
    var testPizza = new Pizza("xl", "Pepperoni", 0);
    expect(testPizza.calcPizzaType()).to.equal(2);
  });
  it("will return right amount for Combo", function() {
    var testPizza = new Pizza("xl", "Combo", 0);
    expect(testPizza.calcPizzaType()).to.equal(4);
  });
  it("will return right amount for Chicken Ranch", function() {
    var testPizza = new Pizza("xl", "Chicken Ranch", 0);
    expect(testPizza.calcPizzaType()).to.equal(4);
  });
  it("will return right amount for Cheese", function() {
    var testPizza = new Pizza("xl", "Cheese", 0);
    expect(testPizza.calcPizzaType()).to.equal(0);
  })
});

describe("calcPizzaToppings,", function() {
  it("will return the right amount for each topping added", function() {
    var testPizza = new Pizza("xl", "Cheese", ["1", "2"]);
    expect(testPizza.calcPizzaToppings()).to.equal(2);
  })
})

describe("fullNewPizza", function() {
  it("will return the summary for an ordered pizza", function() {
    var testPizza = new Pizza("Large", "pepperoni", 0);
    expect(testPizza.fullNamePizza()).to.equal("Large pepperoni Pizza");
  });
  it("will return the summary for an ordered pizza", function() {
    var testPizza = new Pizza("Large", "Chicken Bacon Ranch", 0);
    expect(testPizza.fullNamePizza()).to.equal("Large Chicken Bacon Ranch Pizza");
  });
});
