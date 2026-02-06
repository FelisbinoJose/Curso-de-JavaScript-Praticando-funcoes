# Mensagem pós-processamento

## Descrição

Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

---

## Objetivo

- Sua tarefa é criar uma função chamada `processarPedido`, que receba três parâmetros:

   > - O nome do cliente;

   > - Tipo de cliente;

   > - Uma `função de callback` responsável por exibir uma mensagem após o pedido ser processado.

---

## Exemplo de entrada:

```js
processarPedido("Lucas", "vip", mensagemPersonalizada);
```

```js
processarPedido("Fernanda", "novo", mensagemPersonalizada);
```

```js
processarPedido("João", "comum", mensagemPersonalizada);
```

---

## Saída esperada:

```txt
Processando pedido de Lucas...
Obrigado pela preferência, Lucas! Você ganhou frete grátis.
```

```txt
Processando pedido de Fernanda...
Bem-vindo(a), Fernanda! Aproveite um cupom de boas-vindas.
```

```txt
Processando pedido de João...
Obrigado pela sua compra, João!
```

---