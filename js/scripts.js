function Pizza(pSize, pType, toppings) {
  this.pSize = pSize;
  this.pType = pType;
  this.toppings = toppings;
  this.pizzaPrice = null;
}

Pizza.prototype.calcPizzaSize = function () {
  if(this.pSize === "Small") {
    return 8;
  } else if(this.pSize === "Medium") {
    return 12;
  } else if(this.pSize === "Large") {
    return 15;
  } else
  return 20;
};

Pizza.prototype.calcPizzaType = function () {
  if(this.pType === "Pepperoni") {
    return 2;
  } else if(this.pType === "Combo" || this.pType === "Chicken Ranch"){
    return 4;
  } else if(this.pType === "Cheese") {
    return 0;
  } else {
    return -1;
  };
};

Pizza.prototype.calcPizzaToppings = function () {
  var toppingTotal = 0;
  for(var i = 0; i < this.toppings.length; i++) {
    toppingTotal += 1;
  }
  return toppingTotal;
};

Pizza.prototype.calcPizzaPrice = function () {
  return this.pizzaPrice = this.calcPizzaSize() + this.calcPizzaType() + this.calcPizzaToppings();
};

Pizza.prototype.fullNamePizza = function () {
  return this.pSize + " " + this.pType + " Pizza";
};



$(function() {
  var total = 0;

  $("form#add-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $(this).find("select.new-pizza-size").val();
    var inputtedType = $(this).find("select.new-pizza-type").val();
    var inputtedToppings = $(this).find(".topping:checked").map(function() {
      return this.value;
    });

    var inputtedToppingsArray = $.makeArray(inputtedToppings);

    var newPizza = new Pizza(inputtedSize, inputtedType, inputtedToppingsArray);

  total += newPizza.calcPizzaPrice();
  $("#order-total").text("$ " + total);
  $("#order-pizzas").append(newPizza.fullNamePizza() + " $" + newPizza.calcPizzaPrice() + "<br>");
  });

});
