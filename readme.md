# Cálculo de frete por distância

## Descrição 

Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

   > - `Até 5 km:` frete fixo de R$ 5

   > - `De 5.1 km até 20 km:` R$ 0,50 por quilômetro

   > - `Acima de 20 km:` frete fixo de R$ 20

--- 

## Objetivo

Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?

---

## Exemplo de entrada:

```js
calcularFrete(3);
```

```js
calcularFrete(12);
```

---

## Saída esperada:

```tx
5
```

```txt
6
```

---
