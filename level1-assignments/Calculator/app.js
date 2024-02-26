const readline = require('readline');
const { add, subtract, multiply, divide } = require('./Modules/operations.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Choose the operation (add, subtract, multiply, divide): ', (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch (operation) {
                case 'add':
                    result = add(a, b);
                    break;
                case 'subtract':
                    result = subtract(a, b);
                    break;
                case 'multiply':
                    result = multiply(a, b);
                    break;
                case 'divide':
                    result = divide(a, b);
                    break;
                default:
                    console.log('Invalid operation');
                    rl.close();
                    return;
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
