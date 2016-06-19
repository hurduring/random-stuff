var peasants = [
  {name: "Jory Cassel", taxesOwed: 11, bankBalance: 50},
  {name: "Vardis Egen", taxesOwed: 15, bankBalance: 20}
];


function TaxCollector() {
}

TaxCollector.prototype.collect = function (items, projection) {
  if (items.length > 1)
    return projection(items[0]) + this.collect(items.slice(1), projection);
  return projection(items[0]);
};

var tax = new TaxCollector();
var collected = tax.collect(peasants, function (item) {
  return item.taxesOwed;
});

console.log(collected)
