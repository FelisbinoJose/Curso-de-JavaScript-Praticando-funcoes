const {describe, test}  = require("node:test");
const assert = require("node:assert");
const verificarParidade = require("./index");

describe("Testa função de verificação paridade", () => {

    test("Deve retorna par se o número informado for par", () => {
        assert.strictEqual(verificarParidade(8), "Par");
    });

    test("Deve retornar ímpar se o número informado for ímpar", () => {
        assert.strictEqual(verificarParidade(7),"Ímpar" )
    });
});


