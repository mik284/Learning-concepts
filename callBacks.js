function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}
function isPositive(n) {
  return n > 0;
};
//The following is then executed:

each([-2, 7, 11, -4, -10], isPositive);
