var SimpleIngredient = (function () {
  function SimpleIngredient(name, calories, ironContent,
                            vitaminCContent) {
    this.name = name;
    this.calories = calories;
    this.ironContent = ironContent;
    this.vitaminCContent = vitaminCContent;
  }

  SimpleIngredient.prototype.GetName = function () {
    return this.name;
  };
  SimpleIngredient.prototype.GetCalories = function () {
    return this.calories;
  };
  SimpleIngredient.prototype.GetIronContent = function () {
    return this.ironContent;
  };
  SimpleIngredient.prototype.GetVitaminCContent = function () {
    return this.vitaminCContent;
  };
  return SimpleIngredient;
})();


var CompoundIngredient = (function () {
  function CompoundIngredient(name) {
    this.name = name;
    this.ingredients = [];
  }

  CompoundIngredient.prototype.AddIngredient =
    function (ingredient) {
      this.ingredients.push(ingredient);
    };
  CompoundIngredient.prototype.GetName = function () {
    return this.name;
  };
  CompoundIngredient.prototype.GetCalories = function () {
    var total = 0;
    for (var i = 0; i < this.ingredients.length; i++) {
      total += this.ingredients[i].GetCalories();
    }
    return total;
  };
  CompoundIngredient.prototype.GetIronContent = function () {
    var total = 0;
    for (var i = 0; i < this.ingredients.length; i++) {
      total += this.ingredients[i].GetIronContent();
    }
    return total;
  };
  CompoundIngredient.prototype.GetVitaminCContent = function () {
    var total = 0;
    for (var i = 0; i < this.ingredients.length; i++) {
      total += this.ingredients[i].GetVitaminCContent();
    }
    return total;
  };
  return CompoundIngredient;
})();




var egg = new SimpleIngredient("Egg", 155, 6, 0);
var milk = new SimpleIngredient("Milk", 42, 0, 0);
var sugar = new SimpleIngredient("Sugar", 387, 0,0);
var rice = new SimpleIngredient("Rice", 370, 8, 0);
var ricePudding = new CompoundIngredient("Rice Pudding");
var ricePuddingGrande = new CompoundIngredient("Rice Pudding Grande");
ricePudding.AddIngredient(egg);
ricePudding.AddIngredient(rice);
ricePudding.AddIngredient(milk);
ricePudding.AddIngredient(sugar);


ricePuddingGrande.AddIngredient(ricePudding);
ricePuddingGrande.AddIngredient(egg);
ricePuddingGrande.AddIngredient(egg);
ricePuddingGrande.AddIngredient(egg);

console.log(ricePuddingGrande.GetCalories() + " calories");