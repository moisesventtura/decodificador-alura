var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function (event){
    //TR = paciente = remover
    event.target.parentNode.classList.add("fadeOut");


    //Faz com que o JS espere um pouco antes que a linha deletada suma
    setTimeout(function () {
        event.target.parentNode.remove();
    },500);

})
