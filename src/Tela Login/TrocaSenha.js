const openModalBtn = document.getElementById('trocarSenha');
var closeModalBtn = document.getElementById('closeModalBtn');
var modal = document.getElementById('modal');
var ModalEmailCadastrado = document.getElementById("ModalEmailConfirmar")
var SenhaNova = document.getElementById("ModalSenhaNova")

function TrocarSenha() {

    modal.style.display = 'block';
    // Fecha o modal quando o botão "X" é clicado
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    // Fecha o modal quando o usuário clica fora dele
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function habilitarTrocaSenha() {
    if (ModalEmailCadastrado.value != '') {
        SenhaNova.disabled = false;
    } else {
        SenhaNova.disabled = true;
    }
}

function trocarSenha(){
    var NovaSenha = SenhaNova.value;

    var validaEmail = false;

    for(let i = 0; i < buscadb.length;i++){
        if(ModalEmailCadastrado.value == buscadb[i].email){

            buscadb[i].senha = NovaSenha;
            validaEmail = true;
        }else{
            ModalEmailCadastrado.classList.add("animation");
        }
    }

    if(validaEmail){
        alert("Senha alterada com sucesso!")
        modal.style.display = 'none';
        location.reload();
    }

    localStorage.setItem('db_usuario', JSON.stringify(buscadb))
}