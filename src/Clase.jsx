import { useState } from "react";

function Clase(){

    function cambiarColor(){
        document.body.classList.toggle("rojo");
    }

    return (
        <button onClick={cambiarColor}>Cambiar Color</button>
    );
}

export default Clase;