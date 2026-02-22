const sorteaNomeAleatorio = (listaDeNomes) =>  {

    const tamanhoDaLista = listaDeNomes.length;

    const numeroAleatorio = Math.floor(Math.random() * tamanhoDaLista);

    const nomeAleatorio = listaDeNomes[numeroAleatorio].nome;

    const pontuacaoDoNome = listaDeNomes[numeroAleatorio].pontuacao;

    return {nomeAleatorio, pontuacaoDoNome};

}

const verificarPontuacao = (pontuacao) => {

    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }

}


const sorteaNomeAtraso = (listaDeNomes) => {

    const resultadoDoSorteio = sorteaNomeAleatorio(listaDeNomes);

    const avaliacao = verificarPontuacao(resultadoDoSorteio.pontuacaoDoNome);

    console.log("Sorteando...");

    
    setTimeout(() => console.log(`Participante sorteado: ${resultadoDoSorteio.nomeAleatorio}\nPontuação: ${resultadoDoSorteio.pontuacaoDoNome}\n${avaliacao}`), 2000);

}


const realizarSorteio = (listaDeNomes) => {
    sorteaNomeAtraso(listaDeNomes);
}


const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];

realizarSorteio(participantes)