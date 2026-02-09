const {mensagemPersonalizada, processarPedido} = require("./index");
const {describe, test} = require("node:test");
const assert = require("node:assert")

describe("Testa função de processar pedido", () =>{

    test("Teste para cliente vip", () => {
        assert.strictEqual(processarPedido("Lucas", "vip", mensagemPersonalizada), 'Processando pedido Lucas...\n'+
        'Obrigado pela preferência, Lucas! Você ganhou frete grátis')
    });

     test("Teste para cliente novo", () => {
        assert.strictEqual(processarPedido("Fernanda", "novo", mensagemPersonalizada), 'Processando pedido Fernanda...\n'+
        'Bem-vindo(a), Fernanda Aproveite um cupom de boas-vindas.')
    });

    test("Teste para cliente comum", () => {
        assert.strictEqual(processarPedido("João", "comum", mensagemPersonalizada), 'Processando pedido João...\n'+
        'Òbrigad pela sua compra, João')
    });
});