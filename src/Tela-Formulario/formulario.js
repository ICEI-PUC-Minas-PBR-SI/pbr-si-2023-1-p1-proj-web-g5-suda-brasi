$('#btn-cep').on('click', function (e){
  e.preventDefault()
  let cep = $('#input-CEP').val();
  fetch(`https://api.postmon.com.br/v1/cep/${cep}`)
  .then(res => res.json())
  .then(resultado =>{
    $('#input-Rua').val(resultado.logradouro);
    $('#input-Bairro').val(resultado.bairro)
    $('#input-Estado').val(resultado.estado)
    $('#input-Cidade').val(resultado.cidade)
  })
});
