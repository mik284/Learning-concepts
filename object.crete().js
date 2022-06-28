function Parent() {
  // ...
}

function Child() {
  // ...
}

Child.prototype = Object.create(Parent.prototype);

const child = new Child();
// The following is then executed:

child instanceof Parent;
// What is printed to the console?
true
