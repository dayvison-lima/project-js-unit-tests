const createMenu = require('../src/restaurant');
 
/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('1: Verifica se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.', () => {
    const menu = createMenu({});
    expect(menu).toBeDefined();
    expect(typeof menu.fetchMenu).toBe('function');
  });

  it('2: Verifica se `objetoRetornado.fetchMenu()` retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.', () => {
    const menu = createMenu({ food: {}, drink: {} });
    const fetchedMenu = menu.fetchMenu();
    const expectedMenu = { food: {}, drink: {} };
    expect(fetchedMenu).toEqual(expectedMenu);
  });

  it('3: Verifica se o menu passado para a função createMenu() é idêntico ao menu recuperado pela função `objetoRetornado.fetchMenu()`.', () => {
    const inputMenu = { food: { pizza: 10.0 }, drink: { cola: 5.0 } };
    const menu = createMenu(inputMenu);
    const fetchedMenu = menu.fetchMenu();
    expect(fetchedMenu).toEqual(inputMenu);
  });

  it('5: Verifica se `objetoRetornado.consumption`, após a criação do menu, retorna um array vazio.', () => {
    const menu = createMenu({});
    expect(menu.consumption).toEqual([]);
  });

  it('7: Verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.', () => {
    const menu = createMenu({ food: { pizza: 10.0 }, drink: { cola: 5.0 } });
    menu.order('pizza');
    menu.order('cola');
    menu.order('pizza');
    expect(menu.consumption).toEqual(['pizza', 'pizza']);
  });

  it('10: Verifica se a função `order` exibe a mensagem "Item indisponível" e não adiciona nada ao array se a string não existir nas chaves `food` ou `drink`.', () => {
    const menu = createMenu({ food: { pizza: 10.0 }, drink: { cola: 5.0 } });
    const consoleSpy = jest.spyOn(console, 'log');
    menu.order('burger');
    expect(menu.consumption).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith('Item indisponível');
    consoleSpy.mockRestore();
  });
});
