var usuarios = (JSON.parse(localStorage.getItem('db_usuarios'))).dados;

function opcoes(){
  let str = ''
  for (let i = 1; i < usuarios.length;i++) {
    str += 
    `
      <option value="${usuarios[i].nome}">${usuarios[i].nome}</option>
    `
  }
  document.getElementById('select-nomes').innerHTML = str;
}

opcoes()


// Script.js
const form = document.querySelector('#pedido-form');


function salvarPedido(event) {
  event.preventDefault();

  const tituloInput = document.getElementById('select-nomes');
  const descricaoInput = document.getElementById('descricao-pedido');
  const situacaoInput = document.getElementById('situacao-pedido');

  const pedido = {
    id: new Date().getTime(),
    titulo: tituloInput.value,
    descricao: descricaoInput.value,
    situacao: situacaoInput.value,
    data_envio: new Date().toLocaleString(),
    data_entrega: new Date().toLocaleString()
  };

  let pedidos = JSON.parse(sessionStorage.getItem('pedidos'));
  if (!pedidos) {
    pedidos = [];
  }

  pedidos.push(pedido);
  sessionStorage.setItem('pedidos', JSON.stringify(pedidos));

  tituloInput.value = '';
  descricaoInput.value = '';
  situacaoInput.value='';

  exibirPedidos();
}

function exibirPedidos() {
  let str = ''

  
  var pedidos = JSON.parse(sessionStorage.getItem('pedidos'));
  if (pedidos) {
    pedidos.forEach((pedido) => {
      str += 
      `<div class="row">
            <div id="topo-card">
                <span class="texto-card">Situação: ${pedido.situacao}</span>
                <span class="texto-card">Data do Pedido: ${pedido.data_envio}</span>
                <span class="texto-card">Data de Entrega: ${pedido.data_entrega}</span>
            </div>
            </div>
            <div class="row">
            <div class="col-md-3">
                <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" class="imagem-usuario">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Nome: ${pedido.titulo}</h5>
                <span class="card-text">Descrição: ${pedido.descricao}</span>
                </div>
            </div>
        </div>`;
    });
    document.getElementById('tela').innerHTML = str;
  }
}

form.addEventListener('submit', salvarPedido);
exibirPedidos();
