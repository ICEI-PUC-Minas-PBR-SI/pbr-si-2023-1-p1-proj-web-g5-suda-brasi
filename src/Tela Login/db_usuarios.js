//CARREGAR API

var buscadb = JSON.parse(localStorage.getItem("db_usuario"))

//--------------------------------------------------------------------------CARD ENTRAR---------------------------------------------------------------------
//---------------------------------------------------------------------------VARIAVEIS-----------------------------------------------------------------------
//Botão entrar
var btn_Entrar = document.getElementById("logar")
//Input email logar
var email_Logar = document.getElementById("logar_Email");
//Input senha logar
var senha_Logar = document.getElementById("logar_Senha");



//Desabilita e habilita botões card entrar
function habilitarBotaoEntrar() {
    if (email_Logar.value != '' && senha_Logar.value != '') {
        btn_Entrar.disabled = false;
    } else {
        btn_Entrar.disabled = true;
    }
}


btn_Entrar.addEventListener('click', (e) => {
    e.preventDefault();
    var loginValido = false;

    for (let i = 0; i < buscadb.length; i++) {
        if ((email_Logar.value === buscadb[i].email) && (senha_Logar.value === buscadb[i].senha)) {

            loginValido = true;
            sessionStorage.setItem("usuario", JSON.stringify(buscadb[i]))
        }

        if ((email_Logar.value != buscadb[i].email) && (senha_Logar.value != buscadb[i].senha)) {
            email_Logar.classList.add("animation");
            senha_Logar.classList.add("animation");
        }

        if ((email_Logar.value != buscadb[i].email) && (senha_Logar.value === buscadb[i].senha)) {
            email_Logar.classList.add("animation");
        }

        if ((senha_Logar.value != buscadb[i].senha) && (email_Logar.value === buscadb[i].email)) {
            senha_Logar.classList.add("animation");
        }
    }

    if (loginValido) {
        if(email_Logar.value === buscadb[0].email){
            window.location.href = "./Tela-Administrador/Admin.html";
        }else{
            window.location.href = "Home_Usuario.html";
        }
    }
})

//------------------------------------------------------------------------CARD CADASTRAR---------------------------------------------------------------------
//---------------------------------------------------------------------------VARIAVEIS-----------------------------------------------------------------------

//input Card Cadastro email
var email_Cadastro = document.getElementById("cadastrar_Email");
//input Card Cadastro email Confirmação
var confirma_Email = document.getElementById("confirmar_Email");
//input Card Cadastro Senha
var senha_Cadastrada = document.getElementById("cadastrar_Senha");
//input Card Cadastro Senha Confirmação
var confirmar_Senha = document.getElementById("confirmar_Senha");
//Div contendo botões de formulario
var btn_Doação = document.getElementById("btn_cadastro");
//botão doação
var btn_beneficiario = document.getElementById("btn_Doacoes");
//botão doar
var btn_doador = document.getElementById("btn_Doar");

var id = buscadb.length;

//Desabilita e habilita botões card cadastro
function habilitarBotaoCadastro() {
    if ((email_Cadastro.value !== '') && (confirma_Email.value !== '') && (senha_Cadastrada.value !== '') && (confirmar_Senha.value !== '')) {
        btn_beneficiario.disabled = false;
        btn_doador.disabled = false;


    } else {
        btn_beneficiario.disabled = true;
        btn_doador.disabled = true;
    }
}

$("#btn_Doar").on('click', function (e) {
    console.log('clicou')
    e.preventDefault()

    var loginValido = false;

    for (let i = 0; i < buscadb.length; i++) {
        if ((email_Cadastro.value === buscadb[i].email) && (senha_Cadastrada.value === buscadb[i].senha)) {
            alert("Email já cadastrado!")
            break;
        } else {
            loginValido = true;
            break;
        }
    }

    if (loginValido) {
        const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (validarEmail.test(email_Cadastro.value)) {

            if ((email_Cadastro.value === confirma_Email.value) && (senha_Cadastrada.value === confirmar_Senha.value)) {

                dadosCadastrados = {
                    id: id,
                    nome: "",
                    data_nascimento: "",
                    telefone: "",
                    estado_civil: "",
                    cpf: "",
                    email: email_Cadastro.value,
                    senha: senha_Cadastrada.value,
                    imagem: "",
                    tipo: "Doador",
                    categoria: "",
                    endereco: {
                        bairro: "",
                        cidade: "",
                        logradouro: "",
                        cep: "",
                        estado: ""
                    },
                    sociais: {
                        renda: "",
                        dependentes: "",
                        profissao: ""
                    }
                }

                buscadb.push(dadosCadastrados)

                localStorage.setItem('db_usuario', JSON.stringify(buscadb))

                window.location.href = "Formulario.html";

            } else {
                alert("Email ou senha invalido")
            }
        } else {
            alert("Valor não é valido como email")
        }
    }
})

$("#btn_Doacoes").on('click', function (e) {
    e.preventDefault()

    var loginValido = false;

    for (let i = 0; i < buscadb.length; i++) {
        if ((email_Cadastro.value === buscadb[i].email) && (senha_Cadastrada.value === buscadb[i].senha)) {
            alert("Email já cadastrado!")
            break;
        } else {
            loginValido = true;
            break;
        }
    }

    if (loginValido) {
        const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (validarEmail.test(email_Cadastro.value)) {

            if ((email_Cadastro.value === confirma_Email.value) && (senha_Cadastrada.value === confirmar_Senha.value)) {

                dadosCadastrados = {
                    id: id,
                    nome: "",
                    data_nascimento: "",
                    telefone: "",
                    estado_civil: "",
                    cpf: "",
                    email: email_Cadastro.value,
                    senha: senha_Cadastrada.value,
                    imagem: "",
                    tipo: "Beneficiario",
                    categoria: "",
                    endereco: {
                        bairro: "",
                        cidade: "",
                        logradouro: "",
                        cep: "",
                        estado: ""
                    },
                    sociais: {
                        renda: "",
                        dependentes: "",
                        profissao: ""
                    }
                }

                buscadb.push(dadosCadastrados)

                localStorage.setItem('db_usuario', JSON.stringify(buscadb))

                window.location.href = "Formulario.html";

            } else {
                alert("Email ou senha invalido")
            }
        } else {
            alert("Valor não é valido como email")
        }
    }
})