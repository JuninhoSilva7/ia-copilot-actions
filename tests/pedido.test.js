// Gerado com o prompt:
// "Gere testes automatizados para a função calcularTotalPedido.
// O teste deve verificar se a função retorna o valor final correto após aplicar o desconto."

const { calcularTotalPedido } = require('../src/pedidoService');

describe('calcularTotalPedido', () => {
  test('deve calcular o total do pedido com desconto', () => {
    const produtos = [
      { preco: 100 },
      { preco: 200 },
      { preco: 300 }
    ];

    const descontoPercentual = 10;
    const totalEsperado = 540; // (100 + 200 + 300) - 10% do total

    const totalCalculado = calcularTotalPedido(produtos, descontoPercentual);

    expect(totalCalculado).toBe(totalEsperado);
  });
});