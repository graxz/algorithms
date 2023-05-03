# Arquivo de alterações do projeto.

- Possiveis alterações:
  - `Implementação` para novos recursos.
  - `Refatoração` para alterações em recursos existentes.
  - `Remoção` para recursos removidos.
  - `Correção` para correções.

## 1.0.10 - 2023-05-02

### Implementação

- Adicionado classe `BinarySearch` para criação de uma busca binaria.

A busca binaria é um algoritmo de busca que percorre uma lista de itens e verifica se o item buscado está na lista, a busca binaria é um algoritmo de busca eficiente pois ele divide a lista em duas partes e verifica se o item buscado está na primeira ou segunda parte da lista, se o item buscado estiver na primeira parte da lista ele descarta a segunda parte da lista e repete o processo até encontrar o item buscado. As operações básicas de uma busca binaria são: `search` (retornar a posição de um elemento na lista).

Explicação grafica de como funciona uma busca binaria:
![image](https://user-images.githubusercontent.com/60474834/235822124-034198a5-ea90-4132-af6a-fce381de0587.png)

---

## 1.0.9 - 2023-05-02

### Implementação

- Adicionado classe `LinearSearch` para criação de uma busca linear.

A busca linear é um algoritmo de busca que percorre uma lista de itens e verifica se o item buscado está na lista, a busca linear é um algoritmo de busca simples e ineficiente pois ele percorre toda a lista até encontrar o item buscado. As operações básicas de uma busca linear são: `search` (retornar a posição de um elemento na lista).

Explicação grafica de como funciona uma busca linear:
![image](https://user-images.githubusercontent.com/60474834/235813561-249bccc2-318f-44be-b3f0-4a01139b7ac0.png)

---

## 1.0.8 - 2023-04-28

### Implementação

- Adicionado classe `HashTable` para criação de uma tabela hash.

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

---

## 1.0.7 - 2023-04-27

### Implementação

- Adicionado classe `Set` para criação de conjuntos.

Conjuntos são uma coleção de itens não ordenados que não aceitam itens duplicados. As operações básicas de um conjunto são: `add` (adicionar um elemento), `remove` (remover um elemento), `union` (retornar a união de dois conjuntos), `intersection` (retornar a interseção de dois conjuntos), `difference` (retornar a diferença de dois conjuntos) e `subset` (verificar se um conjunto é subconjunto de outro conjunto).

Explicação grafica de como pode funcionar um conjunto:

#### União

![image](https://user-images.githubusercontent.com/60474834/235224130-f1be0deb-cc7a-4f3f-abb3-ed230d800346.png)

#### Intersecção

![image](https://user-images.githubusercontent.com/60474834/235224270-309b1873-2979-4ab0-8cec-02e257cca2fa.png)

#### Diferenças

![image](https://user-images.githubusercontent.com/60474834/235224209-84b26dae-5755-4964-9d20-b59a50838b10.png)

#### Subconjunto

![image](https://user-images.githubusercontent.com/60474834/235224957-e6ed18dc-6feb-4cce-a73d-7397980b4e06.png)

---

## 1.0.6 - 2023-04-27

### Implementação

- Adicionado classe `CircularLinkedList` para criação de listas circulares ligadas.

Listas circulares ligadas são uma coleção de itens ordenados que seguem o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma lista circulares ligada são: `append` (adicionar um elemento no final da lista), `prepend` (adicionar um elemento no inicio da lista), `insert` (adicionar um elemento em uma posição especifica da lista), `remove` (remover um elemento da lista) e `search` (retornar a posição de um elemento na lista). A diferença entre uma lista circular ligada e uma lista ligada é que na lista circular ligada o ultimo elemento possui uma referencia para o primeiro elemento.

Explicação grafica de como funciona uma lista circular ligada:
![image](https://user-images.githubusercontent.com/60474834/235217960-3da9f385-f279-47a7-b5f1-1cffce3b5488.png)

---

## 1.0.5 - 2023-04-27

### Implementação

- Adicionado classe `DoublyLinkedList` para criação de listas duplamente ligadas.

Listas duplamente ligadas são uma coleção de itens ordenados que seguem o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma lista duplamente ligada são: `append` (adicionar um elemento no final da lista), `prepend` (adicionar um elemento no inicio da lista), `insert` (adicionar um elemento em uma posição especifica da lista), `remove` (remover um elemento da lista) e `search` (retornar a posição de um elemento na lista). A diferença entre uma lista duplamente ligada e uma lista ligada é que na lista duplamente ligada cada elemento possui uma referencia para o elemento anterior e para o elemento posterior.

Explicação grafica de como funciona uma lista duplamente ligada:
![image](https://user-images.githubusercontent.com/60474834/235217334-1b779943-3ed6-4aba-8035-df9b3ecf1988.png)

---

## 1.0.4 - 2023-04-27

### Implementação

- Adicionado classe `LinkedList` para criação de listas ligadas.

Listas Ligadas são uma coleção de itens ordenados que seguem o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma lista ligada são: `append` (adicionar um elemento no final da lista), `prepend` (adicionar um elemento no inicio da lista), `insert` (adicionar um elemento em uma posição especifica da lista), `remove` (remover um elemento da lista) e `search` (retornar a posição de um elemento na lista).

Explicação grafica de como funciona uma lista ligada:
![image](https://user-images.githubusercontent.com/60474834/235215664-78e63fc7-6d44-46a2-8562-7fb5244b9925.png)

---

## 1.0.3 - 2023-04-27

### Implementação

- Adicionado classe `QueuePriority` para gerenciar filas com prioridade.

Filas são uma coleção ordenada de itens que segue o principio (FIFO) First In First Out, ou seja, o primeiro elemento a entrar é o primeiro a sair. As operações básicas de uma fila são: `enqueue` (adicionar um elemento), `dequeue` (remover um elemento) e `peek` (retornar o elemento do topo da fila). Já as filas com prioridade são filas que possuem um valor de prioridade associado a cada elemento, e os elementos com maior prioridade são atendidos primeiro.

Explicação grafica de como funciona uma fila com prioridade:
![image](https://user-images.githubusercontent.com/60474834/234969808-4471121e-12a6-4bf7-80a1-23c19e94f4e8.png)

---

## 1.0.2 - 2023-04-27

### Implementação

- Adicionado classe `Queue` para gerenciar filas.

Filas são uma coleção ordenada de itens que segue o principio (FIFO) First In First Out, ou seja, o primeiro elemento a entrar é o primeiro a sair. As operações básicas de uma fila são: `enqueue` (adicionar um elemento), `dequeue` (remover um elemento) e `peek` (retornar o elemento do topo da fila).

Explicação grafica de como funciona uma fila:
![image](https://user-images.githubusercontent.com/60474834/234966703-05273651-d5a0-4d00-a535-f1c58ee36285.png)

---

### Implementação

- Adicionado classe `Stack` para gerenciar pilhas.

Pilhas são uma coleção ordenada de itens que segue o principio (LIFO) Last In First Out, ou seja, o ultimo elemento a entrar é o primeiro a sair. As operações básicas de uma pilha são: `push` (adicionar um elemento), `pop` (remover um elemento) e `peek` (retornar o elemento do topo da pilha).

Explicação grafica de como funciona uma pilha:
![image](https://user-images.githubusercontent.com/60474834/234957035-409ea4d8-44e5-46fd-8068-ce3b9c62866d.png)

---

## 1.0.0 - 2023-04-27

### Inicialização do projeto
