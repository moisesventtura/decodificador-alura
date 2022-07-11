var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();//Previne o comportamento padrão, que é RECARREGAR A PÁGINA

    //Extraindo informações do paciente do form
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    //validação do paciente
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return; //Return "vazio" para pular a função que adiciona o paciente na tabela
    }

    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemsErro = document.querySelector("#mensagens-erro");
    mensagemsErro.innerHTML = "";
});

//Criando a lista de erros
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form){

    //definindo um objeto em JS
    //bem parecido com jason hein...
    //Na aula ele cria uma variavel pra depois retornar-lá, para simplioficar, retornei direto
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
}

function montaTr(paciente){

    //cria a tr e a td do paciente
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //adicionando o paciente na tabela
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length === 0) erros.push("O nome não pode estar em branco")
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");
    if(paciente.peso.length === 0) erros.push("O peso não pode estar em branco");
    if(paciente.altura.length === 0) erros.push("A altura não pode estar em branco");
    if(paciente.gordura.length === 0) erros.push("O percentual de gordura não pode estar em branco");

    return erros;
}