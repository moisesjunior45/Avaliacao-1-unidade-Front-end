function adicionarAoCarrinho(produto, preco) {

}

function removerDoCarrinho(produto) {

}

function limparCarrinho() {

}

function formatarCEP() {
    var cepInput = document.querySelector('.shipping-calculator input[type="text"]');
    var cep = cepInput.value.replace(/\D/g, '');
    var cepFormatado = '';

    if (cep.length > 8) {
        cep = cep.slice(0, 8);
    }

    if (cep.length > 5) {
        cepFormatado = cep.substr(0, 5) + '-' + cep.substr(5);
    } else {
        cepFormatado = cep;
    }

    cepInput.value = cepFormatado;
}

function validarCEP() {
    var cepInput = document.querySelector('.shipping-calculator input[type="text"]');
    var cep = cepInput.value.replace(/\D/g, '');

    if (cep.length > 8) {
        cep = cep.slice(0, 8);
        cepInput.value = cep;
    }
}

function calcularFrete() {
    var cepInput = document.querySelector('.shipping-calculator input[type="text"]');
    var cep = cepInput.value;
    var freteElement = document.querySelector('.shipping-calculator .frete');
    freteElement.innerHTML = 'O valor do frete para o CEP ' + cep + ' é de R$ 10,00.';
}

function finalizarCompra() {
    var finalizarBtn = document.getElementById('finalizarCompraBtn');
    finalizarBtn.innerHTML = 'Compra Finalizada';
    finalizarBtn.disabled = true;
}