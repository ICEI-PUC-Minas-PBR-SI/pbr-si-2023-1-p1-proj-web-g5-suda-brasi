let toggle = document.querySelector('.toggle');
let sideBar = document.querySelector('.sidebar-container');

toggle.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-function');
});