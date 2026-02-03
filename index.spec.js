const calcularMedia = require("./index");

describe("index.js", () => {
    it("Deve retornar a média dos dois valores indicados como parametros", () => {
        expect(calcularMedia(7, 9)).toBe(8);
    });

    it("Deve retornar NaN se um parâmetro não for informado", () => {
        expect(calcularMedia(5)).toBeNaN();
    });

    it("Deve retornar um número mesmo com strings (comportamento atual)", () => {
        expect(calcularMedia("7", "9")).toBe(39.5);
});

});