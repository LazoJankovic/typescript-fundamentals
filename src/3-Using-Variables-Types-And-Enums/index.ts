// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}
let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
  console.log('pt is just:', pt, 'but we can access string value:', ProductType[0]);
}

/* 
JS code:
(function (ProductType) {
    ProductType[ProductType["Sports"] = 0] = "Sports";
    ProductType[ProductType["HomeGoods"] = 1] = "HomeGoods";
    ProductType[ProductType["Groceries"] = 2] = "Groceries";
})(ProductType || (ProductType = {}));

use cont enum when we just want to compare values and don't wanna have magic strings
and also any JS generated, like here^
There's no going back to string equivalent of gorecries, sports... it's just number now.


That's an example of enumeration or an enum, allows us to find a constant list of items.
If we want these to be written out as an full enum output in JS, then we just write enum NameOfEnum
If we only want numeric equivalent - we put const enum

So, use enums mostly when we want to compare magis strings without remembering them.
*/