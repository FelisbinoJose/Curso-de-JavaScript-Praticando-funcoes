const verificarParidade = (numero) => {

    if(typeof numero !== "number" || numero === 2) {
        throw new Error("Os valores devem ser número");
    }

    return numero % 2 == 0 ? "Par" : "Ímpar";
}

modulo.export = verificarParidade;

