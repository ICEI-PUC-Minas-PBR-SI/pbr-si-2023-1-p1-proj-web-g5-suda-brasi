fetch("https://mocki.io/v1/06fe26cb-e261-496a-8f7c-547ef92a9390")
.then(res => res.json())
.then(dados =>{
  localStorage.setItem('db_usuarios', JSON.stringify(dados))
})

var usuarios=(JSON.parse(localStorage.getItem('db_usuarios')));


