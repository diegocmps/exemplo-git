// const numeros = [5, 2, 10]


// const dobro = numeros.map(index =>{
//     // console.log(n)
//     return index * 2
// })

// console.log(numeros)
// console.log(dobro)



const pessoas1 = [
    {nome: "Ana", idade: 24},
    {nome: "Bento", idade: 21},
    {nome: "Leonardo", idade: 28},
]

const novaListaPessoas = pessoas1.map(pessoaAtual => {
    let dataAtual = new Date();

    let pessoa = {
        nome: pessoaAtual.nome,
        anoNascimento: dataAtual.getFullYear() - pessoaAtual.idade
    }

        return pessoa
})

console.log(novaListaPessoas)