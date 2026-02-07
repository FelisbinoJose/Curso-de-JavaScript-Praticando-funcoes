const processarPedido =  (nomeCliente, tipoCliente, mensagemPersonalizada,) => {
    const mensagemPadrao = `Processando pedido ${nomeCliente}...\n`;
    return mensagemPadrao + mensagemPersonalizada(nomeCliente, tipoCliente)
}

function mensagemPersonalizada(nomeCliente, tipoCliente) {

    if (tipoCliente === "vip") {
        return `Obrigado pela preferência, ${nomeCliente}! Você ganhou frete grátis`;

    } else if (tipoCliente === "novo") {
        return `Bem-vindo(a), ${nomeCliente} Aproveite um cupom de boas-vindas.`
    } else {
        return `Òbrigad pela sua compra, ${nomeCliente}`
    }
}

module.exports = {mensagemPersonalizada, processarPedido};