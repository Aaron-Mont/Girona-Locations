




function obtenerTexto() {
    var poblacionInput = document.getElementsByName("poblacion")[0];
    var poblacionDefinida = poblacionInput.value;
   
    let zona = ""


    if (poblacionDefinida === "Begur" || poblacionDefinida === "Cadaqués" || poblacionDefinida === "Llançà") {
        zona = "Norte";
    } else if (poblacionDefinida === "Blanes" || poblacionDefinida === "Lloret de Mar" || poblacionDefinida === "Tossa de Mar") {
        zona = "Sur";
    } 

    let parrafo = document.getElementById("mensaje")
    parrafo.innerHTML = "La población  " + poblacionDefinida + " perteneze a la zona: " + zona
    
}

