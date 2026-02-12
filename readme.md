# Avaliando a pontuação de um usuário

## Descrição

Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo. Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

   > - Foi `aprovado`, se a pontuação for `igual ou maior que 70`.

   > - Precisa de `reforço`, se a pontuação estiver entre `50 e 69`.

   > - Foi `reprovado`, se a pontuação for `menor que 50`.

---

## Objetivo

Sua tarefa é criar uma função chamada `avaliarDesempenho`, que receba dois parâmetros:

   > - Pontuação final do jogador.

   > - Uma `função de callback` que será usada para `exibir uma mensagem personalizada` com base no resultado da avaliação.

---

## Exemplo de entrada:

```js
avaliarDesempenho(82, gerarMensagem);
```

---

## Saída esperada:

```txt
Pontuação: 82
Parabéns! Você foi aprovado!
```

----


