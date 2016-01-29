function Pizza(pSize, pType) {
  this.pSize = pSize;
  this.pType = pType;
  this.pizzaPrice = null;
}

Pizza.prototype.calcPizzaSize = function () {
  if(this.pSize === "sm") {
    return 8;
  } else if(this.pSize === "md") {
    return 12;
  } else if(this.pSize === "lg") {
    return 15;
  } else
  return 20;
};

Pizza.prototype.calcPizzaToppings = function () {
  if(this.pType === "Pepperoni") {
    return 2;
  } else if(this.pType === "Combo" || this.pType === "Chicken Ranch"){
    return 4;
  } else if(this.pType === "Cheese") {
    return 0;
  // } else {
  //   for(var i = 0; i < this.toppings.length; i++) {
  //     this.pizzaPrice += 1;
  //   }
  //   return toppingCount;
  };
};

Pizza.prototype.calcPizzaPrice = function () {
  return this.pizzaPrice = this.calcPizzaSize() + this.calcPizzaToppings();
};
//
// Pizza.prototype.fullNamePizza = function () {
//   return this.pSize + " " + this.toppings.join(" ") + " pizza";
// };



// $(function() {
//
//   $("form#add-pizza").submit(function(event) {
//     event.preventDefault();
//
    // var inputtedSize = "small"; //$(this).find("input.new-pizza-size").val();
    // var inputtedToppings = $("input:checked.new-pizza-toppings").val();
    // var newPizza = new Pizza(inputtedSize, inputtedToppings);
    // console.log("Your size/toppings are: " + inputtedSize + " " + inputtedToppings);
//
//     // console.log("Your new pizza is a: " + newPizza.size + " " + newPizza.toppings);
//
//
//   // // var total = newPizza.sizePrice + newToppings.toppingsPrice;
//   // console.log("total price is " + newPizza.sizePrice + inputtedToppings.toppingsPrice);
//   });
//
// });
