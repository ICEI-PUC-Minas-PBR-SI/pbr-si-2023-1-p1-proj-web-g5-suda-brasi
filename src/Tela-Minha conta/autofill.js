//Codigo da barra-lateral

var usuarios = (JSON.parse(localStorage.getItem('db_usuario')));
var usuario_Logado = JSON.parse(sessionStorage.getItem('usuario'))
var id = usuario_Logado.id;

function preencherDados() {
  // Preencher os dados pessoais
  document.getElementById('nome').value = usuarios[id].nome;
  document.getElementById('estado-civil').value = usuarios[id].estado_civil;
  document.getElementById('telefone').value = usuarios[id].telefone;
  document.getElementById('data-de-nascimento').value = usuarios[id].data_nascimento;
  document.getElementById('cpf').value = usuarios[id].cpf;
  document.getElementById('email').value = usuarios[id].email;
  
  // Preencher os dados de endereço
  document.getElementById('input-Rua').value = usuarios[id].endereco.logradouro;
  document.getElementById('input-bairro').value = usuarios[id].endereco.bairro;
  document.getElementById('input-cep').value = usuarios[id].endereco.cep;
  document.getElementById('input-estado').value = usuarios[id].endereco.estado;
  document.getElementById('input-cidade').value = usuarios[id].endereco.cidade;

  //informações adicionais
  document.getElementById('input-RendaMensal').value = usuarios[id].sociais.renda;
  document.getElementById('input-NumeroDependentes').value = usuarios[id].sociais.dependentes;
  document.getElementById('input-Profissão').value = usuarios[id].sociais.profissao;

}
  
// Chamar a função para preencher os dados quando a página for carregada
window.onload = preencherDados;

