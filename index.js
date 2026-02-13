const calcularConsumo = (potencia, horasPorDia) => {
    return (potencia * horasPorDia * 30) / 1000;
}

const classificarConsumo = (consumo) => {

    if (consumo < 50) {
        return "abaixo consumo";
    } else if (consumo <= 50 && consumo >= 199) {
        return "Consumo moderado";
    } else {
        return "Alto consumo";
    }

}

const exibirResumo = (nomeAparelho, consumo, classificacao) => {
    console.log(`${nomeAparelho} tem consumo de ${consumo} kwh/mês e é classificada como ${classificacao}`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao)