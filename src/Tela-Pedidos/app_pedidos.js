
var usuariologado = JSON.parse(sessionStorage.getItem('usuario'));

if(usuariologado.tipo == "Doador"){
  let str = 
  `<p class="cabecalho" style="text-align: center;">
    <h2 class="cabecalho-titulo"> Alterar Pedidos</h2>
  </p>
  <form id="pedido-form">
    <label for="titulo">Nome:</label>
    <select name="" id="select-nomes">
    
    </select>
    <label for="titulo">Situação Pedido:</label>
    <select id="onde">
      <option value="processado">processado</option>
      <option value="pronto">pronto</option>
      <option value="transito">transito</option>
      <option value="chegou">chegou</option>
    </select>
    <button style="margin-top: 20px" type="submit" id="alterar">Alterar Situação</button>
  </form>
  <p class="cabecalho" style="text-align: center;">
    <h2 class="cabecalho-titulo"> Pedidos Realizados</h2>
  </p>
  </div>
  <!-- CARDS DE PEDIDOS -->
  <div id="div-content">
    <!--CARD DE PEDIDO-->
    <div class="card container-fluid mb-3">
      <div id="tela">

      </div>
    </div>
    <!--FIM DO CARD DE PEDIDO-->
  </div>
  `
  document.getElementById('tela2').innerHTML = str;
}

if(usuariologado.tipo == "Beneficiario"){
  let str =
  `<p class="cabecalho" style="text-align: center;">
  <h2 class="cabecalho-titulo"> Pedidos Realizados</h2>
  </p>
  </div>
  <!-- CARDS DE PEDIDOS -->
  <div id="div-content">
    <!--CARD DE PEDIDO-->
    <div class="card container-fluid mb-3">
      <div id="tela">

      </div>
    </div>
    <!--FIM DO CARD DE PEDIDO-->
  </div>`
  document.getElementById('tela2').innerHTML = str;
}