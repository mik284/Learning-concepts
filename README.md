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
