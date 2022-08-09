/* inspecciono el elemento en la web y en la consola veo esto*/
const TEXTO = "Click en el boton"

function print(){
    console.log(TEXTO)
}

document.getElementById("boton").addEventListener("click",print);