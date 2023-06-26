document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()

        if (button.classList.contains('animated')) {
            return
        }
        button.classList.add('animated')

        gsap.to(button, {
            keyframes: [{
                '--star-y': '-36px',
                duration: .3,
                ease: 'power2.out'
            }, {
                '--star-y': '48px',
                '--star-scale': .4,
                duration: .325,
                onStart() {
                    button.classList.add('star-round')
                }
            }, {
                '--star-y': '-64px',
                '--star-scale': 1,
                duration: .45,
                ease: 'power2.out',
                onStart() {
                    button.classList.toggle('active')
                    setTimeout(() => button.classList.remove('star-round'), 100)
                }
            }, {
                '--star-y': '0px',
                duration: .45,
                ease: 'power2.in'
            }, {
                '--button-y': '3px',
                duration: .11
            }, {
                '--button-y': '0px',
                '--star-face-scale': .65,
                duration: .125
            }, {
                '--star-face-scale': 1,
                duration: .15
            }],
            clearProps: true,
            onComplete() {
                button.classList.remove('animated')
            }
        })

        gsap.to(button, {
            keyframes: [{
                '--star-hole-scale': .8,
                duration: .5,
                ease: 'elastic.out(1, .75)'
            }, {
                '--star-hole-scale': 0,
                duration: .2,
                delay: .2
            }]
        })

        gsap.to(button, {
            '--star-rotate': '360deg',
            duration: 1.55,
            clearProps: true
        })
    })
})

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

//Codigo da barra-lateral

let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');

localStorage.setItem('',JSON.stringify)

toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});

var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))
var usuarios = (JSON.parse(localStorage.getItem('db_usuario'))).dados
var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))
var favoritos = (JSON.parse(localStorage.getItem('db_favoritos'))).favoritos
var pedidos = (JSON.parse(localStorage.getItem('db_pedidos'))).pedidos

$('.usuario').html(`${usuario_logado.tipo}`)
$(".topo").html(`
    <img src="${usuario_logado.pictures.medium}" id="perfil">
    <h5 class="nome">${usuario_logado.nome}</h5>
    `)
PreencheFavoritos()
PreencheDoadores()

function PreencheFavoritos(){
    let filtro_favoritos =[]
    favoritos.forEach(element => {
        if (usuario_logado.id == element.id) {
        filtro_favoritos = element.favoritos;
        }
    });
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
        <a class="col-md-4 col-sm-6 col-xs" href="Card.html">
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

function PreencheDoadores(){

    let filtro_recentes = []
    pedidos.forEach(element => {
      if (usuario_logado.tipo === "Beneficiario"){
        if (element.solicitante == usuario_logado.nome){
          filtro_recentes.push(element.solicitado)
        }  
      }else{
        if (element.solicitado == usuario_logado.nome){
          filtro_recentes.push(element.solicitante)
        }    
      }
    })
    var ben =[]
    usuarios.forEach(element =>{
      filtro_recentes.forEach(elemento => {
        if (element.nome == elemento){
          ben.push(element)
        }
      });
    })
    ben = ben.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });
    for (let i=0; i < 3;i++){
        $("#carouselUltimos .carousel-inner .carousel-item").append(`
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
        `)
    }
}