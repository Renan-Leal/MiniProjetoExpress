const sequence = {
    _id: 1,
    get id() { return this._id++ },
};

const produtos = {};


function getProduto(id) {
    return produtos[id] || {};
};

function getProdutos() {
    return Object.values(produtos);
};

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence.id
        produtos[produto.id] = produto;
    } else {
        produtos[produto.id] = produto;
    };
    return produto;
};

function deleteProduto(idProduto){
    const produto = produtos[idProduto];
    delete produtos[idProduto];
    return `Produto: ${produto.nome} de ID: ${produto.id} foi deletado com sucesso!`;
};

module.exports = { salvarProduto, getProduto, getProdutos, deleteProduto };