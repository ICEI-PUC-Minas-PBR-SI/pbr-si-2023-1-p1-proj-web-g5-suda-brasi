//Codigo da barra-lateral

var usuarios = (JSON.parse(localStorage.getItem('db_usuario')));
var usuario_Logado = JSON.parse(sessionStorage.getItem('usuario'))
var id = usuario_Logado.id;

function preencherDados() {
  // Preencher os dados pessoais
  document.getElementById('nome').value = usuarios.dados[id].nome;
  document.getElementById('estado-civil').value = usuarios.dados[id].estado_civil;
  document.getElementById('telefone').value = usuarios.dados[id].telefone;
  document.getElementById('data-de-nascimento').value = usuarios.dados[id].data_nascimento;
  document.getElementById('cpf').value = usuarios.dados[id].cpf;
  document.getElementById('email').value = usuarios.dados[id].email;
  
  // Preencher os dados de endereço
  document.getElementById('input-Rua').value = usuarios.dados[id].endereco.logradouro;
  document.getElementById('input-bairro').value = usuarios.dados[id].endereco.bairro;
  document.getElementById('input-cep').value = usuarios.dados[id].endereco.cep;
  document.getElementById('input-estado').value = usuarios.dados[id].endereco.estado;
  document.getElementById('input-cidade').value = usuarios.dados[id].endereco.cidade;

  //informações adicionais
  document.getElementById('input-RendaMensal').value = usuarios.dados[id].sociais.renda;
  document.getElementById('input-NumeroDependentes').value = usuarios.dados[id].sociais.dependentes;
  document.getElementById('input-Profissão').value = usuarios.dados[id].sociais.profissao;

}
  
// Chamar a função para preencher os dados quando a página for carregada
window.onload = preencherDados;

