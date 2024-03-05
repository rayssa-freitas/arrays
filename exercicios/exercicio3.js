// Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.
// Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = require("prompt-sync")();

numerosInteiros = [];

for(let i = 0; i < 5; i++){
 let recebendoInteiros = parseInt(prompt("Digite um valor: "));
 numerosInteiros.push(recebendoInteiros);
}

console.log("Numeros recebidos: " + numerosInteiros);
