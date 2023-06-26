var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))

$(".topo").html(`
<img src="${usuario_logado.pictures.medium}" id="perfil">
<h5 class="nome">${usuario_logado.nome}</h5>
`)

let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');

toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});