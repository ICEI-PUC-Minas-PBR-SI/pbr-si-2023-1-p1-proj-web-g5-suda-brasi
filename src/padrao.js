let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');

toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});

var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))

if(usuario_logado.pictures == undefined){
  $(".topo").html(`
  <h5 class="nome">${usuario_logado.nome}</h5>
`)
}else{
  $(".topo").html(`
  <img src="${usuario_logado.pictures.medium}" id="perfil">
  <h5 class="nome">${usuario_logado.nome}</h5>
  `)
}