fetch("https://mocki.io/v1/06fe26cb-e261-496a-8f7c-547ef92a9390")
.then(res => res.json())
.then(dados =>{
  localStorage.setItem('db_usuarios', JSON.stringify(dados))
})

//Codigo da barra-lateral

var usuarios = (JSON.parse(localStorage.getItem('db_usuario')));

function finalizar(){

    var nome = document.getElementById('input-nomeCompleto').value;
    var data= document.getElementById('input-nascimento').value;
    var telefone = document.getElementById('input-telefone').value;
    var cpf = document.getElementById('input-cpf').value;
    var rg = document.getElementById('input-rg').value;
    var email = document.getElementById('input-email').value;

    usuarios[15] = {
        id:15,
        nome: nome,
        data: data,
        telefone: telefone,
        cpf: cpf,
        rg: rg,
        email: email
    }
    localStorage.setItem('db_usuario',JSON.stringify(usuarios));
    location.reload();
}
var botaoenviar = document.getElementById('botaoEnviar');
botaoenviar.addEventListener('click', finalizar);