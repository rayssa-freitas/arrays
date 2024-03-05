//Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.

const prompt = require("prompt-sync")();

let arrayNumeros = [];

for(let i = 0; i < 5; i++){
 let numeros = parseInt(prompt("Digite um valor: "));
 arrayNumeros.push(numeros);
}


const arrayPares = arrayNumeros.filter(numeroAtual =>{
 if(numeroAtual%2==0){
  return true;
 }
})

console.log("Valores pares: " + arrayPares);
