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
