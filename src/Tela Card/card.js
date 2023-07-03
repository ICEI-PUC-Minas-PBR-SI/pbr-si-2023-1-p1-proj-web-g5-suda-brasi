var closeModalBtn = document.getElementById('closeModalBtn');
var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))
var pedidos = JSON.parse(localStorage.getItem('db_pedidos'));
var favoritos = JSON.parse(localStorage.getItem('db_favoritos'));

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

    favoritos.forEach(element=>{
        if(element.id == id){
            bancoFavoritos = element;
        }
    })
    bancoFavoritos.favoritos.forEach(element=>{
        if(element == parseInt(id)){
            $('#favoritos').prop('checked',true)
        }
    })

    $('#detalhes').append(`
    <p>
        Descrição: ${atual.descricao}
    </p>
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
    if(usuario_logado.tipo == 'Beneficiario'){
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
    }else{
        pedidos.push(
            {
                "pedido": (pedidos.legth)-1,
                "solicitante": atual.nome,
                "solicitado": usuario_logado.nome,
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
    }

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

var bancoFavoritos;

$('#favoritos').on('click',function(){
    favoritos.forEach(element=>{
        if(element.id == id){
            bancoFavoritos = element
        }
    })
    if(this.checked){
        bancoFavoritos.favoritos.push(parseInt(id));
    }
    else{
        var conteudo = bancoFavoritos.favoritos;
        conteudo.splice(conteudo.indexOf(3),1)
        console.log(conteudo)
    }
    favoritos.forEach(element=>{
        if(element.id == id){
            element = bancoFavoritos 
        }
    })
    localStorage.setItem('db_favoritos',JSON.stringify(favoritos))
})