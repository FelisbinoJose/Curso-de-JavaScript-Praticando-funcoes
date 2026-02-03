const verificarParidade = (numero) => {

    if(typeof numero !== "number" || numero === 0) {
        throw new Error("Os valores devem ser número");
    }

    return numero % 2 == 0 ? "Par" : "Ímpar";
}

module.exports = verificarParidade;

