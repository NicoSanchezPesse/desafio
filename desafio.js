
function encriptar(){
    var frase = document.getElementById("entrada-texto").value;

    var textoCifrado = frase.replace(/e/igm, "enter");
    textoCifrado = textoCifrado.replace (/o/igm, "ober");
    textoCifrado = textoCifrado.replace (/i/igm, "imes");
    textoCifrado = textoCifrado.replace (/a/igm, "ai");
    textoCifrado = textoCifrado.replace (/u/igm, "ufat");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("texto-abajo").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var frase = document.getElementById("entrada-texto").value;
    var textoCifrado = frase.replace(/enter/igm, "e");
    textoCifrado = textoCifrado.replace(/ober/igm, "o");
    textoCifrado = textoCifrado.replace(/imes/igm, "i");
    textoCifrado = textoCifrado.replace(/ai/igm, "a");
    textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto-abajo").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar (){
    var contenido = document.querySelector("#texto-abajo");
    contenido.select();
    document.execCommand("copy");
    alert("se copió");
}