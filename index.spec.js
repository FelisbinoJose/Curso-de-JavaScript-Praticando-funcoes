const calcularDesconto = require("./index");

describe("index.js", () => {

    it("Deve retornar o valor total da compra menos o desconto", () => {
        expect(calcularDesconto(100, 20)).toBe(80);
    });

    it("Devo retornar erro se algum do parametros for invalido", () => {
        expect(calcularDesconto(0, 20)).toBe("Erro");
        expect(calcularDesconto(100, 0)).toBe("Erro");
    });
});