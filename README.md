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
