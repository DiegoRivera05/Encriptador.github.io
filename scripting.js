var botonencriptar=document.querySelector(".boton-encriptar");
var botondesencriptar=document.querySelector(".boton-desencriptar");
var botoncopiar=document.querySelector(".boton-copiar");
var contenedorMuneco=document.querySelector(".contenedor-munieco");
var h3=document.querySelector(".contenedor-h3");
var parrafoSeccion2=document.querySelector(".contenedor-parrafo");
var resultado=document.querySelector(".texto-encriptado");

botonencriptar.onclick=encriptar;
botondesencriptar.onclick=desencriptar;
botoncopiar.onclick=copiarTexto;

function encriptar(){
   ocultarSeccion2();
   var area=recuperarTexto();
   resultado.textContent=encriptarTexto(area);
}

function desencriptar(){
    ocultarSeccion2();
    var area=recuperarTexto();
    resultado.textContent=desencriptarTexto(area);
}

function copiarTexto(){
    resultado;
    navigator.clipboard.writeText(resultado.innerHTML)
}


function recuperarTexto(){
    var area=document.querySelector(".area");
    return area.value;
}

function ocultarSeccion2(){
    contenedorMuneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafoSeccion2.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto=mensaje;
    var textoFinal="";

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal=textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal=textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal=textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal=textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal=textoFinal + "ufat"
        }

        else{
            textoFinal=textoFinal+texto[i]
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto=mensaje;
    var textoFinal="";

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal=textoFinal + "a"
            i=i+1;
        }
        else if(texto[i] == "e"){
            textoFinal=textoFinal + "e"
            i=i+4;
        }
        else if(texto[i] == "i"){
            textoFinal=textoFinal + "i"
            i=i+3;
        }
        else if(texto[i] == "o"){
            textoFinal=textoFinal + "o"
            i=i+3;
        }
        else if(texto[i] == "u"){
            textoFinal=textoFinal + "u"
            i=i+3;
        }

        else{
            textoFinal=textoFinal+texto[i]
        }
    }

    return textoFinal;
}

