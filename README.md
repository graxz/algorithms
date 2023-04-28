# Projeto de estudo de Algoritmos e Estruturas de Dados

## Descrição

Este projeto tem como objetivo o estudo de algoritmos e estruturas de dados, com a implementação de alguns algoritmos e estruturas de dados em Javascript.

## Estruturas de Dados

### Pilha

Pilhas são uma coleção ordenada de itens que segue o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma pilha são: `push` (adicionar um elemento), `pop` (remover um elemento) e `peek` (retornar o elemento do topo da pilha).

Explicação grafica de como funciona uma pilha:
![image](https://user-images.githubusercontent.com/60474834/234957035-409ea4d8-44e5-46fd-8068-ce3b9c62866d.png)

### Fila

Filas são uma coleção ordenada de itens que segue o principio (FIFO) First In First Out, ou seja, o primeiro elemento a entrar é o primeiro a sair. As operações básicas de uma fila são: `enqueue` (adicionar um elemento), `dequeue` (remover um elemento) e `peek` (retornar o elemento do topo da fila).

Explicação grafica de como funciona uma fila:
![image](https://user-images.githubusercontent.com/60474834/234966703-05273651-d5a0-4d00-a535-f1c58ee36285.png)

### Fila com Prioridade

Filas são uma coleção ordenada de itens que segue o principio (FIFO) First In First Out, ou seja, o primeiro elemento a entrar é o primeiro a sair. As operações básicas de uma fila são: `enqueue` (adicionar um elemento), `dequeue` (remover um elemento) e `peek` (retornar o elemento do topo da fila). Já as filas com prioridade são filas que possuem um valor de prioridade associado a cada elemento, e os elementos com maior prioridade são atendidos primeiro.

Explicação grafica de como funciona uma fila com prioridade:
![image](https://user-images.githubusercontent.com/60474834/234969808-4471121e-12a6-4bf7-80a1-23c19e94f4e8.png)

### Lista Ligada

Listas Ligadas são uma coleção de itens ordenados que seguem o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma lista ligada são: `append` (adicionar um elemento no final da lista), `prepend` (adicionar um elemento no inicio da lista), `insert` (adicionar um elemento em uma posição especifica da lista), `remove` (remover um elemento da lista) e `search` (retornar a posição de um elemento na lista).

Explicação grafica de como funciona uma lista ligada:
![image](https://user-images.githubusercontent.com/60474834/235215664-78e63fc7-6d44-46a2-8562-7fb5244b9925.png)

### Lista Duplamente Ligada

Listas duplamente ligadas são uma coleção de itens ordenados que seguem o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma lista duplamente ligada são: `append` (adicionar um elemento no final da lista), `prepend` (adicionar um elemento no inicio da lista), `insert` (adicionar um elemento em uma posição especifica da lista), `remove` (remover um elemento da lista) e `search` (retornar a posição de um elemento na lista). A diferença entre uma lista duplamente ligada e uma lista ligada é que na lista duplamente ligada cada elemento possui uma referencia para o elemento anterior e para o elemento posterior.

Explicação grafica de como funciona uma lista duplamente ligada:
![image](https://user-images.githubusercontent.com/60474834/235217334-1b779943-3ed6-4aba-8035-df9b3ecf1988.png)

### Lista Circular Ligada

Listas circulares ligadas são uma coleção de itens ordenados que seguem o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma lista circulares ligada são: `append` (adicionar um elemento no final da lista), `prepend` (adicionar um elemento no inicio da lista), `insert` (adicionar um elemento em uma posição especifica da lista), `remove` (remover um elemento da lista) e `search` (retornar a posição de um elemento na lista). A diferença entre uma lista circular ligada e uma lista ligada é que na lista circular ligada o ultimo elemento possui uma referencia para o primeiro elemento.

Explicação grafica de como funciona uma lista circular ligada:
![image](https://user-images.githubusercontent.com/60474834/235025916-ac1e947a-761c-4da1-9d52-8e3ed52b5e59.png)

### Conjunto

Conjuntos são uma coleção de itens não ordenados que não aceitam itens duplicados. As operações básicas de um conjunto são: `add` (adicionar um elemento), `remove` (remover um elemento), `union` (retornar a união de dois conjuntos), `intersection` (retornar a interseção de dois conjuntos), `difference` (retornar a diferença de dois conjuntos) e `subset` (verificar se um conjunto é subconjunto de outro conjunto).

Explicação grafica de como pode funcionar um conjunto:

#### União

União de dois conjuntos

![image](https://user-images.githubusercontent.com/60474834/235030163-0a7c44ca-2afe-43fe-ab48-ee1fd43879bd.png)

#### Intersecção

Interseção de dois conjuntos

![image](https://user-images.githubusercontent.com/60474834/235029951-51052ea4-7125-48d8-9caa-6bb3cceae7fa.png)

#### Diferenças

Diferença de dois conjuntos

![image](https://user-images.githubusercontent.com/60474834/235030895-7a3a5b9e-ca85-441f-a372-8a0b055983ea.png)

#### Subconjunto

Subconjunto de outro conjunto

![image](https://user-images.githubusercontent.com/60474834/235031302-21041cf3-9ac3-434f-80db-9d14b14b149c.png)

### Tabela Hash

Uma tabela hash é uma estrutura de dados que associa chaves de pesquisa a valores, de modo que a busca dos dados se dê de forma rápida e direta. As operações básicas de uma tabela hash são: `put` (adicionar um elemento na tabela), `remove` (remover um elemento da tabela), `get` (retornar um elemento da tabela) e `contains` (verificar se um elemento existe na tabela).

#### Como funciona a tabela hash simples?

```
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
      return total % this.table.length;
  }
```

A função `simpleHash` é uma função simples de hash que recebe uma string e retorna um valor inteiro que será usado como indice para a tabela hash. A função percorre a string e soma o valor de cada caractere na variavel `total` e retorna o resto da divisão de `total` pelo tamanho da tabela hash.

#### Como funciona a tabela hash com uma melhor distribuição?

```
  betterHash(data) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  }
```

A função `betterHash` é uma função de hash que recebe uma string e retorna um valor inteiro que será usado como indice para a tabela hash. A função percorre a string e multiplica o valor de `total` por 37 e soma o valor de cada caractere na variavel `total` e retorna o resto da divisão de `total` pelo tamanho da tabela hash. A função `betterHash` é mais eficiente que a função `simpleHash` pois ela distribui melhor os valores na tabela hash.

Explicação grafica de como funciona uma tabela hash:
![image](https://user-images.githubusercontent.com/60474834/235196823-f8501b02-3f8b-4aa8-81dd-ebec1b6b457a.png)
