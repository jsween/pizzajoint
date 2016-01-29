describe("Pizza object", function() {
  it("will create a new pizza object", function() {
    var testPizza = new Pizza("xl", "Pepperoni", 0);
    expect(testPizza.pSize).to.equal("xl");
    expect(testPizza.pType).to.equal("Pepperoni");
    expect(testPizza.toppings).to.equal(0);
    expect(testPizza.calcPizzaSize()).to.equal(20);
    expect(testPizza.calcPizzaToppings()).to.equal(2);
    expect(testPizza.calcPizzaPrice()).to.equal(22);
  });
});

describe("calcPizzaSize", function() {
  it("will return right amount for xl pizza", function() {
    var testPizza = new Pizza("xl", "cheese", 0);
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
  it("will return right amount for pepperoni", function() {
    var testPizza = new Pizza("xl", "Pepperoni", 0);
    expect(testPizza.calcPizzaToppings()).to.equal(2);
  });
  it("will return right amount for Combo", function() {
    var testPizza = new Pizza("xl", "Combo", 0);
    expect(testPizza.calcPizzaToppings()).to.equal(4);
  });
  it("will return right amount for Chicken Ranch", function() {
    var testPizza = new Pizza("xl", "Chicken Ranch", 0);
    expect(testPizza.calcPizzaToppings()).to.equal(4);
  });
  it("will return right amount for Cheese", function() {
    var testPizza = new Pizza("xl", "Cheese", 0);
    expect(testPizza.calcPizzaToppings()).to.equal(0);
  })

});
//
// describe("fullNewPizza", function() {
//   it("will return the summary for an ordered pizza", function() {
//     var testPizza = new Pizza("lg", ["pepperoni"]);
//     expect(testPizza.fullNamePizza()).to.equal("lg pepperoni pizza");
//   });
// });
