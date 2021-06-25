var funcionarios = document.querySelectorAll(".funcionario");

var tabela = document.querySelector("#tabela-funcionarios");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});