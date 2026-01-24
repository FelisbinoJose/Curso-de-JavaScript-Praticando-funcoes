const saudacao = require('./index');

describe("index.js", () => {
    it("Deve retornar Olá + nome da pessoa (se existir o mesmo como parametro) + ! Bem vindo(a)!",
        () => {
            expect(saudacao("José")).toBe(`Olá, José! Bem-vindo(a)!`);
        }
    )

    it("Deve retornar Olá! Bem vindo(a)! Se não houver o nome como parametro",
        () => {
            expect(saudacao()).toBe(`Olá! Bem-vindo(a)!`);
        }
    )
})