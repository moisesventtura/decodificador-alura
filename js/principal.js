
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    // console.log("Peso inválido");
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
}

if (altura <= 0 || altura >= 3.00){
    // console.log("Altura inválida");
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
}


if (alturaEhValida && pesoEhValido ){
    var imc = peso / (altura * 2);
    tdImc.textContent = imc;
}




