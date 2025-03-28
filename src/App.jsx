import { useState } from "react";

import "./App.css";
import Otro from "./Otro";
import Comp3 from "./Comp3";
import Estado from "./Estado";
import String from "./String";
import Lista from "./lista";
import Objeto from "./Objeto";
import Clase from "./Clase";
import Booleano from "./Booleano";


function App() {
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1); // Actualizamos el estado sumando 1
  };

  // Función para decrementar el contador
  const decrement = () => {
    setCount(count - 1); // Actualizamos el estado restando 1
  };

  return (
    <div>
      <h1>Hola</h1>
      <Otro />
      <Booleano/>
      <Comp3 />
      <Estado />
      <String />
      <Lista />
      <Objeto />
      <Clase />


      <div>
        <h1>Contador: {count}</h1> {/* Mostramos el valor del contador */}
        <button onClick={increment}>Incrementar</button>{" "}
        {/* Botón para incrementar */}
        <button onClick={decrement}>Decrementar</button>{" "}
        {/* Botón para decrementar */}
      </div>
    </div>
  );
}

export default App;
