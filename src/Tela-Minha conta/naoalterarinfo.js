// Função para habilitar a edição das informações
function habilitarEdicao() {
    // Habilitar campos de entrada
    document.getElementById('nome').removeAttribute('disabled');
    document.getElementById('estado-civil').removeAttribute('disabled');
    document.getElementById('telefone').removeAttribute('disabled');
    document.getElementById('input-Rua').removeAttribute('disabled');
    document.getElementById('input-bairro').removeAttribute('disabled');
    document.getElementById('input-cep').removeAttribute('disabled');
    document.getElementById('input-estado').removeAttribute('disabled');
    document.getElementById('input-cidade').removeAttribute('disabled');
    document.getElementById('data-de-nascimento').removeAttribute('disabled');
    document.getElementById('cpf').removeAttribute('disabled');
    document.getElementById('email').removeAttribute('disabled');
    
    //informações adicionais
    document.getElementById('input-RendaMensal').removeAttribute('disabled');
    document.getElementById('input-NumeroDependentes').removeAttribute('disabled');
    document.getElementById('input-Profissão').removeAttribute('disabled');
  }
  
  // Botão "Alterar informações"
  var botaoAlterar1 = document.getElementById('botao-alterar1');
  botaoAlterar1.addEventListener('click', habilitarEdicao);
  var botaoAlterar2 = document.getElementById('botao-alterar2');
  botaoAlterar2.addEventListener('click', habilitarEdicao);
  