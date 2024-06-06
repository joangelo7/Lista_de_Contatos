const form = document.getElementById('form-contato')
const contatos = [];
const nome = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarContato();
    atualizaContatos();
})

function adicionarContato(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputContato = document.getElementById('contato')

    nome.push(inputNomeContato.value);
    contatos.push(parseInt(inputContato.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td>`
    linha += `<td> ${inputContato.value}</td>`
    linha += '</tr>';
    linhas += linha;

    inputNomeContato.value = '';
    inputContato.value = '';
};

function atualizaContatos(){
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}