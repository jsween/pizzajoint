function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaPrice = null;
}

Pizza.prototype.calcPizzaSize = function () {
  if(this.pizzaSize === "sm") {
    return this.pizzaPrice += 8;
  } else if(this.pizzaSize === "md") {
    return this.pizzaPrice += 12;
  } else if(this.pizzaSize === "lg") {
    return this.pizzaPrice += 15;
  } else
    return 20;
};

Pizza.prototype.calcPizzaToppings = function () {
  for(var i = 0; i < this.pizzaToppings.length; i++) {
    this.pizzaPrice += 1;
  }
  return this.pizzaPrice;
};


$(function() {
  $("form#add-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = $(this).find("input.new-size").val();
    var inputtedPizzaToppings = $(this).find("input.new-toppings").val();
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings);


    console.log("Your new pizza is: " + newPizza);
  });




});
