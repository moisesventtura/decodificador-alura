
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length  ; i++ ){

    var paciente = pacientes[i];


    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        // console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00){
        // console.log("Altura inválida");
        tdImc.textContent = "Altura inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }


    if (alturaEhValida && pesoEhValido ){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();//Previne o comportamento padrão, que é RECARREGAR A PÁGINA

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    // imcTd.textContent = nome;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(nomeTd);

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);

});






