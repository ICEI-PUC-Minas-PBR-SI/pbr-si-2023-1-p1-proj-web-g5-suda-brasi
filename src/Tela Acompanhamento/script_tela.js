var pedidos = JSON.parse(localStorage.getItem('db_pedidos'))
var usuarios = JSON.parse(localStorage.getItem('db_usuario'));
var usuariologado = JSON.parse(sessionStorage.getItem('usuario'));
var usuariodoador = [];
var iguais = [];
var usuariopedidos = [];

if(usuariologado.tipo == "Beneficiario")
{
    pedidos.forEach(element => {
        if(usuariologado.nome == element.solicitante){
            usuariopedidos.push(element)
        }
    });
    
    usuarios.forEach(elemento => {
        usuariopedidos.forEach(element => {
            if(elemento.nome == element.solicitante){
                iguais.push(elemento.endereco.logradouro)
            }
        });
    });
}

if(usuariologado.tipo == "Doador")
{
    pedidos.forEach(element => {
        if(usuariologado.nome == element.solicitado){
            usuariopedidos.push(element)
        }
    });
    
    usuarios.forEach(elemento => {
        usuariopedidos.forEach(element => {
            if(elemento.nome == element.solicitado){
                iguais.push(elemento.endereco.logradouro)
            }
        });
    });
}

function exibirAcompanhamento() {
    let str = ''
    if (pedidos) {
      for (let i = 0; i< usuariopedidos.length;i++) {
        if(usuariopedidos[i].status == "processado"){
            str += 
            `<div class="frame-header">
                <h5>PEDIDO EM NOME DE <span class="text-primary font-weight-bold">${usuariopedidos[i].solicitante}</span></h5>
            </div>
            <div class="frame-header">
                <h5>Situação Do Pedido:<span class="text-primary font-weight-bold"> ${usuariopedidos[i].status}</span></h5>
            </div>
            </div>
            <div class="row justify-content-between top">
                <div class="progress-bar-container">
                <div class="progress-bar-image icon-image">
                    <img class="icon" style="color: black;" src="Tela Acompanhamento/Imagens/Pedido Processado colorido.png">
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
                <p>Data de Entrega: ${usuariopedidos[i].data}</p>
                <p>Endereço: ${iguais[i]}</p>
            </div>
            <div class="row justify-content-center top">
                <a href="CaixadeMensagem.html" class="btn btn-duvidas">Dúvidas sobre Entrega</a>
                <a href="Meus-Pedidos.html" class="btn btn-ver">Ver Detalhes do Pedido</a>
            </div>`;
        }
        if(usuariopedidos[i].status == "pronto"){
            str += 
            `<div class="frame-header">
                <h5>PEDIDO EM NOME DE <span class="text-primary font-weight-bold">${usuariopedidos[i].solicitante}</span></h5>
            </div>
            <div class="frame-header">
                <h5>Situação Do Pedido:<span class="text-primary font-weight-bold"> ${usuariopedidos[i].status}</span></h5>
            </div>
            </div>
            <div class="row justify-content-between top">
                <div class="progress-bar-container">
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Processado colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Processado</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Pronto pra entrega colorido.png">
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
                <p>Data de Entrega: ${usuariopedidos[i].data}</p>
                <p>Endereço: ${iguais[i]}</p>
            </div>
            <div class="row justify-content-center top">
                <a href="CaixadeMensagem.html" class="btn btn-duvidas">Dúvidas sobre Entrega</a>
                <a href="Meus-Pedidos.html" class="btn btn-ver">Ver Detalhes do Pedido</a>
            </div>`;
        }
        if(usuariopedidos[i].status == "transito"){
            str += 
            `<div class="frame-header">
                <h5>PEDIDO EM NOME DE <span class="text-primary font-weight-bold">${usuariopedidos[i].solicitante}</span></h5>
            </div>
            <div class="frame-header">
                <h5>Situação Do Pedido:<span class="text-primary font-weight-bold"> ${usuariopedidos[i].status}</span></h5>
            </div>
            </div>
            <div class="row justify-content-between top">
                <div class="progress-bar-container">
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Processado colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Processado</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Pronto pra entrega colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Pronto para entrega</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Enviado colorido.png">
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
                <p>Data de Entrega: ${usuariopedidos[i].data}</p>
                <p>Endereço: ${iguais[i]}</p>
            </div>
            <div class="row justify-content-center top">
                <a href="CaixadeMensagem.html" class="btn btn-duvidas">Dúvidas sobre Entrega</a>
                <a href="Meus-Pedidos.html" class="btn btn-ver">Ver Detalhes do Pedido</a>
            </div>`;
        }
        if(usuariopedidos[i].status == "chegou"){
            str += 
            `<div class="frame-header">
                <h5>PEDIDO EM NOME DE <span class="text-primary font-weight-bold">${usuariopedidos[i].solicitante}</span></h5>
            </div>
            <div class="frame-header">
                <h5>Situação Do Pedido:<span class="text-primary font-weight-bold"> ${usuariopedidos[i].status}</span></h5>
            </div>
            </div>
            <div class="row justify-content-between top">
                <div class="progress-bar-container">
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Processado colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Processado</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Pronto pra entrega colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Pronto para entrega</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Enviado colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Em Trânsito</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido chegou colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Chegou</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="delivery-details">
                <p><strong>Detalhes da Entrega:</strong></p>
                <p>Transportadora: Nome da Transportadora</p>
                <p>Data de Entrega: ${usuariopedidos[i].data}</p>
                <p>Endereço: ${iguais[i]}</p>
            </div>
            <div class="row justify-content-center top">
                <a href="CaixadeMensagem.html" class="btn btn-duvidas">Dúvidas sobre Entrega</a>
                <a href="Meus-Pedidos.html" class="btn btn-ver">Ver Detalhes do Pedido</a>
            </div>`;
        }
        if(usuariopedidos[i].status == "Pedido Realizado"){
            str += 
            `<div class="frame-header">
                <h5>PEDIDO EM NOME DE <span class="text-primary font-weight-bold">${usuariopedidos[i].solicitante}</span></h5>
            </div>
            <div class="frame-header">
                <h5>Situação Do Pedido:<span class="text-primary font-weight-bold"> ${usuariopedidos[i].status}</span></h5>
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
                <p>Data de Entrega: ${usuariopedidos[i].data}</p>
                <p>Endereço: ${iguais[i]}</p>
            </div>
            <div class="row justify-content-center top">
                <a href="CaixadeMensagem.html" class="btn btn-duvidas">Dúvidas sobre Entrega</a>
                <a href="Meus-Pedidos.html" class="btn btn-ver">Ver Detalhes do Pedido</a>
            </div>`;
        }
        if(usuariopedidos[i].status == ""){
            usuariopedidos[i].status = "Pedido Invalido"
            str += 
            `<div class="frame-header">
                <h5>PEDIDO EM NOME DE <span class="text-primary font-weight-bold">${usuariopedidos[i].solicitante}</span></h5>
            </div>
            <div class="frame-header">
                <h5>Situação Do Pedido:<span class="text-primary font-weight-bold"> ${usuariopedidos[i].status}</span></h5>
            </div>
            </div>
            <div class="row justify-content-between top">
                <div class="progress-bar-container">
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Processado colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Processado</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Pronto pra entrega colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Pronto para entrega</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido Enviado colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Em Trânsito</p>
                    </div>
                </div>
                <div class="progress-bar-image icon-image">
                    <img class="icon" src="Tela Acompanhamento/Imagens/Pedido chegou colorido.png">
                    <div class="d-flex flex-column">
                    <p class="font-weight-bold">Pedido<br>Chegou</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="delivery-details">
                <p><strong>Detalhes da Entrega:</strong></p>
                <p>Transportadora: Nome da Transportadora</p>
                <p>Data de Entrega: ${usuariopedidos[i].data}</p>
                <p>Endereço: ${iguais[i]}</p>
            </div>
            <div class="row justify-content-center top">
                <a href="CaixadeMensagem.html" class="btn btn-duvidas">Dúvidas sobre Entrega</a>
                <a href="Meus-Pedidos.html" class="btn btn-ver">Ver Detalhes do Pedido</a>
            </div>`;
        }
      }
      document.getElementById('tela').innerHTML = str;
    }
}

window.onload = exibirAcompanhamento;

