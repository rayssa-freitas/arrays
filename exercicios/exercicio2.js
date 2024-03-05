//Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

const prompt = require('prompt-sync')();

arrayFrutas =[];

for(let i = 0; i < 3; i++){
 let frutas = prompt("Digite uma fruta: ");
 arrayFrutas.push(frutas);
}

arrayFrutas.splice(0, 1, "maracuja");

console.log("array de frutas " + arrayFrutas.join(", "));

// const prompt = require('prompt-sync')();

// let arrayFrutas = [];

// for(let i = 0; i < 3; i++){
//  let frutas = prompt("Digite uma fruta: ");
//  arrayFrutas.push(frutas);
// }

// arrayFrutas.push("manga");
// arrayFrutas.shift();

// console.log("Array de frutas: " + arrayFrutas.join(", "));