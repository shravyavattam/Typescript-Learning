//Premitive datatypes
//1.number
//for float,integer and large number type is number only.
/* let num:number=20;
let num2:number=10.5;
let num3:number=12345789087;
let sum=num+num2+num3;
console.log('sum',sum); */

//2.string:
//for text data type is string only.
//string can be defined using single quotes, double quotes or backticks.
/* let str1:string='Hello';
let str2:string="World";
let str3:string=`Welcome to TypeScript ${str1} ${str2}`;//backticks are used for template literals which allow us to embed expressions and variables inside a string
console.log(str3); */

//3.Boolean
//It is used to represent true or false values.
/* let isTrue:boolean=true;
let isFalse:boolean=false;
console.log('isTrue',isTrue);
console.log('isFalse',isFalse); */


//4.null and undefined
//null represents the intentional absence of any object value, while undefined represents a variable that has been declared but has not been assigned a value.
/* let value:null=null;
let notAssigned:undefined=undefined;
console.log('value',value);
console.log('notAssigned',notAssigned);
 */


//5.Any
//It is a type that can represent any value. It is used when we don't know the type of a variable at the time of declaration.
//By using any, we are unable to take advantage of TypeScript's type checking and may lead to runtime errors if we try to access properties or methods that do not exist on the value.  
/* let value:any=10;
console.log(value);
value='Hello';
console.log(value);
value=true;
console.log(value); */


//6.union
//It is used to declare a varible with many data types without breaking typescript rules.
/* let value:string|number|boolean;
value=10;
console.log(value);
value='Hello';
console.log(value);
value=true;
console.log(value); */


//7.void
//It is used in functions that do not return a value. It indicates that the function does not return anything.
 function greet():void{
    console.log('Hello, welcome to TypeScript!');
}
greet();
//A function that returns a value looks like this:
function add(a:number,b:number):number{
    return a+b;
}
let value:number=add(5,10);
console.log('value',value);
