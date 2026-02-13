# Classificador de consumo elétrico

## Descrição

Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

---

## Objetivo

Sua missão é criar `três funções separadas`, com responsabilidades bem definidas:

   > - `calcularConsumo(potencia, horasPorDia)`: Retorna o consumo mensal em kWh, com base na fórmula: `consumo = (potencia × horasPorDia × 30) / 1000`

   > - `classificarConsumo(consumo):` Retorna a classificação com base na tabela:
   
   | Consumo mensal (kWh) | Classificação      |
   |----------------------|--------------------|
   | Abaixo de 50         | "Baixo consumo"    |
   | 50 - 199             | "Consumo moderado" |
   | 200 ou mais          | "Alto consumo"     |

   > - `exibirResumo(nomeAparelho, consumo, classificacao):` Exibe uma mensagem como:`"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."`

---

## Exemplo de entrada

```js
const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);
```

---

## Saída esperada:

```txt
Geladeira tem consumo de 18 kWh/mês e é classificada como Baixo consumo.
```