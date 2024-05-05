/*for (let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`);
}
*/

/*let i = 1;
while(i <= 10){
    console.log(`${i} x 5 = ${i * 5}`);
    i++;
}
*/

/*const valores = [1, 2, 10];
valores.forEach((value) => console.log(`${value} x 5 = ${value * 5}`));*/

/*
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores.map((value) => {return value * 5});
console.log(resultado);
*/

function subtrair(num1, num2) {
    return num1 - num2;
}

function somar(num1, num2) {
    return num1 + num2;
}

const subtrair1 = (num1, num2) => num1 - num2;

const somar1 = (num1, num2) => num1 + num2;

console.log(subtrair1(2, 3));
console.log(somar1(2, 3));

const resultado = somar(2, 3);
console.log(resultado);

const resultado2 = subtrair(2, 3);
console.log(resultado2);