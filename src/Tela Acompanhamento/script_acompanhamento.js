/*function updateProgress(progressId, percentage) {
    var progressElement = document.getElementById(progressId);
    var width = 0;
    var interval = setInterval(frame, 10);

    function frame() {
      if (width >= percentage) {
        clearInterval(interval);
        removeLastIcon();
      } else {
        width++;
        progressElement.style.width = width + "%";
        progressElement.innerText = width + "%";
        updateIcons(width, progressId);
      }
    }

    function updateIcons(width, progressId) {
      var icons = document.querySelectorAll("#" + progressId + " .icon-image");
      var numIcons = icons.length;
      var iconIndex = Math.floor((width - 1) / (100 / numIcons));
      for (var i = 0; i < icons.length; i++) {
        if (i <= iconIndex) {
          icons[i].classList.add("active");
        } else {
          icons[i].classList.remove("active");
        }
      }
    }

    function removeLastIcon() {
      var icons = document.querySelectorAll("#" + progressId + " .icon-image");
      var lastIcon = icons[icons.length - 1];
      lastIcon.parentNode.removeChild(lastIcon);
    }
  }

  // Atualizar o progresso dos pedidos
  updateProgress("progress1", 25);
  updateProgress("progress2", 50);
  updateProgress("progress3", 75);
*/
