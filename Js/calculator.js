let num1=parseInt(prompt("Введите первое число"));
let num2=parseInt(prompt("Введите второе число"));
sum();
minus();
multiply();
division();
function sum(){
    alert(`Результат сложения: ${num1+num2}`);
}
function minus(){
    alert(`Результат вычитания: ${num1-num2}`);
}
function multiply(){
    alert(`Результат умножения: ${num1*num2}`);
}
function division(){
    alert(`Результат деления: ${num1/num2}`);
}