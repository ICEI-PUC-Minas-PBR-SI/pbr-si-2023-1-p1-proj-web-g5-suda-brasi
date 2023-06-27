var user = (JSON.parse(localStorage.getItem("db_usuario")));
function finalizar(){

    var nome = document.getElementById('input-nomeCompleto').value;
    var data= document.getElementById('input-nascimento').value;
    var telefone = document.getElementById('input-telefone').value;
    var cpf = document.getElementById('input-cpf').value;
    var rg = document.getElementById('input-rg').value;
    var estadocivil = document.getElementById('estadocivil').value;
    var rua = document.getElementById('input-Rua').value;
    var numero = document.getElementById('input-Número').value;
    var bairro = document.getElementById('input-Bairro').value;
    var cep= document.getElementById('input-CEP').value;
    var estado = document.getElementById('input-Estado').value;
    var cidade = document.getElementById('input-Cidade').value;
    var rendamensal = document.getElementById('input-RendaMensal').value;
    var numerodependentes = document.getElementById('input-NumeroDependentes').value;
    var profissao = document.getElementById('input-Profissão').value;
    

    
    user[user.length-1] = {
        id:user[user.length-1].id,
        nome: nome,
        data: data,
        telefone: telefone,
        cpf: cpf,
        rg: rg,
        email: user[user.length-1].email,
        senha: user[user.length-1].senha,
        categoria:"",
        tipo:"",
        imagem:"",
        estado_civil: estadocivil,
        endereco: {
            logradouro: rua + "",numero,
            bairro: bairro,
            cep: cep,
            estado: estado,
            cidade: cidade,
        },
        sociais: {
            renda: rendamensal,
            dependentes: numerodependentes,
            profissao: profissao
        }
    }
    console.log(usuarios)
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
