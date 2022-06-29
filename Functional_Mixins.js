function CoffeeMaker(object) {
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    }
  });
}

/* Note that unlike a standard factory function, which takes in individual property values as arguments -- the functional mixin actually takes in an object itself! Whichever object is passed in to the function, is merged with other objects passed into Object.assign().

Let's pass the following percolator object into CoffeeMaker() and view the results: */

const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });
// The returned mixedCoffeeMaker object now looks like:

{
  style: 'percolator',
  pourAll: function () {
    needsRefill = true;
  },
  isEmpty: function () {
    return needsRefill;
  }
}
