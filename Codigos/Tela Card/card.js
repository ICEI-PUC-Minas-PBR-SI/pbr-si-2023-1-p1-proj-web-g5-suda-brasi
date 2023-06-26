function GeraPagina(){
    var id = location.search.slice(1).split('=')
    id = id[1]
    var usuarios = (JSON.parse(localStorage.getItem('db_usuario'))).dados
    var atual;
    
    usuarios.forEach(element => {
        if(element.id == id){
            atual= element
        }
    });
    
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