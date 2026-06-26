//1: if
console.log('***********if statement **********')
let age:number=10;
if(age>=18){
    console.log("you are eligible to Vote");

}
//2:if-else 
console.log("**********if-else statement**********")
age=20;
if(age>=18){
    console.log("you are eligible to Vote")
}
else{
    console.log("you are not eligible to vote")
}

//3:if-else-if
console.log("************if-else-if statement**********")
let marks:number=30;
if(marks>=90){
    console.log("You got Grade A")
}
else if(marks<90 && marks>=75)
{
    console.log("You got Grade B")
}
else if(marks<70 && marks>=65)
{
    console.log("You got Grade C")
}
else if(marks<65 && marks>=35)
{
    console.log("You got Grade D")
}
else{
    console.log("You are fail")
}


//4:Switch-case
console.log("*****************Switch-case statement*******************")
let day=9;
switch(day){
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;

    default:
        console.log("Please enter valid input")
}
