// Barra Lateral
let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');
var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))

localStorage.setItem('',JSON.stringify)

toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});

document.getElementById('topo').innerHTML = 
    (`
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
        <a class="col-md-4 col-sm-6 col-xs" href="#">
            <div class="card" data-state="#about">
                <div class="card-header">
                    <img class="card-avatar" src="${filtro_favorito[i].pictures.medium}"style="width: 100%;" alt="avatar" />
                    <h1 class="card-fullname">${filtro_favorito[i].nome}</h1>
                    <p class="card-jobtitle">${filtro_favorito[i].endereco.cidade}</p>
                </div>
            </div>
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
