function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = [];
  this.pizzaPrice = null;
}

Pizza.prototype.fullNewPizza = function () {
  return this.pizzaSize + " " + this.pizzaToppings;
};

function PizzaToppings(pizzaToppings) {
  this.pizzaToppings = pizzaToppings;
}

PizzaToppings.prototype.getPizzaToppings = function (pizzaToppings) {
  // debugger;
  return this.pizzaToppings;
};

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

    var inputtedPizzaSize = $(this).find("input.new-pizza-size").val();
    var inputtedPizzaToppings = $("input:checked.new-pizza-toppings").val();
    var newPizza = new Pizza(inputtedPizzaSize);
    console.log("Your size/toppings are: " + inputtedPizzaSize + " " + inputtedPizzaToppings);

    console.log("Your new pizza is a: " + newPizza.pizzaSize + " " + newPizza.pizzaToppings);
  });




});
