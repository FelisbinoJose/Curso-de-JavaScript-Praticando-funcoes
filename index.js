const responderUsuario = (nomeUsuario, mostrarResposta) => {
    mostrarResposta(nomeUsuario);
    console.log("Processando sua pergunta...");
}

const mostrarResposta = (nomeUsuario) => {
    setTimeout(() => console.log(`Olá, ${nomeUsuario}! Aqui está a resposta para sua dúvida`), 3000);    
}

responderUsuario("Camila", mostrarResposta);