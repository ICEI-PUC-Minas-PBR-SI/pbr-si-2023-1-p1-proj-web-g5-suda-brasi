// Verifica se o navegador suporta o Local Storage
if (typeof(Storage) !== "undefined") {
    // Cria ou recupera o banco de dados de mensagens do Local Storage
    var db_mensagens = JSON.parse(localStorage.getItem("db_mensagens"));

    // Verifica se o banco de dados já existe
    if (!db_mensagens) {
      // Se não existir, cria um novo banco de dados vazio
      db_mensagens = {
        mensagens: []
      };
    }

    // Função para adicionar uma nova mensagem ao banco de dados
    function adicionarMensagem(remetente, destinatario, conteudo) {
      var novaMensagem = {
        remetente: remetente,
        destinatario: destinatario,
        conteudo: conteudo,
        data_envio: new Date().toLocaleString()
      };

      // Adiciona a nova mensagem ao array de mensagens
      db_mensagens.mensagens.push(novaMensagem);

      // Atualiza o banco de dados no Local Storage
      localStorage.setItem("db_mensagens", JSON.stringify(db_mensagens));

      // Atualiza a exibição das mensagens
      exibirMensagens();
    }

    // Função para obter todas as mensagens do banco de dados
    function obterTodasMensagens() {
      return db_mensagens.mensagens;
    }

    // Função para exibir as mensagens na página
    function exibirMensagens() {
      var containerMensagens = document.getElementById("mensagensContainer");
    
      var mensagens = obterTodasMensagens();
      for (var i = 0; i < mensagens.length; i++) {
        var mensagem = mensagens[i];
        var remetente = mensagem.remetente;
        var conteudo = mensagem.conteudo;
        var destinatario = mensagem.destinatario;
        var dataEnvio = mensagem.data_envio;
    
        // Clona o card personalizado para cada mensagem
        var cardMensagem = document.getElementById("cardMensagem").cloneNode(true);
    
        // Preenche as informações da mensagem no card
        cardMensagem.querySelector(".remetente").textContent = "Remetente: " + remetente;
        cardMensagem.querySelector(".conteudo").textContent = "Conteúdo: " + conteudo;
        cardMensagem.querySelector(".destinatario").textContent = "Destinatário: " + destinatario;
        cardMensagem.querySelector(".data_envio").textContent = "Data de Envio: " + dataEnvio;
    
        // Remove o ID do card clonado para evitar duplicatas de ID no DOM
        cardMensagem.removeAttribute("id");
    
        // Adiciona o card no container de mensagens
        containerMensagens.appendChild(cardMensagem);
      }
    }

    // Evento de envio do formulário
    document.getElementById("formulario").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtém os valores dos campos do formulário
      var remetente = document.getElementById("remetente").value;
      var destinatario = document.getElementById("destinatario").value;
      var conteudo = document.getElementById("conteudo").value;

      // Adiciona a nova mensagem ao banco de dados
      adicionarMensagem(remetente, destinatario, conteudo);

      // Limpa os campos do formulário
      document.getElementById("remetente").value = "";
      document.getElementById("destinatario").value = "";
      document.getElementById("conteudo").value = "";
      location.reload();
    });

    // Inicializa a exibição das mensagens ao carregar a página
    exibirMensagens();
} else {
    console.log("Desculpe, o seu navegador não suporta o Local Storage.");
}