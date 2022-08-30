var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

function criptografaTexto(texto) {
    let textoConvertido = texto;
    listaNormal.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, cifrasParaCriptografar[letra])
    })
    return textoConvertido;
}

function descriptografaTexto(texto) {
    let textoParaConverter = texto;
    listaCriptografica.forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, cifrasParaDescriptografar[letra])
    })
    return textoParaConverter;
}

