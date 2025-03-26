import { useState } from "react";

import "./App.css";
import Otro from "./Otro";
import Comp3 from "./Comp3";

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
      <Comp3 />
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
