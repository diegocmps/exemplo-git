const PromptSync = require("prompt-sync");

PromptSync
// let arrayNomes = ["Diego", "João", "Maria", "Genivaldo", "Geovana"]
// console.log(arrayNomes.join(' '))
// console.log(arrayNomes)
// arrayNomes.splice(1, 2, "Raphael","Anderson")
// arrayNomes.splice(1, 2)
// arrayNomes[0] = "Tobiu"  //troca de valor no array
// arrayNomes.push("Bruno") // adiciona valor ao final da fila
// console.log(arrayNomes)
// arrayNomes.pop() // remove o último valor da lista
// console.log(arrayNomes)
// arrayNomes.shift()
// console.log(arrayNomes)
// arrayNomes.unshift()
// console.log(arrayNomes)

let notas = [8, 7, 7, 7];
let media = 0
let soma = 0

for(let contador = 0; contador < notas.length; contador++){
    soma = soma + notas[contador]
}

media = soma / 4

if(media >= 7){
    console.log("Aluno Aprovado!");

} else {
    console.log("Aluno Reprovado!");
}

let frutas = ["Maçã", "Melancia", "Uva"]

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])