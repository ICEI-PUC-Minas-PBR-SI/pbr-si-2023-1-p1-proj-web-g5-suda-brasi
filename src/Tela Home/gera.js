function GeraBanco(){
    fetch('https://mocki.io/v1/06fe26cb-e261-496a-8f7c-547ef92a9390')
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