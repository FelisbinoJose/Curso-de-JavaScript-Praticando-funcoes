const calcularDesconto = (precoOriginal, porcentagemDesconto) => {

    if (typeof precoOriginal !== "number" || !Number.isFinite(precoOriginal) || precoOriginal <= 0) {
        return "Erro";
    }

    if (
        typeof porcentagemDesconto !== "number" ||
        !Number.isFinite(porcentagemDesconto) ||
        porcentagemDesconto <= 0
    ) {
        return "Erro";
    }

    const desconto = porcentagemDesconto / 100;
    return precoOriginal - precoOriginal * desconto;
};

module.exports = calcularDesconto;
