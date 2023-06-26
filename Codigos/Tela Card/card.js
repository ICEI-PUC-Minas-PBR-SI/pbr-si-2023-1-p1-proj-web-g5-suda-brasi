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
    Categoria: ${atual.categoria}
    Endereco: ${atual.endereco.logradouro}
    Bairro: ${atual.endereco.bairro}
    Cidade: ${atual.endereco.cidade}
    CEP: ${atual.endereco.cep}`)
    $("#telefone").append(`
    Contato: ${atual.telefone}`)
    $("#email").append(`
        Email: ${atual.email}
    `)
}