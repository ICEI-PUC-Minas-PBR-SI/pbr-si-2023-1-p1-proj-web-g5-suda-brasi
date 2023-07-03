
// Script.js

var doadorpedidos = [];
var usuariopedidos = [];



var pedidos = JSON.parse(localStorage.getItem('db_pedidos'));

pedidos.forEach(element => {
  if(usuariologado.nome == element.solicitante){
      usuariopedidos.push(element)
  }
});

function exibirPedidos() {
  let str = ''
  if (usuariologado.tipo == "Beneficiario") {
    usuariopedidos.forEach((usuariopedidos) => {
      str += 
      `<div class="row">
            <div id="topo-card">
                <span class="texto-card">Situação: ${usuariopedidos.status}</span>
                <span class="texto-card">Data de Entrega: ${usuariopedidos.data}</span>
            </div>
            </div>
            <div class="row">
            <div class="col-md-3">
                <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" class="imagem-usuario">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Nome: ${usuariopedidos.solicitante}</h5>
                <span class="card-text">Descrição: ${usuariopedidos.descricao}</span>
                </div>
            </div>
            <div>
              <a href="Acompanhamento.html"><button id="btn_Acompanhar">Acompanhar Pedido</button></a>
            </div>
        </div>`;
    });
    document.getElementById('tela').innerHTML = str;
  }
}
pedidos.forEach(element => {
  if(usuariologado.nome == element.solicitado){
      doadorpedidos.push(element)
  }
});
function exibirPedidosDoador() {
  let str = ''
  if (usuariologado.tipo == "Doador") {
    doadorpedidos.forEach((doadorpedidos) => {
      str += 
      `<div class="row">
            <div id="topo-card">
                <span class="texto-card">Situação: ${doadorpedidos.status}</span>
                <span class="texto-card">Data de Entrega: ${doadorpedidos.data}</span>
            </div>
            </div>
            <div class="row">
            <div class="col-md-3">
                <img src="https://cdn-icons-png.flaticon.com/512/2904/2904948.png" class="imagem-usuario">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Nome: ${doadorpedidos.solicitante}</h5>
                <span class="card-text">Descrição: ${doadorpedidos.descricao}</span>
                </div>
            </div>
            <div>
              <a href="Acompanhamento.html"><button id="btn_Acompanhar">Acompanhar Pedido</button></a>
            </div>
        </div>`;
    });
    document.getElementById('tela').innerHTML = str;
  }
}
function opcoes(){
  if(usuariologado.tipo == "Doador")
  {
    let str = ''
    for (let i = 0; i < doadorpedidos.length;i++) {
      str += 
      `
        <option id="valor" value="${doadorpedidos[i].solicitante}">${doadorpedidos[i].solicitante}</option>
      `
    }
    document.getElementById('select-nomes').innerHTML = str;
  }
}

function alterarinfo()
{
  if(usuariologado.tipo == "Doador")
  {
    var nomesolicitante = document.getElementById('select-nomes').value
    var onde = document.getElementById('onde').value
    pedidos.forEach((pedidos) => {
      if(pedidos.solicitante == nomesolicitante){
        pedidos.status = onde
      }
    })
    localStorage.setItem('db_pedidos' , JSON.stringify(pedidos))
  }
}
if(usuariologado.tipo == "Doador"){
  var botaotop = document.getElementById('alterar')
  botaotop.addEventListener('click' , alterarinfo)
}
opcoes();
exibirPedidos();
exibirPedidosDoador();

