//Codigo da barra-lateral

let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');

localStorage.setItem('',JSON.stringify)

toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});

//Geração da tela Busca

var usuarios = (JSON.parse(localStorage.getItem('db_usuario')))
var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))
var favoritos = (JSON.parse(localStorage.getItem('db_favoritos')))
var pedidos = (JSON.parse(localStorage.getItem('db_pedidos')))
var tamanho_tela = window.innerWidth

function favoritosescrever(){
  favoritos.favoritos[favoritos.favoritos.length] = {
    "id":(favoritos.favoritos[favoritos.favoritos.length-1].id)+1,
    "favoritos": [
      5,
      3,
      9
    ]
  }
  localStorage.setItem('db_favoritos',JSON.stringify(favoritos));
}

// Verifica se a função já foi executada anteriormente
if (!sessionStorage.getItem('funcaoExecutada1')) {
  // Chama a função aqui
  favoritosescrever();
  

  // Define o valor no sessionStorage indicando que a função já foi executada
  sessionStorage.setItem('funcaoExecutada1', true);
}

if (!sessionStorage.getItem('funcaoExecutada2')) {
  // Chama a função aqui
  pedidosescrever();
  

  // Define o valor no sessionStorage indicando que a função já foi executada
  sessionStorage.setItem('funcaoExecutada2', true);
}

function pedidosescrever(){
  pedidos.pedidos[pedidos.pedidos.length] = {
    "pedido": (pedidos.pedidos[pedidos.pedidos.length - 1].pedido) + 1,
    "solicitante": usuario_logado.nome,
    "solicitado": "Eulógio da Rosa",
    "produtos": "",
    "tipo": "Roupas",
    "data": "17/03/2023",
    "status": "",
    "Endereco": {
      "Rua": usuario_logado.endereco.logradouro,
      "Bairro": usuario_logado.endereco.Cardoso,
      "Cidade": usuario_logado.endereco.Cidade,
      "Estado": usuario_logado.endereco.estado,
      "CEP": usuario_logado.endereco.cep
    }
  }
  localStorage.setItem('db_pedidos',JSON.stringify(pedidos));
}

$('.categorias-checkbox').on('change', 'input', function() {
  let categoria = this.name
  let filtro =''
  if (categoria == "categoria1"){
    console.log("sangue")
    filtro = "Sangue"
  }else 
  if(categoria == "categoria2"){
          filtro = "Brinquedos"
      }else if(categoria == "categoria3"){
          filtro = "Alimentos"
      }else if(categoria == "categoria4"){
          filtro = "Roupas"
      }else if (categoria == "categoria5"){
        filtro = "Livros"
      }
    $('#carouselRecomendados .cards').remove()
    $('#carouselRecomendados #carouselRecomendados-item0').append(
      `<ul class="cards">
      </ul>
      `
    )
  ConstroiRecomendados(filtro)
});

function GeraBusca(){
  $(".topo").html(`
    <h5 class="nome">${usuario_logado.nome}</h5>
  `)
  if(usuario_logado.tipo === "Beneficiario"){
    $("#cards").html(`
    <div class="doadores-favoritos">
      <h5 class="subtitulo">
      <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" id="icon-donation">
      <span class="texto-subtitulo">Doadores Favoritos</span>
      </h5>

      <div id="carouselFavoritos" class="carousel slide">
          <div class="carousel-inner" id="carouselFavoritos-inner">
            <div class="carousel-item active mod" id="carouselFavoritos-item0">
              <ul class='cards'>
              </ul>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselFavoritos" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselFavoritos" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div> 
    </div> 
    <div class="doadores-Recomendados">
      <h5 class="subtitulo">
      <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" id="icon-donation">
      <span class="texto-subtitulo">Doadores Recomendados</span>
      </h5> 

      <div id="carouselRecomendados" class="carousel slide">
          <div class="carousel-inner" id="carouselRecomendados-inner">
            <div class="carousel-item active" id="carouselRecomendados-item0">
              <ul class='cards'>
              </ul>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecomendados" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselRecomendados" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    </div>
    <div class="doadores-Recentes">
      <h5 class="subtitulo">
      <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" id="icon-donation">
      <span class="texto-subtitulo">Doadores Recentes</span>
      </h5>   

      <div id="carouselRecentes" class="carousel slide">
          <div class="carousel-inner" id="carouselRecentes-inner">
            <div class="carousel-item active mod" id="carouselRecentes-item0">
              <ul class='cards'>
              </ul>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecentes" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselRecentes" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>  
    </div>
    `)
    PreencherCardDoador();
  }
  else if ((usuario_logado.tipo === "Doador")||(usuario_logado.tipo === "Instituicao")){
    $("#cards").html(`
    <div class="beneficiarios-favoritos">
      <h5 class="subtitulo">
      <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" id="icon-donation">
      <span class="texto-subtitulo">Beneficiarios Favoritos</span>
      </h5>

      <div id="carouselFavoritos" class="carousel slide">
          <div class="carousel-inner" id="carouselFavoritos-inner">
            <div class="carousel-item active" id="carouselFavoritos-item0">
              <ul class='cards'>
              </ul>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselFavoritos" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselFavoritos" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div> 
    </div> 
    <div class="beneficiarios-Recomendados">
      <h5 class="subtitulo">
      <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" id="icon-donation">
      <span class="texto-subtitulo">Beneficiarios Recomendados</span>
      </h5> 

      <div id="carouselRecomendados" class="carousel slide">
          <div class="carousel-inner" id="carouselRecomendados-inner">
            <div class="carousel-item active mod" id="carouselRecomendados-item0">
              <ul class='cards'>
              </ul>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecomendados" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselRecomendados" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    </div>
    <div class="beneficiarios-Recentes">
      <h5 class="subtitulo">
      <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" id="icon-donation">
      <span class="texto-subtitulo">Beneficiarios Recentes</span>
      </h5>   

      <div id="carouselRecentes" class="carousel slide">
          <div class="carousel-inner" id="carouselRecentes-inner">
            <div class="carousel-item active mod" id="carouselRecentes-item0">
              <ul class='cards'>
              </ul>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselRecentes" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselRecentes" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>  
    </div>
    `)
    PreencherCardBeneficiario();
  }
}

//Preenchimento dos carrousseis com beneficiarios
function PreencherCardBeneficiario(){
  //Gera carousel dos recomendados
  ConstroiRecomendados();
  //Gera carousel dos favoritos
  ConstroiFavoritos();
  //Gera carousel dos recentes
  ConstroiRecentes();
}

//Preenchimento dos carrousseis com Beneficiarios
function PreencherCardDoador(){
  ConstroiRecomendados();
  //Gera carousel dos favoritos
  ConstroiFavoritos();
  //Gera carousel dos recentes
  ConstroiRecentes();
}

//Construção do carroussel Recomendados
function ConstroiRecomendados(filtro){
  var outros = []
  if (usuario_logado.tipo == "Beneficiario"){
    (usuarios.dados).forEach(element => {
      if((element.tipo == "Doador")||(element.tipo == "Instituicao")){
        if ((usuario_logado.categoria == element.categoria)||(element.categoria == filtro)){
          outros.push(element)
        }
      }
    });
  }else{
    usuarios.dados.forEach(element => {
    
      if ((element.tipo == 'Beneficiario')){
        if ((usuario_logado.categoria == element.categoria)||(element.categoria == filtro)){
          outros.push(element)
        }}})
  }
  PreencheItem("Recomendados",outros)
}

function ConstroiFavoritos(){
  var filtro_favoritos =[]
  favoritos.favoritos.forEach(element => {
    if (usuario_logado.id == element.id) {
      filtro_favoritos = element.favoritos;
    }
  });
  var filtro_favorito = []
  filtro_favoritos.forEach(element => {
    usuarios.dados.forEach(elemento => {
      if (elemento.id == element) {
        filtro_favorito.push(elemento)
      }
    });
  })
  PreencheItem("Favoritos",filtro_favorito)
}

function ConstroiRecentes(){
  var filtro_recentes = []
  pedidos.pedidos.forEach(element => {
    if (usuario_logado.tipo === "Beneficiario"){
      if (element.solicitante == usuario_logado.nome){
        filtro_recentes.push(element.solicitado)
      }  
    }else if ((usuario_logado.tipo === "Doador")||(usuario_logado.tipo === "Instituicao")){
      if (element.solicitado == usuario_logado.nome){
        filtro_recentes.push(element.solicitante)
      }    
    }
  })
  var ben =[]
  usuarios.dados.forEach(element =>{
    filtro_recentes.forEach(elemento => {
      if (element.nome == elemento){
        ben.push(element)
      }
    });
  })
  ben = ben.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  console.log(ben)
  PreencheItem("Recentes",ben)
}

function PreencheItem(modo,tipo){
  let j=0;
  let k=0;
  if (tamanho_tela < 576){
    for(let i = 0; i < tipo.length; i++){
      if (k == 0){
        $(`#carousel${modo}  #carousel${modo}-inner #carousel${modo}-item${j} .cards`).append(`
          <li>
            <a href="Card.html" class="card">
            <img src="${tipo[i].pictures.medium}" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
                  <img class="card__thumb" src="${tipo[i].pictures.thumb}" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title"> ${tipo[i].nome} </h3>            
                    <span class="card__status">${tipo[i].categoria} </span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>      
          </li>      
        `);
        k++;
      }else{
        j++;
        k=1;
        $(`#carousel${modo}  #carousel${modo}-inner`).append(`
        <div class="carousel-item" id="carousel${modo}-item${j}">
          <ul class='cards'>
            <li>
            <a href="Card.html" class="card">
            <img src="${usuarios.dados[i].pictures.medium}" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
                  <img class="card__thumb" src="${usuarios.dados[i].pictures.thumb}" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title"> ${usuarios.dados[i].nome} </h3>            
                    <span class="card__status">${usuarios.dados[i].categoria} </span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>      
            </li>
          </ul>
        </div>
        `)
      }
    }
  }
  if ((tamanho_tela > 576) && (tamanho_tela < 768)){
    for(let i = 0; i < tipo.length; i++){
      if (k < 2){
        $(`#carousel${modo}  #carousel${modo}-inner #carousel${modo}-item${j} .cards`).append(`
          <li>
            <a href="Card.html" class="card">
            <img src="${tipo[i].pictures.medium}" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
                  <img class="card__thumb" src="${tipo[i].pictures.thumb}" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title"> ${tipo[i].nome} </h3>            
                    <span class="card__status">${tipo[i].categoria} </span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>      
          </li>      
        `);
        k++;
      }else{
        j++;
        k=1;
        $(`#carousel${modo}  #carousel${modo}-inner`).append(`
        <div class="carousel-item" id="carousel${modo}-item${j}">
          <ul class='cards'>
            <li>
            <a href="Card.html" class="card">
            <img src="${tipo[i].pictures.medium}" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
                  <img class="card__thumb" src="${tipo[i].pictures.thumb}" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title"> ${tipo[i].nome} </h3>            
                    <span class="card__status">${tipo[i].categoria} </span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>      
            </li>
          </ul>
        </div>
        `)
      }
    }
  }
  if(tamanho_tela >= 768){
    for(let i = 0; i < tipo.length; i++){
      if (k < 3){
        $(`#carousel${modo}  #carousel${modo}-inner #carousel${modo}-item${j} .cards`).append(`
          <li>
            <a href="Card.html" class="card">
            <img src="${tipo[i].pictures.medium}" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
                  <img class="card__thumb" src="${tipo[i].pictures.thumb}" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title"> ${tipo[i].nome} </h3>            
                    <span class="card__status">${tipo[i].categoria} </span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>      
          </li>      
        `);
        k++;
      }else{
        j++;
        k=1;
        $(`#carousel${modo}  #carousel${modo}-inner`).append(`
        <div class="carousel-item" id="carousel${modo}-item${j}">
          <ul class='cards'>
            <li>
            <a href="Card.html" class="card">
            <img src="${tipo[i].pictures.medium}" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
                  <img class="card__thumb" src="${tipo[i].pictures.thumb}" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title"> ${tipo[i].nome} </h3>            
                    <span class="card__status">${tipo[i].categoria} </span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>      
            </li>
          </ul>
        </div>
        `)
      }
    }
  }
}
