const saudacao = ((nome) => {

    if ((typeof nome === "string" && nome.trim() !== "")) {
        return `Olá, ${nome}! Bem-vindo(a)!`
    }

    return "Olá! Bem-vindo(a)!"
});

module.exports = saudacao;