//Arithmetic Operators
//It is used to perform mathematical operations on numbers. It includes operators like +, -, *, /, %, and **.
console.log("********Arithmetic Operators:******")
let a:number =10;
let b:number =5;
console.log("Addition:",a+b);
console.log("Subraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Modulus:",a%b);
console.log("exponential:",4**2);

//2:Assignment Operators
//It is used to assign values to variables. It includes operators like =, +=, -=, *=, /=, and %=.
console.log("**********Assignment Operators:********");
a=20;
b=10;
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

//3:Relational Operators
//It is used to compare two values and return a boolean value (true or false) based on the comparison.
//It includes operators like ==, ===(strict equality), !=, !==, >, <, >=, and <=.
console.log("**********Relational Operators:********");
a=10
b=5
console.log(a==b);//just compare the values
console.log(a===b);//strict equality operator checks for both value and data type and it is only specific to typescript and javascript.
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//4:Logical Operators:
//It is used to combine multiple boolean expressions and return a boolean value based on the result. It includes operators like &&(logical AND), ||(logical OR), and !(logical NOT).
console.log("**********Logical Operators:********");
let isTrue:boolean=true;
let isFalse:boolean=false;
console.log(isTrue && isFalse);
console.log(isTrue || isFalse);
console.log(!isTrue);   

//5:combination of Logical and Relational Operators
console.log("**********Combination of Logical and Relational Operators:********");
a=10;
b=20;
console.log(a>5 && b<30);
console.log(a<5 || b>30);

//6:Incremental and Decremental Operators:
console.log("**********Incremental and Decremental Operators:********");
a=10;
b=5;
console.log("Incremental Operator:",++a); //output=11
console.log("Decremental Operator:",--b);//output=4
console.log("Post Incremental Operator:",a++);//output=11
console.log("Post Decremental Operator:",b--);//output=4
//the Value will be changed if the value is stored into a variable after the operation
let x=5
let y:number=x++;
console.log(y);//output=5
console.log(x);//output=6
y=x--;
console.log(y);//output=6
console.log(x);//output=5
y=++x;
console.log(y);//output=6
console.log(x);//output=6
y=--x;
console.log(y);//output=5
console.log(x);//output=5


//7:Ternary Operator:
//It is used to evaluate a condition and return one of two values based on the result. It is represented by the symbol ? :.
console.log("**********Ternary Operator:********");
//syntax:  condition ? value_if_true : value_if_false
let age:number=30;
let isAdult:string=age>=18? 'isadult' : 'notadult'
console.log(isAdult);//output=isadult
