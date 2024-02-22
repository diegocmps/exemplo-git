const prompt = require("prompt-sync")()

const numeros = [10, 2, 3, 5]

numeros.map(function (numeroAtual){
    console.log("O número atual é ", numeroAtual)
})

const copia = numeros.map((numeroAtual) => {
    return numeroAtual * 2
    
})

console.log(copia)
console.log(numeros)