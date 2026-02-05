const calcularFrete = (distancia) => {

    if (distancia <= 5) {
        return 5;

    } if(distancia >= 5.1 && distancia <= 20) {
        return distancia * 0.50;

    } else {
        return 20;

    }
}

module.exports = calcularFrete;

