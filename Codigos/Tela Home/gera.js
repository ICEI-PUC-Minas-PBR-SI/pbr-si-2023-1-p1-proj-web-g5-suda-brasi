function GeraBanco(){
    fetch('https://my-json-server.typicode.com/Okitemuri/fakedb/db')
        .then(res => res.json())
        .then(retorno => {
            localStorage.setItem('db_usuario',JSON.stringify(retorno))
        })
    
    fetch('https://my-json-server.typicode.com/Okitemuri/fakePedidos/db')
        .then(res => res.json())
        .then(retorno => {
            localStorage.setItem('db_pedidos',JSON.stringify(retorno))
        })
    
    fetch('https://my-json-server.typicode.com/Okitemuri/fakeMensagens/db')
        .then(res => res.json())
        .then(retorno => {
            localStorage.setItem('db_mensagens',JSON.stringify(retorno))
        })
    
    fetch('https://my-json-server.typicode.com/Okitemuri/fakeFavoritos/db')
        .then(res => res.json())
        .then(retorno => {
            localStorage.setItem('db_favoritos',JSON.stringify(retorno))
        })
}

GeraBanco();