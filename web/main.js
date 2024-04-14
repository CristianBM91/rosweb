document.addEventListener('DOMContentLoaded', event => {
    console.log("entro en la pagina")

    //Obtenemos botones
    document.getElementById("btn_con").addEventListener("click", connect);
    document.getElementById("btn_dis").addEventListener("click", disconnect);
    document.getElementById("btn_izq").addEventListener("mousedown", () => mover_manual("izquierda"));
    document.getElementById("btn_ade").addEventListener("mousedown", () => mover_manual("adelante"));
    document.getElementById("btn_der").addEventListener("mousedown", () => mover_manual("derecha"));
    document.getElementById("btn_atr").addEventListener("mousedown", () => mover_manual("atras"));
    
    // Detener el movimiento cuando se suelta el botón
    document.getElementById("btn_izq").addEventListener("mouseup", () => mover_manual("parar"));
    document.getElementById("btn_ade").addEventListener("mouseup", () => mover_manual("parar"));
    document.getElementById("btn_der").addEventListener("mouseup", () => mover_manual("parar"));
    document.getElementById("btn_atr").addEventListener("mouseup", () => mover_manual("parar"));
    
    var direccion = document.getElementById("direccion");
    direccion.value = "http://127.0.0.1:5000";

    
    
    
    
    
});



