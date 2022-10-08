const input = document.getElementById("inputColor");
const copiar = document.querySelector(".copiarColor")

input.addEventListener("input", function(){
    var codigoColor = input.value;
    document.querySelector('.fondo').style.backgroundColor = codigoColor;
    document.querySelector('label').style.color = codigoColor;
    document.querySelector('label').innerHTML = codigoColor;
}, false);


window.addEventListener("load", function(){
    colorPorDefecto = dame_color_aleatorio();
    document.querySelector('label').innerHTML = colorPorDefecto;
    document.querySelector('.fondo').style.backgroundColor = colorPorDefecto;
    document.querySelector('label').style.color = colorPorDefecto;
    document.querySelector('label').style.opacity = 1;
})

// Color aleatorio
function dame_color_aleatorio(){
    hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
    let color_aleatorio = "#";
    for (i=0;i<6;i++){
       posarray = aleatorio(0,hexadecimal.length)
       color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
}

function aleatorio(inferior,superior){
    numPosibilidades = superior - inferior
    aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
}
 

// Copiar el código al portapapeles
copiar.addEventListener("click", function() {
    let contenido = document.querySelector('label').innerHTML;
    navigator.clipboard.writeText(contenido);
    alert('Color copiado al portapapeles')
})