//Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

const prompt = require("prompt-sync")();

let arrayNumeros = [];

for(let i = 0; i < 5; i++){
 let numeros = parseInt(prompt("Digite um valor "));
 arrayNumeros.push(numeros);
}

let numerosOrdenados = arrayNumeros.slice();

numerosOrdenados.sort((a, b) => a-b);
console.log("Numeros ordenados: " + numerosOrdenados);