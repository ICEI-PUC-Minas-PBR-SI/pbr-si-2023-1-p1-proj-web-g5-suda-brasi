var cadastrarSe = document.getElementById("link_cadastrarSe");
var btnArrow = document.getElementById("btn_arrow");

cadastrarSe.addEventListener("click",function(){
    var telaCadastrar = document.getElementById("cadastrar_Login");
    var telaLogin = document.getElementById("entrar_Login");

    if(telaCadastrar.style.display === "flex"){
        telaCadastrar.style.display = "none";
        telaLogin.style.display = "flex"
    }else{
        telaCadastrar.style.display = "flex";
        telaLogin.style.display = "none";
    }
})

btnArrow.addEventListener("click",function(){
    var telaCadastrar = document.getElementById("cadastrar_Login");
    var telaLogin = document.getElementById("entrar_Login");

    if(telaLogin.style.display === "flex"){
        telaLogin.style.display = "none";
        
        telaCadastrar.style.display = "flex"
    }else{
        telaLogin.style.display = "flex";
        
        telaCadastrar.style.display = "none";
    }
})
