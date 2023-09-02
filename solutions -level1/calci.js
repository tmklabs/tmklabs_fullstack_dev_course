const add =(a,b) =>{
    return a+b;
}
const sub =(a,b) =>{
    return a-b;
}
const multiply =(a,b) =>{
    return a*b;
}
const divide =(a,b) =>{
    if(b=== 0){
        return"Cannot divide by zero";
    }
    return a/b;
}

function calci(operator,a,b){
    switch (operator){
        case '+':
            return add(a,b);
        case '-':
            return sub(a,b);
        case '*':
            return multiply(a,b);
         case '/':
            return divide(a,b);
         default:
            return "invalid Operator";              
    }
}
const num1 = 10;
const num2 = 5;
const operator = '+';
console.log(`Result of${num1} ${operator} ${num2} is: `,calci(operator,num1,num2));

