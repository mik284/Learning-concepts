// Check out the following Basketball() factory function:

function Basketball(color) {
  return {
    color: color,
    numDots: 35000
  };
}

// Let's invoke Basketball() and check out its output:

const orangeBasketball = Basketball('orange');

console.log(orangeBasketball);
// { color: 'orange', numDots: 35000 }

const myBB = Basketball('blue and green');
const yourBB = Basketball('purple');
const bouncy = Basketball('neon pink');
