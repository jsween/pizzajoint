function Pizza(pSize, toppings) {
  this.pSize = pSize;
  this.toppings = toppings;
  this.pizzaPrice = null;
}

Pizza.prototype.calcPizzaSize = function () {
  if(this.pSize === "sm") {
    return this.pizzaPrice += 8;
  } else if(this.pSize === "md") {
    return this.pizzaPrice += 12;
  } else if(this.pSize === "lg") {
    return this.pizzaPrice += 15;
  } else
  return 20;
};

Pizza.prototype.calcPizzaToppings = function () {
  for(var i = 0; i < this.toppings.length; i++) {
    this.pizzaPrice += 1;
  }
  return this.pizzaPrice;
};

Pizza.prototype.fullNamePizza = function () {
  return this.pSize + " " + this.toppings.join(" ") + " pizza";
};



$(function() {

//   $("form#add-pizza").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedSize = $(this).find("input.new-pizza-size").val();
//     var inputtedToppings = $("input:checked.new-pizza-toppings").val();
//     var newPizza = new Pizza(inputtedSize);
//     // console.log("Your size/toppings are: " + inputtedPizzaSize + " " + inputtedToppings);
//
//     // console.log("Your new pizza is a: " + newPizza.size + " " + newPizza.toppings);
//
//
//   // // var total = newPizza.sizePrice + newToppings.toppingsPrice;
//   // console.log("total price is " + newPizza.sizePrice + inputtedToppings.toppingsPrice);
//   });

});
