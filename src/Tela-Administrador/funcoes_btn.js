var db_contatos_inicial = {
    "data": [
    ]
}

var db = JSON.parse(localStorage.getItem('db_usuario'));

console.log(db);

if (!db) {
    db = db_contatos_inicial
};

function exibeContatos() {
    // Remove todas as linhas do corpo da tabela
    $("#table-contatos").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.length; i++) {
        let contato = db[i];
        console.log(contato);
        $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                <td>${contato.nome}</td>
                                <td>${contato.telefone}</td>
                                <td>${contato.email}</td>
                                <td>${contato.cidade}</td>
                                <td>${contato.categoria}</td>
                            </tr>`);
    }
}

function init() {
    // Adiciona funções para tratar os eventos 
    $("#btnInsert").click(function () {
        // Verfica se o formulário está preenchido corretamente
        if (!$('#form-contato')[0].checkValidity()) {
            displayMessage("Preencha o formulário corretamente.");
            return;
        }

        // Obtem os valores dos campos do formulário
        let campoNome = $("#inputNome").val();
        let campoTelefone = $("#inputTelefone").val();
        let campoEmail = $('#inputEmail').val();
        let campoCidade = $("#inputCidade").val();
        let campoCategoria = $('#inputCategoria').val();
        let contato = {
            nome: campoNome,
            telefone: campoTelefone,
            email: campoEmail,
            cidade: campoCidade,
            categoria: campoCategoria
        };

        insertContato(contato);

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Alterar
    $("#btnUpdate").click(function () {
        // Obtem os valores dos campos do formulário
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um contato para ser alterado.");
            return;
        }
        let campoNome = $("#inputNome").val();
        let campoTelefone = $("#inputTelefone").val();
        let campoEmail = $("#inputEmail").val();
        let campoCidade = $("#inputCidade").val();
        let campoCategoria = $("#inputCategoria").val();
        let contato = {
            nome: campoNome,
            telefone: campoTelefone,
            email: campoEmail,
            cidade: campoCidade,
            categoria: campoCategoria
        };

        updateContato(parseInt(campoId), contato);

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Excluir
    $("#btnDelete").click(function () {
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um contato a ser excluído.");
            return;
        }
        deleteContato(parseInt(campoId));

        // Reexibe os contatos
        exibeContatos();

        // Limpa o formulario
        $("#form-contato")[0].reset();
    });

    // Intercepta o click do botão Listar Contatos
    $("#btnClear").click(function () {
        $("#form-contato")[0].reset();
    });

    // Oculta a mensagem de aviso após alguns segundos
    $('#msg').bind("DOMSubtreeModified", function () {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 5000);
    });

    // Preenche o formulário quando o usuario clicar em uma linha da tabela 
    $("#grid-contatos").on("click", "tr", function (e) {
        let linhaContato = this;
        colunas = linhaContato.querySelectorAll("td");

        $("#inputId").val(colunas[0].innerText);
        $("#inputNome").val(colunas[1].innerText);
        $("#inputTelefone").val(colunas[2].innerText);
        $("#inputEmail").val(colunas[3].innerText);
        $("#inputCidade").val(colunas[4].innerText);
        $("#inputCategoria").val(colunas[5].innerText);
    });

    exibeContatos();
}