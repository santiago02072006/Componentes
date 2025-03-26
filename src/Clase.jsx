import React from "react";

function Clase() {
    
    console.log("Renderizando Clase.jsx");

  function cambiarColor() {
    document.body.classList.toggle("rojo");
  }

  return (
    <div>
      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
}

export default Clase;
