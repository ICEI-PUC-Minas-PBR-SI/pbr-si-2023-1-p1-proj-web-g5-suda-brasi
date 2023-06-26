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

    var usuarios = (JSON.parse(localStorage.getItem('db_usuario'))).dados;

    usuarios.dados[usuarios.length] = {
        id:usuarios.length.id,
        nome: nome,
        data: data,
        telefone: telefone,
        cpf: cpf,
        rg: rg,
        email: usuarios.length.email,
        senha: usuarios.length.senha,
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
}
$(".enviar").on('click',handleFileSelect)
function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function() {
      var image = new Image();
      image.src = reader.result;
      document.body.appendChild(image);
    };
  
    reader.readAsDataURL(file);
  }
