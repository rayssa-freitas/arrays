//Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.

const prompt = require('prompt-sync')();

let arrayNumeros = [];

for(let i = 0; i < 5; i++){
 let numeros = parseInt(prompt("Digite um valor inteiro: "));
 arrayNumeros.push(numeros);
}

const realizarSoma = arrayNumeros.reduce((soma, numeroAtual) => {
return soma = soma + numeroAtual;
},0)

console.log("A soma dos valores eh: " + realizarSoma);