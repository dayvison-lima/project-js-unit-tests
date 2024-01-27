# Boas-vindas ao repositório do projeto ES6 e Testes Unitários!

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone git@github.com:dayvison-lima/project-js-unit-tests.git`
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd project-js-unit-tests`

  2. Instale as dependências

  -  `npm install`

  </details>

### 1. Implemente a função `average`

<details>
  <summary>A função `average` recebe um array de tamanho variável e retorna a média dos valores recebidos. Caso a função receba algum valor não numérico ou um array vazio, o valor `undefined` deve ser retornado.</summary><br/> 
  
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.

  **O que será testado:**

  - A função `average` deve retornar a média de seus valores ao receber um array de números;
  - A função `average` deve retornar `undefined` ao receber um array que contém valores não numéricos;
  - A função `average` deve retornar `undefined` ao receber um array vazio.

</details>

---

### 2. Implemente os casos de teste para a função `numbers`

<details>
  <summary>A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.</summary><br/> 
  
  Essa função já está implementada no arquivo `src/numbers.js`. Escreva pelo menos quatro testes para essa função para garantir que a implementação de `numbers` está correta.

  **O que será testado:**

  - A função `numbers` deve retornar `true` quando o array passado por parâmetro contém somente números.

</details>

---

### 3. Implemente a função `vqv`

<details>
  <summary>Use template literals para escrever a função `vqv` que recebe o seu nome e a sua idade e retorna o parágrafo descrito abaixo:</summary><br/>

  ```javascript
  `Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`
  ```

  Caso a função `vqv` seja chamada sem nenhum parâmetro, o valor `undefined` deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - `vqv` deve ser uma função;
  - A função `vqv` deve retornar dados do tipo string;
  - A função `vqv` deve retornar a frase esperada quando passados parâmetros de nome e idade;
  - A função `vqv` deve retornar `undefined` quando chamada sem parâmetro.

</details>

---

### 4. Implemente os casos de teste para a função `circle`

<details>

  <summary>A função `circle` recebe o raio de um círculo e retorna um objeto contendo as suas informações: Raio, Área e Circunferência. Se não for especificado um raio, a função retorna `undefined`.</summary></br>
  
  Essa função já está implementada no arquivo `src/circle.js`. Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  **O que será testado**

  - O teste da função `circle`, ao receber um raio, deve retornar um objeto com as informações corretas (Raio, Área e Circunferência).

</details>

---

### 5. Implemente a função `createStudent`

<details>
<summary>A função `createStudent` recebe como parâmetro um **nome**, e retorna um objeto contendo duas chaves:</summary></br>

  1. **name**, contendo o nome passado como parâmetro;
  2. **feedback**, contendo uma função que retorna a frase `"Eita pessoa boa!"` ao ser chamada.

  O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `createStudent` deve retornar um objeto que contenha duas chaves: `name`, contendo o nome passado como parâmetro; e `feedback`, contendo uma função que retorna a frase `"Eita pessoa boa!"` ao ser chamada.

</details>

---

### 6. Implemente os casos de teste para a função `productDetails`

<details>
  <summary>A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:</summary></br>

  ```javascript
  productDetails('Alcool gel', 'Máscara');
  ```

  **Retorna:**

  ```js
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
  ```

  Essa função já está implementada no arquivo `src/productDetails.js`. Escreva pelo menos cinco testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

  **O que será testado**

  - O teste da função `productDetails`, ao receber duas strings, deve retornar um array de objetos e se cada objeto contém os dados necessários.

</details>

---

### 7. Implemente as funções `calculator` e `arrayGenerator`

<details>
  <summary>A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:</summary></br>
  - sum;
  - mult;
  - div;
  - sub.

  Para cada chave atribua como valor a operação correspondente à sua chave:
  - `sum:` retorna o resultado da soma dos dois números;
  - `mult:` retorna o resultado da multiplicação dos dois números;
  - `div:` retorna o resultado da divisão dos dois números;
  - `sub:` retorna o resultado da subtração dos dois números.

  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  ```javascript
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }
  ```

  Já a função `arrayGenerator` converte objetos em arrays, de chaves, valores ou ambos. Ela deve receber dois parâmetros:

  - o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
  - o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  ```javascript
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
  ```
  O arquivo `objPlayground.spec.js` contém os testes para `calculator` e `arrayGenerator` já implementados. Implemente as funções no arquivo `src/objPlayground.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `calculator` deve retornar os valores esperados;
  - A função `arrayGenerator` deve retornar os valores esperados.

</details>

---

### 8. Implemente a função `myCounter`

<details>
  <summary>A função `myCounter` possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.</summary></br>

   Corrija a função `myCounter`, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos.

  **O que será testado**

  - A função `myCounter` deve retornar os dados esperados de acordo com o que está implementado no teste.

</details>

---

### 9. Implemente os casos de teste para a função `getCharacter`

<details>

  <summary>A função `getCharacter` já está implementada e recebe como parâmetro de entrada uma string que representa o nome de uma personagem de ficção. Ela retorna um objeto contendo o nome da personagem, a sua classe e as suas frases.</summary></br>

  Exemplo:

  ```javascript
  getCharacter('Arya');
  ```

  **Retorna:**

  ```javascript
  {
    name: 'Arya Stark',
    class: 'Rogue',
    phrases: ['Not today', 'A girl has no name.']
  }
  ```

  Essa função já está implementada no arquivo `src/getCharacter.js`. Escreva pelo menos seis testes para essa função no arquivo `tests/getCharacter.spec.js` para garantir que a implementação de `getCharacter` está correta.

  **O que será testado**

  - O teste da função `getCharacter` ao não receber nenhum parâmetro, deve retornar `undefined`.
  - O teste da função `getCharacter` ao receber uma string, deve retornar os dados esperados, de acordo com a tabela apresentada no arquivo de testes.
  - O teste da função `getCharacter` deve verificar se o parâmetro é _case insensitive_, ou seja, não faz diferença entre letras maiúsculas e minúsculas.

</details>

---

### 10. Implemente a função `createMenu`, bem como seus casos de teste

<details>
  <summary>Esse último requisito vai guiar você por um rico processo de Desenvolvimento Orientado a Testes ou TDD - Test Driven Development</summary></br>

  Imagine a seguinte situação: você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  O menu é cadastrado separando as comidas (`food`) das bebidas (`drink`). Este menu é passado na forma do objeto, seguindo o exemplo abaixo:

  ```js
    {
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    }
  ```

  Resumindo, o objeto tem duas propriedades: `food` e `drink`. Cada uma dessas propriedades recebe também um objeto, onde os itens estão cadastrados como uma entrada com o nome do item e o preço.
  
  **O que será testado**

  * A função `createMenu()` deve retornar os dados esperados.
  * O teste da função `createMenu()` deve verificar cada um dos retornos da função e se estes retornos têm o comportamento esperado.

</details>
