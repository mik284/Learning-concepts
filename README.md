# Learning-concepts
In JavaScript, an object is an unordered collection of properties. Each property consists of a key/value pair, 
and can reference either a primitive (e.g., strings, numbers, booleans, etc.) or another object. Unlike elements in an array, 
which are accessed by a numeric index, properties in objects are accessed by their key name using either 
square bracket notation or dot notation. For a closer look at object fundamentals, check out Intro to JavaScript linked below.


# Further Research
* Intro to JavaScript
* Unquoted property names / object keys in JavaScript
* Valid JavaScript variable names in ECMAScript 5
* Valid JavaScript variable names in ECMAScript 6




# MODIFY OBJECTS IN JS 
## Add. REMOVE. Pass . Compare

Objects are commonly created with literal notation, and can include properties that point to functions called methods. Methods are accessed the same way as other properties of objects, and can be invoked the same way as regular functions, except they automatically have access to the other properties of their parent object.

By default, objects are mutable (with a few exceptions), so data within them can be altered. New properties can be added, and existing properties can be modified by simply specifying the property name and assigning (or re-assigning) a value. Additionally, properties and methods of an object can be deleted as well with the delete operator, which directly mutates the object.

We've modified objects quite a bit in this section, and even added new methods into them. In the very next section, we'll take a closer look at invoking these methods, as well as how these methods can directly access and modify an object itself!

# use this.
A method is a function property of an object. It is accessed the same way as any other property of the object (i.e., using dot notation or square bracket notation), and is invoked the same way as a regular function outside of an object (i.e., adding parentheses to the end of the expression).

Since an object is a collection of data and the means to operate on that data, a method can access the object it was called on using the special this keyword. The value of this is determined when a method is invoked, and its value is the object on which the method was called. Since this is a reserved word in JavaScript, its value cannot be used as an identifier. Feel free to check out the links below for an additional look at methods and their relationship with this.

We've spent a bit of time on this inside objects, but did you know that the value of this can have different meanings outside an object? In the next section, we'll take a close look at globals, their relationship with this, and the implications of using them.


# Function @ Runtime

In the JavaScript language, functions are first-class functions. This means that we can do with functions just about everything that we can do with other elements in JavaScript, such as strings, arrays, or numbers. JavaScript functions can:

Be stored in variables
Be returned from a function.
Be passed as arguments into another function.

## JavaScript functions 
- can take in a variety of different arguments, including strings, numbers, arrays, and objects. Since functions are first-class functions, functions can also be passed as arguments to a given function. Functions that take in other functions as arguments are called higher-order functions. Functions that are passed as arguments to other functions are called callback functions.

- Callbacks allow you to pass functions without needing to name them (i.e., anonymous functions), which leads to less variables floating around. They also allow you to delegate calling functions to other functions. Array methods, such as forEach(), map(), and filter(), take advantage of callbacks to execute functions onto a given array's elements. Feel free to check out the list of other array methods listed below.

# JavaScript is Function-Scoped
This is all because variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block. Since entering a function will change scope, any variables defined inside that function are not available outside of that function. On the other hand, if there are any variables defined inside a block (e.g., within an if statement), those variables are available outside of that block.

# Scope-chain process
![l2-42-scope-chain](https://user-images.githubusercontent.com/65639270/174599186-9cec7162-dfbe-4dd8-97b1-c77aa94a15a1.png)
- When resolving a variable, the JavaScript engine begins by looking at the nested child function's locally-defined variables. If found, then the value is retrieved; if not, the JavaScript engine continues to looking outward until the variable is resolved. If the JavaScript engine reaches the global scope and is still unable to resolve the variable, the variable is undefined.
-
# CLOSURE
A closure refers to the combination of a function and the lexical environment in which that function was declared. Every time a function is defined, closure is created for that function. This is especially powerful in situations where a function is defined within another function, allowing the nested function to access variables outside of it. Functions also keep a link to its parent's scope even if the parent has returned. This prevents data in its parents from being garbage collected.

# immediately-invoked function expressions (IIFE)
## Structure and Syntax
An immediately-invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. Check out the following example:

(function sayHi(){
    alert('Hi there!');
  }
)();

// alerts 'Hi there!'
The syntax might seem a bit odd, but all we're doing is wrapping a function in parentheses, then adding a pair of parentheses at the end of that to invoke it!

## Passing Arguments into IIFE's
Let's look into how we can go about passing arguments into IIFE's. Consider the following example of an anonymous function expression that takes in a single argument:

(function (name){
    alert(`Hi, ${name}`);
  }
)('Andrew');

// alerts 'Hi, Andrew'
The second pair of parentheses not only immediately executes the function preceding it -- it's also the place to put any arguments that the function may need! We pass in the string 'Andrew', which is stored in the function expression's name variable. It is then immediately invoked, alerting the message 'Hi, Andrew' onto the screen.

Here's another example of an IIFE, this time taking two arguments and returning their product:

(function (x, y){
    console.log(x * y);
  }
)(2, 3);

// 6
Again -- the arguments passed into the anonymous function (i.e., 2 and 3) belong in trailing set of parentheses.

## IIFE's and Private Scope
One of the primary uses for IIFE's is to create private scope (i.e., private state). Recall that variables in JavaScript are traditionally scoped to a function. Knowing this, we can leverage the behavior of closures to protect variables or methods from being accessed! Consider the following example of a simple closure within an IIFE, referenced by myFunction:

const myFunction = (
  function () {
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();
Let's break myFunction down and review the individual parts that make it up:

![l2-67-iife-with-a-closure](https://user-images.githubusercontent.com/65639270/174638384-ca6995f3-3a8e-4c4f-9b38-d4c9dc81eece.png)
- myFunction refers to an IIFE with a locally-defined variable, hi, and a returned function that closes over hi and prints its value to the console.


Note that the function that is being returned closes over (i.e., captures) the hi variable. This allows myFunction to maintain a private, mutable state that cannot be accessed outside the function! What's more: because the function expressed is called immediately, the IIFE wraps up the code nicely so that we don't pollute the global scope.

If any of this sounds familiar -- it's because IIFE's are very closely related to everything you've learned about scope and closures!

# Benefits of Immediately-Invoked Function Expressions
We've seen how using an immediately-invoked function expression creates a private scope that protects variables or methods from being accessed. IIFE's ultimately use the returned functions to access private data within the closure. This works out very well: while these returned functions are publicly-accessible, they still maintain privacy for the variables defined within them!

Another great opportunity to use an IFFE is when you want to execute some code without creating extra global variables. However, note that an IIFE is only intended to be invoked once, to create a unique execution context. If you have some code that is expected to be re-used (e.g., a function meant to be executed more than once in the application), declaring the function and then invoking it might be a better option.

All in all, if you simply have a one-time task (e.g., initializing an application), an IIFE is a great way to get something done without polluting your the global environment with extra variables. Cleaning up the global namespace decreases the chance of collisions with duplicate variable names, after all.
## 🔗 http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html
## 🔗 https://benalman.com/news/2010/11/immediately-invoked-function-expression/


# Object-Oriented Programming
- objects in JavaScript can represent real-life things. That is, objects can have properties to represent attributes or characteristics, as well as methods to represent actions that can be performed. 
- Using the analogy of spoken language, you can think of objects as nouns, such as a "dog" or a "car." Values of properties are adjectives, such as "blue." Methods, then, are the verbs, such as "bark" or "drive."
* If you've had experience with object-oriented programming in other languages (e.g., Ruby, Python, etc.), you may be surprised to learn that JavaScript does not have a traditional class system (namely, one where the compiler does a lot of organizing out of sight). Instead, the class system is built directly using functions and objects. So rather than using a special class syntax, in JavaScript we define constructor functions.

## Constructor Functions

JavaScript's class system is built directly on using functions and objects. Calling (i.e., invoking) a constructor function with the new operator instantiates a new object. The same constructor function can be used to create different objects.

## The `this` Keyword
* method uses `this` to access an object on which it was called
A common misconception is that `this` refers to the object where it is defined. This is not the case!

The value of `this` is actually not assigned to anything until an object calls the method where `this` is used. In other words, the value assigned to `this` is based on the object that invokes the method where `this` is defined. Let's look at an example:

const dog = {
  bark: function () {
    console.log('Woof!');
  },
  barkTwice: function () {
    this.bark();
    this.bark();
  }
};
Let's go ahead and invoke both of dog's methods:

dog.bark();
// Woof!

dog.barkTwice();
// Woof!
// Woof!
We know that when we call dog.bark(); (or dog.barkTwice();) a variable `this` gets set. Since this can access the object it was called on, barkTwice can use `this` to access the dog object, which contains the bark method.

But what if we just wrote bark(); instead of `this.bark();` in barkTwice? The function would have first looked for a local variable named bark in the scope of barkTwice. If bark isn't found, it would have looked further up the scope chain.

To tie things all together: this.bark(); tells barkTwice to look at dog -- the object that the method was called on -- to find bark.

`There are four ways to call functions, and each way sets this differently.`

- First, calling a constructor function with the new keyword sets `this` to a newly-created object.
-  calling a function that belongs to an object (i.e., a method) sets this to the object itself. Recall that earlier, the dog object's barkTwice() method was able to access properties of dog itself.
-  Third, calling a function on its own (i.e., simply invoking a regular function) will set this to window, which is the global object if the host environment is the browser.

function funFunction() {
  return this;
}

funFunction();
// (returns the global object, `window`)
- The fourth way to call functions allows us to set this ourselves! 
![l3-53-this-grid-2](https://user-images.githubusercontent.com/65639270/175356302-e766af15-52ae-4a74-9ddd-7d2740f3a331.png)

If a constructor function is called with the new operator, the value of this is set to the newly-created object. If a method is invoked on an object, this is set to that object itself. And if a function is simply invoked, this is set to the global object: window.
