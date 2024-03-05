//Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

const prompt = require("prompt-sync")();

let arrayNumeros = [];

for(let i = 0; i < 5; i++){
 let numeros = parseInt(prompt("Digite um valor "));
 arrayNumeros.push(numeros);
}

const dobro = arrayNumeros.map((numeroAtual) => {
 return numeroAtual * 2;
})

console.log("O dobro do valor eh: " + dobro);






// const prompt = require("prompt-sync")();

// let arrayNumeros = [];

// for(let i = 0; i < 5; i++){
//  let numeros = parseInt(prompt("Digite um valor: "));
//  arrayNumeros.push(numeros);
// }

// const dobro = arrayNumeros.map((numeroAtual) => {
// return numeroAtual * 2;
// })

// console.log("Mostrando o quadrado dos valores digitados: " + dobro);
