const avaliarDesempenho = (pontuacao, gerarMensagem) => {
    console.log(`Pontuação: ${pontuacao}`);
    gerarMensagem(pontuacao);
}


const gerarMensagem = (pontuacao) => {

    if (pontuacao >= 70) {
        console.log("Parabéns! Você foi aprovado!");
    } else if (pontuacao >= 50 && pontuacao <= 69) {
        console.log("Precisa de reforço!");
    } else {
        console.log("Foi reprovado!");
    }
}

avaliarDesempenho(82, gerarMensagem);