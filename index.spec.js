const calcularFrete = require("./index");
const {describe, test} = require("node:test");
const assert = require("node:assert");

describe("Testa função de verificação de distância", () => {

    test("Deve retorna 5 se a distância for menor igual 5", () => {
        assert.strictEqual(calcularFrete(3), 5);
    });

    test("De 5.1 até 20: deve retornar 0,50 por distância informada", () => {
        assert.strictEqual(calcularFrete(12), 6);
    });
});