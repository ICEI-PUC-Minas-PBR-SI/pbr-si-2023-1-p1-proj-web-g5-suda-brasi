  // Função para realizar a busca
  function search() {
    var input, filter, mensagens, card, remetente;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    mensagens = document.getElementById("mensagensContainer");
    card = mensagens.getElementsByClassName("cardMensagem");
    console.log(card)

    // Iterar sobre todas as mensagens e mostrar apenas as que correspondem à busca
    for (var i = 0; i < card.length; i++) {
      remetente = card[i].getElementsByClassName("remetente")[0];
      console.log(remetente)
      if (remetente.innerHTML.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }

  // Event listener para chamar a função de busca quando o valor do input for alterado
  document.getElementById("search").addEventListener("input", search);