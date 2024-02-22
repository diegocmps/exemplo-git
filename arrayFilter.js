// const numeros = [5, 2, 3, 10]

// const copia = numeros.filter(n => {
//     if(n >= 5){
//     return true}    
// })

// console.log(copia)

// exemplo 2


const nomes = ["Leiliane", "Edson", "Geovanna", "Douglas"]

const copia = nomes.filter(nomeAtual => {
    if(nomeAtual.toLowerCase().includes('e')) {
        return true
    }
})

console.log(copia)