// Selecionar o elemento do título pelo ID 'titulo'
const titulo = document.getElementById('titulo');
// Adicionar texto ao elemento do título
titulo.textContent = 'Minha Loja Online';

// Criar um elemento div que representará o produto
const produtoDiv = document.createElement('div');

// Método Simples: Usando a propriedade innerHTML
produtoDiv.innerHTML = `
    <h2>Produto Legal</h2>
    <p>Este é um produto incrível que você vai adorar!</p>
    <p>Preço: $19.99</p>
    <img src="imagem_do_produto.jpg" alt="Imagem do Produto">
`;

// Método Complexo: Criando elementos individualmente e adicionando como filhos
// const nomeProduto = document.createElement('h2');
// nomeProduto.textContent = 'Produto Legal';

// const descricaoProduto = document.createElement('p');
// descricaoProduto.textContent = 'Este é um produto incrível que você vai adorar!';

// const precoProduto = document.createElement('p');
// precoProduto.textContent = 'Preço: $19.99';

// const imagemProduto = document.createElement('img');
// imagemProduto.src = 'imagem_do_produto.jpg';
// imagemProduto.alt = 'Imagem do Produto';

// Adicionar elementos do produto como filhos da div do produto
// produtoDiv.appendChild(nomeProduto);
// produtoDiv.appendChild(descricaoProduto);
// produtoDiv.appendChild(precoProduto);
// produtoDiv.appendChild(imagemProduto);

// Selecionar o elemento de contêiner do produto pelo ID 'produtoContainer'
const produtoContainer = document.getElementById('produtoContainer');

// Adicionar a div do produto ao elemento de contêiner do produto
produtoContainer.appendChild(produtoDiv);
