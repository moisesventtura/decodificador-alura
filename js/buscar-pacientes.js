var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando...");


    var xhr = new XMLHttpRequest(); //quem faz a requisição HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status === 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //Array de pacientes

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
            console.log(xhr.status);
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});
