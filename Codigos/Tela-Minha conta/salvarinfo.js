// Função para salvar as informações no localStorage
function salvarInformacoes() {
    // Obter os valores dos campos de entrada
    var nome = document.getElementById('nome').value;
    var estadoCivil = document.getElementById('estado-civil').value;
    var telefone = document.getElementById('telefone').value;
    var data = document.getElementById('data-de-nascimento').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var logradouro = document.getElementById('input-Rua').value;
    var bairro = document.getElementById('input-bairro').value;
    var cep = document.getElementById('input-cep').value;
    var estado = document.getElementById('input-estado').value;
    var cidade = document.getElementById('input-cidade').value;
    var renda = document.getElementById('input-RendaMensal').value;
    var dependentes = document.getElementById('input-NumeroDependentes').value;
    var profissao = document.getElementById('input-Profissão').value;

    usuarios.dados[id].nome = nome;
    usuarios.dados[id].estado_civil = estadoCivil;
    usuarios.dados[id].telefone = telefone;
    usuarios.dados[id].data_nascimento = data;
    usuarios.dados[id].cpf = cpf;
    usuarios.dados[id].email = email;
    usuarios.dados[id].endereco.logradouro = logradouro;
    usuarios.dados[id].endereco.bairro = bairro;
    usuarios.dados[id].endereco.cep = cep;
    usuarios.dados[id].endereco.estado = estado;
    usuarios.dados[id].endereco.cidade = cidade;
    usuarios.dados[id].sociais.renda = renda;
    usuarios.dados[id].sociais.dependentes = dependentes;
    usuarios.dados[id].sociais.profissao = profissao;

    // Construir o objeto com os dados atualizados

    localStorage.setItem('db_usuarios', JSON.stringify(usuarios));
    console.log('Informações salvas no localStorage!');
    location.reload()
}

// Botão "Salvar informações"
var botaoSalvar1 = document.getElementById('botao-salvar1');
botaoSalvar1.addEventListener('click', salvarInformacoes);
var botaoSalvar2 = document.getElementById('botao-salvar2');
botaoSalvar2.addEventListener('click', salvarInformacoes);
  