/************ Pizza constructor **************/
function Pizza(pSize, pType, toppings) {
  this.pSize = pSize;
  this.pType = pType;
  this.toppings = toppings;
  this.pizzaPrice = null;
}
/**** returns num based off pizza size  - used to calc price ****/
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
/**** returns num based off pizza type - used to calc price ****/
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
/**** returns num based off num toppings - used to calc price ****/
Pizza.prototype.calcPizzaToppings = function () {
  var toppingTotal = 0;
  for(var i = 0; i < this.toppings.length; i++) {
    toppingTotal += 1;
  }
  return toppingTotal;
};
/**** returns final price of the pizzas ****/
Pizza.prototype.calcPizzaPrice = function () {
  return this.pizzaPrice = this.calcPizzaSize() + this.calcPizzaType() + this.calcPizzaToppings();
};
/**** describes the type of pizza ordered ****/
Pizza.prototype.fullNamePizza = function () {
  return this.pSize + " " + this.pType + " Pizza";
};



$(function() {
  var total = 0;

  /** add a pizza button **/
  $("form#add-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $(this).find("select.new-pizza-size").val();
    var inputtedType = $(this).find("select.new-pizza-type").val();
    var inputtedToppings = $(this).find(".topping:checked").map(function() {
      return this.value;
    });
    /*** makes the toppings into array in order to calc num ***/
    var inputtedToppingsArray = $.makeArray(inputtedToppings);
    /**** new pizza object ****/
    var newPizza = new Pizza(inputtedSize, inputtedType, inputtedToppingsArray);

    $("#running-total").show();
    $(".place-holder").hide();
    total += newPizza.calcPizzaPrice();
    $("#order-total").text("$ " + total);
    $("#order-pizzas").append(newPizza.fullNamePizza() + " $" + newPizza.calcPizzaPrice() + "<br>");
  });

  /** checkout button **/
  $("#checkout").click(function(event) {
    if(total > 0) {
      alert("Your order has been placed!  You owe me $" + total);
    } else {
      alert("Hey! Place your order so I can get this going!");
    }
    location.reload();
  })
});
