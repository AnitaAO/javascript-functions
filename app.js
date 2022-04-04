function greetings() {
    return 'Hello John';
}
let message = greetings();
console.log(message);

function sum(num1, num2){
    return num1 + num2;
}
let result = sum(2);
    console.log(result);

function printAll(){
    for(let i = 0; i < arguments.length; i++)
    {
        console.log(arguements[i]);
    }
}
printAll(1, 2, 3, 4, 5);
printAll(10, 20);