var closeModalBtn = document.getElementById('closeModalBtn');
var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))
var pedidos = JSON.parse(localStorage.getItem('db_pedidos'));

var id = location.search.slice(1).split('=')
id = id[1]
var usuarios = (JSON.parse(localStorage.getItem('db_usuario')))
var atual;

usuarios.forEach(element => {
    if(element.id == id){
        atual= element
    }
});

function GeraPagina(){
      
    $('.titulos').append(`${atual.nome}`)
    $('.imagem-perfil').append(`
        <img src="${atual.pictures.medium}" class="imagem-usuario">
    `)
    $('#detalhes').append(`
    <p>
        Categoria: ${atual.categoria}
    </p>
    <p>
        Endereco: ${atual.endereco.logradouro}
    </p>
    <p>
        Bairro: ${atual.endereco.bairro}
    </p>
    <p>
        Cidade: ${atual.endereco.cidade}
    </p>
    <p>
        CEP: ${atual.endereco.cep}
    </p>
    `) 
    $("#telefone").append(`
    Contato: ${atual.telefone}`)
    $("#email").append(`
        Email: ${atual.email}
    `)
}

function switchModal(){
    const modal = document.querySelector('.modal')
    const actualstyle = modal.style.display
    console.log(modal)
    if (actualstyle == 'block') {
        modal.style.display = 'none'
    }
    else {
        modal.style.display = 'block'
    }
}

function adicionaPedido(){
    pedidos.push(
    {
        "pedido": (pedidos.legth)-1,
        "solicitante": usuario_logado.nome,
        "solicitado": atual.nome,
        "tipo":usuario_logado.categoria,
        "data": new Date().toLocaleString(),
        "status": "Pedido Realizado",
        "descricao": $('#descricao-doacao').val(),
        "Endereco": {
            "Rua": usuario_logado.endereco.logradouro,
            "Bairro": usuario_logado.endereco.bairro,
            "Cidade": usuario_logado.endereco.cidade,
            "Estado": usuario_logado.endereco.estado,
            "CEP": usuario_logado.endereco.cep
    }
    })
    localStorage.setItem('db_pedidos',JSON.stringify(pedidos))
    let estado= document.querySelector('#estado')
    estado.style.display = 'block';
    setTimeout(function (){
        estado.style.display = 'none';
        modal.style.display = 'none';
    },1000)
}

$('.btn-doacao').on('click',switchModal)
$('.submit-pedido').on('click',adicionaPedido)
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});