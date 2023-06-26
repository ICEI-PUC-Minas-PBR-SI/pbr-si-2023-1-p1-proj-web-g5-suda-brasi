function finalizar(){

    var nome = document.getElementById('input-nomeCompleto').value;
    var data= document.getElementById('input-nascimento').value;
    var telefone = document.getElementById('input-telefone').value;
    var cpf = document.getElementById('input-cpf').value;
    var rg = document.getElementById('input-rg').value;
    var email = document.getElementById('input-email').value;
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

    usuarios.dados[usuarios.dados.length] = {
        id:usuarios.dados.length.id,
        nome: nome,
        data: data,
        telefone: telefone,
        cpf: cpf,
        rg: rg,
        email: usuarios.dados.length.email,
        senha: usuarios.dados.length.senha,
        categoria:"",
        tipo:"",
        imagem:"",
        estado_civil: estadocivil,
        endereco: {
            logradouro: rua + numero,
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
    localStorage.setItem('db_usuario',JSON.stringify(usuarios));

    document.getElementById('input-nomeCompleto').value = ""; 
    document.getElementById('input-nascimento').value = "";
    document.getElementById('input-telefone').value = "";
    document.getElementById('input-cpf').value = "";
    document.getElementById('input-rg').value = "";
    document.getElementById('input-email').value = "";
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
    document.getElementById('input-Complemento').value - "";

}
var botaoenviar = document.getElementById('botaoEnviar');
botaoenviar.addEventListener('click', finalizar);