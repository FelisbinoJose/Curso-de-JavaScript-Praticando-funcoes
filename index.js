const contagemRegressiva = (numero) => {

    if (numero !== 0) {

        console.log(numero--);

        return contagemRegressiva(numero)

    }

    return "Lançamento"

}

console.log(contagemRegressiva(5));

