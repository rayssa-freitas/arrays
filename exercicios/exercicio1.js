//Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.
//Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.
const prompt = require('prompt-sync')();


let arrayFrutas = [];
for(let i = 0; i < 3; i++){
let frutas = prompt("digite um nome de fruta: ");
arrayFrutas.push(frutas);  //puxa as frutas para dentro do array
}


console.log("A segunda fruta eh = " + arrayFrutas[1]);

// let arrayFrutas = ["laranja", "mamão", "maracujá"];
// console.log(arrayFrutas[1]);