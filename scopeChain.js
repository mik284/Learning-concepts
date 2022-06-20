function one() {
  two();
  function two() {
    three();
    function three() {
      // function three's code here
    }
  }
}

one();
