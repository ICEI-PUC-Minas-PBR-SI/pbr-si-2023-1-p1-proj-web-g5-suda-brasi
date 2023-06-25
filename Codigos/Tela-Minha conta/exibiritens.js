// Obtém uma referência para todos os links dos itens
var itemLinks = document.getElementsByClassName('item-link');

// Adiciona um ouvinte de evento de clique a cada link de item
for (var i = 0; i < itemLinks.length; i++) {
  itemLinks[i].addEventListener('click', function(event) {
    event.preventDefault(); // Impede que o comportamento padrão de recarregamento da página ocorra

    var targetId = event.target.getAttribute('data-target'); // Obtém o ID do conteúdo alvo

    // Oculta todos os conteúdos
    var conteudos = document.getElementsByClassName('conteudo');
    for (var j = 0; j < conteudos.length; j++) {
      conteudos[j].style.display = 'none';
    }

    // Exibe o conteúdo alvo
    var target = document.getElementById(targetId);
    if (target) {
      target.style.display = 'block';
    }
  });
}