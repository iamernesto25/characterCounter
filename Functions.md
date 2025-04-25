1. 🔰 Introduction to Functions
What is a function?

Why use functions?

Function declaration syntax

Function naming conventions

Calling/invoking a function

2. 🧱 Types of Functions
Function Declarations (aka Function Statements)

Function Expressions

Anonymous Functions

Arrow Functions (=>)

Immediately Invoked Function Expressions (IIFE)

3. 📦 Function Parameters and Arguments
Passing arguments to functions

Default parameters

Rest parameters (...args)

Arguments object

4. 🔁 Return Values
Using return keyword

Returning primitives vs. returning objects

5. 🧠 Function Scope and Closures
Global vs. local scope

Function scope vs block scope (var, let, const)

Closures (and real-life use cases)

Lexical scope

6. 📚 Callback Functions
What is a callback function?

Using callbacks in built-in functions (setTimeout, map, forEach)

Benefits of callbacks

Callback hell (introduction)

7. ⚙️ Higher-Order Functions
What are higher-order functions?

Passing functions as arguments

Returning functions from functions

8. 🧪 Function Methods and Properties
call(), apply(), bind()

name and length properties

9. 🧰 Arrow Functions Deep Dive
Syntax variations

this binding in arrow functions vs regular functions

When not to use arrow functions (e.g., as object methods)

10. 🏗️ Modular Functions & Best Practices
Pure functions

DRY principle

Function reusability

Modular code organization

Named vs anonymous functions (when to use which)

11. 📦 Advanced Concepts (Optional)
Recursion

Memoization

Currying

Debounce and Throttle functions (for performance)

# Introduction to Functions
## 📘 1. What is a Function?
A function in JavaScript is a block of reusable code that performs a specific task. Instead of writing the same code again and again, we can define it once in a function and call it whenever we need it.

✅ Think of a function like a machine: you give it some input, it processes it, and gives you an output.

## 📘 2. Why Use Functions?
Here are some reasons:

🧱 Reusability – Write once, use anywhere.

🧹 Modularity – Break your program into smaller, manageable parts.

🔍 Readability – Makes your code easier to understand.

🛠️ Maintainability – Easier to debug and update.

💡 Abstraction – You hide complexity and show only necessary details.

## 📘 3. Function Naming Conventions
Use camelCase for naming: calculateTotal, sendEmail

Use descriptive names: getUserData() is better than data1()

Don't start names with numbers

Avoid JavaScript reserved keywords like function, let, etc.

# 🧱 Types of Functions
There are several types of functions.
## 1. Function declaration: 
A function declaration is one of the ways to define a function in JavaScript. It uses the function keyword followed by a name, a list of parameters inside parentheses, and a block of code inside curly braces.

### Key Points
- It is hoisted: You can call the function before it's declared in the code.
- It has a name
- It uses the function keyword

## 2. Function Expression:
A function expression is one way of defining a function in JavaScript by assigning it to a variable.
- They are not hoisted
- Can be an anonymous or named function.
- Mostly used in callbacks, event listeners

## 3. Arrow Function:
An arrow function is a shorter syntax for writing function expressions in JavaScript. It's often used for cleaner and more concise code.

## 4. Immediate Invoke function (IIFE):
A function that runs immediately after it's defined.

# Hoisting
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.
✅ So, if I understand you correctly, in summary, hoisting in JavaScript is when variables and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed.

What JavaScript does is: it first scans your code, identifies your variable and function declarations, and hoists them to the top of their scope (global or local).

If a variable is declared with the var keyword, JavaScript treats it as declared but not initialized — so it exists but holds the value undefined.

Variables declared with let and const are also hoisted but are moved to a Temporal Dead Zone (TDZ). If you try to access them before their declaration line, JavaScript will throw a ReferenceError.

You can only safely use let and const variables after the line where they’re declared.

As for function declarations, they are fully hoisted — meaning you can call them before they appear in your code, and they’ll work just fine.

# 🧊 What is the Temporal Dead Zone (TDZ) in JavaScript?
The Temporal Dead Zone (TDZ) is the time between the hoisting of a variable (declared with let or const) and the actual line of code where it is declared and initialized.

During this time, you cannot access the variable — doing so will throw a ReferenceError.

# 🔑 1. What are Parameters and Arguments in Function?
Parameters are the variables or placeholders used in the function definition.

Arguments are the actual values passed to the function when it is called.

# ✅ What is the ...rest operator?
The ...rest operator allows a function to accept an indefinite number of arguments as an array. It's used when you're not sure how many arguments might be passed to a function.

# ✅ What is the ...spread operator?
The spread operator (...) is used to unpack elements from an array, object, or iterable into individual elements.

# What is the return statement
In JavaScript, the return statement terminates the execution of a function and specifies the value that should be outputted (or "returned") from that function.

# Scope in JavaScript
## 🌍 What is Scope?
In JavaScript, scope refers to the visibility and accessibility of variables and functions at different parts of your code. It determines where a variable or function can be accessed or modified.

## 1. Global Scope
Variables and functions declared outside of any function or block are in the global scope.

They can be accessed anywhere in your code.

## Local Scope: 
A variable or function declared inside a function or block has a local scope. These are only accessible within that specific function or block and are not visible outside.

## 3. Block Scope (let, const)
Introduced in ES6, let and const have block scope, meaning variables declared with let and const are only accessible within the block (enclosed by {}) in which they are declared.

## ✅ Function Scope
A variable is function-scoped if it is accessible only inside the function where it is declared.

var is function-scoped.

# What is a closure?
A closure is a function that remembers and can access variables from outside its own scope, even after that outer function has finished executing.

# 📌 What is a Callback Function?
A callback function is a function passed as an argument to another function and is executed later, usually after some operation is complete.
