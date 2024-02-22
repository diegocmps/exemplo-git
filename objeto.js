const usuario = {
    nome: "Diego",
    senha: "1234",
    email: "diego@email.com",
    setor: 1,
    cep: "888888888",
    dataNascimento: new Date(Date.parse("1999-01-25")),
}

console.log(usuario.nome)


console.log(usuario.senha)
console.log(usuario.dataNascimento.toISOString())