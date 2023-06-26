var usuario_logado = JSON.parse(sessionStorage.getItem('usuario'))

$(".topo").html(`
<img src="${usuario_logado.pictures.medium}" id="perfil">
<h5 class="nome">${usuario_logado.nome}</h5>
`)