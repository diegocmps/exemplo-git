const numeros = [10, 5, 2, 3, 10, 45]

// realize a soma dos números acima

const soma = numeros.reduce((total, numAtual) => {
    return total + numAtual}, 0)

    console.log(soma)
