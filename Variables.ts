//variable is a container for storing data values

//In TypeScript, you can declare variables using the `let`, `const`, or `var` keywords. 
//The `let` keyword is used for variables that can be reassigned, while the `const` keyword is used for variables that cannot be reassigned. 
//The `var` keyword is function-scoped and is generally not recommended for use in modern TypeScript code.
//we can differentiate var let and const based on below factors:
//1:Scope:
//Var is function-scoped, meaning it is accessible within the function it is declared in.
/*  function vartest(){
    if(true){
        var x="India"
        console.log(x);
    }
        console.log(x); // This will work because x is accessible outside the if block but within the function.
}

vartest();  */
 // This will work because var is function-scoped and x is accessible outside the if block but within the function.
//let and const are block-scoped, meaning they are only accessible within the block they are declared in.

/* function lettest(){
    if(true){
        let x="India"
        //console.log(x);
    }
    console.log(x); // This will throw an error because x is not accessible outside the if block.
}
lettest(); */
//This will throw an error because let is block-scoped and x is not accessible outside the if block.


//2:Declration:
//var: You can declare a variable using var without initializing it.
/* var x;
x=10;
console.log(x); // Output: 10
//let: You can declare a variable using let without initializing it.
let y;
y=20;
console.log(y); // Output: 20
//const: You must initialize a variable declared with const at the time of declaration.
const z=30;
console.log(z); // Output: 30
// This will throw an error because const variables must be initialized at the time of declaration.

 */

//3:Redeclaration:
//var:You can redeclare a variable declared with var within the same scope without any error.
//var x=10;
//var x=20;
//console.log(x); // Output: 20
//let: You cannot redeclare a variable declared with let within the same scope. This will throw an error.
/* let y=20;
let y=30; // This will throw an error because let cannot be redeclared within the same scope. */
//const: You cannot redeclare a variable declared with const within the same scope. This will throw an error.
/* const z=30;
const z=40; // This will throw an error because const cannot be redeclared within the same scope. */

//4:Reinitialization:
//var: You can reassign a new value to a variable declared with var.
/* var x=10;
x=20;
console.log(x); // Output: 20 */
//let: You can reassign a new value to a variable declared with let.
/* let y=20;
y=30;
console.log(y); // Output: 30 */
//const: You cannot reassign a new value to a variable declared with const. This will throw an error.
/* const z=30;
z=40; // This will throw an error because const variables cannot be reassigned. */  

//5:Hoisting:
//var: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
/* console.log(x); // Output: undefined
var x=10; */
//let: Variables declared with let are hoisted to the top of their block scope but are not initialized. Accessing them before declaration will throw a ReferenceError.
/* console.log(y); // This will throw a ReferenceError because y is not initialized.
let y=20; */
//const: Variables declared with const are hoisted to the top of their block scope but are not initialized. Accessing them before declaration will throw a ReferenceError.
/* console.log(z); // This will throw a ReferenceError because z is not initialized.
const z=30; */
