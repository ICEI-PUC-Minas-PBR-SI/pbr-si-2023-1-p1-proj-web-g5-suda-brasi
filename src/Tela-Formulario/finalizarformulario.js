var user = (JSON.parse(localStorage.getItem("db_usuario")));
var fav = (JSON.parse(localStorage.getItem("db_favoritos")))
function finalizar(){
    var nome = document.getElementById('input-nomeCompleto').value;
    var data= document.getElementById('input-nascimento').value;
    var telefone = document.getElementById('input-telefone').value;
    var cpf = document.getElementById('input-cpf').value;
    var estadocivil = document.getElementById('estadocivil').value;
    var rua = document.getElementById('input-Rua').value;
    var numero = document.getElementById('input-Número').value;
    var bairro = document.getElementById('input-Bairro').value;
    var cep= document.getElementById('input-CEP').value;
    var estado = document.getElementById('input-Estado').value;
    var cidade = document.getElementById('input-Cidade').value;
    var categoria = $('#categorias').val()
    var descricao = $('#description').val()
    var rendamensal = document.getElementById('input-RendaMensal').value;
    var numerodependentes = document.getElementById('input-NumeroDependentes').value;
    var profissao = document.getElementById('input-Profissão').value;

    //Modifica as informações do usuario previamente criado
    user[(user.length) - 1].nome = nome;
    user[(user.length) - 1].data_nascimento = data;
    user[(user.length) - 1].telefone = telefone;
    user[(user.length) - 1].cpf = cpf;
    user[(user.length) -1].categoria = categoria;
    user[(user.length) -1].descricao = descricao;
    user[(user.length) - 1].estado_civil = estadocivil;
    user[(user.length) - 1].endereco.logradouro = rua + numero;
    user[(user.length) - 1].endereco.bairro = bairro;
    user[(user.length) - 1].endereco.cep = cep;
    user[(user.length) - 1].endereco.estado = estado;
    user[(user.length) - 1].endereco.cidade = cidade;
    user[(user.length) - 1].sociais.renda = rendamensal;
    user[(user.length) - 1].sociais.dependentes = numerodependentes;
    user[(user.length) - 1].sociais.profissao = profissao;

    console.log(user[user.length-1])

    var favoritos = {
        "id": user.length-1,
        "favoritos": []}
    fav.push(favoritos)

    localStorage.setItem('db_favoritos',JSON.stringify(fav));
    localStorage.setItem('db_usuario',JSON.stringify(user));

    document.getElementById('input-nomeCompleto').value = ""; 
    document.getElementById('input-nascimento').value = "";
    document.getElementById('input-telefone').value = "";
    document.getElementById('input-cpf').value = "";
    document.getElementById('input-rg').value = "";
    document.getElementById('estadocivil').value = "";
    document.getElementById('input-Rua').value = "";
    document.getElementById('input-Número').value = "";
    document.getElementById('input-Bairro').value = "";
    document.getElementById('input-CEP').value = "";
    document.getElementById('input-Estado').value = "";
    document.getElementById('input-Cidade').value = "";
    document.getElementById('input-RendaMensal').value = "";
    document.getElementById('input-NumeroDependentes').value = "";
    document.getElementById('input-Profissão').value = "";
    document.getElementById('input-complemento').value = "";

}

function redirencionar(){
    window.location.href = "Login.html"
}

var botaoenviar = document.getElementById('botaoEnviar');
botaoenviar.addEventListener('click', finalizar);
botaoenviar.addEventListener('click' , redirencionar)
