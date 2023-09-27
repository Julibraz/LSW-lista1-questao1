document.getElementById('botaoGerar').addEventListener('click', function() {
    const numero = gerarNumero();
    const li = document.createElement('li');
    li.textContent = numero;
    document.getElementById('listaNumeros').appendChild(li);
});

function gerarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}
