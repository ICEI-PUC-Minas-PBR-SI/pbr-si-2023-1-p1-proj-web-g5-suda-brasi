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
    var complemento = document.getElementById('input-Complemento').value;
    var rendamensal = document.getElementById('input-RendaMensal').value;
    var numerodependentes = document.getElementById('input-NumeroDependentes').value;
    var profissao = document.getElementById('input-Profissão').value;



    usuarios.dados[11] = {
        id:11,
        nome: nome,
        data: data,
        telefone: telefone,
        cpf: cpf,
        rg: rg,
        email: email,
        estadocivil: estadocivil,
        endereco: {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            estado: estado,
            cidade: cidade,
            complemento: complemento
        },
        sociais: {
            rendamensal: rendamensal,
            numerodependentes: numerodependentes,
            profissao: profissao
        }
    }
    console.log(usuarios)
    localStorage.setItem('db_usuarios',JSON.stringify(usuarios));
}
var botaoenviar = document.getElementById('botaoEnviar');
botaoenviar.addEventListener('click', finalizar);