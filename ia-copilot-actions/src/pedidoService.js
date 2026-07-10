// Gerado com o prompt:
// "Crie uma função chamada calcularTotalPedido que receba um array de produtos.
// Cada produto possui um preço.
// A função deve somar todos os preços e aplicar um desconto percentual informado.
// Retorne o valor final."

function calcularTotalPedido(produtos, descontoPercentual) {
  const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);
  const desconto = total * (descontoPercentual / 100);
  return total - desconto;
}

module.exports = {
  calcularTotalPedido
};