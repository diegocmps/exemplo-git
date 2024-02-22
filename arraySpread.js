const aluno = {
    nome: "Diego",
    email: "diego@email.com",
    turma: "Nature",
}

// aluno.nome = "Conrado"
// console.log(aluno.nome)

const aluno2 = {...aluno}

aluno2.nome = "Conrado"

console.log(aluno2.nome)
console.log(aluno.nome)

// const frutas = ["Maçã", "Laranja", "Abacaxi"]

// const frutas2 = [...frutas]
// const frutas3 = [...frutas, ...frutas2]

// frutas.push("Acerola")

// console.log(frutas)
// console.log(frutas2)
// console.log(frutas3)

