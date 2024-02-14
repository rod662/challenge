function encriptado(texto) {
    var caracteresOriginales = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'over',
        'u': 'ufat'
    };

    var textoEncriptado = texto.replace(/[aeiou]/g, function (vocal) {
        return caracteresOriginales[vocal] || vocal;
    });

    return textoEncriptado;
};

function desencriptado (textoEncriptado) {
    console.log("texto recibido", textoEncriptado);
    var caracteresOriginales = {
        'enter' : 'e',
        'imes' : 'i',
        'ai' : 'a',
        'over' : 'o',
        'ufat' : 'u'
    };

    var textoDesencriptado = textoEncriptado.replace(/(enter|imes|ai|over|ufat)/g, function (match) {
        return caracteresOriginales[match];
    });

    console.log("Texto desencriptado", textoDesencriptado);
    return textoDesencriptado;
}



document.getElementById("encriptar").addEventListener("click", function (event) {
    event.preventDefault();
    var textoFormulario = document.getElementById("textoFormulario").value;
    var caracterPermitido = /^[a-z0-9\s]+$/;

    if (!caracterPermitido.test(textoFormulario)) {
        alert("Solo puedes ingresar letras minúsculas y sin acentos");
    } else {
        var textoEncriptado = encriptado(textoFormulario); 
        mostrarResultado(textoEncriptado);

        document.getElementById("textoFormulario").value = "";
    }
});

document.getElementById("desencriptar").addEventListener("click", function (event) {
    event.preventDefault();
    var textoEncriptado = document.getElementById("textoFormulario").value;

    var textoDesencriptado = desencriptado(textoEncriptado);

    mostrarResultado(textoDesencriptado);
});

function mostrarResultado(texto) {
    document.getElementById("textoResultado").textContent = texto;
    var divResultado = document.getElementById("textoResultado");
    divResultado.textContent = texto;
    divResultado.style.fontSize = "2rem";
    divResultado.style.color = "rgb(5, 11, 99)";
}

function copiarTexto() {
    let textoACopiar = document.getElementById('textoResultado').textContent;

    var inputTemp = document.createElement("textarea");
    inputTemp.value = textoACopiar;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);

    var botonCopy = document.getElementById('botonCopy');
    botonCopy.innerText = '¡Texto Copiado!';

    setTimeout(function() {
        botonCopy.innerText = 'Copiar';
    }, 1000);
}