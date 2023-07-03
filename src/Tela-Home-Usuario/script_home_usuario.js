function limpar(){
    sessionStorage.clear();
}
var botao3 = document.getElementById('Sair');
botao3.addEventListener('click', limpar);
 


function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-open');
}

function submitForm(event) {
    event.preventDefault();
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value;
    // Realizar a ação desejada com o termo de pesquisa (por exemplo, enviar para um servidor, processar localmente, etc.)
    console.log("Termo de pesquisa: " + searchTerm);
}

var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))
var usuarios = (JSON.parse(localStorage.getItem('db_usuario')))
var favoritos = (JSON.parse(localStorage.getItem('db_favoritos')))
var pedidos = (JSON.parse(localStorage.getItem('db_pedidos')))

$('.usuario').html(`${usuario_logado.tipo}`)
PreencheFavoritos()
PreencheDoadores()

function PreencheFavoritos(){
    let filtro_favoritos =[]
    favoritos.forEach(element => {
        if (usuario_logado.id == element.id) {
        filtro_favoritos = element.favoritos;
        }
    });

    if (filtro_favorito == undefined){
        $('#favoritos').append(` 
            <div class="card" id="favoritos-cartao" style="width: 18rem;heigth: 12rem">
                <div class="card-body">
                <h5 class="card-title">Nenhum favorito encontrado</h5>
                <p class="card-text">Você ainda não escolheu nenhum favorito. Procure por doadores agora clicando no botão abaixo</p>
                <a href="Busca.html" class="btn btn-primary">Buscar Doação</a>
                </div>
            </div>
            `)
    }else{
        var filtro_favorito = []
        filtro_favoritos.forEach(element => {
            usuarios.forEach(elemento => {
            if (elemento.id == element) {
                filtro_favorito.push(elemento)
            }
            });
        })
    
        for(let i=0; i < 3;i++){
            $('#favoritos').append(` 
            <a class="col-md-4 col-sm-6 col-xs" href="Card.html?id=${filtro_favorito[i].id}">
                <div class="card" data-state="#about">
                    <div class="card-header">
                        <img class="card-avatar" src="${filtro_favorito[i].pictures.medium}"style="width: 100%;" alt="avatar" />
                        <h1 class="card-fullname">${filtro_favorito[i].nome}</h1>
                        <p class="card-jobtitle">${filtro_favorito[i].endereco.cidade}</p>
                    </div>
                </div>
     </a>
        `)
        }
    }


}

function PreencheDoadores() {

    let filtro_recentes = []
    pedidos.forEach(element => {
        if (usuario_logado.tipo === "Beneficiario") {
            if (element.solicitante == usuario_logado.nome) {
                filtro_recentes.push(element.solicitado)
            }
        } else {
            if (element.solicitado == usuario_logado.nome) {
                filtro_recentes.push(element.solicitante)
            }
        }
    })

    if (filtro_recentes.length == 0) {
        $("#carouselUltimos .carousel-inner .carousel-item").append(`
        <div class="card" id="ultimos-cartao" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Nenhuma doação feita</h5>
                <p class="card-text">Você ainda não realizou uma doação. Realize agora clicando no
                botão abaixo</p>
                <a href="Busca.html" class="btn btn-primary">Buscar Doação</a>
            </div>
        </div>
    }`)
    } else {
        var ben = []
        usuarios.forEach(element => {
            filtro_recentes.forEach(elemento => {
                if (element.nome == elemento) {
                    ben.push(element)
                }
            });
        })

        ben = ben.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });

        for (let i = 0; i < 3; i++) {
            $("#carouselUltimos .carousel-inner .carousel-item").append(`
            <a class="col-md-4 col-sm-6 col-xs" href="Card.html?id=${ben[i].id}">
            <div class="solucoes">
                <div class="solucoes-content">
                    <div class="personal-image">
                        <label class="label">
                            <figure class="personal-figure">
                                <img src="${ben[i].pictures.medium}"class="personal-avatar" alt="avatar">
                            </figure>
                        </label>
                        <p class="s-descricao text-center">
                            ${ben[i].nome}
                        </p>
                    </div>
                </div>
            </div>
    </a>
            `)
        }
    }
}