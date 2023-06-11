<<<<<<< Updated upstream
$('#searsh').on('input', function () {
=======
// Barra Lateral
let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');

toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});

$('#search').on('input', function () {
>>>>>>> Stashed changes
    const val = $(this).val().toUpperCase()
    $('.posts-title').each(function () {
        if ($(this).html().toUpperCase().indexOf(val) !== -1) {
            $(this).show()
        }
        else {
            $(this).hide()
        }
    })
<<<<<<< Updated upstream
})
=======
})
>>>>>>> Stashed changes
