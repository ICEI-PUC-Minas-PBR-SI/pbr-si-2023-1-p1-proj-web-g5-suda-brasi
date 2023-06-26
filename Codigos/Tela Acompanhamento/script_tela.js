var pedidos = JSON.parse(sessionStorage.getItem('pedidos'));
var usuarios =(JSON.parse(localStorage.getItem('db_usuarios'))).dados;
var iguais = [];
usuarios.forEach(elemento => {
    pedidos.forEach(element => {
        if(elemento.nome == element.titulo){
            iguais.push(elemento.endereco.logradouro)
        }
    });
});


function exibirAcompanhamento() {
    let str = ''
    if (pedidos) {
      for (let i = 0; i< pedidos.length;i++) {
        str += 
        `<div class="frame-header">
            <h5>PEDIDO EM NOME DE <span class="text-primary font-weight-bold">${pedidos[i].titulo}</span></h5>
        </div>
        <div class="frame-header">
            <h5>Situação Do Pedido:<span class="text-primary font-weight-bold"> ${pedidos[i].situacao}</span></h5>
        </div>
        </div>
        <div class="row justify-content-between top">
            <div class="progress-bar-container">
            <div class="progress-bar-image icon-image">
                <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Processado.png">
                <div class="d-flex flex-column">
                <p class="font-weight-bold">Pedido<br>Processado</p>
                </div>
            </div>
            <div class="progress-bar-image icon-image">
                <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Pronto pra entrega.png">
                <div class="d-flex flex-column">
                <p class="font-weight-bold">Pedido<br>Pronto para entrega</p>
                </div>
            </div>
            <div class="progress-bar-image icon-image">
                <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Enviado.png">
                <div class="d-flex flex-column">
                <p class="font-weight-bold">Pedido<br>Em Trânsito</p>
                </div>
            </div>
            <div class="progress-bar-image icon-image">
                <img class="icon" src="Tela Acompanhamento/Imagens/Pedido chegou.png">
                <div class="d-flex flex-column">
                <p class="font-weight-bold">Pedido<br>Chegou</p>
                </div>
            </div>
            </div>
        </div>
        <div class="delivery-details">
            <p><strong>Detalhes da Entrega:</strong></p>
            <p>Transportadora: Nome da Transportadora</p>
            <p>Data de Entrega: ${pedidos[i].data_entrega}</p>
            <p>Endereço: ${iguais[i]}</p>
        </div>
        <div class="row justify-content-center top">
            <a href="CaixadeMensagem.html" class="btn btn-duvidas">Dúvidas sobre Entrega</a>
            <a href="Meus-Pedidos.html" class="btn btn-ver">Ver Detalhes do Pedido</a>
        </div>`;
      }
      document.getElementById('tela').innerHTML = str;
    }
}

window.onload = exibirAcompanhamento;